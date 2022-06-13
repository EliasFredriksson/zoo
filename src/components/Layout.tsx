import { useContext } from "react";
// ### FRAMER MOTION ###
import { Outlet } from "react-router-dom";
// ### COMPONENTS ###
import Header from "./Header";
import Footer from "./Footer";
// ### STYLED COMPONENTS ###
import { StyledLayout } from "./styledComponents/Layout";
import { AppContext } from "../contexts/AppContext";

// ### FRAMER MOTION CONFIGS ###
const transitionConfig = {
    stiffness: 300,
    damping: 40,
    type: "spring",
};
const animationConfig = {
    initial: {
        opacity: 0,
        x: "100vw",
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: "-100vw",
    },
};
const animationConfigReverse = {
    initial: {
        opacity: 0,
        x: "-100vw",
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: "100vw",
    },
};

export default function Layout() {
    const context = useContext(AppContext);

    // useEffect(() => {
    //     console.log("CONTEXT: ", context);
    // }, [context.animals.length]);
    return (
        <StyledLayout
            variants={
                context.wentBack ? animationConfigReverse : animationConfig
            }
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transitionConfig}
        >
            <Header />
            <Outlet />
            <Footer />
        </StyledLayout>
    );
}
