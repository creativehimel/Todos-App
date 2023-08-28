import {defineStore} from "pinia";
import {reactive} from "vue";
export const useTaskStore = defineStore('task', {
    state: ()=>({
            tasks: [
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
            ]
    }),
    getters: {
        countAllTask(){
            return this.tasks.length
        },
        countCompletedTask(){
            return this.tasks.filter(task=> task.isDone).length
        },
        countPendingTask(){
            return this.tasks.filter(task=> !task.isDone).length
        },
    },
    actions: {
        addTask(newTask){
            this.tasks.push(newTask)
        },
        deleteTask(taskId){
            this.tasks = this.tasks.filter(task=> task.id !== taskId)
        },
        handleToggle(taskId) {
            const task = this.tasks.find(task=> task.id === taskId)
            task.isDone = !task.isDone
        }
        },

    })