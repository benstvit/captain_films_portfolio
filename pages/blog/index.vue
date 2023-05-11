<template>
  <div class="flex flex-col items-center h-screen bg-white">
    <nuxt-link to="/" class="font-captainlight self-start p-8 pb-0 mt-8 mx-12 hover:cursor-pointer">
      // <span class="hover:font-bold">Back to Homepage</span>
    </nuxt-link>
    <CaptainFilmsLogo :menu-display="false" />
    <div class="grid grid-cols-12 mx-20 my-8">
      <!-- <div class="col-span-4 mx-2" v-for="blog in blogs" :key="blog.alt">
        <Card :blog="blog" />
      </div> -->
    </div>
  </div>
</template>

<script>
import query from '../../mixins/blogQuery'
import CaptainFilmsLogo from "../../components/partials/CaptainFilmsLogo.vue";
import Card from "../../components/UI/Card.vue";

export default {
  name: "blog-index",
  mixins: [query],
  components: {
    CaptainFilmsLogo,
    Card,
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
        console.log(response);
        return response.data.blogPostPhotoCollection.items;
      } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
      }
    }
   }
};
</script>
