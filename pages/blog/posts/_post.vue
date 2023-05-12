<template>
  <div
    v-if="post"
    class="h-screen bg-pink-50"
    :class="post.id % 2 === 0 ? 'bg-pink-50' : 'bg-blue-50'"
  >
    <PostHeader :post="post" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import PostHeader from '../../../components/pages/blog/post/PostHeader.vue'

export default {
  name: "blog-post",
  components: {
    PostHeader
  },
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
