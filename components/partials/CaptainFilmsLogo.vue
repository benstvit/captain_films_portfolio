<template>
   <section>
    <div
      class="w-24 flex flex-col justify-center items-center gap-6"
      v-if="menuDisplay">
      <div class="flex-col justify-center">
        <h1
          v-for="(letter, index) in 'Captain'"
          class="text-center py-1 hidden lg:block md:text-2xl lg:text-4xl text-gray-800 whitespace-nowrap uppercase font-cormorant"
          :key="letter + '-' + index">
            {{letter}}
        </h1>
      </div >
      <div class="flex-col justify-center items-center">
        <h1
          v-for="(letter, index) in 'Films'"
          class="text-center py-1 hidden lg:block md:text-2xl lg:text-4xl text-gray-800 whitespace-nowrap uppercase font-cormorant"
          :key="letter + '-' + index">
            {{letter}}
        </h1>
      </div >
    </div >
   </section>
</template>

<script>
export default {
  name: 'CaptainFilmsLogo',
  props: {
    menuDisplay: {
      type: Boolean,
      default: false
    }
  }
}
</script>
