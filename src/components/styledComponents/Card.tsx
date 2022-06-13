import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledCard = styled(motion.div)`
    position: relative;
    border-radius: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 250px;
    box-shadow: 0px 5px 10px 0px #131313;
    transition: 100ms ease;
    z-index: 1;

    &:focus {
        outline: none;
    }

    &::after {
        z-index: -1;
        pointer-events: none;
        content: "";
        position: absolute;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 80%;
        height: 80%;
        opacity: 0;
        border-radius: 10px;
        transition: 500ms ease;
        filter: blur(10px);
        background: linear-gradient(
                45deg,
                #ff0000 0%,
                #ff9a00 10%,
                #d0de21 20%,
                #4fdc4a 30%,
                #3fdad8 40%,
                #2fc9e2 50%,
                #1c7fee 60%,
                #5f15f2 70%,
                #ba0cf8 80%,
                #fb07d9 90%,
                #ff0000 100%
            )
            repeat 0% 0% / 100% 500%;

        animation: rgb 4s ease-in-out infinite;

        @keyframes rgb {
            0% {
                background-position: 100% 0%;
            }
            50% {
                background-position: 0% 100%;
            }
            100% {
                background-position: 100% 0%;
            }
        }
    }

    &:hover {
        transform: translateY(-5px) scale(1.1);
        &::after {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.3);
        }
    }
`;
