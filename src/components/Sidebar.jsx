import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive ? "text-rose-300" : "text-white";
  const { user } = useContext(AuthContext);
  const menu =
    user.role === "admin"
      ? [
          {
            id: 1,
            name: "🏠 Dashboard",
            path: "",
          },
          {
            id: 2,
            name: "📚 Courses",
            path: "courses",
          },
          {
            id: 3,
            name: "👨‍🎓 Students",
            path: "students",
          },
          {
            id: 4,
            name: "📈 Analytics",
            path: "analytics",
          },
          {
            id: 5,
            name: "⚙ Settings",
            path: "settings",
          },
        ]
      : [
          {
            id: 1,
            name: "🏠 Dashboard",
            path: "",
          },
          {
            id: 2,
            name: "📚 My Courses",
            path: "courses",
          },
          {
            id: 3,
            name: "📝 Assignments",
            path: "assignments",
          },
          {
            id: 4,
            name: "👤 Profile",
            path: "profile",
          },
          {
            id: 5,
            name: "⚙ Settings",
            path: "settings",
          },
        ];
  return (
    <>
      <header className="p-2">
        <nav className="flex flex-col h-[100vh] justify-around text-xl font-semibold font-serif p-4 list-none">
          {menu.map((item) => (
            <div key={item.id}>
              <li>
                <NavLink to={item.path} end className={navLinkClass}>
                  {item.name}
                </NavLink>
              </li>
            </div>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
