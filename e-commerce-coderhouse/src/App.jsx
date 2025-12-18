import { useState } from "react";
import { Routes, Route } from "react-router";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/common/Button";
import Home from "./pages/Home";
import { Contact } from "./pages/Contact";
import Users from "./pages/Users";
import Todo from "./pages/Todo";
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import UserDetail from "./pages/UserDetail";
import Register from "./pages/Auth/Register";
import Vehicles from "./pages/Vehicles";
import AddVehicle from "./pages/AddVehicle";
import Login from "./pages/Auth/Login";

function App() {
  const login = () => {
    console.log("login");
  };

  const SignOut = () => {
    console.log("SignOut");
  };

  const saludo = "Saludo";

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/add-vehicle" element={<AddVehicle />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* <Route element={<AuthLayout />}> */}
        {/* Rutas protegidas */}
        {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/credit-cards" element={<CreditCards />} /> */}
        {/* </Route> */}

        {/* Hola mundo
        <br />
        <label htmlFor=""></label>
        <div className>{saludo}</div>
        <Button text="Login" callback={() => login()} icon="puerta" />
        <Button text="SignOut" callback={() => SignOut()} icon="x" />
        <Button text="Contact" callback={() => Contact()} icon="sobre" /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
