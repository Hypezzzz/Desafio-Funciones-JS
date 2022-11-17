// 4 Ejercicio

let color;
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "black";
  } else if (event.key === "s") {
    color = "yellow";
  } else if (event.key === "d") {
    color = "orange";
  }
});

const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");

const clickFunction = (e) => {
  e.target.style.backgroundColor = color;
};

div1.addEventListener("click", clickFunction);
div2.addEventListener("click", clickFunction);
div3.addEventListener("click", clickFunction);
div4.addEventListener("click", clickFunction);
