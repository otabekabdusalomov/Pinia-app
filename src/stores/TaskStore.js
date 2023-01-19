import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
   state: () => ({
    tasks: [
        {id: 1, title: "by some milk", isFav: false},
        {id: 2, title: "Lorem ipsum", isFav: true}
    ]
    
   })
})
