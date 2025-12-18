import { users } from "../../mocks/users";


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

export const obtenerUsuario = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (users.length > 0) {
                // Si mi operación tiene éxito, llamo a resolve

                const user = users.find((user) => user.id === id);

                if (user) {
                    resolve({
                        success: true,
                        data: users,
                    });
                } else {
                    reject({
                        success: false,
                        message: "Usuario no encontrado.",
                    });
                }
            } else {
                // Si mi operación tiene NO éxito, llamo a reject

                reject({
                    success: false,
                    message: "No se resolvió la promesa con éxito.",
                });
            }
        }, 300);
    });
}
