<template>
  <div class="flex flex-col items-center h-screen bg-white max-w-screen">
    <BlogNavbar id="navbar" :is-scrolling="isScrolling" @filter="filter" />
    <div class="grid grid-cols-12 gap-4 md:gap-2 mx-8 md:mx-32 lg:mx-40 my-8">
      <nuxt-link
        v-for="blog in filteredPosts"
        class="col-span-12 md:col-span-6 xl:col-span-4 mx-2"
        :key="blog.alt"
        :to="'/journal/' + blog.slug"
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

import BlogNavbar from "../../components/pages/journal/BlogNavbar.vue";
import CaptainFilmsLogo from "../../components/partials/CaptainFilmsLogo.vue";
import BlogCard from "../../components/pages/journal/BlogCard.vue";

export default {
  name: "blog-index",
  mixins: [scrollHandler],
  head() {
    return {
      title: "Captain Films - Journal",
      meta: [
        {
          hid: "og-title",
          property: "og:title",
          content: `Captain Films Journal`,
        },
        { hid: "og-type", property: "og:type", content: "journal" },
        {
          hid: "description",
          name: "description",
          content:
            "Le journal de Captain Films. Des interviews, de la musique, de la photographie...",
        },
        {
          hid: "og-image",
          itemprop: "image",
          property: "og:image",
          content: "cf-share-logo-blog.png",
        },
        {
          hid: "og-image-alt",
          property: "og:image:alt	",
          content: "Captain Films Journal",
        },
        {
          hid: "og-url",
          property: "og:url",
          content: "https://captain-films.com/journal",
        },
      ],
    };
  },
  data() {
    return {
      isSearching: false,
      filteredPosts: [],
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
