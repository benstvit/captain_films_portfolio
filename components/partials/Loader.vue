<template>
  <div class="flex justify-center items-center w-screen h-screen">
    <CaptainFilmsLogo
      class="w-52 h-auto animate-pulse"
      :menu-display="menuDisplay"
      :loader="loader"
    />
  </div>
</template>

<script>
import CaptainFilmsLogo from "./CaptainFilmsLogo.vue";

export default {
  name: "loader",
  components: {
    CaptainFilmsLogo,
  },
  props: {
    menuDisplay: {
      type: Boolean,
      default: false,
    },
    loader: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
