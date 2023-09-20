import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      smm: { max: "767px" },
      sm: { min: "767px" },
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        cyann: "#22d3ee",
        bgcol: "#19181F",
        transp: "#ffffff00",
        spurple: "#786CFE",
      },
      boxShadow: {
        "3xl": "0px 0px 30px 1px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
