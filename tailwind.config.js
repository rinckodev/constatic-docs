import { createPreset } from "fumadocs-ui/tailwind-plugin";

/** @type {import("tailwindcss").Config} */
export default {
  darkMode: "class",
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  presets: [createPreset({
    addGlobalColors: true
  })],
  theme: {
    extend: {
      colors: {
        "c-primary": "var(--primary)",
        "c-secondary": "var(--secondary)"
      },
      animation: {
        shimmer: "shimmer 8s infinite",
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      }
    }
  }
};
