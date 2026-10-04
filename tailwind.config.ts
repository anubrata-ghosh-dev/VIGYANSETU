import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vigyan: {
          navy: "#123B5D",      // Institutional Navy
          deepNavy: "#0B253A",  // Deep Navy
          blue: "#1B5A85",      // Research Blue
          saffron: "#D9822B",    // Indian institutional accent
          green: "#2E6B4E",     // Scientific accent / Success
          background: "#F8FAFC",
          surface: "#FFFFFF",
          border: "#CBD2D9",
          divider: "#E4E7EB",
          muted: "#52606D",
          body: "#1F2933",
          heading: "#17202A",
          error: "#B42318",
          warning: "#9A6700",
          info: "#175CD3",
          focus: "#FFD43B",
        },
      },
      fontFamily: {
        noto: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
