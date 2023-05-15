<template>
  <section>
    <nuxt-link class="w-24 flex flex-col justify-center items-center gap-6 mx-4 my-52" :to="menuRoute">
      <span
        class="flex justify-center items-center w-24 h-24 border-2 hover:border border-black transition ease-in-out duration-200"
      >
        <div
          class="flex justify-center items-center transition ease-in-out duration-200 w-20 h-20 border border-white hover:border-black bg-black hover:bg-white text-white hover:text-black hover:rotate-45 rounded-sm hover:shadow-lg hover:cursor-pointer hover:text-black"
        >
          <div
            class="font-cormorant font-semibold text-lg justify-self-start uppercase"
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
  name: "side-menu-button",
  props: {
    menuName: {
      type: String,
      default: "blog"
    },
  },
  computed: {
    menuRoute() {
      return `/${this.menuName}`;
    },
  },
};
</script>
