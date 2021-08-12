module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  important: true,
  theme: {
    container: {
      center: true,
      padding: 15,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "900px",
      },
    },
    fontFamily: {
      "dm-mone": "'DM Mono', monospace",
      "dm-sans":
        '"DM Sans",-apple-system,BlinkMacSystemFont,"Helvetica Neue","Roboto",Roboto,Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"!important',
    },
    extend: {
      colors: {
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        background: "var(--color-background)",
        corner: "var(--color-corner)",
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        default: {
          DEFAULT: "var(--color-default)",
          100: "var(--color-default-100)",
          200: "var(--color-default-200)",
          300: "var(--color-default-300)",
          400: "var(--color-default-400)",
          500: "var(--color-default-500)",
          600: "var(--color-default-600)",
          700: "var(--color-default-700)",
          800: "var(--color-default-800)",
          900: "var(--color-default-900)",
        },
        inverted: {
          DEFAULT: "var(--color-default-inverted)",
          100: "var(--color-default-inverted-100)",
          200: "var(--color-default-inverted-200)",
          300: "var(--color-default-inverted-300)",
          400: "var(--color-default-inverted-400)",
          500: "var(--color-default-inverted-500)",
          600: "var(--color-default-inverted-600)",
          700: "var(--color-default-inverted-700)",
          800: "var(--color-default-inverted-800)",
          900: "var(--color-default-inverted-900)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
