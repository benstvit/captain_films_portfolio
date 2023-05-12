<template>
  <section>
    <div class="w-24 flex flex-col justify-center items-center gap-6 mx-4 my-52">
      <span
        class="flex justify-center items-center w-24 h-24 border-2 hover:border border-black"
      >
        <div
          class="flex justify-center items-center transition ease-in-out duration-200 w-20 h-20 border border-white hover:border-black bg-black hover:bg-white text-white hover:text-black hover:-rotate-45 rounded-sm hover:shadow-lg hover:cursor-pointer hover:text-black"
        >
          <nuxt-link
            :to="menuRoute"
            class="font-cormorant font-semibold text-lg justify-self-start uppercase"
          >
            {{ menuName }}
          </nuxt-link>
        </div>
      </span>
    </div>
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
  mounted() {
    console.log(this.menuName);
  }
};
</script>
