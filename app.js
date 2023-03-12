const headerMenuBtn = document.querySelector(
  ".header-nav__li1 .header-nav__item1 i"
);
const body = document.body;
const apps = document.querySelector(".apps");

const mainMenu = document.querySelector("div.menu");
const mainMenuXButton = mainMenu.querySelector(".menu__bar-x");

console.dir(mainMenuXButton);

function appsPositionFix() {
  overflow = body.style.overflow;
  if (overflow !== "hidden") {
    body.style.overflow = "hidden";
    body.style.paddingRight = "16px";
    apps.classList.toggle("apps--opacity-down");
  } else {
    body.style.overflow = "";
    body.style.paddingRight = "";
    apps.classList.toggle("apps--opacity-down");
  }
}

function headerMenuBtnhandle() {
  appsPositionFix();
  console.dir("start");
  console.dir(mainMenu.style.left);
  if (mainMenu.classList.contains("menu-close")) {
    mainMenu.classList.remove("menu-close");
  }

  open = mainMenu.classList.toggle("menu-open");
  console.dir(open);
  if (open === true) {
    mainMenu.style.left = "0";
  } else {
    mainMenu.style.left = "";
    mainMenu.classList.toggle("menu-close");
  }
  console.log("finish");
}

headerMenuBtn.addEventListener("click", headerMenuBtnhandle);
mainMenuXButton.addEventListener("click", headerMenuBtnhandle);
