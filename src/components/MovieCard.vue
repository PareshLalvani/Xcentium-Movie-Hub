<template>
  <article
    class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
    @click="$router.push({ name: 'movie', params: { id: movie.imdbID } })"
  >
    <img
      :src="movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/400'"
      :alt="movie.Title"
      class="w-full h-64 object-cover"
      loading="lazy"
    />
    <div class="p-4">
      <h3 class="text-white font-bold text-lg mb-2 truncate">{{ movie.Title }}</h3>
      <div class="flex items-center justify-between">
        <span class="text-gray-400 text-sm">{{ movie.Year }}</span>
        <span class="bg-purple-600 text-white text-xs px-2 py-1 rounded">{{ movie.Type }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Movie } from '@/stores/movie'

defineProps<{
  movie: Movie
}>()
</script>