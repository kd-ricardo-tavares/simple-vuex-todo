<template>
  <form @submit.prevent="saveTodo">
    <input v-model="newToDo" type="text">

    <button type="submit">Save</button>
  </form>
</template>
<script>
export default {
  name: 'new-to-do',

  data() {
    return {
      newToDo: '',
    };
  },

  methods: {
    saveTodo() {
      this.$store.commit('toDos/saveToDo', this.newToDo);

      this.newToDo = '';
    },
  },
};
</script>
