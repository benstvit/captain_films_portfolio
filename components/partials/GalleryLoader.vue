<template>
   <section>
      <div class="grid grid-cols-4">
        <div
          v-for="number in 4"
          :key="number"
          class="col-span-2">
          <ContentLoader class="w-auto h-36 mx-4" />
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
