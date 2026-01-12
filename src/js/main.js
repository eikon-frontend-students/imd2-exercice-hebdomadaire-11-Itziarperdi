const likeBtn = document.getElementById("like-Btn");
const counter = document.querySelector(".like-counter"); // ou utilise un ID si tu en as un

likeBtn.addEventListener("click", function () {
  likeBtn.classList.toggle("is-active");
});

let count = 147;

likeBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
