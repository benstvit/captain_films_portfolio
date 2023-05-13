<template>
  <div
    class="flex flex-col items-center justify-center h-auto gap-2 w-full px-4 md:px-0 mx-auto md:w-1/2 pt-0 md:pt-8 font-cormorant text-base md:text-lg text-justify"
  >
    <p class="py-4" v-html="content(post.introduction)"></p>
    <nuxt-img
          v-if="images[0]"
          preload
          format="webp"
          class="w-full h-auto my-2"
          :alt="images[0].title"
          :src="images[0].url"
        />
    <p :class="questionClass">{{ post.question1 }}</p>
    <p class="py-2" v-html="content(post.paragraph1)"></p>
    <nuxt-img
          v-if="images[1]"
          preload
          format="webp"
          class="w-full h-auto my-2"
          :alt="images[1].title"
          :src="images[1].url"
        />
    <p :class="questionClass">{{ post.question2 }}</p>
    <p class="py-2" v-html="content(post.paragraph2)"></p>
    <nuxt-img
          v-if="images[2]"
          preload
          format="webp"
          class="w-full h-auto my-2"
          :alt="images[2].title"
          :src="images[2].url"
        />
    <p :class="questionClass">{{ post.question3 }}</p>
    <p class="py-2" v-html="content(post.paragraph3)"></p>
    <nuxt-img
          v-if="images[3]"
          preload
          format="webp"
          class="w-full h-auto my-2"
          :alt="images[3].title"
          :src="images[3].url"
        />
    <p :class="questionClass">{{ post.question4 }}</p>
    <p class="py-2" v-html="content(post.paragraph4)"></p>
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
      return "self-start font-cormorant font-bold text-base md:text-xl italic pt-6 overflow-visible";
    },
  },
  methods: {
    content(text) {
      if (!text) return;
      console.log(this.images);

      return this.$md.render(text);
    },
  },
};
</script>
