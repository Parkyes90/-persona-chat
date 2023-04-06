import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/sign-up-page";
import Chat from "./components/chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Main</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/chats",
    element: <Chat />,
  },
]);

export default router;
