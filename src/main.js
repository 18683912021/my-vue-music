import {
	createSSRApp
} from "vue";
import store from './store'
import App from "./App.vue";
import './pages/assets/less/index.less'//引入全局样式
export function createApp() {
	const app = createSSRApp(App);
	app.use(store)
	return {
		app,
	};
}
