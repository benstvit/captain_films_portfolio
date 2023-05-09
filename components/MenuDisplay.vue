<template>
  <SharedBanner
    class="transition ease-out duration-300"
    :menus="menus"
  />
</template>

<script>
import SharedBanner from "./shared/menu/SharedBanner.vue";

export default {
  name: "menu-display",
  components: {
    SharedBanner,
  },
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
