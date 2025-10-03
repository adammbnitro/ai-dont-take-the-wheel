const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", () => {
  const menuPage = document.querySelector("#menuPage");
  menuPage.classList.toggle("hidden");
});