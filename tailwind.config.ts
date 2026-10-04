import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neel:   { DEFAULT: "#12264A", 700: "#1C2D4D", 500: "#3A4C68" },
        sagar:  { DEFAULT: "#0E7C86", 100: "#D3EDEF", 300: "#7FD0D6", 700: "#0B6670" },
        hawa:   "#EAF2F6",
        haldi:  { DEFAULT: "#F2A30F", 100: "#FDEFCB", 700: "#8A5A00" },
        sindoor:{ DEFAULT: "#C8372D", 100: "#F9DCD9" },
        patta:  { DEFAULT: "#2E7D4F", 100: "#D9EEE1" },
        jamun:  { DEFAULT: "#6B3FA0", 100: "#E8DFF3" },
      },
      fontFamily: {
        sans:  ["var(--font-anek)", "Noto Sans", "system-ui", "sans-serif"],
        serif: ["var(--font-source-serif)", "Noto Serif", "Georgia", "serif"],
        mono:  ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      borderRadius: { sm: "4px", md: "8px", lg: "14px" },
      boxShadow: { float: "0 10px 30px rgba(18,38,74,0.16)" },
      transitionTimingFunction: { out: "cubic-bezier(.2,.7,.2,1)" },
    },
  },
  plugins: [],
};
export default config;
