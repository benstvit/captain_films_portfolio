<template>
  <section class="text-justify">
    <p class="test py-6 italic" v-html="content(post.introduction)"></p>
    <viewer v-if="images.length">
      <div v-for="(image, index) in images" :key="image.title">
        <nuxt-img
          preload
          loading="lazy"
          quality="40"
          format="webp"
          class="w-fit mx-auto max-h-screen my-4 hover:cursor-zoom-in rounded-sm"
          :alt="image.title"
          :src="image.url"
          data-aos-easing="ease-in-out"
          data-aos="fade-in"
          data-aos-duration="500"
        />
        <p
          class="self-start font-cormorant font-bold text-base md:text-lg italic pt-6 pb-2 overflow-visible"
          :class="post[`question${index + 1}`] ? 'block' : 'hidden'"
        >
          {{ post[`question${index + 1}`] }}
        </p>
        <p
          :class="post[`paragraph${index + 1}`] ? 'py-2 block' : 'hidden'"
          v-html="content(post[`paragraph${index + 1}`])"
        ></p>
      </div>
    </viewer>
      <div v-for="number in range(images.length, 10)" :key="number">
        <p
          class="self-start font-cormorant font-bold text-base md:text-xl italic pt-6 pb-2 overflow-visible"
          :class="post[`question${number}`] ? 'block' : 'hidden'"
        >
          {{ post[`question${number}`] }}
        </p>
        <p
          :class="post[`paragraph${number}`] ? 'py-2 block' : 'hidden'"
          v-html="content(post[`paragraph${number}`])"
        ></p>
      </div>
    <SocialNetworksFooter :post="post" />
  </section>
</template>

<script>
import aos from "../../../../../mixins/aos";

import SocialNetworksFooter from "./SocialNetworksFooter.vue";

export default {
  name: "itinerance-format",
  mixins: [aos],
  components: {
    SocialNetworksFooter,
  },
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
  },
  methods: {
    content(text) {
      if (!text) return;

      return this.$md.render(text);
    },
    range(start, end) {
      return Array.from({ length: end - start + 1 }, (_, i) => start + (i + 1));
    },
  },
};
</script>
