import load_HomePage from "./load_HomePage";
import load_MenuPage from "./load_MenuPage";
import "./style.css";

load_HomePage();

const addEventlisteners = (() => {
  const body = document.querySelector("body");
  const btnHome = body.querySelector("#home");
  const btnMenu = body.querySelector("#menu");
  const btnAbout = body.querySelector("#about");
  const content = body.querySelector("#content");

  btnHome.addEventListener("click", () => {
    removeContents(content);
    load_HomePage();
  });
  btnMenu.addEventListener("click", () => {
    removeContents(content);
    load_MenuPage();
  });
  btnAbout.addEventListener("click", () => {
    removeContents(content);
  });
})();

function removeContents(parentElement) {
  if (parentElement) {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  }
}
