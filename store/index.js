import 'viewerjs/dist/viewer.css'
import Vue from 'vue';
import Vuex from 'vuex';

import VueFormulate from '@braid/vue-formulate'
import VuePrlx from 'vue-prlx'
import VueViewer from 'v-viewer'
// import VueYouTubeEmbed from 'vue-youtube-embed'

import banner from "./modules/banner.js";
import blogs from "./modules/blogs.js";
import photography from "./modules/photography.js";
import showroom from "./modules/showroom.js";

Vue.use(VueFormulate);
Vue.use(VuePrlx);
Vue.use(VueViewer);
// Vue.use(VueYouTubeEmbed);
Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: {
    banner,
    blogs,
    photography,
    showroom
  },
  state: {
    data: {},
  },
});
