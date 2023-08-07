const dark_mode = document.querySelector("#header__dark-mode-btn");
dark_mode.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});
