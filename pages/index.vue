<template>
  <main>
    <SharedBanner
      :musicOpen="musicOpen"
      :photoOpen="photoOpen"
      :webOpen="webOpen"
      @toggleView="value" />
    <NavBar
      :musicOpen="musicOpen"
      :photoOpen="photoOpen"
      :webOpen="webOpen" />
  </main>
</template>

<script>
import NavBar from "../components/shared/NavBar.vue";
import SharedBanner from "../components/shared/SharedBanner.vue";

export default {
  name: "HomePage",
  data() {
    return {
      photoOpen: true,
      musicOpen: false,
      webOpen: false,
    }
  },
  components: {
    NavBar,
    SharedBanner,
  },
};
</script>
