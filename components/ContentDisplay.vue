<template>
  <section id="header">
    <IntroductionModal
      id="modal"
      v-if="pageIndex === 1 && displayModal"
      @close-modal="displayModal = false"
      @toggle-menu="setMenu"
    />
    <PageContent :page-index="pageIndex" />
    <Footer
      :active-page="activePage"
      @navigate="navigateTo"
      @reset-translateY="resetTranslateY"
    />
  </section>
</template>

<script>
import Footer from "./shared/PageFooter.vue";
import IntroductionModal from "./shared/IntroductionModal.vue";
import PageContent from "./pages/PageContent.vue";

export default {
  name: "content-display",
  components: {
    Footer,
    IntroductionModal,
    PageContent
  },
  data() {
    return {
      displayModal: true
    }
  },
  props: {
    bannerPhotos: {
      type: Array,
      default: () => []
    },
    selectedPage: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    activePage() {
      return this.selectedPage.length === 1 ? this.selectedPage : null;
    },
    pageIndex() {
      return this.selectedPage[0].index;
    },
  },
  mounted() {

    console.log(this.selectedPage);
  },
  methods: {
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
      this.$emit('reset-home')
    },
    resetTranslateY() {
      this.translateY = 0;
      this.bannerOpacity = 1;
    },
    setMenu(payload) {
      this.$emit('set-menu', payload)
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
