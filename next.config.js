// next.config.js // with antd theme modify
const withLess = require("@zeit/next-less");
module.exports = withLess({
  lessLoaderOptions: {
    modifyVars: {
      "primary-color": "red",
      "link-color": "red",
      "border-radius-base": "2px"
    },
    javascriptEnabled: true
  }
});
