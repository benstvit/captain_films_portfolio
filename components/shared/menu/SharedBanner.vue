<template>
  <section v-show="menus">
    <div class="flex justify-center items-center">
      <CaptainFilmsLogo :menu-display="menuDisplay"/>
      <NavigateLeft
        v-if="!menuDisplay"
        class="invisible md:visible"
        :pageIndex="pageIndex"
        @reset-menu="resetMenu"
        @toggle-menu="toggleMenu"/>
      <BannerImage
        class="shrink-0 w-screen lg:shrink"
        :menus="menus"
        :menu-display="menuDisplay"
        @select-menu="selectMenu"
        />
      <NavigateRight
        v-if="!menuDisplay"
        class="invisible md:visible"
        :pageIndex="pageIndex"
        @toggle-menu="toggleMenu" />
      <CaptainFilmsLogo :menu-display="menuDisplay"/>
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
      console.log(active);
      // if (!active.length) return;
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
