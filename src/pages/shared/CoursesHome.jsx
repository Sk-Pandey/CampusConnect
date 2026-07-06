import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import StudentCourses from "../students/Courses";
import AdminCourses from "../admins/Courses";

const CoursesHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>{user.role === "admin" ? <AdminCourses /> : <StudentCourses />}</div>
  );
};

export default CoursesHome;
