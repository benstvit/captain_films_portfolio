<template>
  <div class="flex flex-col align-center" v-if="data.imagesCollection.items">
    <div class="ease-in duration-100 border-black rounded-lg my-0 md:my-4">
      <ImageCaroussel :images="data.imagesCollection.items" />
    </div>
    <div id="description" class="text-center text-sm md:text-base py-2">
      <h1 class="font-captainlight text-sm md:text-sm lg:text-base">
        {{ title }}
      </h1>
      <p class="font-cormorant py-1 text-sm md:text-base">
        {{ projectDescription }}
      </p>
    </div>
    <a class="text-center justify-self-end" :href="data.siteUrl" target="_blank">{{ url }}</a>
  </div>
</template>

<script>
import ImageCaroussel from "./WorkCaroussel.vue";

export default {
  name: "card-caroussel",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    isSearching: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ImageCaroussel,
  },
  data() {
    return {
      imageLoaded: false,
    };
  },
  mounted() {
    console.log(this.data);
  },
  computed: {
    projectDescription() {
      return this.data.introduction;
    },
    title() {
      return this.data.title;
    },
    url() {
      return this.data?.siteUrl;
    },
  },
};
</script>
