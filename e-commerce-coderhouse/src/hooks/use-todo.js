import { useEffect, useState } from "react";
import { obtenerTodo } from "../services/jsonplaceholder/todos";

const todos = () => {
  const [num, setNum] = useState(0);
};

const useTodo = () => {
  const [param, setParam] = useState(1);
  const [todo, setTodo] = useState(undefined);

  useEffect(() => {
    obtenerTodo(param).then((data) => setTodo(data));
  }, [param]);

  return { todo, setParam };
};

export { useTodo };
