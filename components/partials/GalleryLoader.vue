<template>
   <section>
      <div class="grid grid-cols-4 my-2">
        <div
          v-for="number in 4"
          :key="number"
          class="col-span-4 md:col-span-2">
          <ContentLoader class="h-20 lg:h-32 px-4" />
        </div>
      </div>
   </section>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  name:'Galleryloader',
  components: {
    ContentLoader,
  }

}
</script>
