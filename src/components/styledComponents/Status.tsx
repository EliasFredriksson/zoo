import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, spacing } from "./utils/styles";

export const StyledStatus = styled(motion.div)`
    width: 300px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;

    align-items: center;
    gap: 10px;
    padding: 5px;

    border-radius: 10px;
    padding: ${spacing.large}px;
    z-index: 10;
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0, 0.1);

    & > div {
        overflow: hidden;
        flex-grow: 1;
    }

    @media screen and (min-width: ${breakpoint.mobile}px) {
        width: 550px;
        & > div {
            & > div {
                flex-basis: 150px;
            }
        }
    }

    @media screen and (min-width: ${breakpoint.tablet}px) {
        position: sticky;
        top: 50px;
        right: 50px;
        max-height: 80vh;

        margin-bottom: 0px;

        align-items: center;
        width: 250px;
        & > div {
            overflow-y: auto;
            gap: 5px;
            & > div {
                flex-basis: 85%;
                flex-shrink: 0;
            }
        }
    }
`;
