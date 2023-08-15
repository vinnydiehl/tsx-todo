import { ReactElement, useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import { TodoList } from "./TodoList"
import { Todo } from "./types";

export default function App(): ReactElement {
  const [todos, setTodos] = useState((): Todo[] => {
    const localValue = localStorage.getItem("ITEMS");
    return localValue ? JSON.parse(localValue) : [];
  });

  useEffect(() => {
    if (todos.length) {
      localStorage.setItem("ITEMS", JSON.stringify(todos));
    } else {
      localStorage.removeItem("ITEMS");
    }
  }, [todos]);

  return (
    <>
      <NewTodoForm setTodos={setTodos} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
