module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/nesting")],
  content: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // whitelist: [],
    },
  },
};
