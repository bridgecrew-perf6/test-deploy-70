import { useState } from "react";
import { Container, ContainerMenu, IconMenu, IconClose } from "./styles";

interface propsNavItem {
    index: string;
    name: string;
}

const NavBar: React.FC = () => {
    return (
        <Container>
            <ul className="navbar">
                <NavItem index={"00"} name="Home"/>
                <NavItem index={"01"} name="Sobre Mim"/>
                <NavItem index={"02"} name="Projetos"/> 
            </ul>
            <ActionIcon/>
        </Container>
    );
}

function NavItem (props: propsNavItem) {
    return (
        <li className="nav-item">
            <a>
                <span>{props.index}</span>
                {props.name}
            </a>
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
            <a className="menu-item">
                <span>{props.index}</span>
                {props.name}
            </a>
        );
    }

    return (
        <ContainerMenu>
            <DropdownItem index={"00"} name="Home"/>
            <DropdownItem index={"01"} name="Sobre Mim"/>
            <DropdownItem index={"02"} name="Projetos"/>
        </ContainerMenu>
    );
}

export default NavBar;