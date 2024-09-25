
import { useState } from "react";
import { observer } from "mobx-react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

import Todo from "../models/Todo";

const TodoFormView = observer(({ todoList }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddTask = () => {
    const todo = new Todo(value);
    todoList.addTodo(todo);
    setValue("");
  };

  const handleRemoveFinished = () => {
    todoList.removeCompleted();
  };

  return (
    <InputGroup className="my-4">
      <FormControl
        type="text"
        value={value}
        onChange={handleChange}
      />
      <Button
          variant="dark"
          onClick={handleAddTask}
      >
        Add Task
      </Button>
        <Button
            variant="outline-danger"
            onClick={handleRemoveFinished}
        >
            Remove
        </Button>
    </InputGroup>
  );
});

export default TodoFormView;
