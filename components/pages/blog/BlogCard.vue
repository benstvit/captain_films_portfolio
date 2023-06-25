<template>
  <div>
    <div class="shadow-md border-b-[7px] border-black bg-black rounded-lg my-4">
      <nuxt-img
        preload
        format="webp"
        title="Read more..."
        class="rounded-lg hover:opacity-90 hover:shadow-lg hover:cursor-pointer border-2 border-black aspect-[3/2] object-cover"
        :alt="blog.thumbnail.title"
        :src="blog.thumbnail.url"
      >
      </nuxt-img>
    </div>
    <div id="description" class="text-sm md:text-base py-4 md:py-2">
      <h1
        v-if="isSearching"
        class="font-captainlight uppercase"
        v-html="blogTitle"
      ></h1>
      <h1
        v-else
        class="font-captainlight text-sm md:text-sm lg:text-base uppercase"
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
    blog: {
      type: Object,
      default: () => {},
    },
    isSearching: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    blogAbstract() {
      const abstract = this.blog.introduction.substr(0, 180) + "...";
      return this.$md.render(abstract);
    },
    blogTitle() {
      return this.isSearching ? `${this.blog.tag} : ${this.blog.queryTitle}` : `${this.blog.tag} : ${this.blog.title}`;
    },
  },
};
</script>
