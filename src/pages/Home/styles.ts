import styled, { css } from 'styled-components';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


export const Container = styled.div`
    --horizontalPadding: 16px;
    --verticalPadding: 24px;
`;

export const Profile = styled.div`
    padding: var(--verticalPadding) var(--horizontalPadding);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    max-width: 100vw;
    height: 100vh;
`;

export const ProfileData = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;

    margin-right: 150px;
    
    > li {
        display: flex;
        align-items: center;
        margin-bottom: 4px;
        
        h1 {
            font-size: 42px;
            font-weight: bold;
        }
        
        h1 + h1 {
            font-weight: 300;
            margin-left: 16px;
        }
    }

    h2 {
        font-weight: bold;
        font-size: 28px;
        color: var(--blue);
    }

    p {
        max-width: 500px;
        margin-top: 16px;
        margin-bottom: 18px;
        
        font-weight: 300;
        font-size: 16px;
    }
`;

export const Resumo = styled.div`
    display: flex;
    flex-direction: row;
    
    margin: 0 auto;
    max-width: 100vw;
    height: 100vh;
    
    background: #000000;
`;

const IconStyle = css`
    width: 32px;
    height: 32px;
    fill: black;
    flex-shrink: 0;
    margin-right: 8px;
`;

export const GitHubIcon = styled(AiFillGithub)`${IconStyle}`;
export const LinkedinIcon = styled(AiFillLinkedin)`${IconStyle}`;