import { createStore } from 'vuex'

const store = createStore({
    state: {//存放状态
        "username": "foo",
        "age": 18
    },
    mutations: {
        // 同步操作
    },
    actions: {
        // 异步操作
    },
    getters: {
        // 状态的访问器
    }
})

export default store