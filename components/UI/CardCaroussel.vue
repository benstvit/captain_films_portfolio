<template>
  <div class="flex flex-col align-center" v-if="data.imagesCollection.items">
    <div class="ease-in duration-100 my-0 md:my-4">
      <WorkCaroussel :data="data" />
    </div>
    <div
      id="description"
      class="flex flex-col items-center gap-0 md:gap-2 text-center text-sm md:text-base pt-4 md:py-2"
    >
      <h1
        class="font-captainlight font-thin text-sm md:text-sm lg:text-lg uppercase"
      >
        {{ title }}
      </h1>
        <div class="my-2 pt-1 pb-2 px-3 border border-1 border-black opacity-90 z-20">
          <p
            class="font-captainlight font-thin text-sm md:text-xs lg:text-sm "
          >
            {{ tag }}
          </p>
        </div>
      <p
        class="font-cormorant py-1 text-sm md:text-base lg:text-xl"
        v-html="this.$md.render(projectDescription)"
      ></p>
    </div>
    <div v-if="url" class="text-center w-full">
      <a
        class="w-fit animate-pulse opacity-90 hover:opacity-100 hover:animate-none hover:underline hover:cursor-pointer text-sm md:text-lg"
        :href="data.siteUrl"
        target="_blank"
        >🔗 {{ url }}</a
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
    tag() {
      return this.data.tag;
    },
    url() {
      return this.data?.siteUrl;
    },
  },
};
</script>
