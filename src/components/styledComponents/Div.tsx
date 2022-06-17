import styled from "styled-components";

export interface IStyledDivProps {
    display?: "block" | "inline" | "flex";
    flexDirection?: "row" | "column";
    justifyContent?: string;
    alignItems?: string;
    flexGrow?: string;
    flexShrink?: string;
    flexBasis?: string;
    flexWrap?: string;
    gap?: string;
    padding?: string;
    margin?: string;
    width?: string;
    height?: string;
    background?: string;
    border?: string;
    borderRadius?: string;
    boxShadow?: string;
    position?: string;
    overflow?: string;
}

export const StyledDiv = styled.div`
    position: ${(props: IStyledDivProps) => props.position || "relative"};
    width: ${(props: IStyledDivProps) => props.width || "auto"};
    height: ${(props: IStyledDivProps) => props.height || "auto"};
    display: ${(props: IStyledDivProps) => props.display || "flex"};
    flex-direction: ${(props: IStyledDivProps) => props.flexDirection || "row"};
    justify-content: ${(props: IStyledDivProps) =>
        props.justifyContent || "center"};
    align-items: ${(props: IStyledDivProps) => props.alignItems || "center"};
    flex-grow: ${(props: IStyledDivProps) => props.flexGrow || "auto"};
    flex-shrink: ${(props: IStyledDivProps) => props.flexShrink || "auto"};
    flex-wrap: ${(props: IStyledDivProps) => props.flexWrap || "nowrap"};

    gap: ${(props: IStyledDivProps) => props.gap || "0px"};
    padding: ${(props: IStyledDivProps) => props.padding || "0px"};
    margin: ${(props: IStyledDivProps) => props.margin || "0px"};
    background: ${(props: IStyledDivProps) => props.background || "none"};
    border: ${(props: IStyledDivProps) => props.border || "none"};
    border-radius: ${(props: IStyledDivProps) => props.borderRadius || "0px"};
    box-shadow: ${(props: IStyledDivProps) => props.boxShadow || "none"};

    overflow: ${(props: IStyledDivProps) => props.overflow || "auto"};
    & > * {
        flex-basis: ${(props: IStyledDivProps) => props.flexBasis || "auto"};
    }

    /* width */
    &::-webkit-scrollbar {
        width: 10px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 5px;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
    }
`;
