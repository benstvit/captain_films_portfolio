<template>
  <div
    v-if="post"
    class="h-screen bg-white"
  >
    <div class="flex flex-col items-center gap-2 md:mx-20 my-8">
      <h1 class="col-span-12 font-cormorant font-semibold p-4 text-3xl text-center">{{ post.title }}</h1>
      <nuxt-img
        :alt="post.thumbnail.title"
        :src="post.thumbnail.url"
        preload
        format="webp"
        class="w-auto h-[70vh]"
      >
      </nuxt-img>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "blog-post",
  computed: {
    ...mapState("blogs", { blogPosts: "data" }),

    slug() {
      return this.$route.params.post;
    },
    post() {
      if (!this.blogPosts.length) return;

      const post = this.blogPosts.filter((blog) => blog.slug === this.slug);
      return post[0];
    },
  },
  async mounted() {
    await this.fetchBlogs();
  },
  methods: {
    ...mapActions({ fetchBlogs: "blogs/fetch" }),
  },
};
</script>
