import { useAppDispatch } from "../hooks";
import { removeTodo, toggleTodoComplete } from "../store/todoSlice";

interface TodoItemProps {
  id: string, 
  title: string, 
  completed: boolean,
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          dispatch(toggleTodoComplete(id));
        }}
      />
      <span>{title}</span>
      <span
        className="delete"
        onClick={() => {
          dispatch(removeTodo(id));
        }}
      >
        &times;
      </span>
    </li>
  );
};
export default TodoItem;
