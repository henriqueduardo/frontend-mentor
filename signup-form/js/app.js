const btn = document.querySelector(".btn");

let nameInput = document.querySelector(".input-name");
let lastNameInput = document.querySelector(".input-lastName");

let email = document.querySelector(".input-email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let errorName = document.querySelector(".error-name");
const errorIcon = document.querySelector(".error-icon-name");

let errorLastName = document.querySelector(".error-lastName");
const errorLastnameIcon = document.querySelector(".error-icon-lastName");

let errorEmail = document.querySelector(".error-email");
const errorIconEmail = document.querySelector(".error-icon-email");

let password = document.querySelector(".input-password");
let errorPassword = document.querySelector(".error-password");
const errorIconPassword = document.querySelector(".error-icon-password");

function validateForm(event) {
  event.preventDefault();

  if (nameInput.value === "") {
    errorName.innerHTML = "First Name cannot be empty";
    nameInput.classList.add("error-border");
    nameInput.focus();
    errorIcon.classList.add("active");
    return;
  } else {
    errorIcon.classList.remove("active");
    nameInput.classList.add("sucess-border");
    errorName.innerHTML = "";
  }

  if (lastNameInput.value === "") {
    errorLastName.innerHTML = "Last Name cannot be empty";
    lastNameInput.classList.add("error-border");
    lastNameInput.focus();
    errorLastnameIcon.classList.add("active");
    return;
  } else {
    errorLastnameIcon.classList.remove("active");
    lastNameInput.classList.add("sucess-border");
    errorLastName.innerHTML = "";
  }

  if (!email.value.match(emailRegex)) {
    errorEmail.innerHTML = "Looks like this is not an email";
    email.classList.add("error-border");
    email.focus();
    errorIconEmail.classList.add("active");
    return;
  } else {
    errorIconEmail.classList.remove("active");
    email.classList.add("sucess-border");
    errorEmail.innerHTML = "";
  }

  if (password.value === "") {
    errorPassword.innerHTML = "Password cannot be empty";
    password.classList.add("error-border");
    password.focus();
    errorIconPassword.classList.add("active");
    return;
  } else {
    errorIconPassword.classList.remove("active");
    password.classList.add("sucess-border");
    errorPassword.innerHTML = "";
  }
}

btn.addEventListener("click", validateForm);