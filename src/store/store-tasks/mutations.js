/*
export function someMutation (state) {
}
*/

import Vue from 'vue'

export const updateTask = (state, payload) => {
  Object.assign(state.tasks[payload.id], payload.updates)
}

export const deleteTask = (state, id) => {
  Vue.delete(state.tasks, id)
}

export const addTask = (state, payload) => {
  Vue.set(state.tasks, payload.id, payload.task)
}
