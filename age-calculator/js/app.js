const btn = document.querySelector(".btn");

const labelDay = document.querySelector(".label-days");
const inputDay = document.querySelector(".input-days");
const errorDay = document.querySelector(".error-days");

const labelMonth = document.querySelector(".label-months");
const inputMonth = document.querySelector(".input-months");
const errorMonth = document.querySelector(".error-months");

const labelYear = document.querySelector(".label-years");
const inputlYear = document.querySelector(".input-years");
const errorYear = document.querySelector(".error-years");

function validate(event) {
  event.preventDefault();

  if (Number(inputDay.value) > 31) {
    errorDay.classList.add("active");
    labelDay.classList.add("active");
    inputDay.classList.add("active");
    inputDay.focus();
  } else if (inputDay.value === "") {
    errorDay.classList.add("active");
    labelDay.classList.add("active");
    inputDay.classList.add("active");
    inputDay.focus();
  } else {
    inputDay.classList.remove("active");
    errorDay.classList.remove("active");
    labelDay.classList.remove("active");
    inputDay.classList.add("sucess-border");
    labelDay.classList.add("sucess-label");
  }

  if (Number(inputMonth.value) > 12) {
    errorMonth.classList.add("active");
    labelMonth.classList.add("active");
    inputMonth.classList.add("active");
    inputMonth.focus();
  } else if (inputMonth.value === "") {
    errorMonth.classList.add("active");
    labelMonth.classList.add("active");
    inputMonth.classList.add("active");
    inputMonth.focus();
  } else {
    inputMonth.classList.remove("active");
    errorMonth.classList.remove("active");
    labelMonth.classList.remove("active");
    inputMonth.classList.add("sucess-border");
    labelMonth.classList.add("sucess-label");
  }

  if (Number(inputlYear.value > 2023)) {
    errorYear.classList.add("active");
    labelYear.classList.add("active");
    inputlYear.classList.add("active");
    inputlYear.focus();
  } else if (inputlYear.value === "") {
    errorYear.classList.add("active");
    labelYear.classList.add("active");
    inputlYear.classList.add("active");
    inputlYear.focus();
  } else {
    inputlYear.classList.remove("active");
    errorYear.classList.remove("active");
    labelYear.classList.remove("active");
    inputlYear.classList.add("sucess-border");
    labelYear.classList.add("sucess-label");
  }
  if (
    !inputDay.classList.contains("active") &&
    !inputMonth.classList.contains("active") &&
    !inputlYear.classList.contains("active")
  ) {
    let birthDate = new Date(
      Number(inputlYear.value),
      Number(inputMonth.value) - 1,
      Number(inputDay.value)
    );
    let today = new Date();

    let days = today.getDate() - birthDate.getDate();
    let months = today.getMonth() - birthDate.getMonth();
    let years = today.getFullYear() - birthDate.getFullYear();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    let yearsElement = document.querySelector(".years-element");
    let monthsElement = document.querySelector(".months-element");
    let daysElement = document.querySelector(".days-element");

    yearsElement.innerHTML = years;
    monthsElement.innerHTML = months;
    daysElement.innerHTML = Math.abs(days); // -
  }
}

btn.addEventListener("click", validate);
