<template>
  <div
    class="relative sticky -top-10 z-10 bg-white flex flex-col items-center w-full p-6 md:px-32 lg:px-40"
    :class="{'drop-shadow-md mb-6 pb-6': onPostPage, 'mb-0 pb-2': onIndexPage }"
  >
    <BlogSearchBar v-if="onIndexPage" class="hidden lg:block " />
    <CaptainFilmsLogoBlog class="block lg:hidden col-span-2" />
    <div
      class="lg:grid lg:grid-cols-6 flex items-end w-full m-2 text-xs md:text-sm md:text-base"
      :class="customClass"
    >
      <BlogButton class="col-span-2" menu-name="home" :custom-size="customSizeBlogButton" />
      <CaptainFilmsLogoBlog class="hidden lg:block col-span-2" />
      <BlogButton
        v-if="onPostPage"
        class="col-span-2 "
        menu-name="blog"
        :custom-size="customSizeBlogButton"
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
  computed: {
    customClass() {
      return this.onPostPage
        ? "justify-around"
        : "justify-between lg:justify-around border-black border-b-2 pb-4 lg:pb-8";
    },
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
