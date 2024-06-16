import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FE6A86",
        secondary: "#FD969A",
        info: "#FFDCE0",
        contras: "#FEE255",
        warning: "#FFDD13",
        success: "#26FF2A",
        danger: "#FF213F",
      }
    },
  },
  plugins: [],
};
export default config;
