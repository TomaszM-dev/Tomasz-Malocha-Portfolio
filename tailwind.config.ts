import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens: {
    md: "750px",
    lg: "1060px",

    xl: "1600px",
    xxl: "1700px",
  },
  plugins: [],
};
export default config;
