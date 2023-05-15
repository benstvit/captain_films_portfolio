<template>
  <section>
    <BlogButton menu-name='blog' />
  </section>
</template>

<script>
import BlogButton from "../UI/BlogButton.vue"
export default {
  name: "side-menu",
  components: {
    BlogButton
  }
};
</script>
