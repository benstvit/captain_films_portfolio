import Vue from 'vue';
import Vuex from 'vuex';
import VueFormulate from '@braid/vue-formulate'
import VueSilentbox from 'vue-silentbox'
import banner from "./modules/banner.js";
import music from "./modules/music.js";
import photography from "./modules/photography.js";

Vue.use(VueFormulate);
Vue.use(Vuex);
Vue.use(VueSilentbox);

export default () => new Vuex.Store({
  modules: {
    banner,
    music,
    photography
  },
  state: {
    data: {},
  },
});
