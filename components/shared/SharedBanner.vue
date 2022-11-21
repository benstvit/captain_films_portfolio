<template>
  <section>
    <div class="grid grid-cols-6">
      <div
        id="left"
        class="col-span-2 flex flex-col justify-end items-center bg-white w-full p-4"
      >
        <p class="font-cormorant text-slate-600 text-2xl">Photography</p>
      </div>
      <div
        id="center"
        class="col-span-2 flex flex-col items-center bg-white w-full p-4 gap-4"
      >
        <nuxt-img class="w-24 h-24" src="/logo-solo.png"></nuxt-img>
        <h1 class="text-center font-captainbold text-6xl pb-4 text-slate-800">
          Captain Films
        </h1>
        <p class="text-slate-600 font-cormorant text-2xl">Music</p>
      </div>
      <div
        id="right"
        class="col-span-2 flex flex-col items-center justify-end bg-white w-full p-4"
      >
        <p class="font-cormorant text-slate-600 text-2xl">web development</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SharedBanner",
  mounted() {
    this.fetchImages();
  },
  methods: {
    fetchImages() {
      const rawPhotos = this.$axios.get(
        "https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6fbbbf8a9d5ff41558c9100d42279af6&photoset_id=72177720303881549&user_id=184230567%40N04&format=json&nojsoncallback=1"
      );
      console.log(rawPhotos);
    },
  },
};
</script>
