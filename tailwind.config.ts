import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05080f",
        panel: "#0b1220",
        cyan: "#00FFCC",
        purple: "#7b2fff",
      },
      boxShadow: {
        neon: "0 0 18px rgba(0,255,204,0.22)",
        purpleGlow: "0 0 24px rgba(123,47,255,0.2)",
      },
      backgroundImage: {
        ambient: "radial-gradient(circle at top left, rgba(0,255,204,0.18), transparent 25%), radial-gradient(circle at top right, rgba(123,47,255,0.18), transparent 30%)",
      },
    },
  },
  plugins: [],
};

export default config;
