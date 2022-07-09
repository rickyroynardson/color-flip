const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const flip = document.querySelector("#flip");
const copy = document.querySelector("#copy");
const text = document.querySelector("h2");
const span = document.querySelector("span");
let copyText = "#FFFFFF";

const getRandomHex = () => {
  return Math.floor(Math.random() * hex.length);
};

flip.addEventListener("click", () => {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[getRandomHex()];
  }

  copyText = color;
  document.body.style.backgroundColor = color;
  text.style.color = color;
  span.textContent = color;
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(copyText);
});
