import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="flex items-center py-2 pl-2">
        <span id="logo">
          <h1 className="text-white text-3xl font-serif">CampusConnect</h1>
        </span>
        <nav className="flex-1 text-xl font-semibold font-mono ">
          <ul className="list-none flex justify-around">
            <li className="cursor-pointer hover:text-rose-200">Home</li>
            <li className="cursor-pointer hover:text-rose-200">About</li>
            <li className="cursor-pointer hover:text-rose-200">Contact</li>
            <li className="cursor-pointer hover:text-rose-200">Login</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
