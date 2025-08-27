// handle THEMES
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("--dark-theme");
} else if (localStorage.getItem("theme") === "light") {
  // do nothing, light theme is default
} else if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("--dark-theme");
}

const toggleThemeButton = document.querySelector("#theme-toggle-button");
toggleThemeButton.removeEventListener("click", handleToggleTheme);
toggleThemeButton.addEventListener("click", handleToggleTheme);

function handleToggleTheme() {
  const theme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme);
  document.body.classList.toggle("--dark-theme");
}

// handle CURSOR
const { springValue, styleEffect } = Motion;

const size = 12;
const config = { damping: 100, stiffness: 700 };
const x = springValue(0, config);
const y = springValue(0, config);

document.removeEventListener("mousemove", handleMouseMove);
document.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(event) {
  x.set(event.clientX - size / 2); // center the cursor
  y.set(event.clientY - size / 2);
  styleEffect("#cursor", { x, y });
}
