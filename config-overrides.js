const {
  override,
  disableChunk,
  fixBabelImports,
  addBabelPlugin,
  addWebpackExternals,
  addExternalBabelPlugin 
} = require("customize-cra");

const { customBuildConfig, customEntryConfig} = require("mcf-cra")
const fixExternalBabelImports = (libraryName, options) =>
  addExternalBabelPlugin([
    "import",
    Object.assign(
      {},
      {
        libraryName
      },
      options
    ),
    `fix-${libraryName}-imports`
  ]);

module.exports = override(
  addBabelPlugin("babel-plugin-transform-typescript-metadata"),
  customBuildConfig(),
  customEntryConfig()
)