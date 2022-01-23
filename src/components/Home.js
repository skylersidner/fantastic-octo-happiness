import { useNavigate } from 'react-router-dom';

import './Home.css';
import LargeButton from "./LargeButton";
import Container from './Container';

const Home = () => {
    const naviate = useNavigate();

    const onYesClick = () => {
        naviate('/question');
    }
    return (
        <Container>
            <h1>Acme Ice Cream</h1>
            <h2>Would you like a free scoop of ice cream?</h2>
            <LargeButton buttonTitle={"Yes"} clickFunction={onYesClick} />
        </Container>
    );
}

export default Home;