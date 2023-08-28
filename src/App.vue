<script setup>
import Header from "@/components/Header.vue";
import AddTask from "@/components/AddTask.vue";
import TaskList from "@/components/TaskList.vue";
import FilterTask from "@/components/FilterTask.vue";
</script>

<template>
  <main class="max-h-screen bg-gray-200 h-screen flex items-center flex-col">
    <div class="max-w-xl w-full bg-white px-8 pt-8 rounded mt-28 shadow">
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
