<template>
  <section>
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

export default {
  name: "content-display",
  components: {
    Footer,
    IntroductionModal,
  },
  props: {
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
};
</script>
