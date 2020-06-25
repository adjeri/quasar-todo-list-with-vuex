<template>
  <q-page class="bg-grey-3 column">

    <q-list class="bg-white" separator bordered>

      <task
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :id="index">
        </task>

    </q-list>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24"
        icon="add"
      />
    </div>

    <div class="no-tasks absolute-center" v-if="emptyObject(tasks)">
      <q-icon name="check" size="100px" color="primary"></q-icon>
      <div class="text-h5 text-primary text-center">No tasks</div>
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false"></add-task>
    </q-dialog>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      showAddTask: false,
      newTask: ''
    }
  },
  methods: {
    deleteTask(index) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index, 1);
        this.$q.notify('Task deleted')
      })
    },
    addTask(){
      if(this.newTask === '' || this.newTask === null){
        this.$q.notify({
        message: 'Please enter a new task',
        color: 'negative'
      })
      }
      else{
        this.tasks.push({
          title: this.newTask,
          done: false
        })
        this.newTask = ''
      }
    },
    emptyObject(obj){
      return Object.keys(obj).length === 0 && obj.constructor === Object
    }
  },
  computed : {
    /* one way to get vuex variables */

    // tasks: {
    //   get(){
    //     return this.$store.state.tasks.tasks
    //     // return this.$store.getters['tasks/tasks'] //another way to get the tasks
    //   }
    // }

    /* another way to get the vuex variables */
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    'task' : require('components/Tasks/task.vue').default,
    'add-task' : require('components/Tasks/Modals/add.vue').default
  }
}
</script>

<style lang="scss">
.done {
  .q-item__label{
    text-decoration: line-through;
    color: #bbb;
  }
}
.no-tasks{
  opacity: 0.5;
}
</style>
