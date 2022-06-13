// ### BREAKPOINTS (px) ###
export const breakpoint = {
    mobile: 640,
    tablet: 1024,
    desktop: 1440,
    desktopLarge: 1920,
};

// ### SPACING (px) ###
export const spacing = {
    small: 10,
    medium: 15,
    large: 20,
};

// ### FONTS (pt) ###
export const font = {
    size: {
        small: "1rem",
        medium: "2rem",
        large: "3rem",
    },
    family: {
        default: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif`,
    },
};

// ### BORDER (px) ###
export const border = {
    radius: {
        small: 5,
        medium: 10,
        large: 20,
    },
};

// ### COLOR ###
export const color = {
    primary: {
        one: "#ffffff",
        two: "#bfbfbf",
        three: "#808080",
        four: "#404040",
        five: "#000000",
    },
    accent: {
        one: "#ff9999",
        two: "#ff0000",
        three: "#b30000",
        four: "#660000",
        five: "#330000",
    },
};

// ### MIXINS NOTES ###
// @media screen and (min-width: ${breakpoint}px) {
//     ${content}
// }
