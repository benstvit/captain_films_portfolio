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
  computed: {
    menuDisplay() {
      return this.menus.length > 1;
    },
  },
  watch: {
    menus(active) {
      if (!this.menus.length) return;
      console.log(active);
      this.pageIndex = this.menus[0].index;
    }
  },
  mounted() {
    console.log(this.menus);
  },
  methods: {
    resetMenu() {
      this.$emit('reset-menu');
    },
    selectMenu(index) {
      this.$parent.$emit('selected-menu', index)
    },
    toggleMenu(direction) {
      this.$emit('toggle-menu', { direction, index: this.menus[0].index })
    }
  },
};
</script>
