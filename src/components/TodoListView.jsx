
import { observer } from "mobx-react";
import { ListGroup } from "react-bootstrap";

import TodoView from "./TodoView";

const TodoListView = observer(({ todoList }) => (
  <div>
    <ListGroup variant="flush">
      {todoList.todos.map((todo) => (
        <TodoView todo={todo} key={todo.id} />
      ))}
      <ListGroup.Item className="text-muted mt-3">
        Tasks left: {todoList.unfinishedTodoCount}
      </ListGroup.Item>
    </ListGroup>
  </div>
));

export default TodoListView;
