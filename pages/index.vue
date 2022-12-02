<template>
  <main v-show="isLoaded">
    <SharedBanner
      :menus="enabledMenu"
      @reset-menu="resetHome"
      @toggle-menu="toggleMenu"/>
    <NavBar
      v-if="activeMenu"
      :active-menu="activeMenu"
      @active-submenu="setActiveSubmenu" />
    <keep-alive>
      <PhotoGallery
        v-if="isPhotography"
        :active="activeSubmenu"
      />
    </keep-alive>
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
    SharedBanner
  },
  computed: {
    ...mapState('banner', { photosData: 'data'}),

    activeMenu() {
      if (!this.bannerPhotos) return;

      const enabled = this.bannerPhotos.filter(photo => photo.enabled);
      return enabled.length === 1 ? enabled : null;
    },
    enabledMenu() {
      if (!this.bannerPhotos) return;
      return this.bannerPhotos.filter(photo => photo.enabled);
    },
    isPhotography() {
      return this.activeSubmenu.menu === 'photo';
    },
  },
  methods: {
    ...mapActions({ fetchPhotos: 'banner/fetch' }),

    setActiveSubmenu(event) {
      this.activeSubmenu = event
    },
    reset() {
      this.bannerPhotos.forEach(photo => photo.enabled = false);
    },
    resetHome() {
      this.bannerPhotos.forEach(photo => photo.enabled = true);
    },
    toggleMenu(payload) {
      this.reset();
      const direction = payload.direction === 'right' ? payload.index + 1 : payload.index - 1;
      this.bannerPhotos.find(menu => menu.index === (payload.index === 4 ? 1 : direction)).enabled = true;
    }
  },
  async mounted() {
    await this.fetchPhotos();
    this.bannerPhotos = this.photosData
    this.isLoaded = true;
  },
};
</script>
