export const state = () => ({
  list: []
});

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      done: false
    });
  },
  toggle(state, todo) {
    console.log(todo);
    todo.done = !todo.done;
  }
};
