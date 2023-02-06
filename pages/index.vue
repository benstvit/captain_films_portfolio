<template>
  <main
    v-show="isLoaded">
    <IntroductionModal
      v-if="isOpen('Gallery')"
      :display-modal="displayModal"
      @close-modal="displayModal = false"
      @toggle-menu="toggleMenu"/>
    <SharedBanner
      :menus="enabledMenu"
      @reset-menu="resetHome"
      @toggle-menu="toggleMenu"/>
    <PhotographyPage
      v-if="isOpen('Gallery')"
      :photos="bannerPhotos"/>
    <ShowRoomPage
      v-if="isOpen('Showroom')" />
    <ContactPage
      v-if="isOpen('Contact me | Order your pic')" />
  </main>
</template>

<script>
import ContactPage from "../components/pages/ContactPage.vue"
import IntroductionModal from "../components/shared/IntroductionModal.vue"
import PhotographyPage from "../components/pages/PhotographyPage.vue";
import SharedBanner from "../components/shared/SharedBanner.vue";
import ShowRoomPage from "../components/pages/ShowRoomPage.vue";

import { mapState, mapActions } from 'vuex';

export default {
  name: "HomePage",
  data() {
    return {
      bannerPhotos: null,
      isLoaded: false,
      displayModal: ''
    }
  },
  components: {
    IntroductionModal,
    ContactPage,
    PhotographyPage,
    SharedBanner,
    ShowRoomPage
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
  },
  methods: {
    ...mapActions({ fetchPhotos: 'banner/fetch' }),

    handleClickOutside() {
      if (this.displayModal) this.displayModal = false;
    },
    isOpen(pageTitle) {
      if (!this.activeMenu) return null;

      return this.activeMenu[0].title === pageTitle
    },
    reset() {
      this.bannerPhotos.forEach(photo => photo.enabled = false);
    },
    resetHome() {
      this.activeSubmenu = {};
      this.bannerPhotos.forEach(photo => photo.enabled = true);
    },
    toggleMenu(payload) {
      this.reset();
      const direction = payload.direction === 'right' ? payload.index + 1 : payload.index - 1;
      this.bannerPhotos.find(menu => menu.index === (payload.index === 3 && payload.direction === 'right' ? 1 : direction)).enabled = true;
    }
  },
  async mounted() {
    await this.fetchPhotos();
    this.bannerPhotos = this.photosData
    this.isLoaded = true;
  },
};
</script>
