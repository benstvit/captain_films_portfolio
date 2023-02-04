<template>
  <section v-show="menus">
    <div class="flex justify-center items-center mx-24">
      <div class="pt-24 2xl:pt-0">
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
          <h2
            class="font-cormorant hover:cursor-pointer hover:font-bold text-black text-xl"
            @click="resetMenu">
            Home
          </h2>
        </span>
      </div>
      <CaptainFilmsLogo :menu-display="menuDisplay" :custom-class="'top-8 left-10'" />
      <BannerImage
        :menus="menus"
        :menuDisplay="menuDisplay"
        @reset-menu="resetMenu" />
      <CaptainFilmsLogo :menu-display="menuDisplay" :custom-class="'bottom-8 right-10'" />
      <div class="pt-24 2xl:pt-0">
        <span
          @mouseover="rightArrowFill = '#000'"
          @mouseleave="rightArrowFill = 'none'"
          @click="toggleMenu('right')">
          <RightArrowSvg
            v-if="!menuDisplay && pageIndex !== 3"
            :fill="rightArrowFill"/>
        </span>
        <div
          v-if="!menuDisplay && pageIndex === 3"
          class="flex justify-center items-center">
          <span
            @mouseover="stopFill = '#000'"
            @mouseleave="stopFill = 'none'"
            @click="toggleMenu('right')">
            <StopSvg  :fill="stopFill" />
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CaptainFilmsLogo from "../partials/CaptainFilmsLogo.vue"
import LeftArrowSvg from "../svg/LeftArrowSvg.vue"
import RightArrowSvg from "../svg/RightArrowSvg.vue"
import StopSvg from "../svg/StopSvg.vue"

import BannerImage from "../partials/BannerImage.vue"

export default {
  name: "SharedBanner",
  data() {
    return {
      leftArrowFill: 'none',
      rightArrowFill: 'none',
      stopFill: 'none',
      pageIndex: null,
    }
  },
  components: {
    BannerImage,
    CaptainFilmsLogo,
    LeftArrowSvg,
    RightArrowSvg,
    StopSvg,
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
