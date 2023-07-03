function input(event) {
  event.preventDefault();
  let emailInput = document.querySelector("#email");
  let email = emailInput.value;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let errorEmail = document.getElementById("error-email");
  let errorIcon = document.getElementById("error-icon")
  let successEmail = document.getElementById("success-email");

  if (!email || !email.match(emailPattern)) {
    errorEmail.innerHTML = "Please provide a valid email!";
    successEmail.innerHTML = "";
    emailInput.classList.add("error");
    emailInput.focus();
    errorIcon.classList.add("active");
    return false;
  } else {
    errorEmail.innerHTML = "";
    successEmail.innerHTML = "Success! Your submission has been sent.";
    emailInput.classList.remove("error");
    errorIcon.classList.remove("active");
    return true;
  }
}