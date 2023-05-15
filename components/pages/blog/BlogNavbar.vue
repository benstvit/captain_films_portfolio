<template>
  <div class="flex flex-col items-center w-full p-6 md:px-40">
    <!-- <CaptainFilmsLogoBlog v-if="!onPostPage" :menu-display="false" /> -->
    <div
      class="flex items-end w-full m-2 text-xs md:text-sm md:text-base"
      :class="customClass"
    >
        <BlogButton menu-name="home" :custom-size="customSizeBlogButton" />
        <CaptainFilmsLogoBlog :menu-display="false" />
        <BlogButton v-if='onPostPage' :menu-name="blog" :custom-size="customSizeBlogButton" />
      <BlogFilter class="" v-if="!onPostPage" />
    </div>
  </div>
</template>

<script>
import BlogButton from '../../UI/BlogButton.vue';
import BlogFilter from "./BlogFilter.vue";
import CaptainFilmsLogoBlog from "../../partials/CaptainFilmsLogoBlog.vue";

export default {
  name: "blog-navbar",
  components: {
    BlogButton,
    BlogFilter,
    CaptainFilmsLogoBlog,
  },
  computed: {
    customSizeBlogButton() {
      return 'w-12 h-12';
    },
    onPostPage() {
      return this.$route.params.post ? true : false;
    },
    customClass() {
      return this.onPostPage ? "justify-around" : "justify-between";
    },
  },
};
</script>
