<template>
  <div class="flex justify-center items-start gap-12 mx-4 md:mx-20 md:pt-6">
    <div
      class="relative flex flex-col items-start font-cormorant font-light text-sm"
    >
      <h1
        class="absolute top-2 md:top-8 right-2 left-2 text-center mx-auto font-cormorant font-semibold p-4 text-xl md:text-4xl text-center text-white"
      >
        {{ post.title }}
      </h1>
      <nuxt-img
        preload
        quality="60"
        format="webp"
        class="w-full md:w-auto h-auto lg:h-[70vh]"
        :alt="post.thumbnail.title"
        :src="post.thumbnail.url"
      />
      <div
        class="flex flex-row justify-start items-center gap-2 md:py-2 w-full text-[0.6rem] md:text-base"
      >
        <p>{{ date }}</p>
        <p v-if="post.tag" class="md:block hidden">|</p>
        <p class="md:block hidden">Tag: {{ post.tag }}</p>
        <p v-if="post.location">|</p>
        <p>{{ post.location }}</p>
        <p class="ml-auto">📸 {{ post.photoCredits }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post-header",
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    date() {
      const date = new Date(this.post.date);
      return date.toLocaleDateString();
    },
  },
};
</script>
