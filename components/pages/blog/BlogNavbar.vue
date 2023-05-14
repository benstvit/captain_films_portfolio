<template>
  <div class="flex flex-col items-center w-full px-8 md:px-40">
    <CaptainFilmsLogoBlog :menu-display="false" />
    <div
      class="flex flex-row items-center w-full m-2 text-sm md:text-base"
      :class="customClass">
      <nuxt-link
        to="/"
        class="font-captainlight self-start px-4 hover:cursor-pointer"
      >
        // <span class="mx-1 opacity-90 hover:opacity-100 hover:text-teal-600">Home</span>
      </nuxt-link>
      <nuxt-link
        v-if="this.$route.params.post"
        to="/blog"
        class="font-captainlight self-start px-4 hover:cursor-pointer"
      >
        <span class="mx-1 opacity-90 hover:opacity-100 hover:text-teal-600">Retour au blog</span>
      </nuxt-link>
      <BlogFilter />
      <!-- <nuxt-link
        v-if="this.$route.path === '/blog'"
        to="#"
        class="font-captainlight self-start px-4 hover:cursor-pointer"
      >
        <span class="mx-1 opacity-90 hover:opacity-100">Filtrer par contenu</span>
      </nuxt-link> -->
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
    customClass() {
      return this.$route.params.post ? "justify-center" : "justify-start"
    }
  }

};
</script>
