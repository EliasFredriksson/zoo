import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledBack = styled(motion.span)`
    height: 100px;
    min-width: 100px;
    border-radius: 50%;
    background-color: #39393f;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 0px #686873;

    font-size: 3rem;
    color: white;
    padding-bottom: 5px;
    padding-right: 5px;
    text-decoration: none;
`;
