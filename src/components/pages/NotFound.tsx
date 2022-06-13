import { useContext, useEffect } from "react";
// ### CONTEXT ###
import { AppContext } from "../../contexts/AppContext";
// ### STYLED COMPONENTS ###
import { StyledMain } from "../styledComponents/Main";
import { StyledSpan } from "../styledComponents/Span";

export default function NotFound() {
    const context = useContext(AppContext);

    useEffect(() => {
        context.updateContext({
            ...context,
            headerTitle: "404",
            isBackButtonVisible: true,
        });
    }, []);

    return (
        <StyledMain>
            <StyledSpan fontSize="2rem" color="white">
                Wups! Nu kom du någonstans konstigt.
            </StyledSpan>
        </StyledMain>
    );
}
