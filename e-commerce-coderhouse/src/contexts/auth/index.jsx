import { createContext, useState } from "react";

const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {
  const usr = {
    name: "John Doe",
    email: "asd@asd.com",
  };

  const [user, setUser] = useState(usr);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const login = () => {

  }

  const recoveryPassword = () => {

  }

  return (
    <AuthContext.Provider value={{ user, updateUser, login, recoveryPassword }}>
        {children}
    </AuthContext.Provider>
)
};

export { AuthContext, AuthProvider };
