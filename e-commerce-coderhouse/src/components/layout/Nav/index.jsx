import { NavLink } from "react-router";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/users">Users</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/todo">Todo</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
