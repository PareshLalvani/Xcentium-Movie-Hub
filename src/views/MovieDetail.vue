<template>
  <main class="container mx-auto px-4 py-8">
    <MovieBackButton />
    
    <ErrorDisplay v-if="movieStore.error" :message="movieStore.error" />
    <LoadingSpinner v-if="movieStore.loading" />

    <div v-if="!movieStore.loading && !movieStore.error && movieDetails" class="flex flex-col md:flex-row gap-8">
      <MoviePoster
        :poster-url="movieDetails.Poster !== 'N/A' ? movieDetails.Poster : 'https://placehold.co/600x400'"
        :title="movieDetails.Title"
      />

      <div class="flex-1">
        <MovieHeader
          :title="movieDetails.Title"
          :year="movieDetails.Year"
          :runtime="movieDetails.Runtime"
          :rated="movieDetails.Rated"
          :rating="movieDetails.imdbRating"
          :genres="movieDetails.Genre.split(',').map(g => g.trim())"
        />

        <div class="mb-6">
          <h2 class="text-xl font-bold text-white mb-2">Plot</h2>
          <p class="text-gray-300 leading-relaxed">{{ movieDetails.Plot }}</p>
        </div>

        <MovieDetailsSection
          :director="movieDetails.Director"
          :writer="movieDetails.Writer"
          :actors="movieDetails.Actors"
          :language="movieDetails.Language"
          :country="movieDetails.Country"
          :awards="movieDetails.Awards"
          :ratings="movieDetails.Ratings"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useMovieStore } from '@/stores/movie'
import MovieBackButton from '@/components/MovieBackButton.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ErrorDisplay from '@/components/ErrorDisplay.vue'
import MoviePoster from '@/components/MoviePoster.vue'
import MovieHeader from '@/components/MovieHeader.vue'
import MovieDetailsSection from '@/components/MovieDetailsSection.vue'

const route = useRoute()
const movieStore = useMovieStore()
const { fetchMovieDetails } = movieStore
const { movieDetails } = storeToRefs(movieStore)

onMounted(() => {
  fetchMovieDetails(route.params.id as string)
})

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      fetchMovieDetails(newId as string)
    }
  }
)
</script>