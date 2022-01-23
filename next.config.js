// next.config.js
const path = require('path');
const withAntdLess = require('next-plugin-antd-less');

const lessConfig = withAntdLess({
  lessVarsFilePath: './styles/globals.less',
  cssLoaderOptions: {
    mode: 'local',
    localIdentName: '[path][name]__[local]--[hash:base64:5]', // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
    exportLocalsConvention: 'camelCase',
    exportOnlyLocals: false,
  },

  // Other config here...
  images: {
    // TODO: temp
    domains: ['zos.alipayobjects.com'],
  },

  // Other Webpack config here...
  webpack(config) {
    return config;
  },
});

module.exports = {
  ...lessConfig,
};
