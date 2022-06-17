import { motion } from "framer-motion";
import styled from "styled-components";
import { border, breakpoint, spacing } from "./utils/styles";

export const StyledAnimal = styled(motion.div)`
    transition: 200 ms;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: ${spacing.large}px;
    width: min(1000px, 90vw);

    background-color: white;
    padding: ${spacing.large}px;
    border-radius: ${border.radius.large}px;
    box-shadow: 0px 10px 10px 4px rgba(0, 0, 0, 0.4);

    @media screen and (min-width: ${breakpoint.mobile}px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;
