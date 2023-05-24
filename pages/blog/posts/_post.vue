<template>
  <div v-if="post" class="h-full" :class="customBackgroundColor">
    <BlogNavbar
      id="navbar"
      :is-scrolling="isScrolling"
      :posts="blogPosts"
    />
    <PostHeader :post="post" />
    <PostContent :post="post" />
    <PostGallery  v-if="galleryImages.length" :images="galleryImages"/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import scrollHandler from '../../../mixins/scrollHandler'

import BlogNavbar from "../../../components/pages/blog/BlogNavbar.vue";
import PostContent from "../../../components/pages/blog/post/post-content/PostContent.vue";
import PostHeader from "../../../components/pages/blog/post/PostHeader.vue";
import PostGallery from "../../../components/pages/blog/post/PostGallery.vue"

export default {
  name: "blog-post",
  mixins: [scrollHandler],
  components: {
    BlogNavbar,
    PostContent,
    PostHeader,
    PostGallery,
  },
  computed: {
    ...mapState("blogs", { blogPosts: "data" }),

    customBackgroundColor() {
      const tag = this.post.tag;
      if (tag === "ENTRE DEUX VERRES") return "bg-sky-50";

      return tag === "POUR LES OREILLES" ? "bg-red-50" : "bg-teal-50";
    },
    galleryImages() {
      return this.post.imagesCollection.items.filter(image => image.description !== '');
    },
    post() {
      if (!this.blogPosts.length) return;

      const post = this.blogPosts.filter((blog) => blog.slug === this.slug);
      return post[0];
    },
    slug() {
      return this.$route.params.post;
    },
  },
  async created() {
    await this.fetchBlogs();
  },
  methods: {
    ...mapActions({ fetchBlogs: "blogs/fetch" }),
  },
};
</script>
