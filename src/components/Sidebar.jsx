import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <header className="p-2">
        <nav className="flex flex-col h-[100vh] justify-around text-xl font-semibold font-serif p-4 list-none">
          <NavLink to="">
            <li>Dashbaord</li>
          </NavLink>
          <NavLink to="courses">
            <li>Courses</li>
          </NavLink>
          <NavLink to="assignments">
            <li>Assignments</li>
          </NavLink>
          <NavLink to="students">
            <li>Students</li>
          </NavLink>
          <NavLink to="analytics">
            <li>Analytics</li>
          </NavLink>
          <NavLink to="profile">
            <li>Profile</li>
          </NavLink>
          <NavLink to="settings">
            <li>Settings</li>
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
