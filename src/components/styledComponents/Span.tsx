import styled from "styled-components";
import { font } from "./utils/styles";

export interface IStyledSpanProps {
    fontSize?: string;
    fontFamily?: string;
    color?: string;
    padding?: string;
    margin?: string;
    textAlign?: string;
    textDecoration?: string;
    textShadow?: string;
    height?: string;
    width?: string;
    flexShrink?: string;
    flexBasis?: string;
    flexGrow?: string;
}

export const StyledSpan = styled.span`
    font-size: ${(props: IStyledSpanProps) => props.fontSize || "1rem"};
    font-family: ${(props: IStyledSpanProps) =>
        props.fontFamily || font.family.default};
    color: ${(props: IStyledSpanProps) => props.color || "black"};
    padding: ${(props: IStyledSpanProps) => props.padding || "0rem"};
    margin: ${(props: IStyledSpanProps) => props.margin || "0rem"};
    text-align: ${(props: IStyledSpanProps) => props.textAlign || "center"};
    text-decoration: ${(props: IStyledSpanProps) =>
        props.textDecoration || "none"};
    text-shadow: ${(props: IStyledSpanProps) => props.textShadow || "none"};

    flex-shrink: ${(props: IStyledSpanProps) => props.flexShrink || "auto"};
    flex-basis: ${(props: IStyledSpanProps) => props.flexBasis || "auto"};
    flex-grow: ${(props: IStyledSpanProps) => props.flexGrow || "auto"};

    height: ${(props: IStyledSpanProps) => props.height || "auto"};
    width: ${(props: IStyledSpanProps) => props.width || "auto"};
`;
