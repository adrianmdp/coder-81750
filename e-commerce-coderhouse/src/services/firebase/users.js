export const obtenerUsuarios = async () => {
    // code
};


export const obtenerUsuario = async (id) => {
    // code

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    return {
        success: true,
        data: {},
        pepe: "Lorem"
    }
};