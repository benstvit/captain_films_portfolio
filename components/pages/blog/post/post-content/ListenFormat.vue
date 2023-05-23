<template>
  <section>
    <p class="test py-4" v-html="content(post.introduction)"></p>

    <div v-for="num in 8" :key="num">
      <p class="py-2" v-html="content(post[`paragraph${num}`])"></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'listen-format',
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
