import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入全局样式文件
import "@/assets/scss/index.scss";

import BScroll from "@better-scroll/core";
import Slide from "@better-scroll/slide";

BScroll.use(Slide);

createApp(App).use(store).use(router).mount("#app");
