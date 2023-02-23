import 'viewerjs/dist/viewer.css'
import Vue from 'vue';
import Vuex from 'vuex';

import VueAnimateOnScroll from 'vue-animate-onscroll'
import VueFormulate from '@braid/vue-formulate'
import VuePrlx from 'vue-prlx'
import VueViewer from 'v-viewer'

import banner from "./modules/banner.js";
import photography from "./modules/photography.js";
import showroom from "./modules/showroom.js";

Vue.use(VueAnimateOnScroll);
Vue.use(VueFormulate);
Vue.use(VuePrlx);
Vue.use(VueViewer);
Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: {
    banner,
    photography,
    showroom
  },
  state: {
    data: {},
  },
});
