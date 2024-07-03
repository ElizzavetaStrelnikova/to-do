import { createStore } from 'vuex';
import userStore from './modules/user/index.js';
import boardStore from './modules/board/index.js';
import taskStore from './modules/task/index.js';

const store = createStore({
    modules: {
        user: userStore,
        board: boardStore,
        task: taskStore
    }
});

export default store;