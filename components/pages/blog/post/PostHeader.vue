<template>
  <div
    class="grid grid-cols-12 flex justify-center items-center sm:gap-4 md:gap-8 xl:gap-4 mx-4 md:mx-36 md:pt-6"
  >
    <div
      class="sm:col-span-2 sm:flex sm:justify-start sm:items-center gap-1 hover:cursor-pointer opacity-80 hover:opacity-100"
      :class="
        displayLeftArrow
          ? 'hidden sm:block sm:visible'
          : 'hidden sm:block sm:invisible'
      "
      @click="navigate('previous')"
    >
      <LeftArrowSvg :stroke="svgStroke" />
      <p class="font-cormorant font-bold text-xs md:text-sm lg:text-base">
        {{ displayNavigation("left") }}
      </p>
    </div>
    <div
      class="col-span-12 sm:col-span-8 relative flex flex-col items-start font-cormorant font-light text-sm"
    >
      <h1
        class="absolute top-2 md:top-8 right-2 left-2 mx-auto font-cormorant font-semibold p-4 text-xl md:text-2xl lg:text-4xl text-center text-white"
      >
        {{ noPunctuationTitle }}
      </h1>
      <nuxt-img
        v-show="imageLoaded"
        @load="imageLoaded = true"
        preload
        quality="60"
        format="webp"
        class="border-2 border-black w-fit object-cover md:w-full h-auto lg:h-[70vh]"
        :alt="post.thumbnail.title"
        :src="post.thumbnail.url"
      />
      <div
        v-show="!imageLoaded"
        class="bg-gray-100 animate-pulse w-fit object-cover md:w-full h-auto lg:h-[70vh]"
      />
      <div
        class="flex flex-row justify-start items-center gap-2 md:py-2 w-full text-[0.6rem] md:text-xs lg:text-base"
      >
        <p>{{ date }}</p>
        <p v-if="post.tag" class="md:block hidden">|</p>
        <p class="md:block hidden">Tag: {{ post.tag }}</p>
        <p v-if="post.location">|</p>
        <p>{{ post.location }}</p>
        <p class="ml-auto">📸 {{ post.photoCredits }}</p>
      </div>
    </div>
    <div
      class="sm:col-span-2 sm:flex sm:justify-end sm:items-center gap-1 hover:cursor-pointer opacity-80 hover:opacity-100"
      :class="
        displayRightArrow
          ? 'hidden sm:block sm:visible'
          : 'hidden sm:block sm:invisible'
      "
      @click="navigate('next')"
    >
      <p class="font-cormorant font-bold text-xs md:text-sm lg:text-base">
        {{ displayNavigation("right") }}
      </p>
      <RightArrowSvg :stroke="svgStroke" />
    </div>
  </div>
</template>

<script>
import LeftArrowSvg from "../../../svg/LeftArrowSvg.vue";
import RightArrowSvg from "../../../svg/RightArrowSvg.vue";

export default {
  name: "post-header",
  components: {
    LeftArrowSvg,
    RightArrowSvg,
  },
  data() {
    return {
      displayLeftArrow: false,
      displayRightArrow: false,
      imageLoaded: false,
    };
  },
  props: {
    post: {
      type: Object,
      default: () => {},
    },
    posts: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    currentPostIndex() {
      if (!this.posts.length) return;
      return this.posts.findIndex(
        (post) => post.slug === this.$route.params.slug
      );
    },
    date() {
      const date = new Date(this.post.date);
      return date.toLocaleDateString();
    },
    noPunctuationTitle() {
      return (
        this.post.title.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim() + "."
      );
    },
    svgStroke() {
      if (this.post.tag === "ENTRE DEUX VERRES") return "#38bdf8";

      return this.post.tag === "POUR LES MIRETTES" ? "#fbbf24" : "#f87171";
    },
  },
  mounted() {
    this.setDisplayStatus();
  },
  methods: {
    displayNavigation(direction) {
      if (!this.posts.length) return;
      const previousTitle = this.posts[this.currentPostIndex - 1]?.title;
      const nextTitle = this.posts[this.currentPostIndex + 1]?.title;
      if (!previousTitle) this.displayLeftArrow = false;
      if (!nextTitle) this.displayRightArrow = false;
      return direction === "left" ? previousTitle : nextTitle;
    },
    navigate(direction) {
      const index =
        direction === "next"
          ? this.currentPostIndex + 1
          : this.currentPostIndex - 1;
      const post = this.posts[index];
      this.$router.push({ path: `/blog/${post.slug}` });
    },
    setDisplayStatus() {
      this.displayLeftArrow = this.currentPostIndex === 0 ? false : true;
      this.displayRightArrow =
        this.currentPostIndex === this.posts.length - 1 ? false : true;
    },
  },
};
</script>
