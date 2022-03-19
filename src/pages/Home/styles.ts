import styled, { css } from 'styled-components';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 75px 24px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1280px) {
        flex-direction: row-reverse;
        justify-content: center;
        gap: 10em;
        height: 100vh;
    }
`;

export const ProfileData = styled.div`
    max-width: 450px;
    margin-top: 16px;

    h1 {
        font-size: var(-big-font-size);
        font-weight: var(--font-regular);
        
        > strong {
            margin-right: .5rem;    
        }
    }

    h3 {
        font-weight: var(--font-medium);
        font-size: var(--h3-font-size);
        color: #9A8164;
        margin-bottom: .75rem;
    }

    p {
        font-size: var(--small-font-size);
        margin-bottom: 0.75em;
    }
    
    .icons-container {
        margin: 0;
        padding: 0;
        
        display: flex;
        flex-direction: row;
        /* gap: rem; */

        > li {
            padding: .5em .5em;
            border-radius: .5em;
            transition: all 0.2s ease-in-out;

            animation: raiser-container .3s forwards 1s;
        }

        @keyframes raiser-container {
            from {
                box-shadow: none;
                transform: scale(.67);
            }

            to {
                /* box-shadow: -6px -6px 6px 0 rgba(255, 255, 255, .5); */
                transform: scale(1.05);
            }
        }
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