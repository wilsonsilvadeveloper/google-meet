import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'gray-1000': '#2E2E2E',
        'gray-800': '#4E4E4E',
        'black': '#0F0F0F',
        'primay': '#81E6D9',
        'secondary': '#212121',
        'gray-900': '#2C2C2C',
        'gray-950': '#4E4E4E',
      }
    },
  },
  plugins: [],
};
export default config;
