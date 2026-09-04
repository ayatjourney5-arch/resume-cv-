// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {

    themeToggle.textContent = "☀️";

    localStorage.setItem("theme", "dark");

  } else {

    themeToggle.textContent = "🌙";

    localStorage.setItem("theme", "light");

  }

});


// ===============================
// REMEMBER THEME
// ===============================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

  document.body.classList.add("dark");

  themeToggle.textContent = "☀️";

}


// ===============================
// AUTOMATIC COPYRIGHT YEAR
// ===============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ===============================
// LINKEDIN BUTTON
// ===============================

const linkedinLink = document.getElementById("linkedinLink");

linkedinLink.addEventListener("click", function (event) {

  if (linkedinLink.getAttribute("href") === "#") {

    event.preventDefault();

    alert(
      "LinkedIn profile link can be added here."
    );

  }

});


// ===============================
// NAVIGATION ACTIVE EFFECT
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    navLinks.forEach(function (item) {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });

});
