import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/sign-up-page";
import ChatPage from "./pages/chat-page";

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
    element: <ChatPage />,
  },
]);

export default router;
