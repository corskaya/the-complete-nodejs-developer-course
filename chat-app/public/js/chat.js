const socket = io();

socket.on("countUpdated", (count) => {
  console.log("The count has been updated!", count);
});

document.querySelector("#increment").addEventListener("click", () => {
  console.log("increment clicked");
  socket.emit("increment");
});
