import { useContext, useEffect } from "react";
import Button from "../../components/common/Button";
import Counter from "../../components/common/Counter";

import { AuthContext } from "../../contexts/auth";
import { obtenerUsuarios } from "../../services/firebase/users";
import { services } from "../../services";

const Home = () => {
  obtenerUsuarios().then((resp) => {
    console.log(resp);
  });

  useEffect(() => {
    services.firebase.obtenerUsuarios();
  }, []);

  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
      <Button>Hola mundo</Button>
      <br />
      <Counter />
      <hr />
      {user.name}
    </div>
  );
};

export default Home;
