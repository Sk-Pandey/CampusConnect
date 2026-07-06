import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import StudentDashboard from "../students/Dashboard";
import AdminDashboard from "../admins/Dashboard";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user.role === "admin" ? <AdminDashboard /> : <StudentDashboard />}
    </div>
  );
};

export default DashboardHome;
