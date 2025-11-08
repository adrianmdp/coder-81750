import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/common/Button";
import Home from "./pages/Home";

function App() {
  const login = () => {
    console.log("login");
  };

  const SignOut = () => {
    console.log("SignOut");
  };

  const Contact = () => {
    console.log("Contact");
  };

  const saludo = "Saludo";

  return (
    <>
      {/* <Header /> */}
      {/* <Nav /> */}

      <div>
        {/* <Aside /> */}
        <Home />
      </div>

      {/* <Footer /> */}

      {/* Hola mundo
      <br />
      <label htmlFor=""></label>
      <div className>{saludo}</div>
      <Button text="Login" callback={() => login()} icon="puerta" />
      <Button text="SignOut" callback={() => SignOut()} icon="x" />
      <Button text="Contact" callback={() => Contact()} icon="sobre" /> */}
    </>
  );
}

export default App;
