<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-8 md:w-8 hover:cursor-pointer icon icon-tabler icon-tabler-door" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" :stroke="stroke" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M14 12v.01" />
    <path d="M3 21h18" />
    <path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" />
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
