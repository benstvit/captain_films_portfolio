<template>
  <div
    class="w-full flex flex-nowrap justify-between items-center px-12 font-cormorant italic"
  >
    <div
      class="flex justify-between items-center gap-2 hover:cursor-pointer hover:underline opacity-90 hover:opacity-100 hover:font-bold"
      :class="displayLeftArrow ? 'visible' : 'invisible'"
      @click="navigate('previous')"
    >
      <LeftArrowSvg />
      <p>{{ displayNavigation("left") }}</p>
    </div>
    <div
      class="flex justify-between items-center gap-2 hover:cursor-pointer hover:underline opacity-90 hover:opacity-100 hover:font-bold"
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
    posts: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    displayNavigation(direction) {
      if (direction === "left" && this.currentPostIndex === 0) return (this.displayLeftArrow = false);
      if (direction === "right" && this.currentPostIndex === this.posts.length - 1) return (this.displayRightArrow = false);

      return direction === "left" ? this.posts[this.currentPostIndex - 1].title : this.posts[this.currentPostIndex + 1].title;
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
