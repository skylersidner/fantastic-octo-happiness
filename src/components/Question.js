import { useNavigate } from 'react-router-dom';

import './Question.css';
import Container from './Container';
import BasicButton from './BasicButton';

const Question = () => {
    const navigate = useNavigate();
    
    const onFlavorClick = selection => {
        console.log('selection: ', selection);
        navigate('/send-code');
    }

    const flavors = [
        'Vanilla',
        'Chocolate',
        'Cookie Dough',
        'Mint Chip',
        'Rocky Road',
        'Coffee',
    ];

    return (
        <Container>
            <h3>Of these flavors, which do you like the most?</h3>
            <div className="flavor-container">
                <div className="flavor-column">
                    {flavors.filter((item, idx) => !(idx % 2)).map((flavor, index) => {
                        return <BasicButton key={index + flavor} buttonTitle={flavor} clickFunction={() => onFlavorClick(flavor)} />
                    })}
                </div>

                <div className="flavor-column">
                    {flavors.filter((item, idx) => (idx % 2)).map((flavor, index) => {
                        return <BasicButton key={index + flavor} buttonTitle={flavor} clickFunction={() => onFlavorClick(flavor)} />
                    })}
                </div>
            </div>
        </Container>
    );
}

export default Question;