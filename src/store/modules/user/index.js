const state = {
    user: null,
};

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
};

const getters = {
    getUser(state) {
        return state.user;
    },
    getUserId(state) {
        return state.user ? state.user.id : null;
    },
    getToken(state) {
        return state.user ? state.user.token : null;
    }
};

export default {
    state,
    mutations,
    getters,
    namespaced: true, // Обязательно добавьте именование пространства
};