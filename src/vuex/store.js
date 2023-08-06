import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    getters: {}
});

export default store;

const app = createApp({});
app.use(store)