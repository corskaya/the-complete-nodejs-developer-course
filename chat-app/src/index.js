const path = require("path");
const express = require("express");
const socketio = require("socket.io");
const Filter = require("bad-words");
const { generateMessage } = require("./utils/messages");

const app = express();
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

const io = socketio(server);

io.on("connection", (socket) => {
  console.log("New WebSocket connection");

  socket.emit("message", generateMessage("Welcome!"));
  socket.broadcast.emit("message", generateMessage("A new user has joined."));

  socket.on("sendMessage", (message, callback) => {
    const filter = new Filter();

    if (filter.isProfane(message)) {
      return callback("Profane is now allowed!");
    }

    io.emit("message", generateMessage(message));
    callback();
  });

  socket.on("sendLocation", ({ latitude, longitude }, callback) => {
    io.emit("location", `https://google.com/maps?${latitude},${longitude}`);
    callback();
  });

  socket.on("disconnect", () => {
    io.emit("message", generateMessage("A user has left."));
  });
});
