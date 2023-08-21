const bill = document.querySelector("[data-tip='bill']");
const numPeople = document.querySelector("[data-tip='peoples']");
const percentage = document.querySelectorAll("[data-tip='percentage']");
const showTipAmount = document.querySelector("[data-tip='tip-amount']");

const form = document.querySelector("[data-tip='form']");
const btn = document.querySelector("[data-tip='reset']");

let selectedPercentage = 5; // iniciar em 5 (checked)

// pegar valor da % selecionada
percentage.forEach((i) => {
  i.addEventListener("click", () => {
    selectedPercentage = parseFloat(i.value);
    calculateTip(); // executar a função de calculo com % selecionada
  });
});

function calculateTip() {

  let billValue = parseFloat(bill.value);
  let numPeopleValue = parseFloat(numPeople.value);

  // verificar se é um nan ou 0
  if (isNaN(numPeopleValue) || numPeopleValue === 0) {
    numPeopleValue = 1; // mockado p nao exibir nan
  }
  if (isNaN(billValue) || billValue === 0) {
    billValue = 1;
  }

  const tipAmount = (billValue * (selectedPercentage / 100)) / numPeopleValue;
  showTipAmount.textContent = `$${tipAmount.toFixed(2)}`;
}

function validateData() {

  const bill = document.getElementById("bill");
  const peoples = document.getElementById("peoples")

  if (bill.value === "") {
    bill.classList.add("active");
    bill.nextElementSibling.classList.add("active");
  } else {
    bill.classList.remove("active");
    bill.nextElementSibling.classList.remove("active");
  }

  if (peoples.value === "") {
    peoples.classList.add("active");
    peoples.nextElementSibling.classList.add("active");
  } else {
    peoples.classList.remove("active");
    peoples.nextElementSibling.classList.remove("active");
  }

  form.addEventListener("keyup", calculateTip);
}

function buttonText() {
  showTipAmount.textContent = "$0.00";
}

btn.addEventListener("click", buttonText);
form.addEventListener('keyup', validateData);

