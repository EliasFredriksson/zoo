import { motion } from "framer-motion";
import styled from "styled-components";

interface IStyledButtonProps {
    border?: string;
    borderRadius?: string;
    padding?: string;
    margin?: string;
    width?: string;
    height?: string;
}

export const StyledButton = styled(motion.button)`
    border: ${(props: IStyledButtonProps) => props.border || "none"};
    border-radius: ${(props: IStyledButtonProps) =>
        props.borderRadius || "5px"};
    padding: ${(props: IStyledButtonProps) => props.padding || "10px"};
    margin: ${(props: IStyledButtonProps) => props.margin || "none"};
    height: ${(props: IStyledButtonProps) => props.height || "auto"};
    width: ${(props: IStyledButtonProps) => props.width || "auto"};
    cursor: pointer;
`;
