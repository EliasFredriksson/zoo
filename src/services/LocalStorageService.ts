import IAnimal from "../interfaces/IAnimal";
import Animal from "../models/Animal";

export default class LocalStorageService {
    static storeAnimals(animals: Animal[]) {
        localStorage.setItem("animals", JSON.stringify(animals));
    }

    static getStoredAnimals(): Animal[] {
        const storedString = localStorage.getItem("animals");
        if (storedString) {
            const storedAnimals: IAnimal[] = JSON.parse(storedString);
            return storedAnimals.map((iAnimal: IAnimal) => new Animal(iAnimal));
        } else return [];
    }
}
