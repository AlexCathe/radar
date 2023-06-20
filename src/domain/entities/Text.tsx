import { Element } from "./Element";

export interface Text extends Element {
    libelle: string;
    style : {
        size: "2em",
        color: "black",
        fontWeight: "normal",
        fontFamily: "serif" 
    };
}