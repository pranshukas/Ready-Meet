const messageBoxButton = document.getElementById("message-box");
const chatCloseButton = document.getElementById("chat-close-button");

chatCloseButton.addEventListener("click", (e) => {
  const chatPanel = document.getElementById("chat-panel");
  const toolBarWrapper = document.querySelector(".tool-bar-wrapper");
  toolBarWrapper.classList.toggle("hide-tool-bar");
  chatPanel.classList.toggle("display-chat-panel");
});

messageBoxButton.addEventListener("click", (e) => {
  if (e.target.classList.contains("dot")) e.target.classList.remove("dot");
  const chatPanel = document.getElementById("chat-panel");
  const toolBarWrapper = document.querySelector(".tool-bar-wrapper");
  toolBarWrapper.classList.toggle("hide-tool-bar");
  chatPanel.classList.toggle("display-chat-panel");
});

const setTime = () => {
  const timeButton = document.getElementById("time");
  var time = new Date();
  timeButton.innerHTML = `${time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;
};
setTime();
setInterval(() => {
  setTime();
}, 500);
