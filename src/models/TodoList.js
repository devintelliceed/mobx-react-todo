import { action, computed, makeObservable, observable } from "mobx";

class TodoList {
  todos = [];

  constructor(todos) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
      addTodo: action,
      removeCompleted: action
    });
    this.todos = todos;
  }

  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeCompleted() {
    this.todos = this.todos.filter((todo) => !todo.finished);
  }
}

export default TodoList;
