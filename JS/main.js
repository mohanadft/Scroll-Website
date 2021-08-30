let items = document.querySelectorAll(".nav-item");

let menu = document.querySelector(".menu-bar"),
  list = document.querySelector(".nav-list");

/* Show Navbar On Mobile  */
menu.addEventListener("click", function () {
  list.classList.toggle("show");
  menu.classList.toggle("bx-x");
});

/* Remove Navbar When click on any link */

items.forEach((e) =>
  e.addEventListener("click", function () {
    list.classList.remove("show");
  menu.classList.remove("bx-x");

  })
);

document.querySelector(".button").onclick = function () {
  list.classList.remove("show");
};

/* Scroll Animations */

const sr = ScrollReveal({
  distance: "50px",
  duration: 1000,
  reset: true,
});

sr.reveal(".explore h1", { origin: "left" });
sr.reveal(".explore h4", { origin: "left", delay: 100 });
sr.reveal(".explore .main__btn", { origin: "left", delay: 200 });

sr.reveal(".about .icon", { origin: "left" });
sr.reveal(".about .content", { origin: "right" });

sr.reveal(".card", { origin: "left", interval: 400, duration: 1000 });

sr.reveal(".sign .content", { origin: "left" });
sr.reveal(".sign .icon", { origin: "right" });

sr.reveal(".contact .footer-sec1 div", { origin: "top", interval: 400 });
sr.reveal(".contact .footer-sec2 h1", { origin: "left", delay: 100 });
sr.reveal(".contact .footer-sec2 p", { origin: "bottom", delay: 500 });
sr.reveal(".contact .footer-sec2 ul", { origin: "right", delay: 200 });

/* Show Active Link When Scrolling */

function removeActiveClasses() {
  items.forEach((e) => e.classList.remove("active"));
}

window.onscroll = function () {
  if (
    document.documentElement.scrollTop >=
      document.querySelector(".explore").offsetTop / 2 &&
    document.documentElement.scrollTop <
      document.querySelector(".explore").offsetTop +
        document.querySelector(".explore").offsetHeight / 2
  ) {
    removeActiveClasses();
    document.querySelector(".home-link").classList.add("active");
  } else if (
    document.documentElement.scrollTop >=
      document.querySelector(".about").offsetTop / 2 &&
    document.documentElement.scrollTop <=
      document.querySelector(".about").offsetTop +
        document.querySelector(".about").offsetHeight / 2
  ) {
    removeActiveClasses();
    document.querySelector(".about-link").classList.add("active");
  } else if (
    document.documentElement.scrollTop >=
      document.querySelector(".services").offsetTop / 2 &&
    document.documentElement.scrollTop <
      document.querySelector(".services").offsetTop +
        document.querySelector(".services").offsetHeight / 2
  ) {
    removeActiveClasses();
    document.querySelector(".services-link").classList.add("active");
  } else {
    removeActiveClasses();
  }
};
