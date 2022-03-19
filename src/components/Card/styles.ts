import styled from "styled-components";

export const Container = styled.div`
    border-radius: 32px 0 32px 0;
    padding: 24px;
    width: 300px;
    height: 350px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    background-color: #3B3B3B;

    > h1 {
        font-size: var(--h1-font-size);
        font-weight: var(--font-semi-bold);
        color: rgba(255, 255, 255, 0.87);
    }

    > p {
        font-size: var(--smaller-font-size);
        font-weight: var(--font-medium);
        color: rgba(255, 255, 255, 0.87);
        margin-bottom: 1.25rem;
    }

    > span {
        font-size: var(--normal-font-size);
        font-weight: var(--font-light);
        color: rgba(255, 255, 255, 0.67);
    }
`;