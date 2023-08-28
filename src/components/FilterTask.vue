<script setup>
import { useTaskStore } from "@/store/TaskStore";
const filterTaskStore = useTaskStore()
</script>
<template>
  <div class="flex justify-end text-indigo-600 mt-8">
    <div class="flex space-x-4">
      <label class="inline-flex items-center">
        <input type="radio" name="sortable" class="h-4 w-4 text-indigo-500">
        <span class="ml-1 text-sm">All ({{ filterTaskStore.countAllTask }})</span>
      </label>
      <label class="inline-flex items-center">
        <input type="radio" name="sortable" class="h-4 w-4 text-indigo-500">
        <span class="ml-1 text-sm">Completed ({{ filterTaskStore.countCompletedTask }})</span>
      </label>
      <label class="inline-flex items-center">
        <input type="radio" name="sortable" class="h-4 w-4 text-indigo-500">
        <span class="ml-1 text-sm">Pending ({{ filterTaskStore.countPendingTask }})</span>
      </label>
    </div>
  </div>
</template>
