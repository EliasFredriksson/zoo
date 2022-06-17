import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "./utils/styles";

export const StyledAnimalStatus = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    gap: 10px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px;

    @media screen and (min-width: ${breakpoint.tablet}px) {
        padding: 8px;
        & > span {
            font-size: 0.6rem;
        }
    }
`;
