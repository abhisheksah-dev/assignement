/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--fg)",
        accent: "var(--accent)",
        "accent-dark": "var(--accent-600)",
        "neutral-light": "var(--neutral-100)",
        "neutral-medium": "var(--neutral-200)",
        "neutral-muted": "var(--muted)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
};
