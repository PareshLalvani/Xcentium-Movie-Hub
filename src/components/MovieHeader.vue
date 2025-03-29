<template>
  <div>
    <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">{{ title }}</h1>
    
    <div class="flex flex-wrap items-center gap-3 mb-6">
      <span class="text-gray-400">{{ year }}</span>
      <span class="text-gray-400">•</span>
      <span class="text-gray-400">{{ runtime }}</span>
      <span class="text-gray-400">•</span>
      <span class="text-gray-400">{{ rated }}</span>
      <div class="flex items-center ml-2">
        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <span class="text-white ml-1">{{ rating }}/10</span>
      </div>
    </div>

    <div class="flex flex-wrap gap-2 mb-6">
      <span
        v-for="genre in genres"
        :key="genre"
        class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
      >
        {{ genre }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  year: string
  runtime: string
  rated: string
  rating: string
  genres: string[]
}>()
</script>