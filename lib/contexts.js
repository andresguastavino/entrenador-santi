import { createContext } from "react";

export const WindowPropsContext = createContext({
    width: 0,
    height: 0,
    scrollY: 0
});