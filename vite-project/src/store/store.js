// src/store.js

import { createStore } from 'vuex';

export default createStore({
    state: {
        selectedItem: null,
    },
    mutations: {
        setSelectedItem(state, item) {
            state.selectedItem = item;
        },
    },
    actions: {
        selectItem({ commit }, item) {
            commit('setSelectedItem', item);
        },
    },
    getters: {
        selectedItem: (state) => state.selectedItem,
    },
});
