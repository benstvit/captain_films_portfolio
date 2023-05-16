<template>
  <div v-if="post" class="h-full" :class="customBackgroundColor">
    <BlogNavbar
      id="navbar"
      :class="isScrolling ? 'opacity-90 transition ease-in-out duration-1000' : 'opacity-100 transition ease-in-out duration-300'"
    />
    <PostNavbar :posts="blogPosts" />
    <PostHeader :post="post" />
    <PostContent :post="post" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import BlogNavbar from "../../../components/pages/blog/BlogNavbar.vue";
import PostContent from "../../../components/pages/blog/post/PostContent.vue";
import PostHeader from "../../../components/pages/blog/post/PostHeader.vue";
import PostNavbar from "../../../components/pages/blog/post/PostNavbar.vue";

export default {
  name: "blog-post",
  components: {
    BlogNavbar,
    PostContent,
    PostHeader,
    PostNavbar
  },
  data() {
    return {
      isScrolling: false,
    };
  },
  computed: {
    ...mapState("blogs", { blogPosts: "data" }),

    customBackgroundColor() {
      const tag = this.post.tag;
      if (tag === "À GARDER À L'OEIL") return "bg-sky-50";

      return tag === "À ÉCOUTER" ? "bg-pink-50" : "bg-teal-50";
    },
    slug() {
      return this.$route.params.post;
    },
    post() {
      if (!this.blogPosts.length) return;

      const post = this.blogPosts.filter((blog) => blog.slug === this.slug);
      return post[0];
    },
  },
  async created() {
    window.addEventListener("scroll", this.getOffsetTop);
    await this.fetchBlogs();
  },
  destroyed() {
    window.removeEventListener("scroll", this.getOffsetTop);
  },
  methods: {
    ...mapActions({ fetchBlogs: "blogs/fetch" }),

    getOffsetTop() {
      const navbarY = document.getElementById("navbar").getBoundingClientRect().y;
      if (navbarY <= -40) this.isScrolling = true
    },
  },
};
</script>
