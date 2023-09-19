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
        cyan: "#22d3ee",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
