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
    const [currentAnimal, setCurrentAnimal] = useState<Animal | null>(null);
    const [timeToFeed, setTimeToFeed] = useState("");
    // ### HOOKS ###
    const params = useParams();
    const context: IAppContext = useContext(AppContext);

    // ### WHENEVER THE ANIMAL LIST CHANGES ###
    useEffect(() => {
        console.log("SINGLE PAGE MOUNTED");

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
                    setCurrentAnimal(animal[0]);
                    if (animal[0].isFed) getFoodTime(animal[0]);
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
    }, []);

    function getFoodTime(animal: Animal) {
        const timer = setInterval(() => {
            foodTimer(animal, timer);
        }, 1000);
        foodTimer(animal, timer);
        context.addTimer(timer);
    }
    function foodTimer(animal: Animal, timer: NodeJS.Timer) {
        if (animal && animal.lastFed) {
            console.log("TICK");
            if (animal.needsFood()) {
                clearInterval(timer);
                setTimeToFeed("");
                animal.isFed = false;
                setCurrentAnimal(animal);
                storeAnimals(context.animals);
            } else {
                let whenToEat = Date.now() - animal.DEADLINE_TIME_OFFSET;
                const diff = new Date(animal.lastFed.getTime() - whenToEat);
                const s = diff.getSeconds();
                const m = diff.getMinutes();
                const h = diff.getHours() - 1;
                const timeString =
                    ("0" + h).substr(-2) +
                    ":" +
                    ("0" + m).substr(-2) +
                    ":" +
                    ("0" + s).substr(-2);
                setTimeToFeed(timeString);
            }
        }
    }

    // let date1 = new Date();
    // let date2 = new Date();

    // let timeDifference = Math.abs(date1.getTime() - date2.getTime());
    // let newDate = new Date(timeDifference)

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
        html = (
            <StyledAnimal>
                <StyledDiv
                    display="flex"
                    flexDirection="column"
                    alignItems="stretch"
                >
                    <StyledDiv justifyContent="space-between">
                        <StyledSpan
                            fontSize="3rem"
                            fontFamily="Brush Script MT"
                        >
                            {currentAnimal.name}
                        </StyledSpan>
                        <StyledDiv gap="1rem" padding="5px">
                            <StyledSpan
                                color="white"
                                textShadow="0px 0px 5px black"
                            >
                                Latin:
                            </StyledSpan>
                            <StyledSpan>{currentAnimal.latinName}</StyledSpan>
                        </StyledDiv>
                    </StyledDiv>
                    <StyledDiv
                        background="rgba(0,0,0,0.2)"
                        padding="20px"
                        borderRadius="10px"
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="stretch"
                        flexGrow="1"
                        boxShadow="0px 0px 10px 0px rgba(0,0,0,0.7) inset"
                        gap="1rem"
                    >
                        <StyledDiv
                            display="flex"
                            justifyContent="space-between"
                            borderRadius="5px"
                        >
                            <StyledDiv gap="1rem" padding="5px">
                                <StyledSpan
                                    color="white"
                                    textShadow="0px 0px 4px black"
                                >
                                    Medicin:
                                </StyledSpan>
                                <StyledSpan>
                                    {currentAnimal.medicine}
                                </StyledSpan>
                            </StyledDiv>
                            <StyledDiv gap="1rem" padding="5px">
                                <StyledSpan
                                    color="white"
                                    textShadow="0px 0px 4px black"
                                >
                                    Född:
                                </StyledSpan>
                                <StyledSpan>
                                    {currentAnimal.yearOfBirth}
                                </StyledSpan>
                            </StyledDiv>
                        </StyledDiv>
                        <StyledSpan fontSize="1rem" textAlign="left">
                            {currentAnimal.longDescription}
                        </StyledSpan>
                    </StyledDiv>
                </StyledDiv>

                <StyledDiv
                    display="flex"
                    flexDirection="column"
                    alignItems="stretch"
                    justifyContent="center"
                    flexShrink="0"
                    gap="10px"
                    overflow="hidden"
                >
                    <StyledImage
                        ref={imgRef}
                        height="300px"
                        width="300px"
                        src={currentAnimal.imageUrl}
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
                                height: "70px",
                            }}
                            key={`${currentAnimal.needsFood()}`}
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
                            {currentAnimal.needsFood() ? (
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
                                            currentAnimal.feed();
                                            getFoodTime(currentAnimal);
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
                                <StyledDiv flexDirection="column">
                                    <StyledSpan fontSize="1.4rem" color="green">
                                        Mätt
                                    </StyledSpan>
                                    <StyledSpan fontSize="0.8rem" color="black">
                                        {timeToFeed}
                                    </StyledSpan>
                                </StyledDiv>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </StyledDiv>
            </StyledAnimal>
        );
    } else {
        html = (
            <StyledSpan fontSize="2rem" color="white">
                Invalid context
            </StyledSpan>
        );
    }

    return <StyledMain>{html}</StyledMain>;
}
