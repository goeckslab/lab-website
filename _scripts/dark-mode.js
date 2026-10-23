/*
  manages light/dark mode.
*/

{
  // save/load user's dark mode preference from local storage
  const loadDark = () => window.localStorage.getItem("dark-mode") === "true";
  const saveDark = (value) => window.localStorage.setItem("dark-mode", value);

  const onLoad = () => {
    // Only restore a saved mode when the page offers a way to change it.
    const toggle = document.querySelector(".dark-toggle");
    if (!toggle) return;
    const dark = loadDark();
    document.documentElement.dataset.dark = dark;
    toggle.checked = dark;
  };

  // after page loads
  window.addEventListener("load", onLoad);

  // when user toggles mode button
  window.onDarkToggleChange = (event) => {
    const value = event.target.checked;
    document.documentElement.dataset.dark = value;
    saveDark(value);
  };
}
