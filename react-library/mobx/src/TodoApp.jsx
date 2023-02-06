import { makeObservable, observable, computed, action } from "mobx";
import TodoListView from "./components/todo/TodoListView";

class Todo {
  id = Math.random();
  title = "";
  finished = false;

  constructor(title) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });
    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
}

class TodoList {
  todos = [];
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }
  constructor(todos) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
    });
    this.todos = todos;
  }
}

const store = new TodoList([
  new Todo("Get Coffee"),
  new Todo("Write simpler code"),
]);

const TodoApp = () => {
  return <TodoListView todoList={store} />;
};

export default TodoApp;
