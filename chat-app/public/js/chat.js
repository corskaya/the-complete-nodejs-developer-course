const socket = io();

// Elements
const messageForm = document.querySelector("#messageForm");
const sendLocation = document.querySelector("#sendLocation");
const messageFormInput = document.querySelector("input");
const messageFormButton = document.querySelector("button");
const messages = document.querySelector("#messages");

// Templates
const messageTemplate = document.querySelector("#message-template").innerHTML;
const locationMessageTemplate = document.querySelector(
  "#location-message-template"
).innerHTML;

// Options
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

socket.on("message", (message) => {
  console.log(message, "--socket--");
  const html = Mustache.render(messageTemplate, {
    username: message.username,
    message: message.text,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  messages.insertAdjacentHTML("beforeend", html);
});

socket.on("location", (location) => {
  console.log(location, "--socket--");
  const html = Mustache.render(locationMessageTemplate, {
    username: location.username,
    url: location.url,
    createdAt: moment(location.createdAt).format("h:mm a"),
  });
  messages.insertAdjacentHTML("beforeend", html);
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

socket.emit("join", { username, room }, (error) => {
  if (error) {
    alert(error);
    location.href = "/";
  }
});
