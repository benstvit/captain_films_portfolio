<template>
  <div v-if="!isLoading" class="flex flex-col h-screen">
    <header id="header">
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
      isLoading: true,
      displayModal: '',
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
      this.scrollToTop()
    },
    reset() {
      this.bannerPhotos.forEach(photo => photo.enabled = false);
    },
    resetHome() {
      this.activeSubmenu = {};
      this.bannerPhotos.forEach(photo => photo.enabled = true);
    },
    scrollToTop() {
      const header = document.getElementById('header');
      setTimeout(() => {
        header.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    },
    toggleMenu(payload) {
      console.log(payload);
      const direction = payload.direction === 'right' ? payload.index + 1 : payload.index - 1;
      if (payload.direction === 'rewind') this.bannerPhotos.find(menu => menu.index === 1).enabled = true;
      const test = this.bannerPhotos.map(photo => photo.index === direction ? ({...photo, enabled: true}) : ({...photo, enabled: false}));
      this.bannerPhotos = test;
      // this.bannerPhotos.forEach(photo => photo.index === direction ? photo.enabled = true : photo.enabled = false);
    }
  },
  async mounted() {
    await this.fetchPhotos();
    this.bannerPhotos = this.photosData;
    this.isLoading = false;
  },
};
</script>
