import styled from "styled-components";

export const Container = styled.div`
    --size-avatar: 300px;

    > figure, img {
        width: var(--size-avatar);
        height: var(--size-avatar);
        
        border: 1px solid var(--blue);
        border-radius: 50%;
    }
`;