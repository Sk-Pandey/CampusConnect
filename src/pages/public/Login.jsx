import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Login Portal
        </h1>

        <div className="space-y-4">
          <button
            onClick={() => {
              setUser({
                name: "Shashikant",
                role: "student",
              });
              navigate("/dashboard");
            }}
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Login as Student
          </button>

          <button
            onClick={() => {
              setUser({
                name: "Admin",
                role: "admin",
              });
              navigate("/dashboard");
            }}
            className="w-full rounded-xl bg-green-600 py-3 text-lg font-semibold text-white transition hover:bg-green-700"
          >
            Login as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
