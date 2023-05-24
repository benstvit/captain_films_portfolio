<template>
  <section class="flex flex-col items-center text-justify tracking-wide leading-relaxed">
    <p class="py-4" v-html="content(post.introduction)"></p>

    <div class="my-4 shadow-md border-b-[9px] border-black bg-black rounded-lg">
      <youtube
        v-if="post.videoUrl"
        class="rounded-lg hover:opacity-80 hover:shadow-lg hover:cursor-pointer border-2 border-black"
        :player-width="width"
        :player-height="height"
        :video-id="videoID(post.videoUrl)"
      ></youtube>
    </div>

    <div v-for="num in 8" :key="num">
      <p :class="post[`paragraph${num}`] && 'py-2'" v-html="content(post[`paragraph${num}`])"></p>
    </div>
    <SocialNetworksFooter :post="post"/>
  </section>
</template>

<script>
import { getIdFromURL } from "vue-youtube-embed";

import SocialNetworksFooter from './SocialNetworksFooter.vue';

export default {
  name: "listen-format",
  components: {
    SocialNetworksFooter
  },
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      width: 0,
      height: 0,
    };
  },
  beforeMount() {
    this.setVideoWidth();
  },
  mounted() {
    console.log(this.post)
  },
  methods: {
    content(text) {
      if (!text) return;

      return this.$md.render(text);
    },
    setVideoWidth() {
      const windowWidth = window.innerWidth;
      this.width = windowWidth / 2;
      this.height = Math.round(this.width * 0.5625);
    },

    videoID(url) {
      return getIdFromURL(url);
    },
  }
};
</script>
