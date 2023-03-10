<template>
  <section>
    <div
      class="flex justify-center items-center w-2/3 p-4 m-4 mt-16 mx-auto transition ease-in"
      :class="isScrolling ? 'visible' : 'invisible'"
      data-aos="flip-down"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
      :data-aos-offset="offSet">
      <p class="text-center font-cormorant text-lg">
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
    isScrolling: {
      type: Boolean,
      default: false
    },
    offSet: {
      type: Number,
      default: 0
    }
  }
}
</script>
