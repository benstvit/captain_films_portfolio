<template>
  <section
    class="flex flex-col justify-center" :style="{ contain: 'paint'}"
    :class="isLoading && 'h-screen'">
    <header id="header">
      <CaptainFilmsLogo
        v-if="isLoading"
        class="mx-auto animate-pulse"
        :menu-display="false"
        :loader="true"/>
      <SharedBanner
        id="banner"
        v-else
        :style="!menuDisplay && { transform: 'translateX(' + translateY + 'px)', opacity: bannerOpacity }"
        class="transition ease-out duration-300"
        :menus="enabledMenu"
        @reset-menu="resetHome"
        @toggle-menu="setMenu"/>
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
        @reset-translateY="resetTranslateY"/>
      <ShowRoomPage
        v-if="isOpen('Showroom')"
        @reset-translateY="resetTranslateY"
        @toggle-menu="setMenu"/>
      <ContactPage
        v-if="isOpen('Contact me | Order your pic')" />
    </main>
    <footer>
      <Footer
        v-if="activeMenu"
        :active-page="enabledMenu"
        @navigate="navigateTo"
        @reset-translateY="resetTranslateY"/>
    </footer>
  </section>
</template>

<script>
import CaptainFilmsLogo from "../components/partials/CaptainFilmsLogo.vue"
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
      bannerHeight: null,
      bannerOpacity: 100,
      bannerPhotos: null,
      displayModal: '',
      isLoading: true,
      translateY: 0
    }
  },
  components: {
    CaptainFilmsLogo,
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
    setInterval(() => {
      this.isLoading = false;
    }, 3000);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    ...mapActions({ fetchPhotos: 'banner/fetch' }),

    handleScroll() {
      if (!this.bannerHeight) return this.bannerHeight = document.getElementById('banner').offsetHeight;
      if (document.body.offsetHeight > (3 * this.bannerHeight)) {
        this.translateY = window.scrollY / 2; // You can adjust the division value to control the speed of the translation
        const opacity = Math.round((this.translateY / 300) * 10) / 10;
        this.bannerOpacity = 1 - opacity;
      }
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
    resetTranslateY() {
      this.translateY = 0;
      this.bannerOpacity = 1;
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
