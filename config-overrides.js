const {
  override,
  disableChunk,
  fixBabelImports,
  addBabelPlugin,
  addWebpackExternals,
  addWebpackPlugin,
  addExternalBabelPlugin 
} = require("customize-cra");

const { customBuildConfig, customEntryConfig} = require("mcf-cra")
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
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
  customEntryConfig(),
  addWebpackPlugin(
    new HardSourceWebpackPlugin(),
  )
)