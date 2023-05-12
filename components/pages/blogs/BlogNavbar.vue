<template>
  <div class="flex flex-col items-center">
    <CaptainFilmsLogo :menu-display="false" />
    <div class="w-full m-2">
      <nuxt-link
        to="/"
        class="font-captainlight self-start p-8 mx-12 hover:cursor-pointer"
      >
        // <span class="mx-1 opacity-90 hover:opacity-100 hover:animate-pulse">Back</span>
      </nuxt-link>
      <nuxt-link
        to="#"
        class="font-captainlight self-start p-4 mx-12 hover:cursor-pointer"
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
};
</script>
