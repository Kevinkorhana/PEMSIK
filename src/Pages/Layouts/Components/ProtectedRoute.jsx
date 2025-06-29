import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStateContext } from "@/Utils/Contexts/AuthContext"; // ✅ Import context

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStateContext(); // ✅ Ambil user dari context

  if (!user) {
    return <Navigate to="/" />; // Redirect jika belum login
  }

  return children;
};

export default ProtectedRoute;
