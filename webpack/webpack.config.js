const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = (options) => {
  const { env } = options;
  const mode = require(`./webpack.${env}.js`);
  const config = merge(common, mode);

  return config;
};
