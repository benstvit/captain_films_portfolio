<template>
    <section>
    <nuxt-link
      class="flex flex-col justify-center items-center gap-6" to="/website-creation">
      <span
        class="flex justify-center items-center w-16 h-16 lg:w-24 lg:h-24 rotate-45 bg-white border-2 hover:font-bold hover:border border-black transition ease-in-out duration-200"
      >
        <div
          class="flex justify-center items-center w-14 h-14 lg:w-20 lg:h-20 transition ease-in-out opacity-90 hover:opacity-100 duration-200 border border-white hover:border-black bg-black hover:bg-white text-white hover:text-black hover:rotate-45 rounded-sm hover:shadow-lg hover:cursor-pointer hover:text-black"
        >
          <div
            class="font-cormorant text-center justify-self-start uppercase text-xs md:text-sm lg:text-lg -rotate-45 p-2"
          >
            Work
          </div>
        </div>
      </span>
    </nuxt-link>
  </section>
</template>

<script>

export default {
  name: 'Work Button',
}
</script>
