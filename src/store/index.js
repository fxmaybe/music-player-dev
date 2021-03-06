import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import state from './state';
import * as actions from './actions';
import mutations from './mutations';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  getters,
  state,
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});