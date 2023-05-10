<template>
  <div class="flex flex-col items-center h-screen bg-white">
    <nuxt-link to="/" class="font-captainlight self-start p-8 pb-0 mt-8 mx-12 hover:text-teal-600 hover:cursor-pointer hover:animate-pulse">
      // Back to Homepage
    </nuxt-link>
    <CaptainFilmsLogo :menu-display="false" />
    <div class="grid grid-cols-12 mx-20 my-8">
      <div class="col-span-4 mx-2" v-for="blog in blogs" :key="blog.alt">
        <Card :blog="blog" />
      </div>
    </div>
  </div>
</template>

<script>
import CaptainFilmsLogo from "../../components/partials/CaptainFilmsLogo.vue";
import Card from "../../components/UI/Card.vue";

export default {
  name: "blog-index",
  components: {
    CaptainFilmsLogo,
    Card,
  },
  data() {
    return {
      blogs: [
        {
          title: "TO READ: KD Surfboards",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet id dolor at maximus. Nam nec aliquet ligula. Duis vitae nisl ornare, sagittis turpis non, consequat mauris. Praesent lobortis sed sem sed sagittis. Orci",
          alt: "KD Surfboards",
          thumbnail:
            "https://live.staticflickr.com/65535/52872159873_b416ea7a09_c.jpg",
        },
        {
          title: "TO WATCH: NAVAHO ",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet id dolor at maximus. Nam nec aliquet ligula. Duis vitae nisl ornare, sagittis turpis non, consequat mauris. Praesent lobortis sed sem sed sagittis. Orci",
          alt: "NAVAHO Music",
          thumbnail:
            "https://live.staticflickr.com/65535/52535525176_2e2f056400_c.jpg",
        },
        {
          title: "TO WATCH: BATS ",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet id dolor at maximus. Nam nec aliquet ligula. Duis vitae nisl ornare, sagittis turpis non, consequat mauris. Praesent lobortis sed sem sed sagittis. Orci",
          alt: "BATS Music",
          thumbnail:
            "https://live.staticflickr.com/65535/52535972204_40f049d4eb_c.jpg",
        },
      ],
    };
  },
};
</script>
