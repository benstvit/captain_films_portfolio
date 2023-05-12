<template>
  <div>
    <nuxt-img
      preload
      format="webp"
      class="shadow-md rounded-sm hover:opacity-80 hover:shadow-lg hover:cursor-zoom-in"
      :alt="blog.thumbnail.title"
      :src="blog.thumbnail.url"
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
  mounted() {
    console.log(this.blog);
  },
  computed: {
    blogAbstract() {
      return this.blog.introduction.substr(0, 180) + "...";
    },
  },
};
</script>
