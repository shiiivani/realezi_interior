const listItems = document.querySelectorAll(".upper-nav li");

listItems.forEach((item) => {
  item.addEventListener("click", function () {
    listItems.forEach((li) => li.classList.remove("active"));

    this.classList.add("active");
  });
});
