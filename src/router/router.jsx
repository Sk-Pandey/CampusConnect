import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Login from "../pages/public/Login";
import Dashboard from "../pages/admins/Dashboard";
// import Dashboard from "../pages/students/Dashboard";
import Profile from "../pages/students/Profile";
import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Courses from "../pages/admins/Courses";
import Students from "../pages/admins/Students";
import Analytics from "../pages/admins/Analytics";
import Settings from "../pages/students/Settings";
import Assignments from "../pages/students/Assignments";
import CourseDetail from "../pages/students/CourseDetail";
const router = createBrowserRouter([
  {
    path: "",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "assignments",
        element: <Assignments />,
      },
      {
        path: "coursedetail",
        element: <CourseDetail />,
      },
    ],
  },
]);
export default router;
