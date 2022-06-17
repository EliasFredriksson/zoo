import axios from "axios";
// ### INTERFACES ###
import IAnimal from "../interfaces/IAnimal";
import Animal from "../models/Animal";

export default class AnimalsService {
    static async getAnimals(): Promise<Animal[]> {
        const response = await axios.get<IAnimal[]>(
            "https://animals.azurewebsites.net/api/animals"
        );
        return response.data.map((iAnimal: IAnimal) => new Animal(iAnimal));
    }
}
