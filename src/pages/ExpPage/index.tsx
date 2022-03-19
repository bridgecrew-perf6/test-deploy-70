import Card from "../../components/Card";
import { 
    Container,
    GitHubIcon,
    LinkedinIcon,
    Wrapper,
    RightSide,
    LeftSide 
} from "./styles";

const ExpPage: React.FC = () => {
    return (
        <Container>
            <LeftSide>
                <ul className="icons-container">
                    <li><a href="https://github.com/andel-vitorio"><GitHubIcon/></a></li>
                    <li><a href="https://www.linkedin.com/in/andevaldo-vitorio/"><LinkedinIcon/></a></li>
                </ul>
            </LeftSide>
            <RightSide>
                <h2>Minhas Experiências</h2>
                <p>Lorem ipsum dolor sit amet. Quo possimus rerum vel laudantium tenetur sit repudiandae dolor et rerum. A voluptas velit in optio veritatis sed quam voluptatum</p>
                <Wrapper>
                    <Card/>
                    <Card/>
                    <Card/>
                </Wrapper>
            </RightSide>
        </Container>
    );
}

export default ExpPage;