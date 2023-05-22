<template>
  <viewer :images="images" class="grid grid-cols-12 gap-4 flex items-start px-12 md:px-24 md:py-14 lg:px-32 lg:mx-32">
    <nuxt-img
      v-for="image in images"
      preload
      loading="lazy"
      quality="80"
      format="webp"
      :key="image.title"
      :src="image.url"
      :alt="image.title"
      class="col-span-12 md:col-span-6 lg:col-span-4 flex items-center hover:cursor-zoom-in hover:opacity-90 border border-1 border-white"
    />
  </viewer>
</template>

<script>
export default {
  name: "post-gallery",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
