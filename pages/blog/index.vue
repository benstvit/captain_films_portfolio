<template>
  <div class="flex flex-col items-center h-screen bg-white max-w-screen">
    <BlogNavbar id="navbar" :is-scrolling="isScrolling" @filter="filter" />
    <div
      class="grid grid-cols-12 gap-6 md:gap-2 mx-8 md:mx-32 lg:mx-40 my-8"
    >
      <nuxt-link
        class="col-span-12 md:col-span-6 mx-2"
        v-for="blog in filteredPosts"
        :key="blog.alt"
        :to="`/blog/${blog.slug}`"
      >
        <keep-alive>
          <BlogCard :blog="blog" :is-searching="isSearching" />
        </keep-alive>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "Vuex";
import scrollHandler from "../../mixins/scrollHandler";

import BlogNavbar from "../../components/pages/blog/BlogNavbar.vue";
import CaptainFilmsLogo from "../../components/partials/CaptainFilmsLogo.vue";
import BlogCard from "../../components/pages/blog/BlogCard.vue";

export default {
  name: "blog-index",
  mixins: [scrollHandler],
  data() {
    return {
      isSearching: false,
      filteredPosts: {},
    };
  },
  provide() {
    return {
      filter: this.filter,
    };
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

    setQueryColor(query) {
      this.filteredPosts.map((post) => {
        const title = post.title;
        if (query.length) {
          this.isSearching = true;
          const highlightedContent = title.replace(
            new RegExp(query, "gi"),
            '<span class="bg-teal-600">$&</span>'
          );
          return this.$set(post, "queryTitle", highlightedContent);
        }
        return (this.isSearching = false);
      });
    },
    filter(category, search) {
      if (category) {
        if (category === "tout") return (this.filteredPosts = this.blogPosts);

        return (this.filteredPosts = this.blogPosts.filter(
          (blog) => blog.tag === category
        ));
      }
      this.filteredPosts = this.blogPosts.filter((blog) => {
        return blog.title.toLowerCase().includes(search.toLowerCase());
      });
      this.setQueryColor(search);
    },
  },
};
</script>
