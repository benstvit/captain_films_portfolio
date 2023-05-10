<template>
  <div>
    <nuxt-img
      preload
      format="webp"
      class="shadow-md rounded-sm hover:opacity-70 hover:cursor-zoom-in"
      :alt="blog.alt"
      :src="blog.thumbnail"
    >
    </nuxt-img>
    <div id="description" class="p-2">
      <h1 class="font-captainlight uppercase">{{ blog.title }}</h1>
      <p class="font-cormorant text-md py-1">{{ blogAbstract }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    blog: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    blogAbstract() {
      return this.blog.content.substr(0, 140) + "...";
    },
  },
};
</script>
