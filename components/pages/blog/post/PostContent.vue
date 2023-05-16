<template>
  <div
    class="flex flex-col items-center justify-center h-auto gap-2 w-full px-4 md:px-0 mx-auto md:w-1/2 pt-0 md:pt-8 font-cormorant text-base md:text-lg text-justify"
  >
    <p class="py-4" v-html="content(post.introduction)"></p>

    <!-- <vue-youtube-embed :video-id="videoID(post.videoUrl)"></vue-youtube-embed> -->
    <div v-for="(num, index) in 4" :key="num">
      <nuxt-img
        v-if="images[index]"
        preload
        loading="lazy"
        quality="60"
        format="webp"
        class="w-full h-auto my-4"
        :alt="images[index].title"
        :src="images[index].url"
        data-aos-easing="ease-in"
        data-aos="fade-in"
        data-aos-duration="300"
      />
      <p :class="questionClass">{{ post[`question${num}`] }}</p>
      <p class="py-2" v-html="content(post[`paragraph${num}`])"></p>
    </div>
  </div>
</template>

<script>
import aos from "../../../../mixins/aos";

// import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'

export default {
  name: "post-content",
  mixins: [aos],
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    images() {
      return this.post.imagesCollection.items;
    },
    questionClass() {
      return "self-start font-cormorant font-bold text-base md:text-xl italic pt-6 overflow-visible";
    },
  },
  methods: {
    content(text) {
      if (!text) return;

      return this.$md.render(text);
    },
    // videoID(url) {
    //   console.log(getIdFromURL(url));
    //   return getIdFromURL(url);
    // }
  },
};
</script>
