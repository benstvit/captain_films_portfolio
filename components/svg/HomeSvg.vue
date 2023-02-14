<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-8 md:w-8 xl:h-10 xl:w-10 hover:cursor-pointer icon icon-tabler icon-tabler-window" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" :stroke="stroke" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 3c-3.866 0 -7 3.272 -7 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-10c0 -3.728 -3.134 -7 -7 -7z" />
    <line x1="5" y1="13" x2="19" y2="13" />
    <line x1="12" y1="3" x2="12" y2="21" />
  </svg>
</template>

<script>
export default {
  props: {
    stroke: {
      type: String,
      default: 'none'
    }
  }
}
</script>
