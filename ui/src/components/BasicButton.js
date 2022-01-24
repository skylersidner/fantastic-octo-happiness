import PropTypes from 'prop-types';
import './BasicButton.css';

const BasicButton = ({ buttonTitle, clickFunction }) => {
    return (
        <>
            <div className="btn" onClick={clickFunction}>{buttonTitle}</div>
        </>
    );
}

BasicButton.propTypes = {
    buttonTitle: PropTypes.string.isRequired,
    clickFunction: PropTypes.func
}

export default BasicButton;