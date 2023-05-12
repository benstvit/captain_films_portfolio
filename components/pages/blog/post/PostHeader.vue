<template>
  <div class="flex flex-col items-center gap-2 md:mx-20 pt-8">
      <h1 class="col-span-12 font-cormorant font-semibold p-4 text-3xl text-center">{{ post.title }}</h1>
      <div class="flex flex-col items-start font-cormorant font-light text-sm">
        <nuxt-img
          preload
          format="webp"
          class="w-auto h-[70vh]"
          :alt="post.thumbnail.title"
          :src="post.thumbnail.url"
        />
        <div class="flex justify-start items-center gap-2 py-2 w-full">
          <p>{{date}}</p>
          <p>|</p>
          <p>Tag: {{post.tag}}</p>
          <p>|</p>
          <p>{{post.location}}</p>
          <p class="ml-auto">{{post.photoCredits}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'post-header',
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    date() {
      const date = new Date(this.post.date)
      return date.toLocaleDateString();
    },
  }
}
</script>
