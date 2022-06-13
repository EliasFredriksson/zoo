import { createContext } from "react";
import Animal from "../models/Animal";

export interface IAppContext {
    headerTitle: string;
    isBackButtonVisible: boolean;
    animals: Animal[];
    wentBack: boolean;
    updateContext(context: IAppContext): void;
}

export const AppContextStart: IAppContext = {
    headerTitle: "None",
    animals: [],
    isBackButtonVisible: false,
    wentBack: false,
    updateContext: (context: IAppContext) => {},
};

export const AppContext = createContext(AppContextStart);
