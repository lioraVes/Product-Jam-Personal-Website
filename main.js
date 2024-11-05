console.log("Hello World!");

// JavaScript to handle dark mode toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
  const body = document.body;
  const icon = document.getElementById("dark-mode-icon");
  const text = document.getElementById("dark-mode-text");

  // Toggle dark mode class on the body
  body.classList.toggle("dark-mode");

  // Switch icon and text based on current theme
  if (body.classList.contains("dark-mode")) {
    icon.src = "sun_icon.png";
    text.textContent = "Switch to Light Mode";
  } else {
    icon.src = "moon_icon.png";
    text.textContent = "Switch to Dark Mode";
  }
});