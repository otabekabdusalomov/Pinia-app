<template>
  <main>
    <header>
      <!-- <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo"> -->
      <!-- <img src="./assets/logo.svg" alt="vue-logo"> -->
      <img src="./assets/pinia-logo.svg" alt="pinia-logo">
      <h1>Pinia Tasks</h1>
    </header>

    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

     <div class="task-list" v-if="filter === 'all'">
       <p>Your have {{ taskStore.totalCount }} tasks left to do</p>
       <div v-for="task in taskStore.tasks">
          <TaskDetails :task="task" />
       </div>
     </div>

     <div class="task-list" v-if="filter === 'favs'">
      <p>Your have {{ taskStore.favCount }} favs left to do</p>
       <div v-for="task in taskStore.favs">
          <TaskDetails :task="task" />
       </div>
     </div>

  </main>
</template>

<script>
import { ref } from '@vue/reactivity'
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue'
import { useTaskStore } from './stores/TaskStore'

  export default {
    components: {
      TaskDetails,
      TaskForm
    },
     setup() {
      const taskStore = useTaskStore()

      const filter = ref('all')

      return { taskStore, filter }
     }    
  }
</script>