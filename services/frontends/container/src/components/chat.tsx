import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";

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
  );
};

export default Chat;
