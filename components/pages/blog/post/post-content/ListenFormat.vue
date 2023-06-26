<template>
  <section
    id="listen-content"
    class="flex flex-col items-center text-justify px-1 md:px-0 tracking-wide leading-normal md:leading-relaxed"
  >
    <div class="m-2 shadow-sm">
      <BandcampAudioPlayer
        v-if="displayBandCampPlayer"
        :album-id="post.albumId"
        :track-id="post.trackId"
      />
    </div>
    <p class="py-6 italic" v-html="content(post.introduction)"></p>

    <div
      v-if="post.videoUrl"
      class="my-4 shadow-md border-b-[9px] border-black bg-black rounded-lg"
    >
      <youtube
        class="rounded-lg hover:opacity-80 hover:shadow-lg hover:cursor-pointer border-2 border-black"
        :player-width="width"
        :player-height="height"
        :video-id="videoID(post.videoUrl)"
      ></youtube>
    </div>

    <div v-for="num in 8" :key="num">
      <p
        class="self-start font-cormorant font-bold text-base md:text-xl italic pt-6 pb-2 overflow-visible"
        :class="post[`question${num}`] ? 'block' : 'hidden'"
      >
        {{ post[`question${num}`] }}
      </p>
      <p
        :class="post[`paragraph${num}`] ? 'py-2 block' : 'hidden'"
        v-html="content(post[`paragraph${num}`])"
      ></p>
    </div>
    <div class="m-4 py-4">
      <BandcampAudioPlayer
        v-if="displayBandCampPlayer"
        :album-id="post.albumId"
      />
    </div>
    <SocialNetworksFooter :post="post" />
  </section>
</template>

<script>
import { getIdFromURL } from "vue-youtube-embed";

import BandcampAudioPlayer from "../../../../partials/BandcampAudioPlayer.vue";
import SocialNetworksFooter from "./SocialNetworksFooter.vue";

export default {
  name: "listen-format",
  components: {
    BandcampAudioPlayer,
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
  mounted() {
    console.log(this.post);
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
