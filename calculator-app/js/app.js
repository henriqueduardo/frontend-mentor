const form = document.querySelector("[data-attributes='form']");
const numbers = document.querySelectorAll("[data-attributes='btns']");
let result = document.querySelector("[data-attributes='result']");
let values = "";

function calculate(event) {
  event.preventDefault();
  const clickedBtn = event.target;

  if (clickedBtn.dataset.attributes === "btns") {
    values += clickedBtn.textContent; // concatenar os numeros
    result.value = values; // exibir valores
  } else if (clickedBtn.dataset.attributes === "submit") {
    try {
      const validValues = values.replace(/x/g, "*"); // x por *
      const calcStringToNumber = eval(validValues); // string p number
      result.value = calcStringToNumber; // resultado
      values = calcStringToNumber.toString(); // guardar resultado do calc
    } catch (error) {
      result.value = "An error has occurred.";
      console.log(form);
    }
  } else if (clickedBtn.dataset.attributes === "delete") {
    values = values.slice(0, -1); // remover ultimo numero
    result.value = values; // guardar valor
  } else if (clickedBtn.dataset.attributes === "reset") { // resetar numeros
    values = "";
    result.value = "";
  }
}

form.addEventListener("click", calculate);