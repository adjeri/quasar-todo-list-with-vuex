<template>
  <q-item
    clickable
    v-ripple
    @click="updateTask({ id: id, updates: { done: !task.done } })"
    :class="{ 'done bg-blue-1': task.done }"
  >
    <q-item-section avatar>
      <q-checkbox
        class="no-pointer-events"
        v-model="task.done"
        color="primary"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ task.name }}</q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18" class="q-mr-xs"></q-icon>
        </div>
        <div class="column">
          <q-item-label class="row justify-end caption">{{
            task.dueDate
          }}</q-item-label>
          <q-item-label class="row justify-end caption"
            ><small>{{ task.dueTime }}</small></q-item-label
          >
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          flat
          dense
          round
          color="primary"
          icon="edit"
          @click.stop="showEditTask = true"
        />
        <q-btn
          flat
          dense
          round
          color="negative"
          icon="delete"
          @click.stop="promptToDelete(id)"
        />
      </div>
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <edit-task :task="task" :id="id" @close="showEditTask = false"></edit-task>
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],
  data() {
    return {
      showEditTask: false
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really delete?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteTask(id);
          this.$q.notify("Task deleted");
        });
    }
  },
  components: {
    "edit-task": require("components/Tasks/Modals/edit.vue").default
  }
};
</script>

<style scoped></style>
