function initModal() {
  const modal = document.querySelector("[data-attributes='modal']");
  const modalOverlay = document.querySelector("[data-attributes='modal-overlay']");
  const btns = document.querySelectorAll("[data-attributes='button']");
  const btn = document.querySelector(".btn-close-modal");

  const modalSucess = document.querySelector("[data-attributes='modal-sucess']");
  const btnsContinue = document.querySelectorAll("[data-attributes='btn-continue']");
  const btnGot = document.querySelector("[data-attributes='btn-got-it']");


  function showModal() {
    modal.classList.add("active");
    modalOverlay.classList.add("active");
  }

  function closeModalBtn() {
    modal.classList.remove("active");
    modalOverlay.classList.remove("active");
  }

  function closeModalOnEsc(event) {
    if (event.key === "Escape") {
      modal.classList.remove("active");
      modalOverlay.classList.remove("active");
      modalSucess.classList.remove("active");
    }
  }

  function closeModalOutside(event) {
    if (event.target === modalOverlay) {
      modal.classList.remove("active");
      modalOverlay.classList.remove("active");
      modalSucess.classList.remove("active");
    }
  }

  function closeModalSucess() {
    modalSucess.classList.remove("active");
    modalOverlay.classList.remove("active");
  }

  btnsContinue.forEach((i) => {
    i.addEventListener("click", () => {
      btnsContinue.forEach((btn) => {
        modalSucess.classList.add("active");
        modal.classList.remove("active");
      });
    });
  })


  btn.addEventListener("click", closeModalBtn);
  btns.forEach((i) => {
    i.addEventListener("click", showModal);
  })
  document.addEventListener("keydown", closeModalOnEsc);
  document.addEventListener("click", closeModalOutside);
  btnGot.addEventListener("click", closeModalSucess)
}

function initAccordion() {
  const faqs = document.querySelectorAll("[data-attributes='faq']");
  const labels = document.querySelectorAll("[data-attributes='label']");
  const radios = document.querySelectorAll("[data-attributes='radio']");
  const contents = document.querySelectorAll(".modal-content");

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

      contents.forEach((b) => {
        b.classList.remove("active");
      });

      faqs[index].classList.toggle("active");
      contents[index].classList.toggle("active");
    });
  });
}

function initMenuMobile() {
  const menuHamburguer = document.querySelector("[data-attributes='button-menu-mobile']");
  const menuHamburguerContent = document.querySelector("[data-attributes='menu-mobile']")
  const overlay = document.querySelector("[data-attributes='menu-mobile-overlay']");

  function openMenuMobile() {
    menuHamburguer.classList.toggle("active");
    overlay.classList.toggle("active");
    menuHamburguerContent.classList.toggle("active");
  }

  function closeMenuMobileOutside(event) {
    if (event.target === overlay) {
      menuHamburguer.classList.remove("active");
      menuHamburguerContent.classList.remove("active");
      overlay.classList.remove("active");
    }
  }

  menuHamburguer.addEventListener("click", openMenuMobile);
  document.addEventListener("click", closeMenuMobileOutside);
}

initModal();
initAccordion();
initMenuMobile();