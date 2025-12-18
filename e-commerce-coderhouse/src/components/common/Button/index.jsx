import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth";

function Button({ children, callback, type }) {
  const { user, updateUser } = useContext(AuthContext);

  return (
    <>
      <label htmlFor="">{user.name}</label>
      <button onClick={() => updateUser({ name: "Adrian", email: "eee@eee.com" })} type={type}>
        {children}
      </button>
    </>
  );
}

export default Button;
