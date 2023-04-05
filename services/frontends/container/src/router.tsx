import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Main</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
