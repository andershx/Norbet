import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1B8EF2", dark: "#0F6EC1", accent: "#7BD9FF" },
        surface: "#0F1221",
        panel: "#161A2E"
      },
      boxShadow: { soft: "0 4px 20px rgba(0,0,0,0.25)" },
      borderRadius: { '2xl': '1rem' }
    }
  },
  plugins: [],
};
export default config;
