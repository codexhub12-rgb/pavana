// HERO SLIDER
let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 4000);

// CALCULATOR
const serviceType = document.getElementById("serviceType");
const hours = document.getElementById("hours");
const total = document.getElementById("total");

function calc() {
  let price = Number(serviceType.value);
  let time = Number(hours.value) || 0;
  total.textContent = price * time;
}

serviceType.addEventListener("change", calc);
hours.addEventListener("input", calc);

// FORM VALIDATION
const form = document.getElementById("bookingForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let service = document.getElementById("service").value;

  if (!name || !email || !service) {
    msg.textContent = "Fill all fields";
    msg.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    msg.textContent = "Invalid email";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Booking submitted!";
  msg.style.color = "green";
  form.reset();
});

// DARK MODE
const darkBtn = document.getElementById("darkToggle");

darkBtn.onclick = () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

// LOAD THEME
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
};