const menuButton = document.getElementById("menuButton");

const menuPage = document.querySelector("#menuPage");

menuButton.addEventListener("click", () => {
  console.log("Menu button clicked");

  menuPage.classList.toggle("hidden");
});
