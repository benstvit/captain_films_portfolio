<template>
  <section>
    <SideMenuButton menu-name='blog' />
    <SideMenuButton menu-name='music' />
  </section>
</template>

<script>
import SideMenuButton from "../UI/SideMenuButton.vue"
export default {
  name: "side-menu",
  components: {
    SideMenuButton
  }
};
</script>
