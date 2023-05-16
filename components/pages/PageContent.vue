<template>
  <section>
    <PhotographyPage v-if="pageIndex === 1" />
    <ShowRoomPage v-if="pageIndex === 2" />
    <ContactPage v-if="pageIndex === 3" />
  </section>
</template>

<script>
import ContactPage from "./contact/ContactPage.vue";
import PhotographyPage from "./photography/PhotographyPage.vue";
import ShowRoomPage from "./showroom/ShowRoomPage.vue";

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
};
</script>
