import Avatar from "../../components/Avatar";
import {
    GitHubIcon,
    LinkedinIcon,
    ProfileData,
    Container, 
    Profile, 
    Resumo 
} from "./styles";

const Home: React.FC = () => {
    return (
        <Container>
            <Profile>
                <ProfileData>
                    <li>
                        <h1>Olá, eu sou</h1>
                        <h1>Andevaldo Vitório</h1>
                    </li>
                    <h2>Estudante de Engenharia da Computação</h2>
                    <h2>Técnico em Mecatrônica</h2>
                    <p>Eu tenho, experiências como professor tutor nas disciplinas de Matemática, Língua Portuguesa e Inglesa; Aptidão com softwares; Participação com projetos tecno-científico.</p>
                    <li>
                        <GitHubIcon/>
                        <LinkedinIcon/>
                    </li>
                </ProfileData>
                <Avatar path="../src/assets/avatar.jpg" name="Andevaldo"/>
            </Profile>
    
            <Resumo>
                <p>Resumo</p>
            </Resumo>
        </Container>
    );
}

export default Home;    