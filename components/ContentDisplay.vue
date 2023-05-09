<template>
  <section id="header">
    <IntroductionModal
      id="modal"
      v-if="pageIndex === 1 && displayModal"
      @close-modal="displayModal = false"
      @toggle-menu="setMenu"
    />
    <SharedBanner
      id="banner"
      :style="{ transform: 'translateX(' + translateY + 'px)', opacity: bannerOpacity }"
      class="transition ease-out duration-300"
      :menus="selectedPage"
      @reset-menu="resetHome"
      @toggle-menu="setMenu"/>
    <PageContent :page-index="pageIndex" />
    <Footer
      :selected-page="selectedPage"
      @navigate="navigateTo"
      @reset-translateY="resetTranslateY"
    />
  </section>
</template>

<script>
import Footer from "./shared/PageFooter.vue";
import IntroductionModal from "./shared/IntroductionModal.vue";
import PageContent from "./pages/PageContent.vue";
import SharedBanner from "./shared/menu/SharedBanner.vue";

export default {
  name: "content-display",
  components: {
    Footer,
    IntroductionModal,
    PageContent,
    SharedBanner
  },
  data() {
    return {
      bannerHeight: 0,
      bannerOpacity: 100,
      displayModal: true,
      translateY: 0
    }
  },
  props: {
    bannerPhotos: {
      type: Array,
      default: () => []
    },
  },
  computed: {
    pageIndex() {
      if (!this.selectedPage) return;

      return this.selectedPage[0].index;
    },
    selectedPage() {
      // if (!this.bannerPhotos) return;

      return this.bannerPhotos.filter((photo) => photo.enabled);
    }
  },
  watch: {
    bannerPhotos() {
      console.log('hello');
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.bannerHeight = document.getElementById('banner').offsetHeight;
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    navigateTo(payload) {
      if (payload === 'Home') return this.resetHome();

      this.reset()
      this.bannerPhotos.forEach(photo => photo.title === payload ? photo.enabled = true : photo.enabled = false);
      this.scrollToTop()
    },
    reset() {
      this.$emit('reset');
    },
    resetHome() {
      this.$emit('reset-home');
    },
    setMenu(payload) {
      this.reset();
      this.$emit('set-menu', payload)
    },
    // Scroll behavior
    handleScroll() {
      if (document.body.offsetHeight > (3 * this.bannerHeight)) {
        this.translateY = window.scrollY / 2; // You can adjust the division value to control the speed of the translation
        const opacity = Math.round((this.translateY / 300) * 10) / 10;
        this.bannerOpacity = 1 - opacity;
      }
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
  }
};
</script>
