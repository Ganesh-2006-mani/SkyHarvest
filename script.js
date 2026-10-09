
// =======================================
// SKYHARVEST TEAM EMAIL CONFIGURATION
// Update the addresses here when needed.
// =======================================

const SKYHARVEST = {
  member1: "nodagalajeevan7@gmail.com",
  member2: "padalarahul74@gmail.com"
};

// Set the footer copyright year.
document.getElementById("year").textContent =
  new Date().getFullYear();

// Mobile navigation menu.
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Contact form.
// This opens the visitor's email app. It does not send
// email directly from the website or confirm delivery.
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const data = new FormData(contactForm);

  const name = String(data.get("name")).trim();
  const email = String(data.get("email")).trim();
  const subject = String(data.get("subject")).trim();
  const message = String(data.get("message")).trim();

  if (!name || !email || !subject || !message) {
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  const recipient = [
    SKYHARVEST.member1,
    SKYHARVEST.member2
  ].join(",");

  const mailto = new URL(`mailto:${recipient}`);

  mailto.searchParams.set("subject", `[SkyHarvest] ${subject}`);
  mailto.searchParams.set(
    "body",
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  formMessage.textContent =
    "Opening your email application. Please send the prepared email to contact the team.";

  window.location.href = mailto.href;
});
