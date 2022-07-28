const socket = io();
const messageForm = document.querySelector("#messageForm");
const sendLocation = document.querySelector("#sendLocation");

socket.on("message", (message) => {
  console.log(message, "--socket--");
});

socket.on("location", (location) => {
  console.log(location, "--socket--");
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = e.target.messageInput.value;

  socket.emit("sendMessage", message, (error) => {
    if (error) {
      return console.log(error);
    }

    console.log("Message delivered");
  });
});

sendLocation.addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Your browser does not support geolocation");
  }

  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    socket.emit("sendLocation", { latitude, longitude }, () => {
      console.log("Location shared!");
    });
  });
});
