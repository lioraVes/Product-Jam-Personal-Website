console.log("Hello World!");

function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById("dark-mode-icon");
  const text = document.getElementById("dark-mode-text");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.src = "sun_icon.png";
    text.textContent = "Switch to Light Mode";
  } else {
    icon.src = "moon_icon.png";
    text.textContent = "Switch to Dark Mode";
  }
}

document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);