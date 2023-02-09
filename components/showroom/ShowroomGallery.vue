<template>
  <section>
    <div class="relative flex flex-col justify-center items-center h-full mt-16 py-8 px-12">
      <div
        v-for="photo in photos"
        :key="photo.title"
        class="my-4 py-4"
        :data-aos="photo.index !== 1 && 'fade-in'"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        :class="photo.index % 2 === 0 ? 'self-center lg:self-end mx-2 lg:mx-0 lg:mr-12' : 'self-center lg:self-start mx-2 lg:mx-0 lg:ml-12'">
        <viewer>
          <keep-alive>
            <nuxt-img
              v.prlx.mobile
              v-prlx="{
                speed: 0.1,
                preserveInitialPosition: false,
                limit: { min: -30, max: 60 }
              }"
              class="h-[50vh] object-cover rounded-md shadow-md hover:shadow-lg xl:hover:opacity-80 hover:cursor-zoom-in"
              :src="photo.url"
              :alt="photo.title"/>
          </keep-alive>
        </viewer>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import aos from "../../mixins/aos"

export default {
  name: 'ShowroomGallery',
  mixins: [aos],
  computed: {
    ...mapState('showroom', { showroomData: 'data'}),

    photos() {
      if (!this.showroomData) return;
      return this.showroomData
    }
  },
  methods: {
    ...mapActions({ fetchPhotos: 'showroom/fetch' }),
  },
  async mounted() {
    await this.fetchPhotos();
  }
}
</script>
