const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        //webpack 配置 scss 根目录
        includePaths: [path.join(__dirname, "style")],
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@src", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"));
  },
};
