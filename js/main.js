const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// const collapsibles = document.querySelector(".collapsible");
// collapsibles.addEventListener("click", function () {
//   collapsibles.classList.toggle("collapsible--expanded");
// });
