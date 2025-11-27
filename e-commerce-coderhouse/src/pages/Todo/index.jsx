import { useState } from "react";
// import { obtenerTodo } from "../../services/todos";
import { useTodo } from "../../hooks/use-todo";

const Todo = () => {
  const { todo, setParam } = useTodo();

  return (
    <div>
      <h2>Todo</h2>

      {todo ? (
        <ul>
          <li>ID: {todo.id}</li>
          <li>User ID: {todo.userId}</li>
          <li>Title: {todo.title}</li>
          <li>{todo.completed ? "completado" : "no completado"}</li>
        </ul>
      ) : (
        "Cargando..."
      )}

      <button onClick={() => setParam(20)}>Cambiar parametro</button>
    </div>
  );
};

export default Todo;
