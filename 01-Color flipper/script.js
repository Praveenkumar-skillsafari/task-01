let backGround = document.querySelector("#container");
let colorCode = document.querySelector("#color-code");
let btn = document.querySelector("#btn");

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomHexVal() {
  let random = Math.floor(Math.random() * 16);
  return hex[random];
}
console.log(randomHexVal());

btn.addEventListener("click", () => {
  hexColor = "#";
  for (i = 1; i <= 6; i++) {
    hexColor += randomHexVal();
  }
  console.log(hexColor);
  backGround.style.backgroundColor = hexColor;
  colorCode.innerText = hexColor;
});
