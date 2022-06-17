import IAnimal from "../interfaces/IAnimal";

export default class Animal {
    id: number = -1;
    name: string = "NONE";
    latinName: string = "NONE";
    yearOfBirth: number = -1;
    shortDescription: string = "NONE";
    longDescription: string = "NONE";
    imageUrl: string = "NONE";
    medicine: string = "NONE";
    isFed: boolean = false;
    lastFed: Date | null = null;

    // --------------------------- ms --- s -- h -- 3 hours
    DEADLINE_TIME_OFFSET: number = 1000 * 60 * 60 * 3;

    // ### FOR TESTING ###
    // DEADLINE_TIME_OFFSET: number = 1000 * 10;

    constructor(animal: IAnimal) {
        this.id = animal.id;
        this.name = animal.name;
        this.latinName = animal.latinName;
        this.yearOfBirth = animal.yearOfBirth;
        this.shortDescription = animal.shortDescription;
        this.longDescription = animal.longDescription;
        this.imageUrl = animal.imageUrl;
        this.medicine = animal.medicine;
        this.isFed = animal.isFed;
        this.lastFed = new Date(animal.lastFed);
    }

    needsFood(): boolean {
        if (this.lastFed) {
            let whenToEat = Date.now() - this.DEADLINE_TIME_OFFSET;
            if (this.lastFed.getTime() < whenToEat) {
                this.isFed = false;
                return true;
            }
        }
        return false;
    }

    feed(): void {
        this.lastFed = new Date();
        this.isFed = true;
    }
}
