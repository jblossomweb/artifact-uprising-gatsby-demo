const { generateConfig } = require("gatsby-plugin-ts-config")
module.exports = generateConfig({
  projectRoot: __dirname,
  babel: true,
  configDir: ".config",
})
