<template>
  <CaptainFilmsLogo
    class="mx-auto animate-pulse"
    :menu-display="menuDisplay"
    :loader="loader"
  />
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
