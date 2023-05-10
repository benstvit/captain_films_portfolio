<template>
  <section>
    <div class="w-24 flex flex-col justify-center items-center gap-6 mx-4">
      <div
        class="flex justify-center items-center w-20 h-20 border border-gray-800 hover:border-teal-600 hover:shadow-sm hover:cursor-pointer hover:font-bold hover:text-teal-600"
      >
        <nuxt-link
          to="/blog"
          class="font-cormorant text-lg justify-self-start uppercase"
        >
          Blog
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "side-menu",
};
</script>
