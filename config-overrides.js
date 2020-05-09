const {
  override,
  disableChunk,
  fixBabelImports,
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
  customBuildConfig(),
  customEntryConfig(),
  fixBabelImports('antd', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,//自动打包相关的样式 默认为 style:'css'
  }),
  // fixExternalBabelImports('antd', {
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: true,//自动打包相关的样式 默认为 style:'css'
  // }),
  fixBabelImports('@mcf/component', {
    libraryName: '@mcf/components',
    libraryDirectory: 'lib',
    camel2DashComponentName: false
  }),
)