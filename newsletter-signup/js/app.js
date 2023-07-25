let email = document.querySelector("#input-email");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const error = document.querySelector(".error-span");
const btn = document.querySelector("#btn");
const form = document.querySelector(".form-content");
const modal = document.querySelector(".modal");
const btnDismiss = document.querySelector("#btn-dismiss");
const emailSend = document.querySelector(".email-send");

function validateForm(event) {
  event.preventDefault();

  if(!email.value.match(regex)) {
    error.classList.add("active");
    email.classList.add("error");
    email.focus();
  } else {
    emailSend.textContent = email.value;
    error.classList.remove("active");
    email.classList.remove("error");
    form.classList.add("disabled");
    modal.classList.add("active");
  }
}

function dismissMessage() {
  modal.classList.remove("active");
  form.classList.remove("disabled");
}

btn.addEventListener("click", validateForm);
btnDismiss.addEventListener("click", dismissMessage);
