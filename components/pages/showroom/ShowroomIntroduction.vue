<template>
  <section class="mt-16">
    <div
      :class="isScrolling ? 'opacity-0' : 'opacity-100'"
      class="flex justify-center w-full mx-auto font-cormorant text-lg md:text-xl animate-bounce transition ease-out duration-600" >
      <span>↓ Scroll Down ↓</span>
    </div>
    <div
      class="flex justify-center items-center rounded-md w-2/3 p-2 my-2 md:my-16 mx-auto"
      data-aos="fade-in"
      data-aos-easing="ease-in-sine"
      data-aos-duration="500"
      :data-aos-offset="370">
      <p class="font-cormorant text-center text-base md:text-lg tracking-wide lg:whitespace-nowrap">
        It is always a pleasure to see your photographs leave the digital world of Instagram and Internet
        to come to life in people's homes.<br>
        You will find on this page pictures of the photographs that left the nest to go and live their own life.<br>
        Feel free to <span class="underline decoration-3 cursor-pointer hover:font-bold" @click="setMenu({ direction: 'right', index: 2 })">contact me</span> if you wish to adopt one.
      </p>
    </div>
  </section>
</template>

<script>
import aos from "../../../mixins/aos"

export default {
  name: 'ShowroomIntroduction',
  inject: ['setMenu'],
  mixins: [aos],
  props: {
    scrollTop: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    isScrolling() {
      return this.scrollTop > 90;
    }
  },
}
</script>
