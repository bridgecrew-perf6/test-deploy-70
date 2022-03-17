import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: var(--height-header);
    padding: 11px 24px;
    
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;    

    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    background: var(--bg-color);
`;

export const Wrapper = styled.div`
    max-width: 1280px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center; 
`;