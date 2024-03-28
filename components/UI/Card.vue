<template>
  <div v-if="data.thumbnail">
    <div
      class="ease-in duration-100 hover:-translate-x-1 hover:-translate-y-1 border-black bg-black rounded-lg my-0 md:my-4"
    >
      <nuxt-img
        v-show="imageLoaded"
        @load="imageLoaded = true"
        preload
        format="webp"
        title="Read more..."
        class="rounded-lg hover:cursor-pointer border-2 border-black aspect-[3/2] object-cover"
        :alt="data.thumbnail.title"
        :src="data.thumbnail.url"
      >
      </nuxt-img>
      <div
        v-show="!imageLoaded"
        class="bg-gray-100 animate-pulse rounded-lg hover:cursor-pointer border-2 border-black aspect-[3/2] object-cover"
      />
    </div>
    <div id="description" class="text-sm md:text-base py-2">
      <h1
        v-if="isSearching"
        class="font-captainlight"
        v-html="blogTitle"
      ></h1>
      <h1
        v-else
        class="font-captainlight text-sm md:text-sm lg:text-base"
      >
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
  name: "card",
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
};
</script>
