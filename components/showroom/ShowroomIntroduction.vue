<template>
  <section class="mt-16">
    <Transition name="fade">
      <div
        :class="isScrolling ? 'invisible' : 'visible'"
        class="flex justify-center w-full mx-auto font-cormorant text-lg md:text-xl animate-bounce transition ease-in" >
        <span>↓ Scroll Down ↓</span>
      </div>
    </Transition >
    <div
      class="flex justify-center items-center w-2/3 p-2 my-16 mx-auto transition ease-in"
      data-aos="fade-in"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
      :data-aos-offset="350">
      <p class="text-center font-cormorant text-base md:text-lg">
        It is always a pleasure to see your photographs leave the digital world of Instagram and Internet
        to come to life in people's homes.
        You will find on this page pictures of the photographs that left the nest to go and live their own life.<br>
        Feel free to <span class="underline decoration-3 cursor-pointer hover:font-bold" @click="navigateToContact">contact me</span> if you wish to adopt one.
      </p>
    </div>
  </section>
</template>

<script>
import aos from "../../mixins/aos"

export default {
  name: 'ShowroomIntroduction',
  mixins: [aos],
  props: {
    scrollTop: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    isScrolling() {
      return this.scrollTop > 60;
    }
  },
  methods: {
    navigateToContact() {
      this.$parent.$emit('toggle-menu', { direction: 'right', index: 2 });
      this.$parent.$emit('reset-translateY');
    }
  }
}
</script>
