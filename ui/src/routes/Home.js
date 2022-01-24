import { useNavigate } from 'react-router-dom';

import './Home.css';
import { Container, LargeButton } from "../components";

const Home = () => {
    const naviate = useNavigate();

    const onYesClick = async () => {
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