const users = [
  {
    id: 1,
    name: "Lucía Fernández",
    email: "lucia.fernandez@example.com",
    age: 27,
    country: "Argentina",
  },
  {
    id: 2,
    name: "Mateo González",
    email: "mateo.gonzalez@example.com",
    age: 34,
    country: "Chile",
  },
  {
    id: 3,
    name: "Valentina Rojas",
    email: "valentina.rojas@example.com",
    age: 22,
    country: "Uruguay",
  },
  {
    id: 4,
    name: "Santiago López",
    email: "santiago.lopez@example.com",
    age: 30,
    country: "Perú",
  },
  {
    id: 5,
    name: "Camila Torres",
    email: "camila.torres@example.com",
    age: 25,
    country: "México",
  },
];

export const obtenerUsuarios = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users.length > 0) {
        // Si mi operación tiene éxito, llamo a resolve

        resolve({
          success: true,
          data: users,
        });
      } else {
        // Si mi operación tiene NO éxito, llamo a reject

        reject({
          success: false,
          message: "No se resolvió la promesa con éxito.",
        });
      }
    }, 300);
  });
};

export const obtenerUsuariosJsonPlaceholder = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();

  return data;
};

export const obtenerUsuarioJsonPlaceholder = async (id) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await resp.json();

  return data;
};
