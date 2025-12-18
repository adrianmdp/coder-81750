import { useEffect, useState } from "react";
import { obtenerUsuarios } from "../../services/jsonplaceholder/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    obtenerUsuarios().then((resp) => {
      setUsers(resp);
    });
  }, []);

  if (users.length < 1) return "Cargando...";

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Nombre de usuario</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Sitio web</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id + user.username}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Users;
