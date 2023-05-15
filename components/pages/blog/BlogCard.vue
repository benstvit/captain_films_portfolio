<template>
  <div>
    <nuxt-img
      preload
      format="webp"
      title="Read more..."
      class="shadow-md rounded-sm hover:opacity-80 hover:shadow-lg hover:cursor-pointer"
      :alt="blog.thumbnail.title"
      :src="blog.thumbnail.url"
    >
    </nuxt-img>
    <div id="description" class="text-sm md:text-base py-2">
      <h1 class="font-captainlight uppercase">{{ blog.title }}</h1>
      <p class="font-cormorant py-1" v-html="blogAbstract"></p>
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
      const abstract = this.blog.introduction.substr(0, 180) + "...";
      return this.$md.render(abstract);
    },
  },
};
</script>
