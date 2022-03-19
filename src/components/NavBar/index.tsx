import { useState } from "react";
import { Container, ContainerMenu, IconMenu, IconClose } from "./styles";
import { Link } from "react-router-dom";

interface propsNavItem {
    index: string;
    link?: string;
    name: string;
}

const NavBar: React.FC = () => {
    return (
        <Container>
            <ul className="navbar">
                <NavItem index={"1."} link="about" name="Sobre Mim"/>
                <NavItem index={"2."} link="experiences" name="Experiências"/>
                <NavItem index={"3."} link="projects" name="Projetos"/> 
            </ul>
            <ActionIcon/>
        </Container>
    );
}

function NavItem (props: propsNavItem) {
    return (
        <li className="nav-item">
            <span>{props.index}</span>
            <Link className="link" to={`/${props.link}`}>
                {props.name}
            </Link>
        </li>
    );
}

function ActionIcon() {
    const [openNavBar, setOpenNavBar] = useState(false);  

    return (
        <li>
            <div className="action-icon" onClick={() => setOpenNavBar(!openNavBar)}> 
                { openNavBar ? <IconClose/> : <IconMenu/>}
            </div>
            { openNavBar && <DropdownMenu/>}
        </li>
    );
}

function DropdownMenu() {
    function DropdownItem(props: propsNavItem) {
        return (
            <li className="menu-item">
                <span>{props.index}</span>
                <Link className="link" to={`/${props.link}`}>
                    {props.name}
                </Link>
            </li>
        );
    }

    return (
        <ContainerMenu>
            <DropdownItem index={"1."} link="about"name="Sobre Mim"/>
            <DropdownItem index={"2."} link="experiences" name="Experiências"/>
            <DropdownItem index={"3."} link="projects" name="Projetos"/>
        </ContainerMenu>
    );
}

export default NavBar;