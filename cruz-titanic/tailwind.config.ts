import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2rem",
        lg: "3rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // Cinematic dark futuristic palette — restrained, never neon
        ink: {
          950: "#05060a",
          900: "#0a0c12",
          800: "#0f1219",
          700: "#161a25",
          600: "#1d2230",
          500: "#262c3d",
        },
        bone: {
          50: "#f6f5f1",
          100: "#ebe9e2",
          200: "#d6d2c6",
          300: "#a8a397",
          400: "#7a7568",
        },
        ember: {
          // restrained warm accent — used sparingly
          400: "#f4b27c",
          500: "#e98a4b",
          600: "#c46a2f",
        },
        glass: {
          line: "rgba(255,255,255,0.08)",
          fill: "rgba(255,255,255,0.04)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        crush: "-0.06em",
      },
      borderRadius: {
        // strict rule: max 8px
        none: "0px",
        xs: "2px",
        sm: "4px",
        md: "6px",
        lg: "8px",
      },
      boxShadow: {
        glass: "0 1px 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.6)",
        ember: "0 0 0 1px rgba(244,178,124,0.18), 0 18px 60px -20px rgba(244,178,124,0.18)",
      },
      backgroundImage: {
        "grain": "url('/cruz/grain.svg')",
        "scanlines":
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 3px)",
        "vignette":
          "radial-gradient(120% 80% at 50% 0%, rgba(255,255,255,0.04), transparent 60%), radial-gradient(80% 60% at 50% 110%, rgba(0,0,0,0.6), transparent 60%)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      keyframes: {
        breathe: {
          "0%,100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        breathe: "breathe 6s ease-in-out infinite",
        rise: "rise 1.2s cubic-bezier(0.16,1,0.3,1) both",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
