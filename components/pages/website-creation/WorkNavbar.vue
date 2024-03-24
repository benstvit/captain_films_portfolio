<template>
  <div
    class="relative z-10 flex flex-col items-center w-full p-3 md:pt-6 md:px-32 lg:px-40">

    <CaptainFilmsLogoBlog class="block lg:hidden col-span-2" pageCategory="Website Creation" />
    <div class="border-black border-b pb-4 lg:pb-8 lg:grid lg:grid-cols-6 flex items-center lg:items-end  w-full text-xs md:text-sm md:text-base"
      :class="{'justify-around': this.onPostPage, 'justify-between lg:justify-around': !this.onPostPage }">
      <BlogButton
        class="col-span-2"
        menu-name="home"
        :post-class="true"
      />
      <CaptainFilmsLogoBlog class="hidden lg:block col-span-2" pageCategory="Website Creation" />
    </div>
    <InfiniteTextScrollBanner
      :scrolling-text="scrollingText"
      class="transition ease-in-out duration-300"
      v-if="onIndexPage"
    />
  </div>
</template>

<script>
import BlogButton from "../../UI/BlogButton.vue"
import CaptainFilmsLogoBlog from "../../partials/CaptainFilmsLogoBlog.vue";
import InfiniteTextScrollBanner from "../../UI/InfiniteTextScrollBanner.vue";

export default {
  name: "work-navbar",
  components: {
    BlogButton,
    CaptainFilmsLogoBlog,
    InfiniteTextScrollBanner,
  },
  data() {
    return {
      scrollingText: "👾 Besoin de votre propre site web ? Contactez-moi en me cliquant dessus 👾",
    };
  },
  props: {
    works: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    onIndexPage() {
      return !this.$route.params.slug;
    },
    onPostPage() {
      return this.$route.params.slug;
    },
  },
};
</script>
