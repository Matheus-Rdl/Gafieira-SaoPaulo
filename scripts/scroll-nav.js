const navMenu = document.querySelectorAll("nav a");
const btnGroups = document.getElementById("header-btn-groups");
const btnEvents = document.getElementById("header-btn-bailes");

btnGroups.addEventListener("click", function() {
  navMenu[3].click();
});

btnEvents.addEventListener("click", function() {
  navMenu[6].click();
});

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const nav = document.getElementById("nav");
    const shadow = document.getElementById("nav-shadow");

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });

    nav.classList.remove("nav-open");
    shadow.style.visibility = "hidden";
    shadow.style.opacity = "0";
  });
});
