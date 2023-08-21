const bill = document.querySelector("[data-tip='bill']");
const numPeople = document.querySelector("[data-tip='peoples']");
const percentage = document.querySelectorAll("[data-tip='percentage']");
const showTipAmount = document.querySelector("[data-tip='tip-amount']");
const showTipTotal = document.querySelector("[data-tip='tip-total']");

const form = document.querySelector("[data-tip='form']");
const btn = document.querySelector("[data-tip='reset']");

let selectedPercentage;
let customPercentage = document.getElementById("customPercentage");

// pegar valor da % selecionada
percentage.forEach((i) => {
  i.addEventListener("click", () => {
    selectedPercentage = parseFloat(i.value);
    console.log(selectedPercentage);
    calculateTip(); // executar a função de calculo com % selecionada
    removeCheckedCustom(); // remover o efeito de checked
  });
});

// desmarcar inputs radio percentage
customPercentage.addEventListener("click", () => {
  percentage.forEach((radio) => {
    radio.checked = false;
  });
});

function checkedCustom() {
  customPercentage.classList.add("checked-effect");
}

function removeCheckedCustom() {
  customPercentage.classList.remove("checked-effect");
}

customPercentage.addEventListener("click", checkedCustom);

function calculateTip() {

  let billValue = parseFloat(bill.value);
  let numPeopleValue = parseFloat(numPeople.value);

  // verificar se é nan ou 0
  if (isNaN(numPeopleValue) || numPeopleValue === 0) {
    numPeopleValue = 1; // mockado p nao exibir nan
  }
  if (isNaN(billValue) || billValue === 0) {
    billValue = 1;
  }

  let tipAmount = 0;
  let total = 0;

  // verificar se uma porcentagem foi selecionada
  if (!isNaN(selectedPercentage) && selectedPercentage !== 0) {
    tipAmount = (billValue * (selectedPercentage / 100)) / numPeopleValue;
    total = (billValue / numPeopleValue + tipAmount);
  }

  // iniciar em 0 e ir ate amount e total
  countdown(0, tipAmount, showTipAmount);
  countdown(0, total, showTipTotal);
}

function countdown(start, end, targetElement) {
  let current = start;
  const interval = setInterval(() => {
    targetElement.textContent = `$${current.toFixed(2)}`;
    current += 0.01; // ir de 1 em 1

    if (current >= end) {
      clearInterval(interval); // parar no resultado
    }
  }, 1); // tempo
}

function validateData() {

  const bill = document.getElementById("bill");
  const peoples = document.getElementById("peoples");

  if (bill.value === "") {
    bill.classList.add("active");
    bill.nextElementSibling.classList.add("active");
    bill.focus();
  } else {
    bill.classList.remove("active");
    bill.nextElementSibling.classList.remove("active");
  }

  if (peoples.value === "") {
    peoples.classList.add("active");
    peoples.nextElementSibling.classList.add("active");
    peoples.focus();
  } else {
    peoples.classList.remove("active");
    peoples.nextElementSibling.classList.remove("active");
  }

  form.addEventListener("change", calculateTip);
}

function resetTips() {
  showTipAmount.textContent = "$0.00";
  showTipTotal.textContent = "$0.00";
}

btn.addEventListener("click", resetTips);
form.addEventListener('change', validateData);