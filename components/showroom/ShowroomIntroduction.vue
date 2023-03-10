<template>
  <section class="mt-16">
    <Transition name="fade">
      <div
        v-if="!isScrolling"
        class="flex justify-center w-full mx-auto font-cormorant text-lg md:text-xl" >
        ↓ Scroll Down ↓
      </div>
    </Transition >
    <div
      class="flex justify-center items-center w-2/3 p-8 my-20 mx-auto transition ease-in"
      data-aos="fade-in"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
      :data-aos-offset="350">
      <p class="text-center font-cormorant text-base md:text-lg">
        Voici un text d'introduction dont le but est de poser les fondements d'une belle réflexion.
        Voici un text d'introduction dont le but est de poser les fondements d'une belle réflexion.
        Voici un text d'introduction dont le but est de poser les fondements d'une belle réflexion.
        Voici un text d'introduction dont le but est de poser les fondements d'une belle réflexion.
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
      return this.scrollTop > 50;
    }
  }
}
</script>
