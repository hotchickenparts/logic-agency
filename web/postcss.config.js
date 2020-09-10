const tailwind = require("tailwindcss");

module.exports = () => ({
  plugins: [
    tailwind("./tailwind.js"),
    require("postcss-preset-env")({
      stage: 0
    })
  ]
});
