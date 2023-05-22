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
      <h1
        v-if="isSearching"
        class="font-captainlight uppercase"
        v-html="blogTitle"
      ></h1>
      <h1 v-else class="font-captainlight uppercase">{{ blogTitle }}</h1>
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
    isSearching: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    blogAbstract() {
      const abstract = this.blog.introduction.substr(0, 180) + "...";
      return this.$md.render(abstract);
    },
    blogTitle() {
      return this.isSearching ? this.blog.queryTitle : this.blog.title;
    }
  },
};
</script>
