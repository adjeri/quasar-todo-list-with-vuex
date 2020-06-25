<template>
  <q-card>
    <modal-header>Add a new task</modal-header>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <modal-task-name
          :name.sync="taskToSubmit.name"
          ref="modalTaskName"
        ></modal-task-name>

        <modal-due-date
          :dueDate.sync="taskToSubmit.dueDate"
          @clear="clearDueDate"
        ></modal-due-date>

        <modal-due-time
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
          @clear="clearDueDate"
        ></modal-due-time>

        <modal-buttons></modal-buttons>
      </q-card-section>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        done: false
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
    },
    ...mapActions("tasks", ["addTask"]),
    clearDueDate() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    }
  },
  components: {
    "modal-header": require("components/Tasks/Modals/Shared/ModalHeader.vue")
      .default,
    "modal-task-name": require("components/Tasks/Modals/Shared/ModalTaskName.vue")
      .default,
    "modal-due-date": require("components/Tasks/Modals/Shared/ModalDueDate.vue")
      .default,
    "modal-due-time": require("components/Tasks/Modals/Shared/ModalDueTime.vue")
      .default,
    "modal-buttons": require("components/Tasks/Modals/Shared/ModalButtons.vue")
      .default
  }
};
</script>
