import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import toDos from './modules/toDosModule/toDosModule';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  plugins: [createPersistedState()],

  modules: {
    toDos,
  },
});
