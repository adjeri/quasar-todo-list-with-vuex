import { uid } from 'quasar'

export const updateTask = ({ commit }, payload) => {
  commit('updateTask', payload)
}

export const deleteTask = ({ commit }, id) => {
  commit('deleteTask', id)
}

export const addTask = ({ commit }, task) => {
  let taskId = uid()
  let payload = {
    id: taskId,
    task : task
  }
  commit('addTask', payload)
}
