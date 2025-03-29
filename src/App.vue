<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <header class="bg-gray-800 shadow-lg sticky top-0 z-10">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            <img 
              src="@/assets/logo.png" 
              alt="Xcentium"
              class="h-10"
            />
          </router-link>
          <div class="flex space-x-4">
            <router-link to="/" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Movies</router-link>
          </div>
        </div>
      </nav>
    </header>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <footer class="bg-gray-800 text-white py-6 mt-12">
      <div class="container mx-auto px-6 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Xcentium. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

