export const obtenerTodo = async (id) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await resp.json();

  return data;
};
