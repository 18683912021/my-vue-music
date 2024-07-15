import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  css: {
    lpreprocessorOptions: {
      less: {
        modifyVars: {
          // 这里可以定义 Less 变量的覆盖
        },
        // 其他 Less 相关的选项
        additionalData: `@import "@/pages/assets/less/variable.less";
        @import "@/pages/assets/less/mixin.less";`
      }
    }
  },
})
