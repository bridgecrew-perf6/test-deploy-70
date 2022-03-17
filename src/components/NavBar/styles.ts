import styled, { css } from "styled-components";
import { BiMenu } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";

export const Container = styled.nav`
    padding: 0;
    margin: 0;
    height: 100%;
    border-bottom: 12px;

    .navbar {
        max-width: 100%;
        /* height: 100px; */
        display: flex;
        justify-content: flex-end;
        gap: 1.25rem;

        @media (max-width: 768px) {
            display: none;
        }
    }

    .nav-item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        > a {
            color: black;

            > span {
                margin-right: .5rem;
                font-weight: var(--font-bold);
            }
        }
    }

    .action-icon {
        display: flex;
        flex-direction: row;
        justify-content: end;
    }

    @media (min-width: 768px) {
        .action-icon {
            display: none;
        }
    }
`;

export const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;


    margin-top: 200px;
    padding: 1rem;
    width: 200px;

    background-color: black;
    border-radius: 12px;

    .menu-item {
        padding: .5rem;
        height: 32px;
        border-radius: 6px;

        display: flex;
        align-items: center;
        
        transition: background 1s;  
    
        color: white;
        
        > span {
            margin-right: 1rem;
            font-weight: var(--font-bold);
        }
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

const IconCSS = css`
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    fill: black;
`;

export const IconMenu = styled(BiMenu)`
    ${IconCSS}
`;

export const IconClose = styled(RiCloseFill)`
    ${IconCSS}
`;