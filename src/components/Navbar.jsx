import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="flex items-center py-2 pl-2">
        <Link id="logo" to="/">
          <h1 className="text-white text-3xl font-serif">CampusConnect</h1>
        </Link>
        <nav className="flex-1 text-xl font-semibold font-mono ">
          <ul className="list-none flex justify-around">
            <NavLink to="/">
              <li className="cursor-pointer hover:text-rose-200">Home</li>
            </NavLink>
            <NavLink to="/about">
              <li className="cursor-pointer hover:text-rose-200">About</li>
            </NavLink>
            <NavLink to="/contact">
              <li className="cursor-pointer hover:text-rose-200">Contact</li>
            </NavLink>
            <NavLink to="/login">
              <li className="cursor-pointer hover:text-rose-200">Login</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
