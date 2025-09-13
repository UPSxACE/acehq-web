import { NAVBAR_HEIGHT } from "./layout/constants";

export const NO_SCROLL = {
    "&::-webkit-scrollbar": { display: "none" },
    "msOverflowStyle": "none",
    "scrollbarWidth": "none",
}

export const CSS_FULLSCREEN = `calc(100svh - ${NAVBAR_HEIGHT}px)`

export const CSS_ICONBUTTONFIX = {
    "& svg": {
        width: "auto",
        height: "auto",
        minWidth: 0
    },
}


export const COLORS = {
    main: "#6952ff",
    mainHovered: "#3c369f"
}