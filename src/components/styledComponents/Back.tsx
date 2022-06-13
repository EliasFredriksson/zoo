import styled from "styled-components";

export const StyledBack = styled.span`
    margin: 10px;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: #39393f;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 0px #686873;

    span {
        font-size: 3rem;
        color: white;
        padding-bottom: 5px;
        padding-right: 5px;
        text-decoration: none;
    }

    &:hover {
        filter: brightness(120%);
    }
`;
