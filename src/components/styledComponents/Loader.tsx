import styled from "styled-components";

export const StyledLoader = styled.div`
    --size: 5px;

    height: 100px;
    width: 100px;
    border-top: var(--size) solid #2fc5fb;
    border-left: var(--size) solid #60606086;
    border-bottom: var(--size) solid #60606086;
    border-right: var(--size) solid #60606086;
    animation: spin 1s linear infinite;
    border-radius: 50%;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
