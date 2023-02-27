<template>
  <section v-if="!isLoading" class="flex flex-col justify-center" :style="{ contain: 'paint'}">
    <header id="header">
      <SharedBanner
        :style="!menuDisplay && { transform: 'translateX(' + translateY + 'px)' }"
        class="overflow-hidden"
        :menus="enabledMenu"
        @reset-menu="resetHome"
        @toggle-menu="setMenu"
        @navigate="navigateTo"/>
      <IntroductionModal
        id="modal"
        v-if="isOpen('Gallery')"
        :display-modal="displayModal"
        @close-modal="displayModal = false"
        @toggle-menu="setMenu"/>
    </header>
    <main>
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
  </section>
</template>

<script>
import ContactPage from "../components/pages/ContactPage.vue"
import Footer from "../components/shared/PageFooter.vue"
import IntroductionModal from "../components/shared/IntroductionModal.vue"
import MobileMenu from "../components/partials/MobileMenu.vue"
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
      translateY: 0
    }
  },
  components: {
    ContactPage,
    Footer,
    IntroductionModal,
    MobileMenu,
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
    menuDisplay() {
      return this.enabledMenu.length === 3;
    },
  },
  async mounted() {
    await this.fetchPhotos();
    window.addEventListener('scroll', this.handleScroll);
    this.bannerPhotos = this.photosData;
    this.isLoading = false;
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    ...mapActions({ fetchPhotos: 'banner/fetch' }),

    handleScroll() {
      this.translateY = window.scrollY / 2; // You can adjust the division value to control the speed of the translation
    },
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
    setMenu(payload) {
      if (payload.direction === 'rewind') return this.bannerPhotos.forEach(menu => menu.index === 1 ? menu.enabled = true : menu.enabled = false);

      const direction = payload.direction === 'right' ? payload.index + 1 : payload.index - 1;
      this.bannerPhotos.forEach(menu => menu.index === direction ? menu.enabled = true : menu.enabled = false)
    },
  },
};
</script>
