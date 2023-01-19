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
   }
})
