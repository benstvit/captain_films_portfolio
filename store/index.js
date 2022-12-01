import Vue from 'vue';
import Vuex from 'vuex';
import VueSilentbox from 'vue-silentbox'
import banner from "./modules/banner.js";
import photography from "./modules/photography.js";

Vue.use(Vuex);
Vue.use(VueSilentbox);

export default () => new Vuex.Store({
  modules: {
    banner,
    photography
  },
  state: {
    data: {},
  },
});
