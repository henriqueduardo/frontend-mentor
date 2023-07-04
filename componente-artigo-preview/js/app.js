const btn = document.querySelector(".share-icon");
const shareIcons = document.querySelector(".share-icons-box-pop");

function activeShare() {
  shareIcons.classList.toggle("active");
  btn.classList.toggle("btn-active");
}

btn.addEventListener("click", activeShare);