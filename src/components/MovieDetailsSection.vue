<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div>
      <h3 class="text-lg font-bold text-white mb-2">Details</h3>
      <ul class="text-gray-400 space-y-1">
        <li><span class="font-medium text-gray-300">Director:</span> {{ director }}</li>
        <li><span class="font-medium text-gray-300">Writer:</span> {{ writer }}</li>
        <li><span class="font-medium text-gray-300">Actors:</span> {{ actors }}</li>
        <li><span class="font-medium text-gray-300">Language:</span> {{ language }}</li>
        <li><span class="font-medium text-gray-300">Country:</span> {{ country }}</li>
        <li><span class="font-medium text-gray-300">Awards:</span> {{ awards }}</li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-bold text-white mb-2">Ratings</h3>
      <ul class="text-gray-400 space-y-2">
        <li v-for="rating in ratings" :key="rating.Source">
          <span class="font-medium text-gray-300">{{ rating.Source }}:</span> {{ rating.Value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  director: string
  writer: string
  actors: string
  language: string
  country: string
  awards: string
  ratings: Array<{
    Source: string
    Value: string
  }>
}>()
</script>