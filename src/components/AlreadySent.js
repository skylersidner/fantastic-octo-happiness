import './AlreadySent.css';
import Container from "./Container";

const AlreadySent = () => {
    return (
        <Container>
            <h1>Hello Again!</h1>
            <h3>Looks like we already sent you your code.</h3>
            <h3 className="unbold">Give code to the store clerk to claim free scoop.</h3>
        </Container>
    );
}

export default AlreadySent;