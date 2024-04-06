import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import PrivateRoutes from "./PrivateRoutes";
import LoginPage from "../Pages/LoginPage";

function OpenRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default OpenRoutes;
