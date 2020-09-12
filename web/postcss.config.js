const tailwind = require("tailwindcss");

module.exports = () => ({
  plugins: [
    tailwind("./tailwind.config.js"),
    require("postcss-preset-env")({
      stage: 0
    })
  ]
});
