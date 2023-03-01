<template>
  <div class="flex flex-col items-center justify-center gap-2 w-full bg-gray-50 pt-4 pb-2">
    <div class="flex justify-center items-center gap-4 md:gap-8">
      <a
        href="https://www.instagram.com/captain_films/"
        target="_blank"
        @mouseover="instagramSvg.stroke = '#D22F8C'"
        @mouseleave="instagramSvg.stroke = '#0F766E'">
        <InstagramSvg class="self-start" :stroke="instagramSvg.stroke" />
      </a>
      <ul class="flex flex-wrap items-center justify-center font-captainlight text-gray-800 text-sm dark:text-white">
        <li
          v-for="menu in menus"
          :key="menu"
          class="mr-4 md:mr-6"
          :class="customClass(menu)"
          @click.stop="navigateTo(menu)">
          {{menu}}
        </li>
      </ul>
    </div>
    <p class="text-xs font-sans italic text-center px-2 pt-1">
      © All work contained within this blog is Captain Films | Benjamin Saint Viteux 2015-2022 unless otherwise noted and may not be copied, downloaded, blogged, distributed, or reproduced in any form without express written consent.
    </p>
    <p class="text-xs font-sans text-center">Portfolio coded with 💙 by Benjamin Saint Viteux (Captain Films) in Vue.js</p>
  </div>
</template>

<script>
import InstagramSvg from "../svg/InstagramSvg.vue"

export default {
  name: 'PageFooter',
  props: {
    activePage: {
      type: Array,
      default: () => []
    }
  },
  components: {
    InstagramSvg
  },
  data() {
    return {
      menus: ['Home', 'Gallery', 'Showroom', 'Contact me'],
      instagramSvg: {stroke: '#0F766E'},
    }
  },
  methods: {
    customClass(menu) {
      if (!this.activePage.length) return;
      const activeMenu = menu === 'Contact me' ? 'Contact me | Order your pic' : menu;

      return activeMenu === this.activePage[0].title ? 'text-black underline hover:cursor-default' : 'hover:text-teal-700 hover:cursor-pointer';
    },
    navigateTo(menu) {
      const payload = menu === 'Contact me' ? 'Contact me | Order your pic' : menu;
      this.$emit('reset-translateY');
      this.$emit('navigate', payload);
    }
  },
}
</script>
