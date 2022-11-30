<template>
  <main v-show="isLoaded">
    <SharedBanner
      :photos="bannerPhotos"
      @reset-menu="resetMenu"/>
    <NavBar
      v-if="activeMenu"
      :active-menu="activeMenu"
      @active-submenu="setActiveSubmenu" />
    <PhotoGallery
      v-if="activeSubmenu.title"
      :active="activeSubmenu"
    />
  </main>
</template>

<script>
import NavBar from "../components/shared/NavBar.vue";
import PhotoGallery from "../components/photography/PhotoGallery.vue";
import SharedBanner from "../components/shared/SharedBanner.vue";

import { mapState, mapActions } from 'vuex';

export default {
  name: "HomePage",
  data() {
    return {
      activeSubmenu: {},
      bannerPhotos: null,
      isLoaded: false,
    }
  },
  components: {
    NavBar,
    PhotoGallery,
    SharedBanner,
  },
  computed: {
    ...mapState('banner', { photosData: 'data'}),

    activeMenu() {
      if (!this.bannerPhotos) return;
      const enabled = this.bannerPhotos.filter(photo => photo.enabled);
      return enabled.length === 1 ? enabled : null;
    }
  },
  methods: {
    ...mapActions({ fetchPhotos: 'banner/fetch' }),

    setActiveSubmenu(event) {
      this.activeSubmenu = event
    },
    reset() {
      this.photoOpen = false;
      this.musicOpen = false;
      this.webOpen = false
    },
    resetMenu() {
      this.bannerPhotos.forEach(photo => photo.enabled = true);
    },
  },
  async mounted() {
    await this.fetchPhotos();
    this.bannerPhotos = this.photosData
    this.isLoaded = true;
  },
};
</script>
