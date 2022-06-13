import styled from "styled-components";

export const StyledHeader = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    z-index: 5;

    & a {
        text-decoration: none;
    }

    & h1 {
        text-align: right;
        font-size: 3rem;
        color: white;
    }
`;
