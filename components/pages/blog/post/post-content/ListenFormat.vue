<template>
  <section
    id="listen-content"
    class="flex flex-col items-center text-justify px-1 md:px-0 tracking-wide leading-normal md:leading-relaxed"
  >
    <BandcampPlayer
      v-if="displayBandCampPlayer"
      :album-id="post.albumId"
      :track-id="post.trackId"
    />
    <p class="py-4" v-html="content(post.introduction)"></p>

    <div>
      <BandcampPlayer v-if="displayBandCampPlayer" :album-id="post.albumId" />
    </div>
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
      <p
        :class="post[`paragraph${num}`] && 'py-2'"
        v-html="content(post[`paragraph${num}`])"
      ></p>
    </div>
    <SocialNetworksFooter :post="post" />
  </section>
</template>

<script>
import { getIdFromURL } from "vue-youtube-embed";

import BandcampPlayer from "../../../../partials/BandcampPlayer.vue";
import SocialNetworksFooter from "./SocialNetworksFooter.vue";

export default {
  name: "listen-format",
  components: {
    BandcampPlayer,
    SocialNetworksFooter,
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
  computed: {
    displayBandCampPlayer() {
      return this.post.albumId;
    },
  },
  beforeMount() {
    this.setVideoWidth();
  },
  methods: {
    content(text) {
      if (!text) return;

      return this.$md.render(text);
    },
    setVideoWidth() {
      const contentWidth = window.innerWidth;
      this.width = contentWidth < 768 ? contentWidth - 50 : contentWidth / 2;
      this.height = Math.round(this.width * 0.5625);
    },

    videoID(url) {
      return getIdFromURL(url);
    },
  },
};
</script>
