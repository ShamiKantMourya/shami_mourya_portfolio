import React from "react";
import { NavLink } from "react-router-dom";

import { links } from "../../data";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__menu">
        <ul className="nav__list">
          {links.map(({ name, path, icon, id }) => (
            <li key={id} className="nav__item">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "nav__link active-nav" : "nav__link"
                }
              >
                {icon}
                <h3 className="nav__name">{name}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav__toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
