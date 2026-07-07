import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const Topbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser({ name: "", role: "" });
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <header className="flex items-center justify-between p-2">
        <h1 className="text-white text-3xl font-serif">
          <Link id="logo" to="/dashboard">
            CampusConnect
          </Link>
        </h1>

        <div className="space-x-6">
          <button className="cursor-pointer" id="notifications">
            🔔
          </button>
          <span className="font-sans">
            Welcome, {user.name ? user.name : "User"}
          </span>
          <span className="bg-white rounded-full p-1">🙍‍♂️</span>
          <button
            onClick={handleLogout}
            className="cursor-pointer font-semibold py-1 px-2 bg-rose-400 rounded-lg active:scale-95"
          >
            Logout
          </button>
        </div>
      </header>
    </>
  );
};

export default Topbar;
