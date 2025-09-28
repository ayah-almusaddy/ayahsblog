// src/app/fonts.ts
import { Inria_Serif, Inria_Sans } from "next/font/google";

export const inriaSerif = Inria_Serif({
    subsets: ["latin"],
    weight: ["400", "700"], // normal + bold
});

export const inriaSans = Inria_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "700"], // light, regular, bold
    style: ["normal", "italic"],
});
