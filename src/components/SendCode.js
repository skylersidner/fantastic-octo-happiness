import { useNavigate } from 'react-router-dom';

import { BasicButton } from ".";
import Container from "./Container";
import PhoneNumberForm from './PhoneNumberForm';

const SendCode = () => {
    const naviate = useNavigate();

    const onSendClick = (phoneNumber) => {
        console.log('phoneNumber: ', phoneNumber);
        
        // TODO: send text message...

        naviate('/success');
    }
    return (
        <Container>
            <h1>Thank you!</h1>
            <h3>We'll text you a code to claim your free scoop.</h3>
            <h3>Enter your phone #</h3>
            <PhoneNumberForm onSendClick={onSendClick} />
        </Container>
    );
}

export default SendCode;