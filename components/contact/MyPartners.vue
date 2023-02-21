<template>
  <section>
    <div class="flex flex-col md:flex-row justify-around h-full md:h-64 items-center mt-4 py-4 px-8 bg-gray-100">
      <div
        v-for="(partner, index) in partners"
        :key="partner.name">
          <nuxt-img
            v-if="!partner.selected || menuDisplay"
            :src="partner.imgUrl"
            :alt="partner.name"
            @click="setActivePartner(index)"
            class="h-36 md:h-42 lg:h-52 object-contain hover:cursor-pointer hover:opacity-80 hover:opacity-70 md:my-4"/>
          <Transition name="fade">
            <div v-if="partner.selected" class="flex flex-col items-center h-fit w-60 my-4">
              <span><a class="text-center text-sm md:text-base text-teal-600 font-captainbold hover:text-teal-700 hover:font-bold " :href="partner.site" target="_blank">{{partner.name}}</a></span>
              <p class="font-captainlight text-xs md:text-sm lg:text-base text-center whitespace-normal">{{ partner.description}}</p>
            </div>
          </Transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyPartners',
  data() {
    return {
      partners: [
        {
          name: 'Mori Film Lab',
          imgUrl: '/morifilm.png',
          description: 'was created by two young passionates, Cole and Raph. More than a shop, they created a community and offer the holy trinity of film developing: quality, speed and affordability.',
          selected: false,
          site: 'https://morifilmlab.com/'
        },
        {
          name: 'Desenio',
          imgUrl: '/desenio.png',
          description: 'Frames can often come at a very expensive price. Desenio offers a wide range of fairly priced frames made of FSC© certified wood. There is something for every taste !',
          selected: false,
          site: 'https://desenio.be/fr-be/cadres-photo/'
        },
      ]
    }
  },
  computed: {
    menuDisplay() {
      const findActive = this.partners.filter(e => e.selected === true);
      return findActive.length === 0;
    },

  },
  methods: {
    setActivePartner(index) {
      this.partners.map(partner => partner.selected = false);
      const setActive = this.partners.map((e, i) => {
        if (i === index && e.selected) this.partners.forEach(p => p.selected = false);

        return i === index ? {...e, selected: true} : {...e };
      });
      this.partners = setActive;
    }
  }
}
</script>
