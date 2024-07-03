import axios from 'axios';

const state = {
    tasks: []
}

const mutations = {
    SET_TASKS(state, tasks) {
        state.tasks = tasks;
    },
    ADD_TASK(state, task) {
        state.tasks.push(task);
    }
}

const actions = {
    fetchTasks({ commit, rootGetters }, boardId) {
        const userId = rootGetters['user/getUserId'];
        const token = rootGetters['user/getToken'];

        if (userId && token) {
            axios.get(`https://todo-list.edu-playground.ru/api/v1/user/${userId}/boards/${boardId}/tasks`, {
                headers: {
                    'X-Base-Auth': `Bearer ${token}`
                }
            })
                .then(response => {
                    commit('SET_TASKS', response.data);
                })
                .catch(error => {
                    console.log('Произошла ошибка при получении данных:', error);
                });
        } else {
            console.log('Отсутствуют необходимые данные для выполнения запроса');
        }
    },
    addTask({ commit, rootGetters }, { boardId, task }) {
        const token = rootGetters['user/getToken'];

        if (token) {
            return axios.post(`https://todo-list.edu-playground.ru/api/v1/boards/${boardId}/tasks`, task, {
                headers: {
                    'X-Base-Auth': `Bearer ${token}`
                }
            })
                .then(response => {
                    commit('ADD_TASK', response.data);
                    return response.data;
                })
                .catch(error => {
                    console.log('Произошла ошибка при добавлении задачи:', error);
                    throw error;
                });
        } else {
            console.log('Отсутствует токен для выполнения запроса');
        }
    }
}

const getters = {
    getTasks(state) {
        return state.tasks;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}