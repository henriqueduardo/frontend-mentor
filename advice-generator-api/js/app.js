let quote = document.getElementById("advice-quote");
let quoteId = document.getElementById("advice-id");
const btn = document.getElementById("btn");

function randomQuote() {
  const urlapi = "https://api.adviceslip.com/advice";
  fetch(urlapi)
    .then(response => {
      if (!response.ok) {
        throw new Error("erro");
      }
      return response.json();
    })
    .then(data => {
      const advice = data.slip.advice;
      const adviceId = data.slip.id;

      quoteId.innerText = `advice #${adviceId}`; // id da frase
      quote.innerText = `“${advice}”`; // exibir frase
    })
    .catch(error => {
      console.error("ocorreu algum erro:", error);
    });
}