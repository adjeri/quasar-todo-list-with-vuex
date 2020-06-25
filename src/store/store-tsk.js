const state = { //store all the data
  tasks: [{
      title: "Learn Quasar",
      done: false
    },
    {
      title: "Practise Quasar",
      done: false
    },
    {
      title: "Master Quasar",
      done: false
    },
  ]
}

const mutations = { //contains methods which manipulate the state. they cannot be async

}

const actions = { //contains methods which can be async, and commit a mutation

}

const getters = { //contains methods which get data from the state.
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
