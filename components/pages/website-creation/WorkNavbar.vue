<template>
  <div
    class="relative sticky -top-1 md:-top-10 z-10 flex flex-col items-center w-full p-3 md:pt-6 md:px-32 lg:px-40"
    :class="
      isScrolling
        ? 'bg-white drop-shadow-sm opacity-90 transition ease-in-out duration-1000'
        : 'opacity-100 transition ease-in-out duration-300'
    "
  >
<div
      class="border-black border-b pb-4 lg:pb-8 lg:grid lg:grid-cols-6 flex items-center lg:items-end  w-full text-xs md:text-sm md:text-base"
      :class="{'justify-around': this.onPostPage, 'justify-between lg:justify-around': !this.onPostPage,'border-none': this.isScrolling }"
    >
      <BlogButton
        class="col-span-2"
        menu-name="home"
        :post-class="true"
      />
      <CaptainFilmsLogoBlog class="hidden lg:block col-span-2" />
    </div>
    <InfiniteTextScrollBanner
      v-show="!isScrolling"
      :scrolling-text="scrollingText"
      class="transition ease-in-out duration-300"
      v-if="onIndexPage"
    />
  </div>
</template>

<script>
import BlogButton from "../../UI/BlogButton.vue"
import CaptainFilmsLogoBlog from "../../partials/CaptainFilmsLogoBlog.vue";
import InfiniteTextScrollBanner from "../../UI/InfiniteTextScrollBanner.vue";

export default {
  name: "work-navbar",
  components: {
    BlogButton,
    CaptainFilmsLogoBlog,
    InfiniteTextScrollBanner,
  },
  data() {
    return {
      scrollingText: "Voici un aperçu de mon travail en création de sites web",
    };
  },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
    isScrolling: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    onIndexPage() {
      return !this.$route.params.slug;
    },
    onPostPage() {
      return this.$route.params.slug;
    },
  },
};
</script>
