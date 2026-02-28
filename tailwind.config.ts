import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        limePunch: "#CCFF00",
        magentaShock: "#FF00FF",
        dangerBlack: "#080808",
        signalYellow: "#FFD700"
      }
    }
  },
  plugins: []
};

export default config;
