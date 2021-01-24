<template>
    <div>
        <input placeholder="タスクを追加" @keyup.enter="addTodo">
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods: {
        addTodo(e) {
            this.$store.commit('todos/add', e.target.value)
            this.text = ""
        },
        ...mapMutations({
            toggle: 'todos/toggle'
        })
    },
    computed: {
        todos() {
            return this.$store.state.todos.list
        }
    }
}
</script>

<style>
    .done {
        text-decoration: line-through;
    }
</style>