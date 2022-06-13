import axios from "axios";
// ### INTERFACES ###
import IAnimal from "../interfaces/IAnimal";

export default class AnimalsService {
    async getAnimals(): Promise<IAnimal[]> {
        const response = await axios.get<IAnimal[]>(
            "https://animals.azurewebsites.net/api/animals"
        );
        return response.data;
    }
}
