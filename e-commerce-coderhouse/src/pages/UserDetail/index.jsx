import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ClipLoader } from "react-spinners";
import { obtenerUsuario } from "../../services/jsonplaceholder/users";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const UserDetail = () => {
  const [user, setUser] = useState(null);

  const { userId } = useParams();

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    obtenerUsuario(userId).then((resp) => {
      setUser(resp);
    });
  }, [userId]);

  if (!user)
    return (
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );

  return (
    <ul>
      <li>{user.name}</li>
      <li>{user.username}</li>
      <li>{user.email}</li>
      <li>{user.phone}</li>
    </ul>
  );
};

export default UserDetail;
