<script setup>
import {reactive, ref} from "vue";
import {useTaskStore} from "@/store/TaskStore";
import Swal from 'sweetalert2'
const taskStore = useTaskStore()
const taskName = ref('')
const createTask= ()=>{
  if (taskName.value !== ''){
    let newTask= {
      id: Date.now(),
      name: taskName.value,
      isDone: false
    }
    taskStore.addTask(newTask)
    taskName.value = ''
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Task added successfully'
    })
  }else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'PLease enter task name.',
    })
  }
}
</script>
<template>
  <form @submit.prevent="createTask" class="mb-10 flex space-x-4">
    <input v-model="taskName" type="search" placeholder="Add some todo ....." class="w-full bg-indigo-50 rounded focus:outline-indigo-300 border-indigo-500 py-2 px-5 placeholder-indigo-600 text-indigo-600 font-semibold">
    <button type="submit" class="text-white bg-indigo-500 px-8 py-2 rounded text-sm font-medium tracking-wide hover:bg-indigo-600 transition-colors duration-300">Add</button>
  </form>
</template>
