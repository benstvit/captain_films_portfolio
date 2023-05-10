<template>
  <div>
    <nuxt-img
      preload
      format="webp"
      class="shadow-md rounded-md"
      :alt="blog.alt"
      :src="blog.thumbnail"
    >
    </nuxt-img>
    <h1>{blog.title}</h1>
    <p>{blogAbstract}</p>
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
      return this.blog.content.substr(0, 150) + '...';
    }
  }
};
</script>
