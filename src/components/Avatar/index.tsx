import { Container } from "./styles";

interface imageData {
    path: string;
    name: string;
}

const Avatar: React.FC<imageData> = ({path, name}) => {
    return (
        <Container>
            <figure>
                <img src={path} alt={name}></img>
            </figure>
        </Container>
    )
}

export default Avatar;