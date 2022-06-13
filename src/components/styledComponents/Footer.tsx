import { motion } from "framer-motion";
import styled from "styled-components";
import { spacing } from "./utils/styles";

export const StyledFooter = styled(motion.div)`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${spacing.large}px;
    background-color: rgba(0, 0, 0, 0.2);

    border-radius: 100% 100% 1% 1% / 200% 200% 1% 1%;
`;
