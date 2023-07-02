function initSelected() {
  const circles = document.querySelectorAll(".circles");
  if (circles.length) {
    function activeSelected() {
      circles.forEach((circle) => {
        circle.classList.remove("selected");
      });
      this.classList.toggle("selected");

      const selectedOption = this.querySelector("span").textContent;
      feedback.querySelector(
        ".feedback-selected"
      ).textContent = `You selected ${selectedOption} out of 5`;
    }

    circles.forEach((circle) => {
      circle.addEventListener("click", activeSelected);
    });
  }
}

initSelected();

const feedback = document.querySelector(".none");
const btn = document.querySelector(".btn");

function activeFeedbackMessage() {
  feedback.classList.add("active");
  setTimeout(() => {
    feedback.classList.remove("active");
  }, 5000);
}

btn.addEventListener("click", activeFeedbackMessage);
