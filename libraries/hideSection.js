"use strict";

function switchPages(btn, page1, page2) {
  btn.addEventListener("click", () => {
    page1.classList.remove("unhideHero--section");
    page1.classList.add("hideHero--section");
    page2.style.display = "flex";
  });
}
function goHomePage(link, page1, page2) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    page1.classList.remove("hideHero--section");
    page1.classList.add("unhideHero--section");
    page2.style.display = "none";
  });
}
export { switchPages, goHomePage };
