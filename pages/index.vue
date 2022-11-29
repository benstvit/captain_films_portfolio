<template>
  <main>
    <SharedBanner
      :photos="photos"
      :musicOpen="musicOpen"
      :photoOpen="photoOpen"
      :webOpen="webOpen"
      @reset-menu="resetMenu"
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

import { mapState, mapActions } from 'vuex';

export default {
  name: "HomePage",
  data() {
    return {
      photos: null,
      photoOpen: true,
      musicOpen: true,
      webOpen: true,
    }
  },
  components: {
    NavBar,
    SharedBanner,
  },
  computed: {
    ...mapState('banner', { photosData: 'data'}),
  },
  methods: {
    ...mapActions({ fetchPhotos: 'banner/fetch' }),

    reset() {
      this.photoOpen = false;
      this.musicOpen = false;
      this.webOpen = false
    },
    resetMenu() {
      this.photos.forEach(photo => photo.enabled = true);
    },
    toggleNav(event) {
      this.reset();
      if (event.type === 'photo') this.photoOpen = true;

      event.type === 'music' ? this.musicOpen = true : this.webOpen = true;
    }
  },
  async mounted() {
    await this.fetchPhotos();
    this.photos = this.photosData
  },
};
</script>
