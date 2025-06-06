document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been received.`);
      form.reset();
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });
  let lastScrollY = window.scrollY;
  const navbar = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      navbar.classList.add("navbar-hide");
    } else {
      navbar.classList.remove("navbar-hide");
    }
    lastScrollY = window.scrollY;
  });
});
const backToTopBtn = document.createElement("button");
backToTopBtn.id = "backToTop";
backToTopBtn.textContent = "↑";
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const floatingName = document.getElementById("floatingName");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
    floatingName.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
    floatingName.style.display = "none";
  }
});
