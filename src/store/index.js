import Vue from 'vue'
import { instance as api } from '../plugins/api';
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    models: [],
    cities: [],
    params: '',
    alt: 'Acompanhantes, garotas de programa'
  },
  getters: {
    alt (state) {
      return state.alt;
    },
    params (state) {
      return state.params;
    },
    cities (state) {
      return state.cities;
    },
    all (state) {
      return state.models;
    },
    allReverse (state) {
      return state.models.reverse()
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
    GET_PARAMS (state, payload) {
      state.params = payload;
    },
    GET_CITIES (state, payload) {
      state.cities = payload;
    },
  },
  actions: {
    getParams (context, payload) {
      context.commit('GET_PARAMS', payload)
    },
    async getModels (context) {
      try {
        const { data: res } = await api.get("/models/");
        context.commit('GET_MODELS', res.results);
      } catch (error) {
        console.error(error);
      }
    },
    async getCities (context) {
      try {
        const { data: res } = await api.get("/cities/");
        context.commit('GET_CITIES', res.results);
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {},
  plugins: [createPersistedState()],
})
