import PropTypes from 'prop-types';

import './LargeButton.css';

const LargeButton = ({ buttonTitle, clickFunction }) => {
    return (
        <>
            <div onClick={clickFunction} className="large-btn">{buttonTitle}</div>
        </>
    );
}

LargeButton.propTypes = {
    buttonTitle: PropTypes.string.isRequired,
    clickFunction: PropTypes.func,
}

export default LargeButton;