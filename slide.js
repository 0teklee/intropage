let imagebox = document.querySelector(".imagebox");
let inner = document.querySelector(".inner");
let innerAll = document.querySelectorAll(".inner");

function moveLeft() {
  updateTransform = imagebox.style.transform.replace(/[^-\.0-9]/g, "");
  if (updateTransform == 0) {
    console.log("작동");
    return;
  } else {
    imagebox.style.transform =
      "translate(" + (parseFloat(updateTransform) + 100) + "vw)";
  }
}

function moveRight() {
  updateTransform = imagebox.style.transform.replace(/[^-\.0-9]/g, "");
  if (
    parseFloat(updateTransform) +
      parseFloat(imagebox.style.width) -
      parseFloat(inner.style.width) <=
    0
  ) {
    console.log("여기서 작동 멈춤!");
    return;
  } else if (updateTransform === "") {
    console.log("작동");
    imagebox.style.transform = "translate(-100vw)";
  } else {
    imagebox.style.transform =
      "translate(" + (parseFloat(updateTransform) - 100) + "vw)";
  }
}

function updateWidth() {
  imagebox.style.width =
    parseFloat(inner.style.width) * parseFloat(innerAll.length) + "vw";
}

updateWidth();

document.querySelector(".move-right").addEventListener("click", moveRight);
document.querySelector(".move-left").addEventListener("click", moveLeft);
