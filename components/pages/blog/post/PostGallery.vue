<template>
  <viewer
    :images="formattedImages"
    class="grid grid-cols-12 gap-4 flex items-start px-12 md:px-24 py-14 lg:px-32 lg:mx-32"
  >
    <nuxt-img
      v-for="image in formattedImages"
      preload
      loading="lazy"
      quality="80"
      format="webp"
      :key="image.title"
      :src="image.url"
      :alt="image.title"
      class="col-span-12 md:col-span-6 lg:col-span-4 object-cover h-auto md:h-full hover:cursor-zoom-in hover:opacity-90 shadow-sm"
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
  computed: {
    formattedImages() {
      const options = {
        inline: true,
        button: true,
        navbar: true,
        toolbar: true,
        tooltip: true,
        movable: true,
        zoomable: true,
        rotatable: true,
        scalable: true,
        transition: true,
        fullscreen: true,
        keyboard: true,
      };
      return this.images.map((image) => ({ ...image, ...options }));
    },
  },
};
</script>
