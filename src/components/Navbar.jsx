import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="flex items-center py-2 pl-2">
        <h1 className="text-white text-3xl font-serif">
          <Link id="logo" to="/">
            CampusConnect
          </Link>
        </h1>

        <nav className="flex-1 text-xl font-semibold font-mono">
          <ul className="list-none flex justify-around">
            <li className="cursor-pointer hover:text-rose-200">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-rose-300" : "text-white"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="cursor-pointer hover:text-rose-200">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-rose-300" : "text-white"
                }
              >
                About
              </NavLink>
            </li>

            <li className="cursor-pointer hover:text-rose-200">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-rose-300" : "text-white"
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="cursor-pointer hover:text-rose-200">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-rose-300" : "text-white"
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
