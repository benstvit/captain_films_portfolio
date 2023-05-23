<template>
  <div
    class="relative sticky -top-1 md:-top-10 z-10 flex flex-col items-center w-full p-3 md:pt-6 md:px-32 lg:px-40"
    :class="isScrolling ? 'bg-white opacity-90 transition ease-in-out duration-1000' : 'opacity-100 transition ease-in-out duration-300'
    "
  >
    <BlogSearchBar v-if="onIndexPage" class="hidden lg:block" />
    <CaptainFilmsLogoBlog class="block lg:hidden col-span-2" />
    <div
      class="border-black border-b-2 pb-4 lg:pb-8 lg:grid lg:grid-cols-6 flex items-end w-full m-2 text-xs md:text-sm md:text-base"
      :class="{'justify-around': this.onPostPage, 'justify-between lg:justify-around': !this.onPostPage,'border-none': this.isScrolling }"
    >
      <BlogButton
        class="col-span-2"
        menu-name="home"
        :post-class="customSizeBlogButton"
      />
      <CaptainFilmsLogoBlog class="hidden lg:block col-span-2" />
      <BlogButton
        v-if="onPostPage"
        class="col-span-2"
        menu-name="blog"
        :post-class="customSizeBlogButton"
      />
      <BlogFilter class="col-span-2" v-if="onIndexPage" />
    </div>
  </div>
</template>

<script>
import BlogButton from "../../UI/BlogButton.vue";
import BlogFilter from "./BlogFilter.vue";
import BlogSearchBar from "../../UI/BlogSearchBar.vue";
import CaptainFilmsLogoBlog from "../../partials/CaptainFilmsLogoBlog.vue";

export default {
  name: "blog-navbar",
  components: {
    BlogButton,
    BlogFilter,
    BlogSearchBar,
    CaptainFilmsLogoBlog,
  },
  props: {
    isScrolling: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    customSizeBlogButton() {
      return "w-12 h-12";
    },
    onIndexPage() {
      return !this.$route.params.post;
    },
    onPostPage() {
      return this.$route.params.post ? true : false;
    },
  },
};
</script>
