import { action, computed, observable } from "mobx";

export interface Todo {
  title: string;
  completed: boolean;
  userId: number;
  id: number;
}

export default class TodoStore {
  @observable todos: Array<Todo> = [];

  @computed
  get todosLeft() {
    return this.todos.filter(v => !v.completed).length;
  }

  @action.bound
  async getTodos() {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos");

    this.todos = await data.json();
  }
}
