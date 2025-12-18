export const obtenerUsuarios = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();

  return data;
};

export const obtenerUsuario = async (id) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await resp.json();

  return data;
};