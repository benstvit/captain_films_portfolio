<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4 md:h-6 md:w-6 icon icon-tabler icon-tabler-chevron-left"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    :stroke="stroke"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="15 6 9 12 15 18" />
  </svg>
</template>

<script>
export default {
  name:"left-arrow-svg",
  props: {
    stroke: {
      type: String,
      default: "#27272A"
    }
  }
}
</script>
