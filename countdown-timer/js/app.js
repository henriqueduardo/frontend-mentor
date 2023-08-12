let daysValue = document.querySelector(".days");
let hoursValue = document.querySelector(".hours");
let minutesValue = document.querySelector(".minutes");
let secondsValue = document.querySelector(".seconds");

let futureDate = new Date(); // data atual
futureDate.setDate(futureDate.getDate() + 9); // iniciar em 9 dias

function formatNumber(num) {
  return num < 10 ? "0" + num : num; // verificar e formatar números
}

function updateCountdown() {
  const currentDate = new Date(); // atualizar data atual

  const difference = futureDate - currentDate; // diferença entre as datas

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // adicionar um 0 caso o número seja menor que 10
  days = formatNumber(days);
  hours = formatNumber(hours);
  minutes = formatNumber(minutes);
  seconds = formatNumber(seconds);

  // exibir a data nos elementos
  daysValue.textContent = days;
  hoursValue.textContent = hours;
  minutesValue.textContent = minutes;
  secondsValue.textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
