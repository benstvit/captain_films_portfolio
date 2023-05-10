<template>
  <section v-show="menus">
    <div class="relative flex justify-center items-center">
      <SideMenu :class="menuDisplay ? 'block' : 'hidden'" />
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
          @reset-menu="resetMenu"
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
import SideMenu from "../../UI/SideMenu.vue"

export default {
  name: "SharedBanner",
  components: {
    BannerImage,
    CaptainFilmsText,
    NavigateLeft,
    NavigateRight,
    SideMenu
  },
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    pageIndex() {
      return this.menus[0].index;
    },
    menuDisplay() {
      return this.menus.length > 1;
    },
  },
  methods: {
    resetMenu() {
      this.$parent.$emit('reset-home');
    },
    selectMenu(index) {
      this.$parent.$emit('selected-menu', index)
    },
    toggleMenu(direction) {
      this.$parent.$emit('set-menu', { direction, index: this.menus[0].index })
    }
  },
};
</script>
