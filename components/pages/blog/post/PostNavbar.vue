<template>
  <div
    class="w-full flex flex-nowrap justify-between items-center m-2 px-1 font-captainbold text-[0.6rem] md:text-sm lg:text-base"
  >
    <div
      class="flex justify-between items-center gap-1 md:gap-2 hover:cursor-w-resize hover:underline opacity-90 hover:opacity-100"
      :class="{'visible': displayLeftArrow, 'invisible': !displayLeftArrow }"
      @click="navigate('previous')"
    >
      <LeftArrowSvg />
      <p>{{ displayNavigation("left") }}</p>
    </div>
    <div
      class="flex justify-between items-center gap-1 md:gap-2 hover:cursor-e-resize hover:underline opacity-90 hover:opacity-100"
      :class="displayRightArrow ? 'visible' : 'invisible'"
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
      currentPostIndex: "",
      displayLeftArrow: true,
      displayRightArrow: true,
    };
  },
  components: {
    LeftArrowSvg,
    RightArrowSvg,
  },
  props: {
    isScrolling: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
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
      this.$router.push({path: `/blog/posts/${post.slug}`});
    },
  },
  created() {
    this.currentPostIndex = this.posts.findIndex(
      (post) => post.slug === this.$route.params.post
    );
  },
};
</script>
