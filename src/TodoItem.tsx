import { ChangeEvent, ReactElement } from "react";
import { Todo } from "./types";

interface TodoItemProps {
  completed: boolean,
  id: string,
  title: string,
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

export function TodoItem({ completed, id, title, setTodos }: TodoItemProps): ReactElement {
  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos: Todo[]): Todo[] => {
      return currentTodos.map((todo: Todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      });
    });
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos: Todo[]): Todo[] => currentTodos.filter(todo => todo.id !== id));
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e: ChangeEvent<HTMLInputElement>) => toggleTodo(id, e.target.checked)}
        />
        <span className="custom-checkbox"></span>
        <span className="title">{title}</span>
      </label>

      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
