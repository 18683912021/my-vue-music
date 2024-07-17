import {
	createSSRApp
} from "vue";
import store from './store'
import App from "./App.vue";
import Header from "./pages/components/header/header.vue"
import './pages/assets/less/index.less'//引入全局样式
export function createApp() {
	const app = createSSRApp(App);
	app.use(store)
	app.component("m-header",Header)
	return {
		app,
	};
}
