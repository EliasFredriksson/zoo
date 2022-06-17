import { useContext, useEffect, useLayoutEffect } from "react";
import { AppContext, IAppContext } from "../../contexts/AppContext";
// ### MODELS ###
import Animal from "../../models/Animal";
// ### SERVICES ###
import AnimalsService from "../../services/AnimalsService";
import LocalStorageService from "../../services/LocalStorageService";
// ### COMPONENTS ###
import AnimalCard from "../AnimalCard";
import Status from "../Status";
// ### STYLED COMPONENTS ###
import { StyledAnimals } from "../styledComponents/Animals";
import { StyledLoader } from "../styledComponents/Loader";
import { StyledMain } from "../styledComponents/Main";

export default function Home() {
    const context: IAppContext = useContext(AppContext);

    // ### MOUNTED ###
    useEffect(() => {
        const storedAnimals = LocalStorageService.getStoredAnimals();
        if (storedAnimals.length > 0) {
            console.log("FOUND STORED");
            triggerUpdateContext(storedAnimals);
        } else {
            AnimalsService.getAnimals().then((foundAnimals: Animal[]) => {
                LocalStorageService.storeAnimals(foundAnimals);
                triggerUpdateContext(foundAnimals);
            });
        }
    }, []);
    // ### INTERVAL FOR FOOD ###
    // We use LayoutEffect here sence we want it only to start update after render but before it updates.
    // useEffect is ASYNC and useLayoutEffect is SYNC.
    useLayoutEffect(() => {
        if (context.animals.length > 0) {
            // ### USED TO CALCULATE IF WE NEED TO UPDATE THE CONTEXT OR NOT ###
            let hungryCountPrevoius = -1;
            let hungryCount = 0;
            let animalIsHungry = false;
            const timer = setInterval(() => {
                context.animals.forEach((a: Animal) => {
                    if (a.needsFood()) {
                        animalIsHungry = true;
                        hungryCount++;
                    }
                });

                if (animalIsHungry && hungryCount !== hungryCountPrevoius) {
                    hungryCountPrevoius = hungryCount;
                    animalIsHungry = false;
                    triggerUpdateContext(context.animals);
                }
                hungryCount = 0;
            }, 1000);
            context.addTimer(timer);
        }
    }, [context.animals.length]);

    // ### TRIGGER A CONTEXT UPDATE ###
    function triggerUpdateContext(animals: Animal[]) {
        console.log("LKDSJFSLKDJF");
        context.updateContext({
            ...context,
            animals: animals,
            headerTitle: "Zoo",
            isBackButtonVisible: false,
            wentBack: false,
        });
    }

    let html = <StyledLoader></StyledLoader>;
    if (context.animals.length > 0) {
        html = (
            <>
                <StyledAnimals>
                    {context.animals.map((a: Animal) => {
                        return <AnimalCard animal={a} key={a.id} />;
                    })}
                </StyledAnimals>
                <Status animals={context.animals}></Status>
            </>
        );
    }

    return <StyledMain>{html}</StyledMain>;
}
