<template>
  <div class="flex flex-col align-center" v-if="data.imagesCollection.items">
    <div class="ease-in duration-100 my-0 md:my-4">
      <WorkCaroussel @activate-card="activateCard" :isActive="data.isActive" :data="data" />
    </div>
    <div id="description" class="text-center text-sm md:text-base py-2">
      <h1 class="font-captainlight text-sm md:text-sm lg:text-lg uppercase">
        {{ title }}
      </h1>
      <p class="font-cormorant py-1 text-sm md:text-base">
        {{ projectDescription }}
      </p>
    </div>
    <div class="text-center w-full">
      <a
        class="w-fit animate-pulse opacity-90 hover:opacity-100 hover:animate-none hover:underline hover:cursor-pointer text-sm md:text-lg"
        :href="data.siteUrl"
        target="_blank"
        >{{ url }}</a
      >
    </div>
  </div>
</template>

<script>
import WorkCaroussel from "./WorkCaroussel.vue";

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
    WorkCaroussel,
  },
  data() {
    return {
      imageLoaded: false,
    };
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
  methods: {
    activateCard(cardId) {
      this.$emit('activate-card', cardId)
    }
  },
  mounted() {
    console.log(this.data);
  }
};
</script>
