import styled, { css } from "styled-components";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


export const Container = styled.div`
    width: 100vw;
    height: 100%;
    padding: 75px 0;

    display: flex;
    flex-direction: row;
`;

export const RightSide = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 16px;
    margin-left: 36px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h2 {
        font-size: var(--h2-font-size);
        margin-bottom: 1rem;
    }

    > p {
        font-size: var(--small-font-size);
        max-width: 100ch;
        text-align: center;
        margin-bottom: 1.75rem;
    }

    > ul {
        position: fixed;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: right;

        > li {
            width: fit-content;
            height: fit-content;
        }
    }
`;

export const LeftSide = styled.div`
    height: 100vh;
    width: 50px;
    position: fixed;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;  

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

const IconStyle = css`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    
    fill: black;
`;

export const GitHubIcon = styled(AiFillGithub)`${IconStyle}`;
export const LinkedinIcon = styled(AiFillLinkedin)`${IconStyle}`;