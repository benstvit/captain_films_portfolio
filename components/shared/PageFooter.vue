<template>
  <div
    class="flex flex-col items-center justify-center gap-2 w-full bg-teal-600 pt-4 pb-2 px-4 md:px-0"
  >
    <div class="flex justify-center items-center gap-4 md:gap-8">
      <a
        href="https://www.instagram.com/captain_films/"
        target="_blank"
        @mouseover="instagramSvg.stroke = '#D22F8C'"
        @mouseleave="instagramSvg.stroke = '#FFFFFF'"
      >
        <InstagramSvg class="self-start" :stroke="instagramSvg.stroke" />
      </a>
      <ul
        class="flex flex-wrap items-center justify-center font-captainlight text-xs md:text-sm "
      >
        <li
          v-for="menu in menus"
          :key="menu"
          class="mr-4 md:mr-6"
          :class="customClass(menu)"
          @click.stop="navigateTo(menu)"
        >
          {{ menu }}
        </li>
      </ul>
    </div>
    <p class="text-gray-50 opacity-90 text-xs font-sans italic text-center px-2 pt-1">
      © All work contained within this blog is Captain Films | Benjamin Saint
      Viteux 2015-2022.
    </p>
    <p class="text-gray-50 opacity-90 text-xs font-sans text-center">
      Portfolio coded with 💙 by Benjamin Saint Viteux (Captain Films) in Vue.js
    </p>
  </div>
</template>

<script>
import InstagramSvg from "../svg/InstagramSvg.vue";

export default {
  name: "PageFooter",
  props: {
    selectedPage: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    InstagramSvg,
  },
  data() {
    return {
      menus: ["Home", "Gallery", "Showroom", "Contact me"],
      instagramSvg: { stroke: "#FFFFFF" },
    };
  },
  computed: {
    activePage() {
      return this.selectedPage.length === 1 ? this.selectedPage : null;
    },
  },
  methods: {
    customClass(menu) {
      if (!this.activePage.length) return;
      const activeMenu = menu === "Contact me" ? "Contact me | Order your pic" : menu;

      return activeMenu === this.activePage[0].title
        ? "text-white hover:cursor-default text-md"
        : "opacity-80 text-gray-50 dark:text-white hover:text-white hover:opacity-100 hover:cursor-pointer";
    },
    navigateTo(menu) {
      const payload = menu === "Contact me" ? "Contact me | Order your pic" : menu;
      this.$emit("navigate", payload);
    },
  },
};
</script>
