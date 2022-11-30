<template>
  <section>
    <div class="flex justify-between items-center w-max p-6 mx-auto bg-pink-200">
      <h1>{{ active.title }}</h1>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PhotoGallery',
  props: {
    active: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    console.log(this.activeSubmenu);
  }
}
</script>
