import styled from "styled-components";

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
`;
