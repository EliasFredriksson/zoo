import { motion } from "framer-motion";
import styled from "styled-components";
import { border, spacing } from "./utils/styles";

export const StyledAnimal = styled(motion.div)`
    transition: 200 ms;
    display: flex;
    flex-direction: row;
    gap: ${spacing.large}px;
    width: min(1000px, 90vw);

    background-color: white;
    padding: ${spacing.large}px;
    border-radius: ${border.radius.large}px;
`;
