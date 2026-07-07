import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedData = localStorage.getItem("user");
    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          role: "",
        };
  });

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
