/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        lime: {
          50: "hsl(84, 100%, 95%)",
          100: "hsl(86, 100%, 89%)",
          200: "hsl(88, 100%, 79%)",
          300: "hsl(89, 100%, 66%)",
          400: "hsl(91, 97%, 55%)",
          500: "hsl(92, 100%, 44%)",
          600: "hsl(94, 100%, 35%)",
          700: "hsl(94, 97%, 27%)",
          800: "hsl(95, 86%, 23%)",
          900: "hsl(96, 77%, 20%)",
          950: "hsl(98, 100%, 10%)",
        },
        slate: {
          50: "hsl(180, 5%, 96%)",
          100: "hsl(200, 6%, 90%)",
          200: "hsl(204, 5%, 82%)",
          300: "hsl(203, 5%, 69%)",
          400: "hsl(198, 4%, 53%)",
          500: "hsl(205, 6%, 43%)",
          600: "hsl(204, 5%, 36%)",
          700: "hsl(210, 5%, 31%)",
          800: "hsl(210, 4%, 27%)",
          900: "hsl(216, 4%, 24%)",
          950: "hsl(210, 4%, 18%)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
