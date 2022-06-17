import styled from "styled-components";
import { breakpoint } from "./utils/styles";

interface IStyledMainProps {
    background?: string;
}

export const StyledMain = styled.main`
    flex-grow: 1;
    position: relative;
    background: ${(props: IStyledMainProps) => props.background || "none"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;

    @media screen and (min-width: ${breakpoint.tablet}px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;
