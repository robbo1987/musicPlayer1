import Vue from "vue";

const state = {
  tasks: {
    id1: {
      name: "walk the dog",
      completed: false,
      dueDate: "5/22/2022",
      dueTime: "8:30 AM",
    },

    id2: {
      name: "coding homework",
      completed: false,
      dueDate: "5/25/2022",
      dueTime: "9:30 PM",
    },

    id3: {
      name: "go grocery shopping",
      completed: false,
      dueDate: "5/24/2022",
      dueTime: "12:30 AM",
    },
  },
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id);
  },
};

const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },
};

const getters = {
  tasks: (state) => {
    return state.tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
