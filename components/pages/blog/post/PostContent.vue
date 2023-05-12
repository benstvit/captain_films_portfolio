<template>
  <div class="flex flex-col items-center justify-center h-auto gap-2 w-1/2 mx-auto pt-8 font-cormorant text-lg">
    <p class="py-4">{{ post.introduction }}</p>
    <p :class="questionClass">{{post.question1}}</p>
    <p> {{ post.paragraph1 }}</p>
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
    questionClass() {
      return "self-start font-captainbold py-2";
    },
  },
  methods: {
    formatContent(text) {
      const htmlString = `<p>${text}</p>`;
      const parser = new DOMParser();
      const html = parser.parseFromString(htmlString, "text/html");
      const content = html.getElementsByTagName("p")[0];
      content.innerHTML = content.innerHTML.replace(/__(.*?)__/g, `<b>$1</b>`);
    },
  },
};
</script>
