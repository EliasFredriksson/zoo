import { useContext, useEffect } from "react";
import { AppContext, IAppContext } from "../../contexts/AppContext";
// ### INTERFACES ###
import IAnimal from "../../interfaces/IAnimal";
// ### MODELS ###
import Animal from "../../models/Animal";
// ### SERVICES ###
import AnimalsService from "../../services/AnimalsService";
// ### COMPONENTS ###
import AnimalCard from "../AnimalCard";
// ### STYLED COMPONENTS ###
import { StyledAnimals } from "../styledComponents/Animals";
import { StyledMain } from "../styledComponents/Main";
import { StyledStatus } from "../styledComponents/Status";

export default function Home() {
    const context: IAppContext = useContext(AppContext);

    // ### MOUNTED ###
    useEffect(() => {
        const storedAnimals = getStoredAnimals();
        if (storedAnimals.length > 0) {
            context.updateContext({
                ...context,
                animals: storedAnimals,
                headerTitle: "Home",
                isBackButtonVisible: false,
                wentBack: false,
            });
        } else {
            fetchAnimals();
        }
    }, []);

    function storeAnimals(animals: Animal[]) {
        localStorage.setItem("animals", JSON.stringify(animals));
    }

    function getStoredAnimals(): Animal[] {
        const storedString = localStorage.getItem("animals");
        if (storedString) {
            const storedAnimals: IAnimal[] = JSON.parse(storedString);
            return storedAnimals.map((iAnimal: IAnimal) => {
                return new Animal(iAnimal);
            });
        } else return [];
    }

    function fetchAnimals() {
        console.log("\n!!! FETCH OCCURED !!!\n\n");
        const animalService = new AnimalsService();
        animalService.getAnimals().then((fetchedAnimals: IAnimal[]) => {
            const foundAnimals = fetchedAnimals.map((iAnimal: IAnimal) => {
                return new Animal(iAnimal);
            });
            context.updateContext({
                ...context,
                animals: foundAnimals,
                headerTitle: "Home",
                isBackButtonVisible: false,
                wentBack: false,
            });
            storeAnimals(foundAnimals);
        });
    }

    return (
        <StyledMain>
            <StyledAnimals>
                {context.animals.map((a: Animal) => {
                    return <AnimalCard animal={a} key={a.id} />;
                })}
            </StyledAnimals>
        </StyledMain>
    );
}
