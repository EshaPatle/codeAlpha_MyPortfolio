// Toggle light/dark mode
function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

// Set initial theme based on system preference
window.onload = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.add("light");
  }
};
