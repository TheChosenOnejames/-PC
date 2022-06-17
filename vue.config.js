/*
 * @Date: 2022-06-08 10:05:56
 * @LastEditors: shen-xu
 * @LastEditTime: 2022-06-13 08:59:56
 * @Description:
 */
module.exports = {
  lintOnSave: false,
  devServer: {
    // 端口号
    // port: 8890,
    // 配置是否自动启动浏览器
    open: true,
    https: false,
    proxy: {
      // 代理
      "/task/": {
        target: "http://10.66.128.94:8000/", //要代理访问的路径
        changeOrigin: true,
        pathRewrite: {
          "^/task/": ""
        }
      }
    }
  }
};
