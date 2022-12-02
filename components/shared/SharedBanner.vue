<template>
  <section v-show="menus">
    <div class="flex justify-center items-center">
      <span
        @mouseover="leftArrowFill = '#000'"
        @mouseleave="leftArrowFill = 'none'"
        @click="toggleMenu('left')">
        <LeftArrowSvg
          v-if="!menuDisplay && pageIndex !== 1"
          :fill="leftArrowFill"/>
      </span>
      <span
        v-if="!menuDisplay && pageIndex === 1"
        class="flex justify-center items-center">
        <VerticalSvg  />
        <h2
          class="font-cormorant hover:cursor-pointer hover:font-bold text-black text-xl"
          @click="resetMenu">
          Home
        </h2>
      </span>
      <BannerImage
        :menus="menus"
        :menuDisplay="menuDisplay"
        @reset-menu="resetMenu" />
      <span
        @mouseover="rightArrowFill = '#000'"
        @mouseleave="rightArrowFill = 'none'"
        @click="toggleMenu('right')">
        <RightArrowSvg
          v-if="!menuDisplay && pageIndex !== 4"
          :fill="rightArrowFill"/>
      </span>
      <span
        v-if="!menuDisplay && pageIndex === 4"
        class="flex justify-center items-center">
        <h2
          class="font-cormorant hover:cursor-pointer hover:font-bold text-black text-xl"
          @click="toggleMenu">
          🎞 Rewind
        </h2>
        <VerticalSvg  />
      </span>
    </div>
  </section>
</template>

<script>
import LeftArrowSvg from "../svg/LeftArrowSvg.vue"
import RightArrowSvg from "../svg/RightArrowSvg.vue"
import VerticalSvg from "../svg/VerticalSvg.vue"

import BannerImage from "../partials/BannerImage.vue"

export default {
  name: "SharedBanner",
  data() {
    return {
      leftArrowFill: 'none',
      rightArrowFill: 'none',
      pageIndex: null,
    }
  },
  components: {
    BannerImage,
    LeftArrowSvg,
    RightArrowSvg,
    VerticalSvg
  },
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    menus() {
      this.pageIndex = this.menus[0].index;
    }
  },
  computed: {
    menuDisplay() {
      if (!this.menus) return;

      return this.menus.length === 4;
    },
    menuIndex() {
      if (!this.menus) return;
      console.log(this.menus);
      // return menu;
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
