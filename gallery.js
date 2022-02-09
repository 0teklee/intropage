let imagebox = document.querySelector(".imagebox");
let inner = document.querySelector(".inner");
let innerAll = document.querySelectorAll(".inner");
let bnwDiv = document.querySelector(".blacknwhite");
let colorDiv = document.querySelector(".color");
let installDiv = document.querySelector(".install");
let contactsDiv = document.querySelector(".contacts");
let bnwInner = document.querySelector(".blacknwhite").querySelector(".inner");
let colorInner = document.querySelector(".color").querySelector(".inner");
let installInner = document.querySelector(".install").querySelector(".inner");
let indexDiv = document.querySelector(".indexDiv");

function moveLeft() {
  updateTransform = imagebox.style.transform.replace(/[^-\.0-9]/g, "");
  if (updateTransform == 0) {
    console.log("왼쪽 이동 그만");
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
    console.log("오른쪽 이동 멈춤!");
    return;
  } else if (updateTransform === "") {
    console.log("작동");
    imagebox.style.transform = "translate(-100vw)";
  } else {
    imagebox.style.transform =
      "translate(" + (parseFloat(updateTransform) - 100) + "vw)";
  }
}

function bnwOn() {
  imagebox.style.transform = "translate(0vw)";
  bnwDiv.style.display = "";
  colorDiv.style.display = "none";
  installDiv.style.display = "none";
  contactsDiv.style.display = "none";
  indexDiv.style.display = "none";
  updateCategory(); //
}
function colorOn() {
  imagebox.style.transform = "translate(0vw)";
  bnwDiv.style.display = "none";
  colorDiv.style.display = "";
  installDiv.style.display = "none";
  contactsDiv.style.display = "none";
  indexDiv.style.display = "none";
  updateCategory(); //
}

function installOn() {
  imagebox.style.transform = "translate(0vw)";
  bnwDiv.style.display = "none";
  colorDiv.style.display = "none";
  installDiv.style.display = "";
  contactsDiv.style.display = "none";
  indexDiv.style.display = "none";
  updateCategory(); //
}

function contactsOn() {
  imagebox.style.transform = "translate(0vw)";
  bnwDiv.style.display = "none";
  colorDiv.style.display = "none";
  installDiv.style.display = "none";
  indexDiv.style.display = "none";
  contactsDiv.style.display = "";
  updateCategory(); //
}

function indexOn() {
  imagebox.style.transform = "translate(0vw)";
  indexDiv.style.display = "";
  bnwDiv.style.display = "none";
  colorDiv.style.display = "none";
  installDiv.style.display = "none";
  contactsDiv.style.display = "none";
  updateCategory(); //
}

function updateCategory() {
  if (bnwDiv.style.display == "") {
    imagebox.style.width =
      parseFloat(inner.style.width) *
        parseFloat(bnwDiv.querySelectorAll(".inner").length) +
      "vw";
  } else if (colorDiv.style.display == "") {
    imagebox.style.width =
      parseFloat(inner.style.width) *
        parseFloat(colorDiv.querySelectorAll(".inner").length) +
      "vw";
  } else if (installDiv.style.display == "") {
    imagebox.style.width =
      parseFloat(inner.style.width) *
        parseFloat(installDiv.querySelectorAll(".inner").length) +
      "vw";
  } else if (indexDiv.style.display == "") {
    imagebox.style.width = parseFloat(inner.style.width) + "vw";
  } else if (contactsDiv.style.display == "") {
    imagebox.style.width = parseFloat(inner.style.width) + "vw";
  }
}

document.querySelector(".move-right").addEventListener("click", moveRight);
document.querySelector(".move-left").addEventListener("click", moveLeft);
updateCategory();

// blackmwhite.style.display;
// color.style.display = install.style.display;
