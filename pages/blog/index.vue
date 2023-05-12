<template>
  <div class="flex flex-col items-center h-screen bg-white">
    <BlogNavbar />
    <div class="grid grid-cols-12 mx-8 md:mx-40 my-8">
      <div
        class="col-span-5 mx-4"
        v-for="blog in blogPosts"
        :key="blog.alt"
        @click="$router.push(`blog/posts/${blog.slug}`)"
      >
        <BlogCard :blog="blog" />
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'Vuex';

import BlogNavbar from "../../components/pages/blogs/BlogNavbar.vue";
import CaptainFilmsLogo from "../../components/partials/CaptainFilmsLogo.vue";
import BlogCard from "../../components/pages/blogs/BlogCard.vue";

export default {
  name: "blog-index",
  components: {
    BlogNavbar,
    CaptainFilmsLogo,
    BlogCard,
  },
  computed: {
    ...mapState('blogs', {blogPosts: 'data'})
  },
  async mounted() {
    await this.fetchBlogs();
  },
  methods: {
    ...mapActions({fetchBlogs: 'blogs/fetch'})
  },
};
</script>
