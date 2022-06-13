import styled from "styled-components";

export interface IStyledImageProps {
    width?: string;
    height?: string;
    objectFit?: "cover" | "contain" | "fill";
    objectPosition?: "top" | "left" | "bottom" | "right" | "center";
    borderRadius?: string;
}

export const StyledImage = styled.img`
    border-radius: ${(props: IStyledImageProps) =>
        props.borderRadius || "none"};
    width: ${(props: IStyledImageProps) => props.width || "100%"};
    height: ${(props: IStyledImageProps) => props.height || "200px"};
    object-fit: ${(props: IStyledImageProps) => props.objectFit || "cover"};
    object-position: ${(props: IStyledImageProps) =>
        props.objectPosition || "center"};
    z-index: 0;
    box-shadow: 0px 10px 10px 2px #7a7a7a inset;
    filter: drop-shadow(10px 10px 10px 10px blue);
    background-color: white;
`;
