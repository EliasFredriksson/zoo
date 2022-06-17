import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
// ### CONTEXT ###
import { AppContext, IAppContext } from "../contexts/AppContext";
// ### STYLED COMPONENTS ###
import { StyledBack } from "./styledComponents/Back";
import { StyledHeader } from "./styledComponents/Header";
import { StyledSpan } from "./styledComponents/Span";

export default function Header() {
    const context: IAppContext = useContext(AppContext);

    return (
        <StyledHeader>
            {context.isBackButtonVisible ? (
                <Link
                    to="/"
                    onClick={() => {
                        context.updateContext({
                            ...context,
                            wentBack: true,
                        });
                    }}
                >
                    <StyledBack
                        whileHover={{
                            scale: 1.1,
                            transition: {
                                type: "tween",
                                duration: 0.2,
                            },
                        }}
                        whileTap={{
                            scale: 0.9,
                            transition: {
                                type: "tween",
                                duration: 0.2,
                            },
                        }}
                        initial={{
                            y: "-200%",
                        }}
                        animate={{
                            y: 0,
                            transition: {
                                type: "tween",
                                delay: 0.5,
                                duration: 0.8,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        ◀
                    </StyledBack>
                </Link>
            ) : (
                <></>
            )}
            <motion.div
                initial={{
                    y: "-200%",
                }}
                animate={{
                    y: 0,
                }}
                transition={{
                    type: "tween",
                    delay: 0.5,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                style={{
                    display: "flex",
                }}
            >
                <StyledSpan
                    fontFamily="Brush Script MT"
                    fontSize="4rem"
                    color="white"
                    textShadow="0px 10px 10px black"
                >
                    {context.headerTitle}
                </StyledSpan>
            </motion.div>
        </StyledHeader>
    );
}
