<script setup>
import Header from "@/components/Task/Header.vue";
import TaskList from "@/components/Task/TaskList.vue";
import AddTask from "@/components/Task/AddTask.vue";
import FilterTask from "@/components/Task/FilterTask.vue";
import {useAuthStore} from "@/store/AuthStore";
import router from "@/router";
const authStore = useAuthStore()
if (!authStore.isAuthenticated){
  router.push('/login')
}
</script>

<template>
  <main class="min-h-screen h-auto bg-gray-200 flex items-center flex-col py-10">
    <div class="max-w-xl w-full bg-white px-8 pt-8 rounded mt-16 shadow">
      <Header/>
      <div class="my-8">
        <AddTask/>
        <TaskList/>
        <FilterTask/>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>