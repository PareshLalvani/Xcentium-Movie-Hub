<template>
  <div class="w-full md:w-1/3">
    <img
      :src="posterUrl"
      :alt="title"
      class="rounded-lg shadow-lg w-full"
      loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  posterUrl: string
  title: string
}>()
</script>