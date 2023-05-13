<template>
  <div class="flex flex-col items-center gap-2 mx-4 md:mx-20 pt-8">
      <h1 class="col-span-12 font-cormorant font-semibold p-4 text-3xl text-center">{{ post.title }}</h1>
      <div class="flex flex-col items-start font-cormorant font-light text-sm">
        <nuxt-img
          preload
          format="webp"
          class="w-full md:w-auto h-auto md:h-[70vh]"
          :alt="post.thumbnail.title"
          :src="post.thumbnail.url"
        />
        <div class="flex flex-col md:flex-row justify-start items-center gap-0 md:gap-2 py-2 w-full text-xs md:text-base">
          <p>{{date}}</p>
          <p class="md:block hidden">|</p>
          <p>Tag: {{post.tag}}</p>
          <p class="md:block hidden">|</p>
          <p>{{post.location}}</p>
          <p class="md:ml-auto">{{post.photoCredits}}</p>
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
