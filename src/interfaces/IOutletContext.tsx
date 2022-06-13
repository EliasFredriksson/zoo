import Animal from "../models/Animal";

export default interface IOutletContext {
    nextHeaderTitle(title: string): void;
    animals: Animal[];
    setBack(isVisible: boolean): void;
    wentBack: boolean;
}
