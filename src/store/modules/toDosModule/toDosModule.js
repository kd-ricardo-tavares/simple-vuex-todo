export default {
  namespaced: true,

  state: {
    toDos: [],
  },

  getters: {
    lastToDo: (state) => state.toDos[state.toDos.length - 1],
    getByIndex: (state) => (id) => state.toDos[id],
  },

  mutations: {
    saveToDo(state, toDo) {
      state.toDos.push(toDo);
    },

    deleteToDo(state, toDoIndex) {
      state.toDos.splice(toDoIndex, 1);
    },
  },
};
