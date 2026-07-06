import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive ? "text-rose-300" : "text-white";

  return (
    <>
      <header className="p-2">
        <nav className="flex flex-col h-[100vh] justify-around text-xl font-semibold font-serif p-4 list-none">
          <li>
            <NavLink to="" end className={navLinkClass}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="courses" className={navLinkClass}>
              Courses
            </NavLink>
          </li>

          <li>
            <NavLink to="assignments" className={navLinkClass}>
              Assignments
            </NavLink>
          </li>

          <li>
            <NavLink to="students" className={navLinkClass}>
              Students
            </NavLink>
          </li>

          <li>
            <NavLink to="analytics" className={navLinkClass}>
              Analytics
            </NavLink>
          </li>

          <li>
            <NavLink to="profile" className={navLinkClass}>
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink to="settings" className={navLinkClass}>
              Settings
            </NavLink>
          </li>
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
