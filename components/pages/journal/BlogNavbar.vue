<template>
  <div
    class="relative sticky -top-1 md:-top-10 z-10 flex flex-col items-center w-full p-3 md:pt-6 md:px-32 lg:px-40"
    :class="isScrolling ? 'bg-white drop-shadow-sm opacity-90 transition ease-in-out duration-1000' : 'opacity-100 transition ease-in-out duration-300'"
  >
    <BlogSearchBar v-if="onIndexPage" class="block" />
    <CaptainFilmsLogoBlog class="block lg:hidden col-span-2" />
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
      <BlogButton
        v-if="onPostPage"
        class="col-span-2"
        menu-name="journal"
        :post-class="true"
      />
      <BlogFilter v-if="onIndexPage" class="col-span-2"  />
    </div>
    <InfiniteTextScrollBanner v-show="!isScrolling" :scrolling-text="scrollingText" class="transition ease-in-out duration-300" v-if="onIndexPage" />
  </div>
</template>

<script>
import BlogButton from "../../UI/BlogButton.vue";
import BlogFilter from "./BlogFilter.vue";
import BlogSearchBar from "../../UI/BlogSearchBar.vue";
import CaptainFilmsLogoBlog from "../../partials/CaptainFilmsLogoBlog.vue";
import InfiniteTextScrollBanner from "../../UI/InfiniteTextScrollBanner.vue";

export default {
  name: "blog-navbar",
  data() {
    return {
      scrollingText: "💌 Hello ! Clique-moi dessus pour t'abonner 💌",
    }
  },
  components: {
    BlogButton,
    BlogFilter,
    BlogSearchBar,
    CaptainFilmsLogoBlog,
    InfiniteTextScrollBanner,
  },
  props: {
    posts: {
      type: Array,
      default: () => []
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
