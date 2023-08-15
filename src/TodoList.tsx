import { ReactElement } from "react";
import { TodoItem } from "./TodoItem"
import { Todo } from "./types"

interface TodoListProps {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

export function TodoList({ todos, setTodos }: TodoListProps): ReactElement {
  return (
    <ul className="todo-list">
      {todos.length === 0 && "No Todos"}

      {todos.map((todo: Todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            setTodos={setTodos}
          />
        );
      })}
    </ul>
  );
}
