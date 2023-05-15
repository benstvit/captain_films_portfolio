<template>
  <section>
    <nuxt-link
      class="flex flex-col justify-center items-center gap-6 mx-4" :to="menuRoute">
      <span
        class="flex justify-center items-center w-24 h-24 bg-white border-2 hover:font-bold hover:border border-black transition ease-in-out duration-200"
        :class="customSize && 'w-14 h-14'"
      >
        <div
          class="flex justify-center items-center transition ease-in-out opacity-90 hover:opacity-100 duration-200 w-20 h-20 border border-white hover:border-black bg-black hover:bg-white text-white hover:text-black hover:rotate-45 rounded-sm hover:shadow-lg hover:cursor-pointer hover:text-black"
          :class="customSize && 'w-12 h-12'"
        >
          <div
            class="font-cormorant text-lg justify-self-start uppercase p-2"
            :class="customSize && 'text-sm'"
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
    customSize: {
      type: String,
      default: ''
    },
    menuName: {
      type: String,
      default: "blog"
    },
  },
  computed: {
    menuRoute() {
      if (this.menuName === 'home') return '/';

      return `/${this.menuName}`;
    },
  },
};
</script>
