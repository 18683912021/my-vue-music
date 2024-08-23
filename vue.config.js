const { defineConfig } = require("@vue/cli-service");
const registerRouter = require("./backend/router");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `,
      },
    },
  },
  devServer: {
    onBeforeSetupMiddleware(devServer) {
      if (devServer) {
        // 确保 devServer.app 是存在的
        const { app } = devServer;
        // 在这里添加你的中间件逻辑
        registerRouter(app);
      }
    },
  },
});
