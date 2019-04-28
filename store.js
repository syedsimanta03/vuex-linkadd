import Vue from 'vue';
import Vuex from 'vuex';
import { resolve } from 'path';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'My Custom Title',

    links: ['http://google.com', 'http://coursetro.com', 'http://youtube.com']
  },

  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link);
    },

    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1);
    },

    REMOVE_ALL: state => {
      state.links = [];
    }
  },

  actions: {
    removeLink({ commit }, link) {
      commit('REMOVE_LINK', link);
    },

    removeAll({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1000);
      });
    }
  },

  getters: {
    countLinks: state => {
      return state.links.length;
    }
  }
});
