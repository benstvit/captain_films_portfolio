<template>
  <section v-show="menus">
    <div class="relative flex justify-center items-center">
      <CaptainFilmsText :class="menuDisplay ? 'block' : 'hidden'"/>
      <div class="flex justify-center items-center lg:w-full">
        <NavigateLeft
          v-if="!menuDisplay"
          class="hidden md:block pt-32 mx-4 lg:mx-10"
          :pageIndex="pageIndex"
          @reset-menu="resetMenu"
          @toggle-menu="toggleMenu"/>
        <BannerImage
          id="bannerImage"
          class="shrink-0 lg:shrink"
          :menus="menus"
          :menu-display="menuDisplay"
          @navigate="navigateTo"
          @select-menu="selectMenu"/>
        <NavigateRight
          v-if="!menuDisplay"
          class="hidden md:block pt-32 mx-4 lg:mx-10"
          :pageIndex="pageIndex"
          @toggle-menu="toggleMenu" />
      </div >
      <CaptainFilmsText :class="menuDisplay ? 'block' : 'hidden'"/>
    </div>
  </section>
</template>

<script>
import BannerImage from "../../partials/BannerImage.vue"
import CaptainFilmsText from "../../partials/CaptainFilmsText.vue"
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
    CaptainFilmsText,
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
    navigateTo(payload) {
      this.$emit('navigate', payload)
    },
    resetMenu() {
      this.$emit('reset-menu');
    },
    selectMenu(index) {
      this.menus.filter(p => p.index !== index).forEach(menu => menu.enabled = false);
    },
    toggleMenu(direction) {
      this.$emit('toggle-menu', { direction, index: this.menus[0].index })
    }
  },
};
</script>
