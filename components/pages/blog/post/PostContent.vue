<template>
  <div
    class="relative flex flex-col items-center justify-center h-auto gap-2 w-1/2 mx-auto pt-8 font-cormorant text-lg text-justify"
  >
    <p class="py-4" v-html="content(post.introduction)"></p>
    <nuxt-img
          preload
          format="webp"
          class="w-full h-auto"
          :alt="images[0].title"
          :src="images[0].url"
        />
    <p :class="questionClass">{{ post.question1 }}</p>
    <p v-html="content(post.paragraph1)"></p>
    <p :class="questionClass">{{ post.question2 }}</p>
    <p v-html="content(post.paragraph2)"></p>
    <p :class="questionClass">{{ post.question3 }}</p>
    <p v-html="content(post.paragraph3)"></p>
    <p :class="questionClass">{{ post.question4 }}</p>
    <p v-html="content(post.paragraph4)"></p>
  </div>
</template>

<script>
export default {
  name: "post-content",
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    images() {
      return this.post.imagesCollection.items;
    },
    questionClass() {
      console.log(this.post);
      return "self-start font-playfair pt-4 overflow-visible";
    },
  },
  methods: {
    content(text) {
      if (!text) return;

      return this.$md.render(text);
    },
  },
};
</script>
