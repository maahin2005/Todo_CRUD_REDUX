import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const loginState = useSelector((state) => state.loginState);

  return loginState.isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRoutes;
