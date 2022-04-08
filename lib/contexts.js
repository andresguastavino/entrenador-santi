import { createContext } from "react";

export const windowPropsContextObj = {
    width: 0,
    height: 0,
    scrollY: 0
};

export const WindowPropsContext = createContext(windowPropsContextObj);
