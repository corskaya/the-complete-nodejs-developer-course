const socket = io();
const messageForm = document.querySelector("#messageForm");

socket.on("message", (message) => {
  console.log(message, "--socket--");
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = e.target.messageInput.value;

  socket.emit("sendMessage", message);
});
