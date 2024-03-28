<template>
  <section>
    <nuxt-link
      class="flex flex-col justify-center items-center gap-6" :class="menuName === 'home' && 'mx-4'" :to="menuRoute">
      <span
        class="flex justify-center items-center bg-white border-2 hover:font-bold hover:border border-black transition ease-in-out duration-200"
        :class="postClass ? 'w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16' : 'w-16 h-16 lg:w-24 lg:h-24 rotate-45'"
      >
        <div
          class="flex justify-center items-center transition ease-in-out opacity-90 hover:opacity-100 duration-200 border border-white hover:border-black bg-black hover:bg-white text-white hover:text-black hover:rotate-45 rounded-sm hover:shadow-lg hover:cursor-pointer hover:text-black"
          :class="postClass ? 'w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' : 'w-14 h-14 lg:w-20 lg:h-20'"
        >
          <div
            class="font-cormorant text-lg justify-self-start uppercase p-2"
            :class="postClass ? 'text-[0.55rem] md:text-[0.65rem] lg:text-xs -rotate-45' : 'text-xs md:text-sm lg:text-lg -rotate-45'"
          >
            {{ menuName }}
          </div>
        </div>
      </span>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  name: "blog-button",
  props: {
    postClass: {
      type: Boolean,
      default: false
    },
    menuName: {
      type: String,
      default: "journal"
    },
  },
  computed: {
    menuRoute() {
      if (this.menuName === 'home') return '/';
      if (this.menuName === 'work') return '/creation-site-web'

      return `/${this.menuName}`;
    },
  },
};
</script>
