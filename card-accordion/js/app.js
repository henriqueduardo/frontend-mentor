const accordionList = document.querySelectorAll(".js-accordion dt");

function activeAccordion() {
  
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
  
  accordionList.forEach((item) => {
    if (item !== this) {
      item.classList.remove("active");
      item.nextElementSibling.classList.remove("active");
    }
  });
}

accordionList.forEach((item) => {
  item.addEventListener("click", activeAccordion);
});
