<template>
  <div
    class="flex flex-col items-center justify-center h-auto gap-2 w-full px-4 md:px-0 mx-auto md:w-1/2 pt-0 md:pt-8 font-cormorant text-base md:text-lg text-justify"
  >
    <p class="test py-4" v-html="content(post.introduction)"></p>

    <youtube
      v-if="post.videoUrl"
      class="border-1 border-black shadow-md my-4"
      :video-id="videoID(post.videoUrl)"
    ></youtube>

    <viewer>
      <div v-for="(image, index) in images" :key="image.title">
        <nuxt-img
          preload
          loading="lazy"
          quality="40"
          format="webp"
          class="w-full h-auto my-4 hover:cursor-zoom-in"
          :alt="image.title"
          :src="image.url"
          data-aos-easing="ease-in-out"
          data-aos="fade-in"
          data-aos-duration="500"
        />
        <p :class="questionClass">{{ post[`question${index + 1}`] }}</p>
        <p class="py-2" v-html="content(post[`paragraph${index + 1}`])"></p>
      </div>
    </viewer>
    <div class="divide-y-8 divide-gray-100" />
  </div>
</template>

<script>
import aos from "../../../../mixins/aos";
import { getIdFromURL } from "vue-youtube-embed";

export default {
  name: "post-content",
  mixins: [aos],
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    document.querySelectorAll("p > a").forEach((elem) => {
      elem.setAttribute("target", "_blank");
    });
  },
  computed: {
    images() {
      return this.post.imagesCollection.items.filter(image => image.description === '');
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
    videoID(url) {
      return getIdFromURL(url);
    },
  },
};
</script>
