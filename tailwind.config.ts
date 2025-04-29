import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0EA5E9", // Vibrant blue
        secondary: "#0F172A", // Dark blue for contrast
        accent: "#22D3EE", // Teal accent
        light: "#F8FAFC", // Light background
        text: "#1E293B", // Text color
      },
    },
  },
  plugins: [],
};
export default config;
