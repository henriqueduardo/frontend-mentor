let email = document.querySelector("#input-email");
const error = document.querySelector(".error-span");
const btn = document.querySelector("#btn");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(event) {
  event.preventDefault();

  if(!email.value.match(regex)) {
    error.classList.add("active");
    email.classList.add("error");
    email.focus();
  } else {
    error.classList.remove("active");
    email.classList.remove("error");
    alert("email validado");
  }
}

btn.addEventListener("click", validateForm);