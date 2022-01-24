import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { SEND_COUPON_CODE } from '../queries';
import './SendCode.css';
import { Container, PhoneNumberForm } from "../components";

const SendCode = () => {
    const [isInvalidNumber, setIsInvalidNumber] = useState(false);
    const navigate = useNavigate();
    const refresh = () => {
        window.location.reload(false);
    }

    const [sendCouponCode, { error }] = useMutation(SEND_COUPON_CODE);
    

    const onSendClick = async (phoneNumber) => {
        const result = await sendCouponCode({
             variables: { 
                 phoneNumber: phoneNumber.toString() 
                } 
            });
        
        const responseCode = result.data.sendCouponCode;
        
        if (responseCode === 'SENT') {
            setIsInvalidNumber(false);
            navigate('/success');
        } else if (responseCode === 'INVALID') {
            setIsInvalidNumber(true);
        } else {
            setIsInvalidNumber(false);
            navigate('/already-sent');
        }
    }
    return (
        <Container>
            {error ? (
                <>
                    <h3>Oops! An error occurred.</h3>
                    <h3>Please <span className="refresh" onClick={refresh}>refresh</span> and try again.</h3>
                </>
            ) : (
                <>
                    <h1>Thank you!</h1>
                    <h3>We'll text you a code to claim your free scoop.</h3>
                    <h3>Enter your phone #</h3>
                    <PhoneNumberForm onSendClick={onSendClick} isInvalidNumber={isInvalidNumber} />
                </>
            )}
        </Container>
    );
}

export default SendCode;