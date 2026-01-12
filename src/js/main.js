const likeBtn = document.getElementById("like-Btn");
const counter = document.querySelector(".like-counter"); // ou utilise un ID si tu en as un

let count = 147;

likeBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
