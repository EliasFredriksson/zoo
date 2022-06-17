import { AnimatePresence } from "framer-motion";
import { useContext, useLayoutEffect, useEffect } from "react";
// ### CONTEXT ###
import { AppContext } from "../contexts/AppContext";
// ### MODELS ###
import Animal from "../models/Animal";
// ### STYLED COMPONENTS ###
import { StyledAnimalStatus } from "./styledComponents/AnimalStatus";
import { StyledButton } from "./styledComponents/Button";
import { StyledDiv } from "./styledComponents/Div";
import { StyledLoader } from "./styledComponents/Loader";
import { StyledSpan } from "./styledComponents/Span";
import { StyledStatus } from "./styledComponents/Status";

interface IStatusProps {
    animals: Animal[];
}

export default function Status(props: IStatusProps) {
    const context = useContext(AppContext);

    let animalsToFeed: Animal[] = props.animals.filter(
        (a: Animal) => a.needsFood() === true
    );

    function handleClick(animal: Animal) {
        animal.feed();
        localStorage.setItem("animals", JSON.stringify(context.animals));
        context.updateContext({ ...context });
    }

    useEffect(() => {
        // console.log("STATUS MOUNTED");
        let animalIsHungry = false;
        if (context.animals.length > 0) {
            const timer = setInterval(() => {
                context.animals.forEach((a: Animal) => {
                    if (a.needsFood()) animalIsHungry = true;
                });
                if (animalIsHungry) {
                    animalIsHungry = false;
                    context.updateContext({
                        ...context,
                        // BAD SOLUTION. I assume the fact that this runs when the Home.tsx
                        // components gets the list of animals (Aka within the same life
                        // cycle), which then ignores our previous headerTitle when we set it to "Zoo"
                        headerTitle: "Zoo",
                        wentBack: false,
                        isBackButtonVisible: false,
                    });
                }
            }, 1000);
            context.addTimer(timer);
        }
    }, [context.animals.length]);

    let html = <StyledLoader></StyledLoader>;
    if (animalsToFeed.length > 0) {
        html = (
            <>
                {animalsToFeed.map((animal: Animal) => {
                    {
                        return animal.needsFood() ? (
                            <StyledAnimalStatus
                                key={animal.id}
                                initial={{
                                    opacity: 0,
                                    scale: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0,
                                }}
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                transition={{
                                    type: "tween",
                                    duration: 0.5,
                                }}
                            >
                                <StyledSpan fontSize="0.9rem" color="white">
                                    {animal.name}
                                </StyledSpan>

                                {animal.needsFood() ? (
                                    <StyledSpan color="red">
                                        Behöver mat!
                                    </StyledSpan>
                                ) : (
                                    <></>
                                )}

                                <StyledButton
                                    padding="5px"
                                    width="70px"
                                    onClick={() => {
                                        handleClick(animal);
                                    }}
                                >
                                    <StyledSpan fontSize="0.7rem">
                                        Mata
                                    </StyledSpan>
                                </StyledButton>
                            </StyledAnimalStatus>
                        ) : (
                            <></>
                        );
                    }
                })}
            </>
        );
    } else {
        html = (
            <StyledSpan
                fontSize="1rem"
                color="white"
                width="400px !important"
                flexShrink="0"
            >
                Inga djur behöver matas.
            </StyledSpan>
        );
    }

    return (
        <AnimatePresence exitBeforeEnter>
            <StyledStatus
                initial={{
                    opacity: 0,
                    y: -40,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.5,
                }}
                viewport={{
                    once: true,
                }}
            >
                <StyledSpan fontSize="1.5rem" color="white">
                    Status
                </StyledSpan>
                <StyledDiv
                    gap="10px"
                    justifyContent="center"
                    flexWrap="wrap"
                    flexBasis="85%"
                    width="100%"
                >
                    {/* <AnimatePresence>{html}</AnimatePresence> */}
                    {html}
                </StyledDiv>
            </StyledStatus>
        </AnimatePresence>
    );
}
