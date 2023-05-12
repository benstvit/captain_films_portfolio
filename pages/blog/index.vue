<template>
  <div class="flex flex-col items-center h-screen bg-white">
    <BlogNavbar />
    <div class="grid grid-cols-12 mx-8 md:mx-40 my-8">
      <div class="col-span-6 mx-4" v-for="blog in blogPosts" :key="blog.alt">
        <BlogCard :blog="blog" />
      </div>
    </div>
  </div>
</template>

<script>
import BlogNavbar from '../../components/pages/blogs/BlogNavbar.vue'
import CaptainFilmsLogo from "../../components/partials/CaptainFilmsLogo.vue";
import BlogCard from "../../components/pages/blogs/BlogCard.vue";
import query from '../../mixins/contentfulBlogsQuery.js'

export default {
  name: "blog-index",
  mixins: [query],
  components: {
    BlogNavbar,
    CaptainFilmsLogo,
    BlogCard,
  },
  data() {
    return {
      blogPosts: []
    };
  },
  async mounted() {
    this.blogPosts = await this.getBlogPosts();
  },
  methods: {
    async getBlogPosts() {
      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.contentfulSpaceId}`;
      const fetchOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.contentfulAccessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({query})
      };

      try {
        const response = await fetch(fetchUrl, fetchOptions).then(response =>
          response.json()
        );
        return response.data.blogPostPhotoCollection.items;
      } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
      }
    }
   }
};
</script>
