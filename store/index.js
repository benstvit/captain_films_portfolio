import 'viewerjs/dist/viewer.css'
import Vue from 'vue';
import Vuex from 'vuex';

import VueFormulate from '@braid/vue-formulate'
import VuePrlx from 'vue-prlx'
import VueViewer from 'v-viewer'

import banner from "./modules/banner.js";
import photography from "./modules/photography.js";
import showroom from "./modules/showroom.js";

import Vue2TouchEvents from 'vue2-touch-events'

const viewerOptions = {
  toolbar: false,
  button: true
}


Vue.use(Vue2TouchEvents)
Vue.use(VueFormulate);
Vue.use(VuePrlx);
Vue.use(VueViewer, viewerOptions)
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
