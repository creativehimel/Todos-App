<script setup>
import {RouterLink} from "vue-router";
import {useAuthStore} from "@/store/AuthStore";
import {ref} from "vue";
const authStore = useAuthStore()
const isActive = ref(false)
</script>

<template>
  <section class="bg-white py-3 shadow px-3">
    <header class="container mx-auto">
      <nav class="flex items-center justify-between">
        <RouterLink to="/">
          <img src="@/assets/images/logo.png" alt="Logo" class="w-12">
        </RouterLink>

        <ul class="gap-x-6 font-semibold text-gray-700 text-lg md:flex hidden">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/task">Task</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>
        <ul v-if="isActive" class="font-semibold text-white text-lg flex flex-col md:hidden absolute top-[73px] space-y-3 py-6 left-0 text-center bg-indigo-600 w-full">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/task">Task</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>
        <div class="space-x-3 flex items-center" >
          <button v-if="!authStore.isAuthenticated" class="text-white hover:text-indigo-700 border-2 border-indigo-400 hover:bg-white bg-indigo-500 px-8 py-2 rounded text-sm font-medium tracking-wide transition-colors duration-300">
            <RouterLink to="/login">Login</RouterLink>
          </button>
          <button v-if="!authStore.isAuthenticated" class="text-indigo-700 hover:text-white bg-white border-2 border-indigo-400 px-8 py-2 rounded text-sm font-medium tracking-wide hover:bg-indigo-600 transition-colors duration-300">
            <RouterLink to="/register">Register</RouterLink>
          </button>
          <button v-if="authStore.isAuthenticated" @click="authStore.logout()" class="text-indigo-700 hover:text-white bg-white border-2 border-indigo-400 px-8 py-2 rounded text-sm font-medium tracking-wide hover:bg-indigo-600 transition-colors duration-300">
            <RouterLink to="/register">Logout</RouterLink>
          </button>
          <button @click="isActive = !isActive">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>

          </button>
        </div>
      </nav>
    </header>
  </section>
</template>

<style scoped>

</style>