import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
// ### CONTEXTS ###
import { AppContext, IAppContext } from "../../contexts/AppContext";
// ### MODELS ###
import Animal from "../../models/Animal";
// ### STYLED COMPONENTS ###
import { StyledAnimal } from "../styledComponents/Animal";
import { StyledButton } from "../styledComponents/Button";
import { StyledDiv } from "../styledComponents/Div";
import { StyledImage } from "../styledComponents/Image";
import { StyledLoader } from "../styledComponents/Loader";
import { StyledMain } from "../styledComponents/Main";
import { StyledSpan } from "../styledComponents/Span";

export default function SingleAnimal() {
    // ### STATES ###
    const [currentAnimal, setCurrentAnimal] = useState<Animal[] | null>(null);
    // ### HOOKS ###
    const params = useParams();
    const context: IAppContext = useContext(AppContext);

    // ### WHENEVER THE ANIMAL LIST CHANGES ###
    useEffect(() => {
        context.updateContext({
            ...context,
            isBackButtonVisible: true,
            headerTitle: "Single Animal",
        });
        if (context.animals.length > 0) {
            const assumedId = params.id ? params.id : null;
            if (assumedId) {
                const animal = context.animals.filter(
                    (a: Animal) => a.id === parseInt(assumedId)
                );
                if (animal.length > 0) {
                    setCurrentAnimal(animal);
                    context.updateContext({
                        ...context,
                        isBackButtonVisible: true,
                        headerTitle: `Hur mår ${animal[0].name}?`,
                    });
                }
            }
        } else {
            setCurrentAnimal(null);
        }
    }, [context.animals]);

    // ### HANDLE IMG ERROR ###
    const imgRef = useRef<HTMLImageElement>(null);
    function handleError() {
        const { current } = imgRef;
        if (current) current.src = "/missing_animal_image.png";
    }

    // ### STORA ANIMALS TO LOCAL STORAGE ###
    function storeAnimals(animals: Animal[]) {
        localStorage.setItem("animals", JSON.stringify(animals));
    }

    let html = <StyledLoader></StyledLoader>;
    if (currentAnimal) {
        if (currentAnimal.length === 0) {
            html = <h1>No animal found with id: {params.id}</h1>;
        } else {
            const animal = currentAnimal[0];
            html = (
                <StyledAnimal>
                    <StyledDiv
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="stretch"
                    >
                        <StyledDiv width="100%" justifyContent="space-between">
                            <StyledSpan
                                fontSize="3rem"
                                fontFamily="Brush Script MT"
                            >
                                {animal.name}
                            </StyledSpan>
                            <StyledSpan>{animal.latinName}</StyledSpan>
                        </StyledDiv>
                        <StyledDiv
                            background="rgba(0,0,0,0.2)"
                            padding="20px"
                            borderRadius="10px"
                        >
                            <StyledSpan fontSize="1rem" textAlign="left">
                                {animal.longDescription}
                            </StyledSpan>
                        </StyledDiv>
                    </StyledDiv>
                    <StyledDiv
                        display="flex"
                        flexDirection="column"
                        justifyContent="start"
                        border="2px solid black"
                        flexShrink="0"
                    >
                        <StyledSpan>Medicin: {animal.medicine}</StyledSpan>
                        <StyledSpan>Född: {animal.yearOfBirth}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv
                        display="flex"
                        flexDirection="column"
                        alignItems="stretch"
                        justifyContent="start"
                        flexShrink="0"
                        gap="10px"
                        overflow="hidden"
                    >
                        <StyledImage
                            ref={imgRef}
                            height="300px"
                            width="300px"
                            src={animal.imageUrl}
                            onError={handleError}
                            borderRadius="10px"
                        ></StyledImage>
                        <AnimatePresence exitBeforeEnter>
                            <motion.div
                                style={{
                                    overflow: "hidden",
                                    flexGrow: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                key={`${animal.needsFood()}`}
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
                            >
                                {animal.needsFood() ? (
                                    <>
                                        <StyledSpan
                                            fontSize="1.4rem"
                                            color="red"
                                            textShadow="0px 0px 10px black"
                                        >
                                            Hungrig!
                                        </StyledSpan>
                                        <StyledButton
                                            whileHover={{
                                                scale: 1.1,
                                            }}
                                            padding="10px"
                                            margin="0px 0px 0px 20px"
                                            exit={{
                                                scale: 0,
                                                opacity: 1,
                                            }}
                                            onClick={() => {
                                                animal.feed();
                                                context.updateContext({
                                                    ...context,
                                                });
                                                storeAnimals(context.animals);
                                            }}
                                        >
                                            <StyledSpan>ÄT</StyledSpan>
                                        </StyledButton>
                                    </>
                                ) : (
                                    <StyledSpan fontSize="1.4rem" color="green">
                                        Mätt
                                    </StyledSpan>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </StyledDiv>
                </StyledAnimal>
            );
        }
    } else {
        html = (
            <StyledSpan fontSize="2rem" color="white">
                Invalid context
            </StyledSpan>
        );
    }

    return <StyledMain>{html}</StyledMain>;
}
