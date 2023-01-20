import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
   state: () => ({
    tasks: [
        {id: 1, title: "by some milk", isFav: false},
        {id: 2, title: "Lorem ipsum", isFav: true}
    ]
   }),

   getters: {
    favs() {
        return this.tasks.filter(t => t.isFav)
    },

    favCount() {
        return this.tasks.reduce((p, create) => {
           return create.isFav ? p + 1 : p
        }, 0)
    },
    totalCount: (state) => {
        return state.tasks.length
    }  
   },
   actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    deleteTask(id) {
       this.tasks = this.tasks.filter(t => {
        return t.id !== id
       })
    },
    toggleFev(id) {
        const task = this.tasks.find(t => t.id === id)
        task.isFav = !task.isFav
    }
   }
})
