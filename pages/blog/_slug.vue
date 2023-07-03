<template>
  <div v-if="post" class="h-full bg-white">
    <BlogNavbar id="navbar" :is-scrolling="isScrolling" :posts="blogPosts" />
    <PostHeader :post="post" :posts="blogPosts" />
    <PostContent :post="post" />
    <PostGallery v-if="galleryImages.length" :images="galleryImages" />
  </div>
</template>

<script>
import scrollHandler from "../../mixins/scrollHandler";

import BlogNavbar from "../../components/pages/blog/BlogNavbar.vue";
import PostContent from "../../components/pages/blog/post/post-content/PostContent.vue";
import PostHeader from "../../components/pages/blog/post/PostHeader.vue";
import PostGallery from "../../components/pages/blog/post/PostGallery.vue";

export default {
  name: "blog-post",
  mixins: [scrollHandler],
  components: {
    BlogNavbar,
    PostContent,
    PostHeader,
    PostGallery,
  },
  head() {
    return {
      title: "Captain Films - Le Blog",
      meta: [
        {
          hid: "og-title",
          property: "og:title",
          content: `Captain Films Blog - ${this.post.title}`,
        },
        { hid: "og-type", property: "og:type", content: "blog" },

        {
          hid: "description",
          name: "description",
          content: this.blogAbstract(),
        },
        {
          hid: "og-image",
          itemprop: "image",
          property: "og:image",
          content: `${this.post.thumbnail.url}`,
        },
        {
          hid: "og-image-alt",
          property: "og:image:alt	",
          content: `${this.post.thumbnail.title}`,
        },
        {
          hid: "og-url",
          property: "og:url",
          content: `https://captain-films.com/blog/${this.$route.params.slug}`,
        },
      ],
    };
  },
  computed: {
    galleryImages() {
      if (!this.post) return;

      return this.post.imagesCollection.items.filter(
        (image) => image.description !== ""
      );
    },
  },
  async asyncData({ store, params }) {
    await store.dispatch("blogs/fetch");
    const blogPosts = store.getters["blogs/data"];
    const post = blogPosts.filter((e) => e.slug === params.slug)[0];

    return { blogPosts, post };
  },
  methods: {
    blogAbstract() {
      const abstract = this.post.introduction.substr(0, 180) + "...";
      return abstract;
    },
  },
};
</script>

<style>
p {
  letter-spacing: 0.025em;
}
</style>
