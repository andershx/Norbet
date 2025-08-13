import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: "#0A0F1E",
        panel: "#141A31",
        ink: "#DDE7FF",
        brand: {
          DEFAULT: "#16B6FF",
          dark: "#0E90CC",
          neon: "#00E5A8",
          yellow: "#FEEA63",
          pink: "#FF66C4"
        },
      },
      boxShadow: {
        "glow": "0 0 0 2px rgba(22,182,255,0.2), 0 8px 30px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "grid": "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "radial": "radial-gradient(60% 60% at 20% 10%, rgba(22,182,255,0.25), transparent), radial-gradient(60% 60% at 80% 10%, rgba(255,102,196,0.15), transparent)"
      },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-6px)" } },
        pulseGlow: { "0%,100%": { boxShadow: "0 0 0 0 rgba(22,182,255,0.3)" }, "50%": { boxShadow: "0 0 0 8px rgba(22,182,255,0.0)" } }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite"
      },
      borderRadius: { '2xl': '1rem' }
    }
  },
  plugins: [],
};
export default config;
