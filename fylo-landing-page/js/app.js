function modal() {
  const modal = document.querySelector("[data-attributes='modal']");
  const overlay = document.querySelector("[data-attributes='overlay']");

  function showModal() {
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModalOnEsc(event) {
    if (event.key === "Escape") {
      modal.classList.remove("active");
      overlay.classList.remove("active");
    }
  }

  function closeModalOutside(event) {
    if (event.target === overlay) {
      modal.classList.remove("active");
      overlay.classList.remove("active");
    }
  }

  document.querySelector("[data-attributes='sign-in-button']").addEventListener('click', showModal);
  document.addEventListener("keydown", closeModalOnEsc);
  document.addEventListener("click", closeModalOutside);
}

function toggleTheme() {
  const buttonToggle = document.querySelector("[data-attributes='btn-toggle-theme']");
  const checkbox = document.getElementById("theme-toggle");

  const html = document.querySelector("html");
  const overlayPattern = document.querySelector(".overlay-pattern");
  const phoneIcon = document.querySelector(".phone-link");
  const emailIcon = document.querySelector(".email-link");
  const logo = document.querySelectorAll(".logo");
  const locationIcon = document.querySelector(".location-icon");

  const savedTheme = localStorage.getItem("theme");
  checkbox.checked = savedTheme === "light";
  document.documentElement.setAttribute("data-attributes", savedTheme);

  function updateTheme(theme) {
    html.classList.toggle("light-mode", theme === "light");
    overlayPattern.classList.toggle("light", theme === "light");
    phoneIcon.classList.toggle("light", theme === "light");
    emailIcon.classList.toggle("light", theme === "light");
    locationIcon.classList.toggle("light", theme === "light");

    logo.forEach((i) => {
      i.classList.toggle("light", theme === "light");
    });

    checkbox.addEventListener("click", () => {
      const currentTheme = checkbox.checked ? "light" : "dark";
      localStorage.setItem("theme", currentTheme);
    });
  }

  updateTheme(savedTheme);

  buttonToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-attributes");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-attributes", newTheme);
    localStorage.setItem("theme", newTheme);

    updateTheme(newTheme);
  });
}

function animationScroll() {
  const content = document.querySelectorAll("[data-attributes='scroll']");
  const half = window.innerHeight * 1;

  function initScroll() {
    content.forEach((section) => {
      const contentTop = section.getBoundingClientRect().top;
      const contentVisible = (contentTop - half) < 0;
      if (contentVisible)
        section.classList.add("active");
      else
        section.classList.remove("active");
    })
  }

  initScroll();
  window.addEventListener('scroll', initScroll);
}

function buttonToTop() {
  const btnToTop = document.querySelector("[data-attributes='button-top']");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnToTop.classList.add("active");
    } else {
      btnToTop.classList.remove("active");
    }
  });

  btnToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

modal();
toggleTheme();
animationScroll();
buttonToTop();