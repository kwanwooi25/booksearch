import Vue from 'vue';
import Vuex from 'vuex';

/** Common */
import state from './common/state';
import * as getters from './common/getters';
import * as mutations from './common/mutations';
import * as actions from './common/actions';

/** Modules */
import bookSearch from './modules/bookSearch';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    bookSearch
  }
});