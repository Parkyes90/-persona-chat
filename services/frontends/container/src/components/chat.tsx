import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Send } from "@mui/icons-material";

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

const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = () => {
    // Implement your send message logic here
    console.log("Message:", message);
    setMessage("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
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
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            mb: 2,
          }}
        >
          {/* Add your chat messages here */}
          <Typography gutterBottom>
            <b>John Doe: </b>Hello, how are you?
          </Typography>
          <Typography gutterBottom>
            <b>You: </b>I'm doing well, thank you!
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            alignItems: "flex-start",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <TextField
            fullWidth
            multiline
            rows={2}
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<Send />}
            sx={{ ml: 1 }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
