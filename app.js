const headerMenuBtn = document.querySelector(
  ".header-nav__li1 .header-nav__item1 i"
);
console.dir(headerMenuBtn);

function headerMenuBtnOpen() {
  console.dir("hi");
}

headerMenuBtn.addEventListener("click", headerMenuBtnOpen);
