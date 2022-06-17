// ### STYLED COMPONENTS ###
import { StyledDiv } from "./styledComponents/Div";
import { StyledFooter } from "./styledComponents/Footer";
import { StyledSpan } from "./styledComponents/Span";

export default function Footer() {
    return (
        <StyledDiv position="relative" height="100px" overflow="hidden">
            <StyledFooter
                initial={{
                    y: "100%",
                }}
                whileInView={{
                    y: -1,
                }}
                exit={{
                    y: "100%",
                }}
                transition={{
                    type: "tween",
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                <StyledSpan color="white" fontSize="1rem">
                    Author: Elias Fredriksson
                </StyledSpan>
            </StyledFooter>
        </StyledDiv>
    );
}
