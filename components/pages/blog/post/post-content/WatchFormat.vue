<template>
  <section class="flex flex-col items-center text-justify">
    <p class="py-4" v-html="content(post.introduction)"></p>

    <div class="my-4 shadow-md border-b-[7px] border-black bg-black rounded-lg">
      <youtube
        v-if="post.videoUrl"
        class="rounded-lg hover:opacity-80 hover:shadow-lg hover:cursor-pointer border-2 border-black"
        :player-width="width"
        :player-height="height"
        :video-id="videoID(post.videoUrl)"
      ></youtube>
    </div>

    <div v-for="num in 8" :key="num">
      <p class="py-2" v-html="content(post[`paragraph${num}`])"></p>
    </div>
  </section>
</template>

<script>
import { getIdFromURL } from "vue-youtube-embed";

export default {
  name: "watch-format",
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
