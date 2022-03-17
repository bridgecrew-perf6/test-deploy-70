import { Container, Wrapper } from "./styles";
import NavBar from "../NavBar";

const Header: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <h3>Andevaldo Vitório</h3>
                <NavBar/>
            </Wrapper>
        </Container>
    );
}

export default Header;