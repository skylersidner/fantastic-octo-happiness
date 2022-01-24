const { ApolloServer, gql } = require('apollo-server');
require('dotenv').config()
const fs = require('fs');

const twilio = require('twilio');

const SEND_COUPON_RESPONSES = require('./send-coupon-resposes.enum')

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER

const listFileName = 'phone-numbers-list.json';
const client = new twilio(accountSid, authToken);

const getPhoneNumbersList = () => {
    try {
        const rawdata = fs.readFileSync(listFileName);
        const phoneNumbersList = JSON.parse(rawdata);
        return phoneNumbersList
    } catch (error) {
        console.log('Error trying to read phone numbers list: ', error)
        throw new Error(error)
    }
}

const addPhoneNumberToList = phoneNumber => {
    const phoneNumbersList = getPhoneNumbersList();
    const updatedList = [...phoneNumbersList, phoneNumber];
    
    try {
        fs.writeFileSync(listFileName, JSON.stringify(updatedList));
    } catch (error) {
        console.log('Error trying to add phone number to list: ', error)
        throw new Error(error)
    }
}

// Schema
const typeDefs = gql`
    enum SendCouponResponse {
        ${Object.values(SEND_COUPON_RESPONSES)}
    }

    type Query {
        "Verify the server is accepting valid requests"
        healthCheck: Boolean
        "Validate that a phone number has not already been used"
        isNewPhoneNumber(phoneNumber: String!): Boolean
    }

    type Mutation {
        "Send a coupon code to the given phone number"
        sendCouponCode(phoneNumber: String!): SendCouponResponse
        "Remove a phone number from the list of numbers"
        removePhoneNumberFromList(phoneNumber: String!): Boolean
    }
`;

// Resolvers
const resolvers = {
    Query: {
        async healthCheck() {
            return true;
        },
        async isNewPhoneNumber(parent, { phoneNumber }) {
            const phoneNumbersList = getPhoneNumbersList();
            return !phoneNumbersList.includes(phoneNumber);
        }
    },
    Mutation: {
        async sendCouponCode(parent, { phoneNumber }) {
            const phoneNumbersList = getPhoneNumbersList();
            const isUnused = !phoneNumbersList.includes(phoneNumber);
            if (!isUnused) {
                return SEND_COUPON_RESPONSES.ALREADY_USED;
            }
            
            try {
                const message = await client.messages
                    .create({
                        body: `Your free ice cream code is: \nFREESCOOP${phoneNumbersList.length}`,
                        to: `+1${phoneNumber}`, // Text this number
                        from: twilioPhoneNumber, // From a valid Twilio number
                    });

            } catch (error) {
                console.log('error sending SMS: ', error)
                return SEND_COUPON_RESPONSES.INVALID;
            }
                
            addPhoneNumberToList(phoneNumber);

            return SEND_COUPON_RESPONSES.SENT;
        },
        async removePhoneNumberFromList(parent, { phoneNumber }) {
            const phoneNumbersList = getPhoneNumbersList();
            const updatedList = phoneNumbersList.filter(number => number !== phoneNumber);
            
            try {
                fs.writeFileSync(listFileName, JSON.stringify(updatedList));
            } catch (error) {
                console.log('Error trying to remove phone number from list: ', error)
                throw new Error(error)
            }

            return true;
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers });
const port = process.env.PORT || 4000;
server.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
})