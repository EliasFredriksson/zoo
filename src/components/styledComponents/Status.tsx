import styled from "styled-components";
import { spacing } from "./utils/styles";

export const StyledStatus = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;

    padding: ${spacing.large}px;
    z-index: 20;

    background-color: rgba(102, 106, 130, 0.5);

    & * {
        text-align: right;
    }
`;
