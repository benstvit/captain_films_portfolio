import 'viewerjs/dist/viewer.css'
import Vue from 'vue';
import VueViewer from 'v-viewer'
import Vuex from 'vuex';
import VueFormulate from '@braid/vue-formulate'
import banner from "./modules/banner.js";
import music from "./modules/music.js";
import photography from "./modules/photography.js";

Vue.use(VueViewer)
Vue.use(VueFormulate);
Vue.use(Vuex);

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
