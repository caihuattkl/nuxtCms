"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");
//http://192.168.2.124:8023
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://192.168.2.124:8028"'
});
