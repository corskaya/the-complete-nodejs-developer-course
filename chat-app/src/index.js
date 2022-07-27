const path = require("path");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

const io = socketio(server);

const welcomeMessage = "Welcome!";

io.on("connection", (socket) => {
  console.log("New WebSocket connection");

  socket.emit("message", welcomeMessage);

  socket.on("sendMessage", (message) => {
    // socket.emit("countUpdated", count);
    io.emit("message", message);
  });
});
