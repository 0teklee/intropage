const body = document.querySelector("body");
const switchLabel = document.querySelector(".switch_label");
const header = document.querySelector("header");
const headerLink = document.querySelectorAll(".headerLink");
const footerTop = document.querySelector("#top");

function viewMode() {
  if (body.style.color === "rgb(0, 0, 0)") {
    body.style.backgroundColor = "#000000";
    body.style.color = "#fff";
    header.style.backgroundColor = "#141518";
    for (a of headerLink) {
      a.style.color = "#fff";
    }
    footerTop.style.color = "#fff";
    console.log("darkmode!");
  } else {
    body.style.background = "#fff";
    body.style.color = "#000000";
    header.style.backgroundColor = "#6b6b6b4b";
    for (a of headerLink) {
      a.style.color = "#000000";
    }
    footerTop.style.color = "#000000";
    console.log("lightmode!");
  }
}

document.querySelector(".switch_label").addEventListener("click", viewMode);
