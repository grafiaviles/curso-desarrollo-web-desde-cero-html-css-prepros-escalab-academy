const d = document;
const links = d.querySelectorAll(".main-menu ul a");
console.log(links)
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
console.log("hola")
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = d.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}