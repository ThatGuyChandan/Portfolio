module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    "postcss-preset-env": {
      autoprefixer: {},
      features: {
        "nesting-rules": true,
      },
    },
  },
};
