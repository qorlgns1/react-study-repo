import { observer } from "mobx-react";

const TodoView = observer(({ todo }) => {
  console.log("TodoView");
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.finished}
        onClick={() => todo.toggle()}
      />
      {todo.title}
    </li>
  );
});

export default TodoView;
