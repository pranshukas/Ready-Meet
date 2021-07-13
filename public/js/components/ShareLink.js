const shareToggleButton = document.getElementById("share-toggle");
shareToggleButton.addEventListener("click", (e) => {
  const dialogue = document.querySelector(".dialogue-container");
  dialogue.classList.toggle("dialogue-active");
});

const copyButton = document.querySelector("#copy-button");
const shareLink = document.querySelector(".share-link");
shareLink.innerHTML = window.location.href;

copyButton.setAttribute("meeting_link", window.location.href);
const dialogueCloseButton = document.querySelector("#close-dialogue");

dialogueCloseButton.addEventListener("click", (e) => {
  const dialogue = document.querySelector(".dialogue-container");
  dialogue.classList.toggle("dialogue-active");
});

copyButton.addEventListener("mousedown", (e) => {
  const copyText = e.target.getAttribute("meeting_link");
  navigator.clipboard.writeText(copyText);
  e.target.setAttribute("tool_tip", "copied");
});

copyButton.addEventListener("mouseout", (e) => {
  e.target.setAttribute("tool_tip", "copy");
});
