<template>
  <section>
    <div class="flex justify-between items-center my-4 mx-12 p-4">
      <div
        v-for="(partner, index) in partners"
        :class="menuDisplay ? 'flex justify-between items-center' : 'flex justify-center items-center gap-24'"
        :key="partner.name">
          <nuxt-img
            v-if="!partner.selected || menuDisplay"
            :src="partner.imgUrl"
            :alt="partner.name"
            @click="setActivePartner(index)"
            class="h-[24vh] w-fit object-contain hover:cursor-pointer hover:opacity-80 transition ease-in 3s"/>
        <Transition name="fade" >
        <p class="font-captainlight text-md text-center" v-if="partner.selected">{{ partner.description}}</p>
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
          imgUrl: 'https://cdn.shopify.com/s/files/1/0406/4313/3595/files/Screen_Shot_2020-09-23_at_5.02.01_pm_1070x.png?v=1614355014',
          description: 'Mori Film Lab is blablablabla',
          selected: false
        },
        {
          name: 'Atelier KZG',
          imgUrl: '/KZG.png',
          description: 'Atelier KZG is blablablabla',
          selected: false
        },
        {
          name: 'Desenio',
          imgUrl: 'data:image/png;base64,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',
          description: 'Desenio is blablablabla',
          selected: false
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
