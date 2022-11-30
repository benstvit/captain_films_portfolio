import Vue from 'vue';
import Vuex from 'vuex';
import banner from "./modules/banner.js";
import photography from "./modules/photography.js";

Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: {
    banner,
    photography
  },
  state: {
    data: {},
  },
});
