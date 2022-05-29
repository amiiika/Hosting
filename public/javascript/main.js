//Switch content on site

//change turorial title and video
document.querySelector(".switch input").addEventListener("change", (e) => {
  mainContent.style.display = e.target.checked ? "block" : "none";
  secondaryContent.style.display = e.target.checked ? "none" : "block";
  switchHeader();
});

//Change turorial text
document.querySelector(".switch input").addEventListener("change", (e) => {
  mainText.style.display = e.target.checked ? "block" : "none";
  secondaryText.style.display = e.target.checked ? "none" : "block";
});

//change header colors
function switchHeader() {
  const header = document.querySelector("header");
  header.classList.toggle("color-heroku");
  header.classList.toggle("color-github");
}
