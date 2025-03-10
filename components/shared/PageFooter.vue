<template>
  <div
    class="flex flex-col items-center justify-center gap-0 w-full bg-white pt-4 pb-2 px-4 md:px-0"
  >
    <div class="flex justify-center items-center w-2/3 gap-4 md:gap-8 border-black border-t-2 p-4">
      <a
        :href="facebook.url"
        target="_blank"
        @mouseover="facebook.stroke = '#60a5fa'"
        @mouseleave="facebook.stroke = '#000000'"
      >
        <FacebookSvg class="self-start" :stroke="facebook.stroke" />
      </a>
      <ul
        class="flex flex-nowrap md:flex-wrap items-center justify-center gap-0 md:gap-2 font-captainlight text-xs md:text-sm"
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
      <a
        :href="instagram.url"
        target="_blank"
        @mouseover="instagram.stroke = '#D22F8C'"
        @mouseleave="instagram.stroke = '#000000'"
      >
        <InstagramSvg class="self-start" :stroke="instagram.stroke" />
      </a>
    </div>
    <div class="flex justify-center m-2">
      <BlogButton :post-class="true" />
      <BlogButton menu-name="work" :post-class="true" />
    </div>
    <div
      class="flex flex-col justify-center items-center gap-2 pt-1 text-gray-900 opacity-90 text-xs italic font-sans text-center"
    >
      <p
        class="font-sans text-center px-2 pt-1"
      >
        © All work contained within this blog is Captain Films | Benjamin Saint
        Viteux 2015-2025.
      </p>
      <div
        class="hidden md:block flex flex-col md:flex-row md:justify-between items-center gap-0 md:gap-6 w-full pb-2"
      >
        <p>
          Portfolio coded with 💙 by Benjamin Saint Viteux (Captain Films) in
          Nuxt/Vue.js.
        </p>
        <p>
          Feel free to
          <a
            class="font-bold hover:cursor-pointer"
            @click.stop="navigateTo('Contact')"
            >contact me</a
          >
          if you need my services to build your website.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BlogButton from "../UI/BlogButton.vue";
import FacebookSvg from "../svg/FacebookSvg.vue";
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
      menus: ["Home", "Photography", "Showroom", "Contact"],
      instagram: {
        stroke: "#000000",
        url: "https://www.instagram.com/captain_films/",
      },
      facebook: {
        stroke: "#000000",
        url: "https://www.facebook.com/captainfilmsjournal",
      },
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
        ? "text-black hover:cursor-default text-md"
        : "opacity-80 text-gray-900 dark:text-black hover:text-black hover:opacity-100 hover:cursor-pointer";
    },
    navigateTo(menu) {
      this.$emit("navigate", menu);
    },
  },
};
</script>
