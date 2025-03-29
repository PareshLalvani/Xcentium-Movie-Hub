<template>
  <main class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-white mb-4 md:mb-0">Movie Hub</h1>
      <MovieSearch
        v-model="searchQuery"
        @search="handleSearch"
      />
    </div>

    <ErrorDisplay v-if="movieStore.error" :message="movieStore.error" />
    <LoadingSpinner v-if="movieStore.loading" />

    <div v-if="!movieStore.loading && !movieStore.error">
      <div v-if="movieStore.movies.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <MovieCard v-for="movie in movieStore.movies" :key="movie.imdbID" :movie="movie" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMovieStore } from '@/stores/movie'
import MovieCard from '@/components/MovieCard.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ErrorDisplay from '@/components/ErrorDisplay.vue'
import MovieSearch from '@/components/MovieSearch.vue'

const movieStore = useMovieStore()
const { fetchMovies } = movieStore
const searchQuery = ref<string>('')

onMounted(async () => {
  await fetchMovies()
})

const handleSearch = async () => {
  await fetchMovies(searchQuery.value)
}
</script>