/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#ec4899", // pink-500 for name only
          rose: "#f43f5e", // rose-500
          gold: "#d97706", // amber-600
          bronze: "#a16207", // amber-700
        },
        elegant: {
          charcoal: "#1f2937", // gray-800
          slate: "#374151", // gray-700
          stone: "#57534e", // stone-600
          cream: "#fefce8", // yellow-50
          ivory: "#fffbeb", // amber-50
          pearl: "#f8fafc", // slate-50
          champagne: "#fef3c7", // amber-100
          cappuccino: "#78716c", // stone-500
          espresso: "#292524", // stone-800
        },
        luxury: {
          100: "#fefdf8", // warm white
          200: "#fef7ed", // warm cream
          300: "#fed7aa", // warm peach
          400: "#fdba74", // warm orange
          500: "#f97316", // orange-500
          600: "#ea580c", // orange-600
          700: "#c2410c", // orange-700
          800: "#9a3412", // orange-800
          900: "#7c2d12", // orange-900
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        elegant: ["Cormorant Garamond", "Times", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        100: "25rem",
        112: "28rem",
        128: "32rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      boxShadow: {
        elegant: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
        luxury: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        soft: "0 4px 20px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
