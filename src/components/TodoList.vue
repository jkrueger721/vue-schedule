<template lang="pug">
    div
      div(v-for="todo in store.todos" v-bind:class="{completed: todo.completed}" v-on:click="select(todo)") {{todo.title}}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { observer } from "mobx-vue";
import TodoStore, { Todo } from "@/store/todo";

@observer
@Component
export default class TodoList extends Vue {
  store = new TodoStore();

  select(todo: Todo) {
    todo.completed = !todo.completed;
  }

  async mounted() {
    await this.store.getTodos();
  }
}
</script>

<style lang="less">
.completed {
  color: rgb(136, 11, 11);
  text-decoration: line-through;
}
</style>
