<template>
  <section>
    <PhotographyPage v-if="pageIndex === 1" />
    <ShowRoomPage
      v-if="pageIndex === 2"
      @toggle-menu="setMenu"
    />
    <ContactPage v-if="pageIndex === 3" />
  </section>
</template>

<script>
import ContactPage from "./ContactPage.vue";
import PhotographyPage from "./PhotographyPage.vue";
import ShowRoomPage from "./ShowRoomPage.vue";

export default {
  name: "page-content",
  components: {
    ContactPage,
    PhotographyPage,
    ShowRoomPage,
  },
  props: {
    pageIndex: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    setMenu() {
      this.$parent.$emit('set-menu', payload);
    }
  }
};
</script>
