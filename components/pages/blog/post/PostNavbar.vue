<template>
  <div
    class="w-full flex flex-nowrap justify-between items-center mt-2 px-1 font-captainbold text-[0.6rem] md:text-sm"
  >
    <div
      class="flex justify-between items-center gap-1 md:gap-2 hover:cursor-w-resize hover:underline opacity-90 hover:opacity-100"
      v-if="displayLeftArrow"
      @click="navigate('previous')"
    >
      <LeftArrowSvg />
      <p>{{ displayNavigation("left") }}</p>
    </div>
    <div
      class="flex justify-between items-center gap-1 md:gap-2 hover:cursor-e-resize hover:underline opacity-90 hover:opacity-100"
      v-if="displayRightArrow"
      @click="navigate('next')"
    >
      <p>{{ displayNavigation("right") }}</p>
      <RightArrowSvg />
    </div>
  </div>
</template>

<script>
import LeftArrowSvg from "../../../svg/LeftArrowSvg.vue";
import RightArrowSvg from "../../../svg/RightArrowSvg.vue";

export default {
  name: "post-navbar",
  data() {
    return {
      displayLeftArrow: false,
      displayRightArrow: false,
    };
  },
  components: {
    LeftArrowSvg,
    RightArrowSvg,
  },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    currentPostIndex() {
      return this.posts.findIndex(post => post.slug === this.$route.params.slug);
    },
    displayNavigation(direction) {
      if (direction === "left" && this.currentPostIndex === 0) return (this.displayLeftArrow = false);
      if (direction === "right" && this.currentPostIndex === this.posts.length - 1) return (this.displayRightArrow = false);
      const regexp = /:(.*)/;
      const left = this.posts[this.currentPostIndex - 1]?.title.match(regexp)[1];
      const right = this.posts[this.currentPostIndex + 1]?.title.match(regexp)[1]
      return direction === "left" ? `Précédent: ${left}`  : `Suivant: ${right}`;
    },
    navigate(direction) {
      const index = direction === 'next' ? this.currentPostIndex + 1 : this.currentPostIndex - 1;
      const post = this.posts[index];
      this.$router.push({path: `/blog/${post.slug}`});
    },
  },
};
</script>
