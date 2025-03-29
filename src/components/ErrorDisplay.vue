<template>
  <div class="flex flex-col items-center justify-center py-12">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <h3 class="text-xl font-medium text-gray-400 mb-2">{{ message }}</h3>
    <p class="text-gray-500">Try a different search term</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>