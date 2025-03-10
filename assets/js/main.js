document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navItems = document.querySelectorAll(".nav__item");
  const header = document.getElementById("header");

  if (navToggle && navMenu && navItems.length > 0 && header) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("nav__menu--open");
      changeIcon();
    });

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (navMenu.classList.contains("nav__menu--open")) {
          navMenu.classList.remove("nav__menu--open");
        }
        changeIcon();
      });
    });

    function changeIcon() {
      if (navMenu.classList.contains("nav__menu--open")) {
        navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
      } else {
        navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
      }
    }

    const primaryBtn = document.querySelector(".btn.btn--primary");
    if (primaryBtn) {
      primaryBtn.addEventListener("click", function() {
        window.location.href = "#";
      });
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("header--scroll");
      } else {
        header.classList.remove("header--scroll");
      }
    });

    const sr = ScrollReveal({
      duration: 2000,
      distance: "100px",
      delay: 400,
      reset: false,
    });

    sr.reveal(".hero__content");
    sr.reveal(".hero__img", { origin: "top" });

    sr.reveal(
      ".hero__info-wrapper, .about__content, .about__skills, .social__wrapper, .skills__title, .skills__content, .project__content, .footer__content",
      {
        delay: 500,
        interval: 100,
      }
    );
  } else {
    console.error("One or more elements are missing.");
  }
});
