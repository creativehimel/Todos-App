<script setup>
import {useTaskStore} from "@/store/TaskStore";
import Task from "@/components/Task.vue";
const taskList = useTaskStore()
</script>

<template>
  <div class="flex border-b border-indigo-200 pb-3" v-for="task in taskList.tasks" :key="task.id">
  <Task :task="task"/>
  </div>
</template>

<style scoped>

</style>