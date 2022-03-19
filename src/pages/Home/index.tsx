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
                <h1><strong>Olá, eu sou</strong>Andevaldo Vitório</h1>
                <h3>Desenvolvedor Android</h3>
                <p>
                    Formado em Técnico em Mecatrônica pela Fundação Matias Machline (FMM). Cursando Engenharia da Computação na Universidade Federal do Amazonas.
                    Experiências como professor tutor de disciplinas básicas e técnicas, e como pesquisador, em projetos
                    tecnocientíficos.
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