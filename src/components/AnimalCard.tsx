import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// ### CONTEXT ###
import { AppContext } from "../contexts/AppContext";
// ### MODELS ###
import Animal from "../models/Animal";
// ### STYLED COMPONENTS ###
import { StyledCard } from "./styledComponents/Card";
import { StyledCardFooter } from "./styledComponents/CardFooter";
import { StyledDiv } from "./styledComponents/Div";
import { StyledImage } from "./styledComponents/Image";
import { StyledSpan } from "./styledComponents/Span";

interface IAnimalCardProps {
    animal: Animal;
}

export default function AnimalCard(props: IAnimalCardProps) {
    const imgRef = useRef<HTMLImageElement>(null);
    function handleImageError(e: ChangeEvent<HTMLImageElement>) {
        e.preventDefault();
        const { current } = imgRef;
        if (current) current.src = "/missing_animal_image.png";
    }

    return (
        <Link
            to={`/animal/${props.animal.id}`}
            style={{ textDecoration: "none" }}
        >
            <StyledCard
                whileTap={{
                    scale: 0.9,
                    transition: {
                        duration: 0.1,
                    },
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.8,
                    type: "tween",
                }}
                whileHover={{
                    scale: 1.01,
                    y: -10,
                    transition: {
                        duration: 0.2,
                    },
                }}
            >
                <StyledDiv
                    flexDirection="column"
                    alignItems="stretch"
                    background="white"
                    borderRadius="15px"
                    height="100%"
                >
                    <StyledDiv>
                        <StyledImage
                            borderRadius="10px 10px 0px 0px"
                            objectFit="cover"
                            objectPosition="center"
                            ref={imgRef}
                            src={props.animal.imageUrl}
                            alt={props.animal.name}
                            onError={handleImageError}
                        ></StyledImage>
                    </StyledDiv>
                    <StyledDiv
                        flexGrow="1"
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        background="white"
                    >
                        <StyledSpan
                            fontSize="2rem"
                            textAlign="center"
                            padding="0.5rem"
                            color="white"
                            textShadow="0px 0px 10px black"
                            fontFamily="Brush Script MT"
                        >
                            {props.animal.name}
                        </StyledSpan>
                        <StyledSpan
                            fontSize="0.8rem"
                            padding="1rem"
                            textAlign="start"
                        >
                            {props.animal.shortDescription}
                        </StyledSpan>
                    </StyledDiv>
                    <StyledCardFooter>
                        <StyledDiv>
                            <StyledSpan
                                fontSize="0.9rem"
                                color="white"
                                textShadow="0px 0px 3px black"
                            >
                                {props.animal.yearOfBirth}
                            </StyledSpan>
                            <StyledSpan fontSize="0.5rem" color="#848484">
                                Född
                            </StyledSpan>
                        </StyledDiv>
                        <StyledDiv>
                            <StyledSpan
                                fontSize="0.5rem"
                                color="white"
                                textShadow="0px 0px 3px black"
                            >
                                {props.animal.latinName}
                            </StyledSpan>
                            <StyledSpan fontSize="0.5rem" color="#848484">
                                Latin
                            </StyledSpan>
                        </StyledDiv>
                        <StyledDiv>
                            <StyledSpan
                                fontSize="0.7rem"
                                color="white"
                                textShadow="0px 0px 3px black"
                            >
                                {props.animal.needsFood() ? (
                                    <StyledSpan
                                        color="red"
                                        fontSize="0.8rem"
                                        textShadow="0px 0px 10px red"
                                    >
                                        Hungrig!
                                    </StyledSpan>
                                ) : (
                                    <StyledSpan
                                        color="lightgreen"
                                        fontSize="0.8rem"
                                    >
                                        Mätt
                                    </StyledSpan>
                                )}
                            </StyledSpan>
                            <StyledSpan fontSize="0.5rem" color="#848484">
                                Mat
                            </StyledSpan>
                        </StyledDiv>
                    </StyledCardFooter>
                </StyledDiv>
            </StyledCard>
        </Link>
    );
}
