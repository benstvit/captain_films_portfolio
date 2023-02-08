<template>
  <section v-show="menus">
    <div class="flex justify-center items-center mx-24">
      <CaptainFilmsLogo :menu-display="menuDisplay" :custom-class="'left-10'" />
      <BannerImage
        :menus="menus"
        :menu-display="menuDisplay"
        :page-index="pageIndex"
        @reset-menu="resetMenu"
        @toggle-menu="toggleMenu" />
      <CaptainFilmsLogo :menu-display="menuDisplay" :custom-class="'right-10'" />
    </div>
  </section>
</template>

<script>
import BannerImage from "../../partials/BannerImage.vue"
import CaptainFilmsLogo from "../../partials/CaptainFilmsLogo.vue"

export default {
  name: "SharedBanner",
  data() {
    return {
      pageIndex: null,
    }
  },
  components: {
    BannerImage,
    CaptainFilmsLogo,
  },
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    menus() {
      if (!this.menus.length) return;
      console.log(this.menus);
      this.pageIndex = this.menus[0].index;
    }
  },
  computed: {
    menuDisplay() {
      if (!this.menus) return;

      return this.menus.length === 3;
    },
  },
  methods: {
    resetMenu() {
      this.$emit('reset-menu');
    },
    toggleMenu(direction) {
      this.$emit('toggle-menu', { direction: direction, index: this.menus[0].index });
      [this.leftArrowFill, this.rightArrowFillthis, this.stopFill].forEach(e => e = 'none');
    }
  },
};
</script>
