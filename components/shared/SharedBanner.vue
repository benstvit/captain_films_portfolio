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
          <VerticalSvg  />
          <h2
            class="font-cormorant hover:cursor-pointer hover:font-bold text-black text-xl"
            @click="resetMenu">
            Home
          </h2>
        </span>
      </div>
      <div
        id="captain-logo"
        v-if="menuDisplay"
        class="absolute flex flex-col justify-center items-center top-8 left-10 text-center">
        <nuxt-img
          class="w-28 h-28"
          src="/logo-solo.png">
        </nuxt-img>
        <h1 class="font-captainbold font-bold text-center text-sm text-black">
          Captain Films
        </h1>
        <p class="font-captainlight text-center italic text-xs pb-4 text-black">
          Film Photography
        </p>
      </div>
      <BannerImage
        :menus="menus"
        :menuDisplay="menuDisplay"
        @reset-menu="resetMenu" />
      <div class="pt-24 2xl:pt-0">
        <span
          @mouseover="rightArrowFill = '#000'"
          @mouseleave="rightArrowFill = 'none'"
          @click="toggleMenu('right')">
          <RightArrowSvg
            v-if="!menuDisplay && pageIndex !== 3"
            :fill="rightArrowFill"/>
        </span>
        <span
          v-if="!menuDisplay && pageIndex === 3"
          class="flex justify-center items-center">
          <h2
            class="font-cormorant hover:cursor-pointer hover:font-bold text-black text-xl"
            @click="toggleMenu">
            🎞 Rewind
          </h2>
          <VerticalSvg  />
        </span>
      </div>
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

      return this.menus.length === 3;
    },
  },
  methods: {
    resetMenu() {
      this.$emit('reset-menu');
    },
    toggleMenu(direction) {
      console.log(this.menus[0].index)
      this.$emit('toggle-menu', { direction: direction, index: this.menus[0].index });
    }
  },
};
</script>
