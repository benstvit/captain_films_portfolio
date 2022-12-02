<template>
  <section v-show="menus">
    <div class="flex justify-center items-center">
      <span
        @mouseover="leftArrowFill = '#000'"
        @mouseleave="leftArrowFill = 'none'"
        @click="toggleMenu('left')">
        <LeftArrowSvg v-show="!menuDisplay" :fill="leftArrowFill"/>
      </span>
      <BannerImage
        :menus="menus"
        :menuDisplay="menuDisplay"
        @reset-menu="resetMenu" />
      <span
        @mouseover="rightArrowFill = '#000'"
        @mouseleave="rightArrowFill = 'none'"
        @click="toggleMenu('right')">
        <RightArrowSvg v-show="!menuDisplay" :fill="rightArrowFill"/>
      </span>
    </div>
  </section>
</template>

<script>
import LeftArrowSvg from "../svg/LeftArrowSvg.vue"
import RightArrowSvg from "../svg/RightArrowSvg.vue"

import BannerImage from "../partials/BannerImage.vue"

export default {
  name: "SharedBanner",
  data() {
    return {
      leftArrowFill: 'none',
      rightArrowFill: 'none',
    }
  },
  components: {
    BannerImage,
    LeftArrowSvg,
    RightArrowSvg
  },
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    menuDisplay() {
      if (!this.menus) return;
      return this.menus.length === 4;
    },
  },
  methods: {
    resetMenu() {
      this.$emit('reset-menu');
    },
    toggleMenu(direction) {
      this.$emit('toggle-menu', { direction: direction, index: this.menus[0].index });
    }
  },
};
</script>
