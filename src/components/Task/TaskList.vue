<script setup>
import {useTaskStore} from "@/store/TaskStore";
import Task from "@/components/Task/Task.vue";
const taskList = useTaskStore()
</script>

<template>
  <div class="flex border-b border-indigo-200 py-3" v-for="task in taskList.getFilterTaskList" :key="task.id">
  <Task :task="task"/>
  </div>
</template>

<style scoped>

</style>