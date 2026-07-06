import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Topbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <header className="flex items-center justify-between p-2">
        <span id="logo">
          <h1 className="text-white text-3xl font-serif">CampusConnect</h1>
        </span>
        <div className="space-x-6">
          <button className="cursor-pointer" id="notifications">
            🔔
          </button>
          <span className="font-sans">
            Welcome, {user.name ? user.name : "User"}
          </span>
          <span className="bg-white rounded-full p-1">🙍‍♂️</span>
        </div>
      </header>
    </>
  );
};

export default Topbar;
