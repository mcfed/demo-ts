'use strict';

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy(process.env.npm_package_config_API_SERVER, { target: process.env.npm_package_config_MOCK_SERVER, secure: false }));
};