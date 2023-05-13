<template>
  <div class="flex flex-col items-center w-full px-8 md:px-40">
    <CaptainFilmsLogo :menu-display="false" />
    <div
      class="flex flex-row items-center w-full m-2 text-sm md:text-base"
      :class="customClass">
      <nuxt-link
        to="/"
        class="font-captainlight self-start px-4 hover:cursor-pointer"
      >
        // <span class="mx-1 opacity-90 hover:opacity-100 hover:text-teal-600">Back to homepage</span>
      </nuxt-link>
      <nuxt-link
        v-if="this.$route.params.post"
        to="/blog"
        class="font-captainlight self-start px-4 hover:cursor-pointer"
      >
        <span class="mx-1 opacity-90 hover:opacity-100 hover:text-teal-600">Back to blog</span>
      </nuxt-link>
      <nuxt-link
        v-if="this.$route.path === '/blog'"
        to="#"
        class="font-captainlight self-start px-4 hover:cursor-pointer"
      >
        <span class="mx-1 opacity-90 hover:opacity-100 hover:animate-pulse">Filter by...</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import CaptainFilmsLogo from "../../partials/CaptainFilmsLogo.vue";
export default {
  name: "blog-navbar",
  components: {
    CaptainFilmsLogo,
  },
  computed: {
    customClass() {
      return this.$route.params.post ? "justify-center" : "justify-start"
    }
  }

};
</script>
