
import React from "react";

import Todo from "./models/Todo";
import TodoList from "./models/TodoList";
import TodoListView from "./components/TodoListView";
import TodoFormView from "./components/TodoFormView";

export const store = new TodoList([
    new Todo("Get Coffee"),
    new Todo("Write simpler code")
]);

const App = () => {
    return <div className="flex-nowrap">
        <h1 className="text-center py-5 bg-light">Hello MobX Vite To-Do List</h1>
        <TodoFormView todoList={store} />
        <TodoListView todoList={store} />
    </div>;
};

export default App;
