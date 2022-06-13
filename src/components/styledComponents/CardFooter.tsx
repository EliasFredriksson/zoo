import styled from "styled-components";

export const StyledCardFooter = styled.div`
    display: flex;
    justify-content: center;
    padding: 0px;
    margin: 0px;
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
    background: linear-gradient(to bottom, #3b3b3b, #161616);
    height: 4rem;

    border-radius: 0px;

    & > * {
        flex-basis: calc(100% / 3);
        display: flex !important;
        flex-direction: column !important;
        gap: 4px;
        box-shadow: 0px 0px 40px -10px #000000 inset;
    }
`;
