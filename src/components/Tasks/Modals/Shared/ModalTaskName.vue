<template>
  <div class="row q-mb-sm">
          <q-input
            autofocus
            ref="name"
            outlined
            :value="name"
            @input="$emit('update:name',$event)"
            label="Task name"
            class="col"
            :rules="[val => !!val || 'Field is required']"
          >
            <template v-slot:append>
              <q-icon
                v-if="name"
                name="close"
                @click="$emit('update:name','')"
                class="cursor-pointer"
              /> </template
          ></q-input>
        </div>
</template>

<script>
export default {
  props : ['name']
}
</script>
