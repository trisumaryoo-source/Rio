const emotes = [
  "#emote-happy",
  "#emote-cool",
  "#emote-love"
];

let index = 0;
const emoteIcon = document.querySelector("#emoteToggle use");

document.getElementById("emoteToggle").addEventListener("click", () => {
  index = (index + 1) % emotes.length;
  emoteIcon.setAttribute("href", emotes[index]);
});
