const state = {

  tasks: [
    {
      id:1,
      name:"walk the dog",
      completed:false,
      dueDate:"5/22/2022",
      dueTime:"8:30 AM"
      },
     {
      id:2,
      name:"coding homework",
      completed:false,
      dueDate:"5/25/2022",
      dueTime:"9:30 PM"
    },
     {
      id:3,
      name:"go grocery shopping",
      completed:false,
      dueDate:"5/24/2022",
      dueTime:"12:30 AM"
    },
  ]

}

const mutations = {


}

const actions = {



}

const getters = {

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