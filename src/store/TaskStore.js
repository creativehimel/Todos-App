import {defineStore} from "pinia";
import {reactive, ref} from "vue";
export const useTaskStore = defineStore('task', ()=>{
    const tasks = reactive([
        {
            id: 1,
            name: 'Task 1',
            isDone: false
        },
        {
            id: 2,
            name: 'Task 2',
            isDone: false
        },
        {
            id: 3,
            name: 'Task 3',
            isDone: true
        },
        {
            id: 4,
            name: 'Task 4',
            isDone: false
        },
        {
            id: 5,
            name: 'Task 5',
            isDone: true
        }
    ])
    return {tasks}
})