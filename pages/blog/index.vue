<template>
  <div class="flex flex-col items-center h-screen bg-white">
    <BlogNavbar @filter="filter" />
    <div class="flex grid grid-cols-12 mx-8 md:mx-40 my-8">
      <div
        class="col-span-12 md:col-span-6 mx-2"
        v-for="blog in filteredPosts"
        :key="blog.alt"
        @click="$router.push(`blog/posts/${blog.slug}`)"
      >
        <keep-alive><BlogCard :blog="blog" /></keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "Vuex";

import BlogNavbar from "../../components/pages/blog/BlogNavbar.vue";
import CaptainFilmsLogo from "../../components/partials/CaptainFilmsLogo.vue";
import BlogCard from "../../components/pages/blog/BlogCard.vue";

export default {
  name: "blog-index",
  data() {
    return {
      filteredPosts: {},
    };
  },
  provide() {
    return {
      filter: this.filter,
    }
  },
  components: {
    BlogNavbar,
    CaptainFilmsLogo,
    BlogCard,
  },
  computed: {
    ...mapState("blogs", { blogPosts: "data" }),
  },
  async created() {
    await this.fetchBlogs();
    this.filteredPosts = this.blogPosts;
  },
  methods: {
    ...mapActions({ fetchBlogs: "blogs/fetch" }),

    filter(filter) {
      if (filter === "tout") return (this.filteredPosts = this.blogPosts);

      this.filteredPosts = this.blogPosts.filter((blog) => blog.tag === filter);
    },
  },
};
</script>
