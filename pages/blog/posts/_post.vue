<template>
  <div
    v-if="post"
    class="h-full"
    :class="post.id % 2 === 0 ? 'bg-pink-100' : 'bg-sky-50'"
  >
    <BlogNavbar />
    <PostHeader :post="post" />
    <PostContent :post="post" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import BlogNavbar from '../../../components/pages/blog/BlogNavbar.vue'
import PostContent from '../../../components/pages/blog/post/PostContent.vue'
import PostHeader from '../../../components/pages/blog/post/PostHeader.vue'

export default {
  name: "blog-post",
  components: {
    BlogNavbar,
    PostContent,
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
