<template>
  <section>
    <p class="test py-4" v-html="content(post.introduction)"></p>

    <viewer v-if="images.length">
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
  </section>
</template>

<script>
import aos from "../../../../../mixins/aos";

export default {
  name: "interview-format",
  mixins: [aos],
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    images() {
      return this.post.imagesCollection.items.filter(
        (image) => image.description === ""
      );
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
  }
};
</script>
