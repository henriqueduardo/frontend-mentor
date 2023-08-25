function initModal() {
  const modal = document.querySelector("[data-attributes='modal']");
  const modalOverlay = document.querySelector("[data-attributes='modal-overlay']");
  const btns = document.querySelectorAll("[data-attributes='button']");
  
  function showModal() {
    modal.classList.add("active");
    modalOverlay.classList.add("active");
  }
  
  btns.forEach((i) => {
    i.addEventListener("click", showModal);
  })
}

function initAccordion() {
  const faqs = document.querySelectorAll("[data-attributes='faq']");
  const labels = document.querySelectorAll("[data-attributes='label']");
  const radios = document.querySelectorAll("[data-attributes='radio']");

  labels.forEach((label, index) => {
    label.addEventListener("click", () => {
      faqs.forEach((faq) => {
        faq.classList.remove("active");
      });

      faqs[index].classList.toggle("active");
    });
  });

  radios.forEach((radio, index) => {
    radio.addEventListener("click", () => {
      faqs.forEach((faq) => {
        faq.classList.remove("active");
      });

      faqs[index].classList.toggle("active");
    });
  });
}

initModal();
initAccordion();