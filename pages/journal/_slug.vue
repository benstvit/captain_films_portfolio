<template>
  <div v-if="post" class="h-full bg-white">
    <JournalSubscriptionModal v-if="subscriptionModalIsOpen" @close-modal="subscriptionModalIsOpen = false" />
    <BlogNavbar id="navbar" :is-scrolling="isScrolling" :posts="filteredPosts" />
    <PostHeader :post="post" :posts="filteredPosts" />
    <PostContent :post="postWithFormattedImages" />
    <PostGallery v-if="galleryImages.length" :images="galleryImages" />
    <SlugFooter @open-subscription-modal="subscriptionModalIsOpen = true" :footer-text="footerText"/>
  </div>
</template>

<script>
import scrollHandler from "../../mixins/scrollHandler";

import BlogNavbar from "../../components/pages/journal/BlogNavbar.vue";
import SlugFooter from "../../components/pages/SlugFooter.vue"
import JournalSubscriptionModal from "../../components/pages/contact/Form/JournalSubscriptionModal.vue"
import PostContent from "../../components/pages/journal/post/post-content/PostContent.vue";
import PostHeader from "../../components/pages/journal/post/PostHeader.vue";
import PostGallery from "../../components/pages/journal/post/PostGallery.vue";

export default {
  name: "blog-post",
  mixins: [scrollHandler],
  data () {
    return {
      footerText: 'Me prévenir quand un nouvel article sort 👈',
      subscriptionModalIsOpen : false
    }
  },
  components: {
    BlogNavbar,
    SlugFooter,
    JournalSubscriptionModal,
    PostContent,
    PostHeader,
    PostGallery,
  },
  head() {
    return {
      title: "Captain Films - Journal",
      meta: [
        {
          hid: "og-title",
          property: "og:title",
          content: `Captain Films Journal - ${this.post.title}`,
        },
        { hid: "og-type", property: "og:type", content: "journal" },

        {
          hid: "og-desc",
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
          content: `https://captain-films.com/journal/${this.$route.params.slug}`,
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Article",
            "headline": `${this.post.title}`,
            "description": `${this.blogAbstract()}`,
            "datePublished": `${this.post.date}`,
            "author": {
              "@type": "Person",
              "name": "Benjamin Saint Viteux"
            }
          })
        }
      ]
    };
  },
  computed: {
    filteredPosts() {
      if (!this.blogPosts.length) return;

      return this.blogPosts.sort((a, b) => b.articleId - a.articleId);
    },
    galleryImages() {
      if (!this.postWithFormattedImages) return;

      return this.postWithFormattedImages.imagesCollection.items.filter(
        (image) => image.description !== ""
      );
    },
    postWithFormattedImages() {
      const options = {
        inline: true,
        button: true,
        navbar: true,
        toolbar: true,
        tooltip: true,
        movable: true,
        zoomable: true,
        rotatable: true,
        scalable: true,
        transition: true,
        fullscreen: true,
        keyboard: true,
      };
      const images = this.post.imagesCollection.items.map((image) => ({ ...image, ...options }));
      return { ...this.post, imagesCollection: {items: images} }
    }
  },
  async asyncData({ store, params }) {
    await store.dispatch("journalLogs/fetch");
    const blogPosts = store.getters["journalLogs/data"];
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
