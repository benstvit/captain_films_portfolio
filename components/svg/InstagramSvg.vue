<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-8 md:w-8 hover:cursor-pointer icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" :stroke="stroke" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="3" />
    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
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
