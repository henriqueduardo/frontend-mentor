const modal = document.querySelector("[data-attributes='modal']");
const overlay = document.querySelector("[data-attributes='overlay']");

function showModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModalOnEsc(event) {
  if (event.key === "Escape") {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
}

function closeModalOutside(event) {
  if (event.target === overlay) {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
}

document.querySelector("[data-attributes='sign-in-button']").addEventListener('click', showModal);
document.addEventListener("keydown", closeModalOnEsc);
document.addEventListener("click", closeModalOutside);