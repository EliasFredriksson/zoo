import { AnimatePresence } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// ### CONTEXT ###
import {
    AppContext,
    AppContextStart,
    IAppContext,
} from "../contexts/AppContext";
// ### INTERFACES ###
import IPos from "../interfaces/IPos";
// ### COMPONENTS ###
import Layout from "./Layout";
// ### PAGES ###
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SingleAnimal from "./pages/SingleAnimal";
// ### STYLED COMPONENTS ###
import { StyledBackground } from "./styledComponents/Background";
import { StyledBlob } from "./styledComponents/Blob";

export default function App() {
    const [context, setContext] = useState<IAppContext>(AppContextStart);
    context.updateContext = (newContext: IAppContext) => {
        setContext(newContext);
    };
    context.addTimer = (timer: NodeJS.Timer) => {
        context.timers.push(timer);
        setContext({ ...context });
    };

    // ### START POS BLOBS THAT SWIRL AROUND IN THE BACKGROUND ###
    const blobsPos: IPos[] = [
        {
            x: -100,
            y: -100,
        },
        {
            x: 600,
            y: 100,
        },
        {
            x: -100,
            y: 400,
        },
    ];

    // ### CLEAR ALL INTERVALS WHENEVER WE SWITCH PAGE ###
    // SYNC after render.
    const location = useLocation();
    useLayoutEffect(() => {
        context.timers.forEach((timer: NodeJS.Timer) => {
            clearInterval(timer);
        });
        context.updateContext({ ...context, timers: [] });
    }, [location.pathname]);

    return (
        <AppContext.Provider value={context}>
            <StyledBackground>
                <StyledBlob
                    pos={blobsPos[0]}
                    width="40vw"
                    height="40vw"
                    borderRadius="
                    100% 60% 100% 60% / 60% 100% 60% 100%
                    "
                    animationDirection="normal"
                    delay="0s"
                />
                <StyledBlob
                    pos={blobsPos[1]}
                    width="30vw"
                    height="30vw"
                    borderRadius="
                        100% 60% 100% 60% / 60% 100% 60% 100%
                    "
                    animationDirection="reverse"
                    delay="-5s"
                />
                <StyledBlob
                    pos={blobsPos[2]}
                    width="20vw"
                    height="20vw"
                    borderRadius="
                        100% 60% 100% 60% / 60% 100% 60% 100%
                    "
                    animationDirection="alternate-reverse"
                    delay="-15s"
                />
            </StyledBackground>
            <AnimatePresence exitBeforeEnter initial={false}>
                <Routes key={location.pathname} location={location}>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route
                            path="/animal/:id"
                            element={<SingleAnimal />}
                        ></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Route>
                </Routes>
            </AnimatePresence>
        </AppContext.Provider>
    );
}
