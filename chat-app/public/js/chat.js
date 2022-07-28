const socket = io();
const messageForm = document.querySelector("#messageForm");
const sendLocation = document.querySelector("#sendLocation");
const messageFormInput = document.querySelector("input");
const messageFormButton = document.querySelector("button");

socket.on("message", (message) => {
  console.log(message, "--socket--");
});

socket.on("location", (location) => {
  console.log(location, "--socket--");
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  messageFormButton.setAttribute("disabled", "disabled");

  const message = e.target.messageInput.value;

  socket.emit("sendMessage", message, (error) => {
    messageFormButton.removeAttribute("disabled");
    messageFormInput.value = "";
    messageFormInput.focus();

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

  sendLocation.setAttribute("disabled", "disabled");

  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    socket.emit("sendLocation", { latitude, longitude }, () => {
      sendLocation.removeAttribute("disabled");
      console.log("Location shared!");
    });
  });
});
