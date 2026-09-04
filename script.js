// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀";
  } else {
    themeToggle.textContent = "☾";
  }

});


// ===============================
// AUTOMATIC YEAR
// ===============================

document.getElementById("year").textContent =
  new Date().getFullYear();


// ===============================
// LINKEDIN PLACEHOLDER
// ===============================

const linkedinLink =
  document.getElementById("linkedinLink");

linkedinLink.addEventListener("click", function(event) {

  if (linkedinLink.getAttribute("href") === "#") {

    event.preventDefault();

    alert(
      "Add your LinkedIn profile URL here before publishing."
    );

  }

});


// ===============================
// NAVIGATION ACTIVE EFFECT
// ===============================

const navLinks =
  document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

  link.addEventListener("click", function() {

    navLinks.forEach(function(item) {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });

});
