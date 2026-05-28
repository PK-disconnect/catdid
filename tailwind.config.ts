import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#eef1f6",
        surface: "#eef1f6",
        ink: "#3a4256",
        "ink-soft": "#6b7488",
        lavender: "#c3b9e8",
        mint: "#aee0cf",
        sky: "#a9cdf0",
        blush: "#f3c6d4",
        peach: "#f6d2bd",
        butter: "#f4e2b3",
        accent: "#5b7cc4",
      },
      fontFamily: {
        sans: ["var(--font-exo)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        neu: "20px",
        "neu-lg": "32px",
      },
      boxShadow: {
        neu: "8px 8px 18px #c8ccd6, -8px -8px 18px #ffffff",
        "neu-sm": "5px 5px 11px #c8ccd6, -5px -5px 11px #ffffff",
        "neu-inset": "inset 5px 5px 11px #c8ccd6, inset -5px -5px 11px #ffffff",
        "neu-press": "inset 3px 3px 7px #c8ccd6, inset -3px -3px 7px #ffffff",
      },
    },
  },
  plugins: [],
};

export default config;
