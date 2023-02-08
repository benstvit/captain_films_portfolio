<template>
  <div v-show="isLoaded" class="flex flex-col h-screen">
    <header>
      <SharedBanner
        :menus="enabledMenu"
        @reset-menu="resetHome"
        @toggle-menu="toggleMenu"/>
      <IntroductionModal
        id="modal"
        v-if="isOpen('Gallery')"
        :display-modal="displayModal"
        @close-modal="displayModal = false"
        @toggle-menu="toggleMenu"/>
    </header>
    <main class="flex-grow">
      <PhotographyPage
        v-if="isOpen('Gallery')"
        :photos="bannerPhotos"/>
      <ShowRoomPage
        v-if="isOpen('Showroom')" />
      <ContactPage
        v-if="isOpen('Contact me | Order your pic')" />
    </main>
    <footer>
      <Footer
        @navigate="navigateTo"
        :active-page="enabledMenu"
        v-if="activeMenu"/>
    </footer>
  </div>
</template>

<script>
import ContactPage from "../components/pages/ContactPage.vue"
import Footer from "../components/shared/PageFooter.vue"
import IntroductionModal from "../components/shared/IntroductionModal.vue"
import PhotographyPage from "../components/pages/PhotographyPage.vue";
import SharedBanner from "../components/shared/menu/SharedBanner.vue";
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
    ContactPage,
    Footer,
    IntroductionModal,
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

    isOpen(pageTitle) {
      if (!this.activeMenu) return null;

      return this.activeMenu[0].title === pageTitle
    },
    navigateTo(payload) {
      if (payload === 'Home') return this.resetHome();

      this.reset()
      this.bannerPhotos.forEach(photo => photo.title === payload ? photo.enabled = true : photo.enabled = false);
    },
    reset() {
      this.bannerPhotos.forEach(photo => photo.enabled = false);
    },
    resetHome() {
      this.activeSubmenu = {};
      this.bannerPhotos.forEach(photo => photo.enabled = true);
    },
    toggleMenu(payload) {
      const direction = payload.direction === 'right' ? payload.index + 1 : payload.index - 1;
      this.reset();
      if (payload === 'rewind') this.bannerPhotos.find(menu => menu.index === 1).enabled = true;
      this.bannerPhotos.forEach(photo => photo.index === direction ? photo.enabled = true : photo.enabled = false);
      // this.bannerPhotos.find(menu => menu.index === (payload.index === 3 && payload.direction === 'right' ? 1 : direction)).enabled = true;
    }
  },
  async mounted() {
    await this.fetchPhotos();
    this.bannerPhotos = this.photosData
    this.isLoaded = true;
  },
};
</script>
