import React from "react";
import { Box } from "@mui/material";
import Chat from "../components/chat";
import ChatList from "../components/chat-list";

const ChatPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      <ChatList />
      <Chat />
    </Box>
  );
};

export default ChatPage;
