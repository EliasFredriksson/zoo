import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// ### CONTEXT ###
import { AppContext, IAppContext } from "../contexts/AppContext";
// ### STYLED COMPONENTS ###
import { StyledBack } from "./styledComponents/Back";
import { StyledHeader } from "./styledComponents/Header";

export default function Header() {
    const context: IAppContext = useContext(AppContext);

    return (
        <StyledHeader>
            {context.isBackButtonVisible ? (
                <Link
                    to="/"
                    onClick={() => {
                        context.updateContext({ ...context, wentBack: true });
                    }}
                >
                    <StyledBack>
                        <span>◀</span>
                    </StyledBack>
                </Link>
            ) : (
                <></>
            )}
            <h1>{context.headerTitle}</h1>
        </StyledHeader>
    );
}
