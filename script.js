const emojis = [
  "😎",
  "😎",
  "☠️",
  "☠️",
  "👾",
  "👾",
  "💩",
  "💩",
  "🥶",
  "🥶",
  "😍",
  "😍",
  "👣",
  "👣",
  "🧠",
  "🧠",
];

let resetBtn = document.querySelector(".reset");

let shuffle = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

function init() {
  createBox();
}

function createBox() {
  shuffle.forEach((emoji) => {
    let box = document.createElement("div");
    let cover = document.createElement("div");
    cover.className = "cover";
    box.innerHTML = emoji;
    box.className = "item";

    box.appendChild(cover);
    document.querySelector(".game").appendChild(box);

    box.addEventListener("click", () => {
      if (box.classList.contains("boxMatch")) {
      } else {
        box.classList.add("boxOpen");
        box.lastChild.classList.remove("cover");

        if (document.querySelectorAll(".boxOpen").length > 1) {
          if (
            document.querySelectorAll(".boxOpen")[0].innerHTML ===
            document.querySelectorAll(".boxOpen")[1].innerHTML
          ) {
            document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
            document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");
            document.querySelectorAll(".boxMatch").forEach(function (element) {
              element.classList.remove("boxOpen");
            });
          } else {
            setTimeout(() => {
              document
                .querySelectorAll(".boxOpen")[0]
                .lastChild.classList.add("cover");
              document
                .querySelectorAll(".boxOpen")[1]
                .lastChild.classList.add("cover");
              document.querySelectorAll(".boxOpen").forEach(function (element) {
                element.classList.remove("boxOpen");
              });
            }, 500);
          }
        }
      }
      if (emojis.length == document.querySelectorAll(".boxMatch").length) {
        alert("Win!");
      }
    });
  });
}

init();
