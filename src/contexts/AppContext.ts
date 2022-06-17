import { createContext } from "react";
import Animal from "../models/Animal";

export interface IAppContext {
    headerTitle: string;
    isBackButtonVisible: boolean;
    animals: Animal[];
    wentBack: boolean;
    timers: NodeJS.Timer[];
    addTimer(timer: NodeJS.Timer): void;
    updateContext(context: IAppContext): void;
}

export const AppContextStart: IAppContext = {
    headerTitle: "None",
    animals: [],
    isBackButtonVisible: false,
    wentBack: false,
    timers: [],
    addTimer: (timer: NodeJS.Timer) => {},
    updateContext: (context: IAppContext) => {},
};

export const AppContext = createContext(AppContextStart);
