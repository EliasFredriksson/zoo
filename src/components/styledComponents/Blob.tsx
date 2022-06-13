import styled from "styled-components";
import IPos from "../../interfaces/IPos";

interface IStyledBlobProps {
    height?: string;
    width?: string;
    borderRadius?: string;
    pos: IPos;
    delay?: string;
    animationDirection?: string;
}

export const StyledBlob = styled.div`
    position: absolute;
    height: ${(props: IStyledBlobProps) => props.height || "100px"};
    width: ${(props: IStyledBlobProps) => props.width || "100px"};
    border-radius: ${(props: IStyledBlobProps) => props.borderRadius || "10px"};

    top: ${(props: IStyledBlobProps) => props.pos.y + "px" || 0};
    left: ${(props: IStyledBlobProps) => props.pos.x + "px" || 0};

    background-color: #393a44;

    animation: rotate 60s ease-in-out infinite;
    transform-origin: center center;

    animation-delay: ${(props: IStyledBlobProps) => props.delay || "0s"};
    animation-direction: ${(props: IStyledBlobProps) =>
        props.animationDirection || "normal"};

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        10% {
        }
        20% {
            transform: translateY(-50%) rotate(60deg);
        }
        30% {
        }
        40% {
        }
        50% {
            transform: translate(100vw, 0%) rotate(180deg);
        }
        60% {
        }
        70% {
        }
        80% {
            transform: translateY(100vh) rotate(250deg);
        }
        90% {
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
