import Avatar from "../../components/Avatar";
import avatarUrl from "../../images/avatar.jpg";

import {
    GitHubIcon,
    LinkedinIcon,
    ProfileData,
    Container, 
} from "./styles";

const Home: React.FC = () => {
    return (
        <Container>
            <Avatar path={avatarUrl} name="Andevaldo"/>
            <ProfileData>
                <h1>Olá, eu sou Andevaldo</h1>
                <h3>Desenvolvedor</h3>
                <p>
                    Eu tenho, experiências como professor tutor nas disciplinas de Matemática, 
                    Língua Portuguesa e Inglesa; Aptidão com softwares; Participação com projetos 
                    tecno-científico.
                </p>
                
                <ul className="icons-container">
                    <li><a href="https://github.com/andel-vitorio"><GitHubIcon/></a></li>
                    <li><a href="https://www.linkedin.com/in/andevaldo-vitorio/"><LinkedinIcon/></a></li>
                </ul>
            </ProfileData>
        </Container>
    );
}

export default Home;    