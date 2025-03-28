<template>
  <section >
    <div class="flex h-full justify-center items-center over bg-black opacity-70">
      <CaptainFilmsText class="animate-pulse" />
      <div class="flex justify-center items-center lg:w-full border-1 border-black lg:mx-4">
        <div class="relative grid grid-cols-6 w-full">
          <Loader class="fixed left-1 top-1 z-100" />
          <div
            v-for="(menu, index) in menus"
            :key="menu + index"
            class="relative flex justify-center"
            :class="menuGrid(index + 1)"
          >
            <div
              class="flex flex-grow items-center justify-center gap-4 md:gap-12 w-full"
            >
              <div
                class="aspect-[3/2] w-fit h-[33vh] md:h-[32vh] lg:h-[50vh] lg:w-full object-cover bg-gray-200 animate-pulse border border-1 border-black"
              />
            <h1
              class="text-black absolute top-[45%] font-cormorant uppercase tracking-widest font-black text-center sm:text-xl lg:text-4xl"
            >
              {{ menu }}
            </h1>
          </div>
          <BlogButton
            class="fixed md:absolute left-1/2 -ml-10 top-1/3 -mt-8 md:-mt-8 lg:left-1/4 lg:-ml-12 lg:top-1/2 lg:-mt-12"
          />
          <WorkButton
            :menu-display="true"
            class="fixed md:absolute left-1/2 -ml-10 top-2/3 -mt-8 md:-mt-8 lg:left-3/4 lg:-ml-12 lg:top-1/2 lg:-mt-12"
          />
          </div>
        </div>
      </div>
      <CaptainFilmsText class="animate-pulse" />
    </div>
  </section>
</template>

<script>
import CaptainFilmsText from "/components/partials/CaptainFilmsText";
import Loader from "./partials/Loader.vue"

export default {
  name: "SharedBanner",
  inject: ["setMenu"],
  components: {
    CaptainFilmsText,
    Loader
  },
  data() {
    return {
      menus: ['Photography', 'Showroom', 'Contact']
    }
  },
  methods: {
    menuGrid(index) {
      return index === 3
        ? "col-span-6 hover:cursor-pointer hover:opacity-80 hover:shadow-inner"
        : "col-span-6 lg:col-span-3 hover:cursor-pointer hover:opacity-80 hover:shadow-inner";
    },
  },
};
</script>
