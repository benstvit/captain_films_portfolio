<template>
  <main>
    <SharedBanner
      :musicOpen="musicOpen"
      :photoOpen="photoOpen"
      :webOpen="webOpen"
      @toggle-nav="toggleNav" />
    <!-- <NavBar
      :musicOpen="musicOpen"
      :photoOpen="photoOpen"
      :webOpen="webOpen" /> -->
  </main>
</template>

<script>
import NavBar from "../components/shared/NavBar.vue";
import SharedBanner from "../components/shared/SharedBanner.vue";

export default {
  name: "HomePage",
  data() {
    return {
      photoOpen: false,
      musicOpen: false,
      webOpen: false,
    }
  },
  components: {
    NavBar,
    SharedBanner,
  },
  methods: {
    reset() {
      this.photoOpen = false;
      this.musicOpen = false;
      this.webOpen = false
    },
    toggleNav(event) {
      console.log(event);
      this.reset();
      if (event.type === 'photo') this.photoOpen = true;
      event.type === 'music' ? this.musicOpen = true : this.webOpen = false;
    }
  }
};
</script>
