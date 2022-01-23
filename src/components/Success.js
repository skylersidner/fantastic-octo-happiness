import './Success.css'
import Container from "./Container";

const Success = () => {
    return (
        <Container>
            <h1>Well Done!</h1>
            <h3>Your code has been sent</h3>
            <h3 className="unbold">Give code to the store clerk to claim a free scoop.</h3>
        </Container>
    );
}

export default Success;