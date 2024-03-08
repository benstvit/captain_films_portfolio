<template>
  <div v-if="data.thumbnail">
    <div
      class="ease-in duration-100  border-black rounded-lg my-0 md:my-4"
    >
        <viewer class="flex justify-center gap-2 flex-wrap">
          <img
            v-for="image in data.imagesCollection.items" :key="image.title"
            v-show="imageLoaded"
            @load="imageLoaded = true"
            preload
            format="webp"
            class="rounded-lg hover:-translate-x-1 hover:-translate-y-1 hover:cursor-pointer border-2 border-black aspect-[3/2] object-cover"
            :alt="image.title"
            :src="image.url"
          >
        </viewer>
      <div
        v-show="!imageLoaded"
        class="bg-gray-100 animate-pulse rounded-lg hover:cursor-pointer border-2 border-black aspect-[3/2] object-cover"
      />
    </div>
    <div id="description" class="text-center text-sm md:text-base py-2">
      <h1 v-if="isSearching" class="font-captainlight" v-html="blogTitle"></h1>
      <h1 v-else class="font-captainlight text-sm md:text-sm lg:text-base">
        {{ blogTitle }}
      </h1>
      <p
        class="font-cormorant py-1 text-sm md:text-base"
        v-html="blogAbstract"
      ></p>
    </div>
  </div>
</template>

<script>

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

  },
  data() {
    return {
      imageLoaded: false,
    };
  },
  computed: {
    blogAbstract() {
      const abstract = this.data.introduction.substr(0, 180) + "...";
      return this.$md.render(abstract);
    },
    blogTitle() {
      return this.isSearching
        ? `${this.data.tag} : ${this.data.queryTitle}`
        : `${this.data.tag} : ${this.data.title}`;
    },
  },
  mounted() {
    console.log(this.data);
  },
};
</script>
