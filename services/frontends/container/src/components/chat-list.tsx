import React from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

interface ChatUser {
  id: number;
  name: string;
}

const users: ChatUser[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Brown" },
  // Add more users if needed
];
const ChatList = () => {
  return (
    <Box
      sx={{
        width: "25%",
        borderRight: "1px solid #ccc",
        overflowY: "auto",
      }}
    >
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemAvatar>
              <Avatar>{user.name.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatList;
