import styled from "styled-components";

export const Container = styled.div`
    width: 225px;
    height: 225px;

    @media (min-width: 768px) {
        width: 325px;
        height: 325px;
    }
    
    > figure, img {
        box-shadow: 3px 3px 3px 1.5px rgba(0, 0, 0, 0.2);
        /* box-shadow: inset 5em 1em var(--blue); */
        width: 100%;
        height: 100%;
        
        border: 1px solid black;
        border-radius: 50%;
    }
`;