import { ChangeEvent, FormEvent, ReactElement, useState } from "react"
import { Todo } from "./types";

interface NewTodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

export function NewTodoForm({ setTodos }: NewTodoFormProps): ReactElement {
  const [newItem, setNewItem] = useState("");

  function addTodo(title: string) {
    setTodos((currentTodos: Todo[]): Todo[] => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (newItem === "") {
      return;
    }

    addTodo(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>

      <button className="btn">Add</button>
    </form>
  );
}
