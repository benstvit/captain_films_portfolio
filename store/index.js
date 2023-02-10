import 'viewerjs/dist/viewer.css'
import Vue from 'vue';
import Vuex from 'vuex';

import VueFormulate from '@braid/vue-formulate'
import VuePrlx from 'vue-prlx'
import VueViewer from 'v-viewer'

import banner from "./modules/banner.js";
import music from "./modules/music.js";
import photography from "./modules/photography.js";
import showroom from "./modules/showroom.js";

import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)
Vue.use(VueFormulate);
Vue.use(VuePrlx);
Vue.use(VueViewer)
Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: {
    banner,
    music,
    photography,
    showroom
  },
  state: {
    data: {},
  },
});
