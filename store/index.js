import Vue from 'vue';
import Vuex from 'vuex';
import VueSilentbox from 'vue-silentbox'
import banner from "./modules/banner.js";
import music from "./modules/music.js";
import photography from "./modules/photography.js";
import VueParallaxJs from 'vue-parallax-js'


Vue.use(Vuex);
Vue.use(VueSilentbox);
Vue.use(VueParallaxJs)

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
