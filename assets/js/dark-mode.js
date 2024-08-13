// Utility function to calculate the current theme setting.
function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

// Utility function to update the button text and aria-label.
function updateButton(buttonEl, isDark) {
  const iconClass = "icon-large";
  const newCta = isDark
    ? `<i class='fa-solid fa-sun ${iconClass}'></i>`
    : `<i class='fa-solid fa-moon ${iconClass}'></i>`;
  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerHTML = newCta;
}

// Utility function to update the theme setting on the html tag
function updateThemeOnHtmlEl(theme) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

// On page load:

// 1. Grab what we need from the DOM and system settings on page load
const buttons = document.querySelectorAll("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

// 2. Work out the current site settings
let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

// 3. Update the theme setting and button text according to current settings
buttons.forEach((button) => {
  updateButton(button, currentThemeSetting === "dark");
});
updateThemeOnHtmlEl(currentThemeSetting);

// 4. Add an event listener to toggle the theme for all buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    buttons.forEach((btn) => updateButton(btn, newTheme === "dark"));
    updateThemeOnHtmlEl(newTheme);

    currentThemeSetting = newTheme;
  });
});
