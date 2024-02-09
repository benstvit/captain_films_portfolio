<template>
  <div
    class="flex flex-col items-center justify-center gap-2 w-full bg-teal-600 pt-4 pb-2 px-4 md:px-0"
  >
    <div class="flex justify-center items-center gap-4 md:gap-8">
      <a
        :href="facebook.url"
        target="_blank"
        @mouseover="facebook.stroke = '#60a5fa'"
        @mouseleave="facebook.stroke = '#FFFFFF'"
      >
        <FacebookSvg class="self-start" :stroke="facebook.stroke" />
      </a>
      <a
        :href="instagram.url"
        target="_blank"
        @mouseover="instagram.stroke = '#D22F8C'"
        @mouseleave="instagram.stroke = '#FFFFFF'"
      >
        <InstagramSvg class="self-start" :stroke="instagram.stroke" />
      </a>
      <ul
        class="flex flex-wrap items-center justify-center gap-2 font-captainlight text-xs md:text-sm"
      >
        <li
          v-for="menu in menus"
          :key="menu"
          class="mr-2 md:mr-6"
          :class="customClass(menu)"
          @click.stop="navigateTo(menu)"
        >
          {{ menu }}
        </li>
      </ul>
      <BlogButton class="self-end" :post-class="true" />
    </div>
    <p
      class="text-gray-50 opacity-90 text-xs font-sans italic text-center px-2 pt-1"
    >
      © All work contained within this blog is Captain Films | Benjamin Saint
      Viteux 2015-2022.
    </p>
    <p class="hidden md:block text-gray-50 opacity-90 text-xs font-sans text-center">
      Portfolio coded with 💙 by Benjamin Saint Viteux (Captain Films) in Vue.js
    </p>
  </div>
</template>

<script>
import BlogButton from "../UI/BlogButton.vue";
import FacebookSvg from "../svg/FacebookSvg.vue"
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
    BlogButton,
    FacebookSvg,
    InstagramSvg,
  },
  data() {
    return {
      menus: ["Home", "Photography", "Showroom", "Contact me"],
      instagram: { stroke: "#FFFFFF", url: 'https://www.instagram.com/captain_films/' },
      facebook: { stroke: "#FFFFFF", url: 'https://www.facebook.com/captainfilmsjournal' }
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

      return menu === this.activePage[0].title
        ? "text-white hover:cursor-default text-md"
        : "opacity-80 text-gray-50 dark:text-white hover:text-white hover:opacity-100 hover:cursor-pointer";
    },
    navigateTo(menu) {
      this.$emit("navigate", menu);
    },
  },
};
</script>
