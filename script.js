const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("nav-menu");
// Generate math CAPTCHA
function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const sum = num1 + num2;
  document.getElementById("captcha-question").innerText = `${num1} + ${num2}`;
  return sum;
}

// Form validation and CAPTCHA handling
document.addEventListener("DOMContentLoaded", () => {
  const captchaAnswer = generateCaptcha();

  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userCaptcha = parseInt(document.getElementById("captcha").value, 10);
    if (isNaN(userCaptcha) || userCaptcha !== captchaAnswer) {
      alert("Please solve the CAPTCHA correctly!");
      document.getElementById("captcha").value = ""; // Clear input
      generateCaptcha(); // Regenerate CAPTCHA
      return;
    }

    alert("Form submitted successfully!");
    contactForm.reset();
    generateCaptcha(); // Regenerate CAPTCHA
  });

  // Dynamically update social media links
  document.getElementById("facebook-link").href =
    "https://www.facebook.com/profile.php?id=100005417144310";
  document.getElementById("x-link").href =
    "https://x.com/mmridul003";
  document.getElementById("linkedin-link").href =
    "https://www.linkedin.com/in/md-mostak-ahamed-mridul-7669631b2/";
  document.getElementById("github-link").href = "https://github.com/mmridul007";
});

// Nav
function setMenu(open) {
  navMenu.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", open);
  navToggle.innerHTML = open
    ? '<i class="fas fa-xmark"></i>'
    : '<i class="fas fa-bars"></i>';
}

navToggle.addEventListener("click", () => {
  setMenu(!navMenu.classList.contains("open"));
});

// Close the menu after tapping a link
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Reset when resizing up to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) setMenu(false);
});