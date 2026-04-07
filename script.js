console.log("StriveFit loaded!");

const menuBtn = document.getElementById("menu-btn");
const sidePanel = document.getElementById("side-panel");
const overlay = document.getElementById("overlay");

// Apply saved theme on every page load
const savedTheme = localStorage.getItem("strivefit-theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  if (document.getElementById("light-btn")) document.getElementById("light-btn").classList.add("active");
} else {
  if (document.getElementById("dark-btn")) document.getElementById("dark-btn").classList.add("active");
}

// Open/close panel
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    sidePanel.classList.toggle("open");
    overlay.classList.toggle("active");
  });
}

// Close when clicking outside
if (overlay) {
  overlay.addEventListener("click", () => {
    sidePanel.classList.remove("open");
    overlay.classList.remove("active");
    const ad = document.getElementById("account-details");
    if (ad) ad.classList.remove("open");
  });
}

// Policy popup
const policyBtn = document.getElementById("policy-btn");
const policyPopup = document.getElementById("policy-popup");
const policyClose = document.getElementById("policy-close");

if (policyBtn && policyPopup) {
  policyBtn.addEventListener("click", () => {
    policyPopup.classList.add("open");
    sidePanel.classList.remove("open");
    overlay.classList.remove("active");
  });
}
if (policyClose) {
  policyClose.addEventListener("click", () => {
    policyPopup.classList.remove("open");
  });
}
if (policyPopup) {
  policyPopup.addEventListener("click", (e) => {
    if (e.target === policyPopup) policyPopup.classList.remove("open");
  });
}

// Theme toggle
const lightBtn = document.getElementById("light-btn");
const darkBtn = document.getElementById("dark-btn");

if (lightBtn) {
  lightBtn.addEventListener("click", () => {
    document.body.classList.add("light");
    lightBtn.classList.add("active");
    if (darkBtn) darkBtn.classList.remove("active");
    localStorage.setItem("strivefit-theme", "light");
  });
}
if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    document.body.classList.remove("light");
    if (darkBtn) darkBtn.classList.add("active");
    if (lightBtn) lightBtn.classList.remove("active");
    localStorage.setItem("strivefit-theme", "dark");
  });
}

// Account dropdown
const accountBtn = document.getElementById("account-btn");
const accountDetails = document.getElementById("account-details");
if (accountBtn && accountDetails) {
  accountBtn.addEventListener("click", () => {
    accountDetails.classList.toggle("open");
  });
}

// ── "Get Started" button → opens workout-plans.html ──
document.addEventListener("DOMContentLoaded", () => {
  // Hero Get Started buttons
  document.querySelectorAll('.hero button, .join-us button').forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = 'workout-plans.html';
    });
  });

  // Active nav link highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active-link');
    }
  });
});
