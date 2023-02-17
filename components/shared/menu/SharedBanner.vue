<template>
  <section v-show="menus">
    <div class="flex justify-center items-center">
      <CaptainFilmsLogo :menu-display="menuDisplay"/>
      <BannerImage
        :menus="menus"
        :menu-display="menuDisplay"
        :page-index="pageIndex"
        />
      <CaptainFilmsLogo :menu-display="menuDisplay"/>
    </div>
  </section>
</template>

<script>
import BannerImage from "../../partials/BannerImage.vue"
import CaptainFilmsLogo from "../../partials/CaptainFilmsLogo.vue"

export default {
  name: "SharedBanner",
  data() {
    return {
      pageIndex: null,
    }
  },
  components: {
    BannerImage,
    CaptainFilmsLogo,
  },
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    menus(newValue) {
      this.pageIndex = this.menus[0].index;
    }
  },
  computed: {
    menuDisplay() {
      if (!this.menus) return;

      return this.menus.length === 3;
    },
  },
};
</script>
