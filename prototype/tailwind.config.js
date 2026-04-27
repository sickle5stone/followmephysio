import containerQueries from "@tailwindcss/container-queries";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--brand)",
          dark: "var(--brand-dark)",
          deep: "var(--brand-deep)",
          light: "var(--brand-light)",
          tint: "var(--brand-tint)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          deep: "var(--accent-deep)",
          warm: "var(--accent-warm)",
          mint: "var(--accent-mint)",
        },
        gold: {
          DEFAULT: "var(--gold)",
          soft: "var(--gold-soft)",
          light: "var(--gold-light)",
        },
        ink: {
          primary: "var(--ink-primary)",
          secondary: "var(--ink-secondary)",
          tertiary: "var(--ink-tertiary)",
          muted: "var(--ink-muted)",
        },
        canvas: {
          DEFAULT: "var(--canvas)",
          warm: "var(--canvas-warm)",
          card: "var(--canvas-card)",
        },
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        lift: "var(--shadow-lift)",
        inset: "var(--shadow-inset)",
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        serif: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [forms, containerQueries],
};
