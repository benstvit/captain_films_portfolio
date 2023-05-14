<template>
  <div class="flex flex-col items-center w-full px-8 md:px-40">
    <CaptainFilmsLogoBlog :menu-display="false" />
    <div
      class="flex flex-row items-center w-full m-2 text-sm md:text-base uppercase"
      :class="customClass">
      <nuxt-link
        to="/"
        class="font-captainlight px-4 hover:cursor-pointer"
      >
        // <span class="mx-1 opacity-90 hover:opacity-100 hover:text-teal-600">Home</span>
      </nuxt-link>
      <nuxt-link
        v-if="onPostPage"
        to="/blog"
        class="font-captainlight px-4 hover:cursor-pointer"
      >
        <span class="mx-1 opacity-90 hover:opacity-100 hover:text-teal-600">Retour au blog</span>
      </nuxt-link>
      <BlogFilter v-if="!onPostPage" />
    </div>
  </div>
</template>

<script>
import BlogFilter from "./BlogFilter.vue"
import CaptainFilmsLogoBlog from "../../partials/CaptainFilmsLogoBlog.vue";
export default {
  name: "blog-navbar",
  components: {
    BlogFilter,
    CaptainFilmsLogoBlog,
  },
  computed: {
    onPostPage() {
      return this.$route.params.post ? true : false;
    },
    customClass() {
      return this.onPostPage ? "justify-center" : "justify-start"
    }
  }

};
</script>
