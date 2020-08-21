<template>
  <div class="hello">
    <h1>To-Dos</h1>

    <new-to-do />

    <div>
      <b>last:</b>{{ lastToDo }}
      <b>last:</b>{{ last }}
      <b>3rd:</b>{{ getByIndex(2) }}
    </div>

    <section>
      <ul>
        <li v-for="(toDo, i) in toDos" :key="i">
          {{ toDo }}

          <button @click="deleteToDo(i)">delete</button>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
import NewToDo from '@/components/NewToDo.vue';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'ToDoList',
  components: { NewToDo },

  computed: {
    ...mapState('toDos', ['toDos']),

    ...mapGetters('toDos', ['getByIndex']),
    ...mapGetters('toDos', {
      last: 'lastToDo',
    }),

    lastToDo() {
      return this.$store.getters['toDos/lastToDo'];
    },
  },

  methods: {
    deleteToDo(index) {
      this.$store.commit('toDos/deleteToDo', index);
    },
  },
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}
</style>
