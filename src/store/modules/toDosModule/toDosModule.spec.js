import toDosModule from '@/store/modules/toDosModule/toDosModule';

describe('toDosModule', () => {
  describe('mutations', () => {
    describe('saveToDo', () => {
      it('stores a todo in the state', () => {
        const state = { toDos: [] };
        const toDo = 'coisas';

        toDosModule.mutations.saveToDo(state, toDo);

        expect(state.toDos).toEqual([toDo]);
      });
    });

    describe('deleteToDo', () => {
      it('removes a todo from the state using the given index', () => {
        const toDo = 'coisas';
        const state = { toDos: ['todo1', toDo, 'todo3'] };

        toDosModule.mutations.deleteToDo(state, state.toDos.indexOf(toDo));

        expect(state.toDos).toEqual(['todo1', 'todo3']);
      });
    });
  });
});
