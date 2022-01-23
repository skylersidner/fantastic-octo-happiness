import { useState } from "react";
import PropTypes from 'prop-types';

import './PhoneNumberForm.css';
import BasicButton from "./BasicButton";
import Container from "./Container";

const PhoneNumberForm = ({ onSendClick }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <form>
            <Container>
                <input className="phone-number-input" type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                <BasicButton buttonTitle="Send" clickFunction={() => onSendClick(phoneNumber)} />
            </Container>
        </form>
    )
}

PhoneNumberForm.propTypes = {
    onSendClick: PropTypes.func.isRequired,
}

export default PhoneNumberForm;