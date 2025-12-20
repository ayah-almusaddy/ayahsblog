// src/app/fonts.ts
import { Inria_Serif, Inria_Sans, Kaisei_Tokumin } from "next/font/google";

export const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

export const kaiseiTokumin = Kaisei_Tokumin({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Medium is important here
});
