const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        negative: "var(--color-negative)",
        positive: "var(--color-positive)",
        "primary-background": "var(--background-primary)",
        "sec-background": "var(--background-sec)",
        "hover-background": "var(--background-hover)",
        "primary-text": "var(--color-text-primary)",
        "secondary-text": "var(--color-text-secondary)",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
      }),

      fontFamily: {
        regular: ["Quicksand", ...defaultTheme.fontFamily.sans],
        header: ["Luckiest Guy", ...defaultTheme.fontFamily.sans],
      },

      boxShadow: {
        "3xl": "13px 7px 20px 15px rgba(88, 83, 83, 0.75)",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"],
    backgroundColor: ["active", "hover"],
    boxShadow: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [
    require("@tailwindcss/ui")({
      layout: "sidebar",
    }),
  ],
};
