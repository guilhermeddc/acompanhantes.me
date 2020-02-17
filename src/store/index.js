import Vue from 'vue'
import { instance as api } from '../plugins/api';
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    models: []
  },
  getters: {
    all (state) {
      return state.models;
    },
    featured (state) {
      return state.models.filter(item => item.featured === true)
    },
    superFeatured (state) {
      return state.models.filter(item => item.super_featured === true)
    }
  },
  mutations: {
    GET_MODELS (state, payload) {
      state.models = payload;
    },
  },
  actions: {
    async getModels (context) {
      try {
        const { data: res } = await api.get("/models/");
        context.commit('GET_MODELS', res.results);
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {},
  plugins: [createPersistedState()],
})
