function initSelected() {
  const circles = document.querySelectorAll(".circles");
  if (circles.length) {
    function activeSelected() {
      circles.forEach((circle) => {
        circle.classList.remove("selected");
      });
      this.classList.toggle("selected");
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
}
btn.addEventListener("click", activeFeedbackMessage);


