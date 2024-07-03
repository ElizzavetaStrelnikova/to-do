import axios from 'axios';

const state = {
    boards: []
};

const mutations = {
    SET_BOARDS(state, boards) {
        state.boards = boards;
    },
    ADD_BOARD(state, board) {
        state.boards.push(board);
    }
};

const actions = {
    fetchBoards({ commit, rootGetters }) {
        const userId = rootGetters['user/getUserId'];
        const token = rootGetters['user/getToken'];

        if (userId && token) {
            axios.get(`https://todo-list.edu-playground.ru/api/v1/user/${userId}/boards`, {
                headers: {
                    'X-Base-Auth': `Bearer ${token}`
                }
            })
                .then(response => {
                    commit('SET_BOARDS', response.data);
                })
                .catch(error => {
                    console.log('Произошла ошибка при получении данных:', error);
                });
        } else {
            console.log('Отсутствуют необходимые данные для выполнения запроса');
        }
    },
    addBoard({ commit, rootGetters }, board) {
        const token = rootGetters['user/getToken'];

        if (token) {
            return axios.post(`https://todo-list.edu-playground.ru/api/v1/boards`, board, {
                headers: {
                    'X-Base-Auth': `Bearer ${token}`
                }
            })
                .then(response => {
                    commit('ADD_BOARD', response.data);
                    return response.data;
                })
                .catch(error => {
                    console.log('Произошла ошибка при добавлении доски:', error);
                    throw error;
                });
        } else {
            console.log('Отсутствует токен для выполнения запроса');
        }
    }
};

const getters = {
    getBoards(state) {
        return state.boards;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};