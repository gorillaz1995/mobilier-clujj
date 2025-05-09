/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        sora: ["var(--font-sora)"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        heading: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      colors: {
        background: {
          DEFAULT: "#211908", // base color from gradient
          gradient:
            "linear-gradient(to right top, #040301, #130f04, #1d1708, #261e0b, #30250d, #32260d, #34280e, #36290e, #31250d, #2b210c, #261d0a, #211908)",
        }, // rich brown gradient replacing soft ivory
        foreground: "#2B2B33", // deep navy-black
        headline: "#121219", // midnight blue-black
        gold: "#D4B254", // bright gold
        olive: "#5D574A", // olive brown
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "#2B2B33",
          foreground: "#EEEEE6",
        },
        secondary: {
          DEFAULT: "#D4B254",
          foreground: "#121219",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#5D574A",
          foreground: "#EEEEE6",
        },
        accent: {
          DEFAULT: "#D4B254",
          foreground: "#121219",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(100px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        slideDown: {
          from: { transform: "translateY(-100px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        slideLeft: {
          from: { transform: "translateX(100px)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        slideRight: {
          from: { transform: "translateX(-100px)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        slideUp: "slideUp 0.5s ease-in-out forwards",
        slideDown: "slideDown 0.5s ease-in-out forwards",
        slideLeft: "slideLeft 0.5s ease-in-out forwards",
        slideRight: "slideRight 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
