import { useState } from "react";
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import './PhoneNumberForm.css';
import BasicButton from "./BasicButton";
import Container from "./Container";

const PhoneNumberForm = ({ onSendClick, isInvalidNumber = false, }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <form>
            <Container>
                <InputMask className="phone-number-input" mask="(999) 999-9999" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                {/* <input className="phone-number-input" type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} /> */}
                {isInvalidNumber && <div className="invalid-number">Phone number is invalid.</div> }
                <BasicButton buttonTitle="Send" clickFunction={() => onSendClick(phoneNumber)} />
            </Container>
        </form>
    )
}

PhoneNumberForm.propTypes = {
    onSendClick: PropTypes.func.isRequired,
    isInvalidNumber: PropTypes.bool,
}

export default PhoneNumberForm;