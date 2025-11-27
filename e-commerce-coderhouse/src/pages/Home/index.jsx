import Button from "../../components/common/Button";
import Counter from "../../components/common/Counter";
import { obtenerUsuarios } from "../../services/users";

const Home = () => {
  obtenerUsuarios().then((resp) => {
    console.log(resp);
  });

  return (
    <div>
      <h1>Home</h1>
      <Button>Hola mundo</Button>
      <br />
      <Counter />
    </div>
  );
};

export default Home;
