<template>
  <section v-show="menus">
    <div
      class="relative flex justify-center items-center sm:max-w-screen-sm md:max-w-none">
      <CaptainFilmsLogo :class="menuDisplay ? 'block' : 'hidden'"/>
      <div class="flex justify-center items-center flex-wrap">
        <NavigateLeft
          v-if="!menuDisplay"
          class="pt-32 mx-10 hidden md:block"
          :pageIndex="pageIndex"
          @reset-menu="resetMenu"
          @toggle-menu="toggleMenu"/>
        <BannerImage
          class="shrink-0 lg:shrink"
          :menus="menus"
          :menu-display="menuDisplay"
          @select-menu="selectMenu"
          />
        <NavigateRight
          v-if="!menuDisplay"
          class="pt-32 mx-10 hidden md:block"
          :pageIndex="pageIndex"
          @toggle-menu="toggleMenu" />
      </div >
      <CaptainFilmsLogo :class="menuDisplay ? 'block' : 'hidden'"/>
    </div>
  </section>
</template>

<script>
import BannerImage from "../../partials/BannerImage.vue"
import CaptainFilmsLogo from "../../partials/CaptainFilmsLogo.vue"
import NavigateLeft from "./NavigateLeft.vue"
import NavigateRight from "./NavigateRight.vue"

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
    NavigateLeft,
    NavigateRight
  },
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    menus(active) {
      if (!this.menus.length) return;

      this.pageIndex = this.menus[0].index;
    }
  },
  computed: {
    menuDisplay() {
      if (!this.menus.length) return;

      return this.menus.length === 3;
    },
  },
  methods: {
    resetMenu() {
      this.$emit('reset-menu');
    },
    selectMenu(index) {
      this.menus.filter(p => p.index !== index).forEach(menu => menu.enabled = false);
    },
    toggleMenu(direction) {
      this.$emit('toggle-menu', { direction, index: this.menus[0].index })
    }
  }
};
</script>
