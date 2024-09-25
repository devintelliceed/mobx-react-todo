
import { observer } from "mobx-react";
import { ListGroup } from "react-bootstrap";

const TodoView = observer(({ todo }) => (
  <ListGroup.Item>
    <input
      className="me-1"
      type="checkbox"
      checked={todo.finished}
      onChange={() => todo.toggle()}
    />
    <span style={{ textDecoration: todo.finished && "line-through" }}>
      {todo.title}
    </span>
  </ListGroup.Item>
));

export default TodoView;
