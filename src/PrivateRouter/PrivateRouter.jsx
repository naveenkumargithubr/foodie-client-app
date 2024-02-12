import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import Home from "../pages/Home/Home";
import Signup from "../components/Signup/Signup";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <LoadingSpinner />;
  }
  if (user) {
    return children;
  }
  if (Home) {
    return <Signup />;
  }

  return <Navigate to="/signup" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
