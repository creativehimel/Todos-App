<script setup>
import {RouterLink} from "vue-router";
import {useAuthStore} from "@/store/AuthStore";
const authStore = useAuthStore()
</script>

<template>
  <section class="bg-white py-3 shadow px-3">
    <header class="container mx-auto">
      <nav class="flex items-center justify-between">
        <RouterLink to="/">
          <img src="@/assets/images/logo.png" alt="Logo" class="w-12">
        </RouterLink>

        <ul class="gap-x-6 font-semibold text-gray-700 text-lg hidden md:flex">
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
        <div class="space-x-3" v-if="!authStore.isAuthenticated">
          <button class="text-white hover:text-indigo-700 border-2 border-indigo-400 hover:bg-white bg-indigo-500 px-8 py-2 rounded text-sm font-medium tracking-wide transition-colors duration-300">
            <RouterLink to="/login">Login</RouterLink>
          </button>
          <button class="text-indigo-700 hover:text-white bg-white border-2 border-indigo-400 px-8 py-2 rounded text-sm font-medium tracking-wide hover:bg-indigo-600 transition-colors duration-300">
            <RouterLink to="/register">Register</RouterLink>
          </button>
        </div>
      </nav>
    </header>
  </section>
</template>

<style scoped>

</style>