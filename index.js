
// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});

// Contact Form
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = "Please fill in all fields.";
        return;
    }

    formStatus.textContent =
        "Thank you, " + name + "! Your form demo is complete.";

    contactForm.reset();
});
