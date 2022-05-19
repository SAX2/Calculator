const btnMode = document.getElementById("btn-mode");
const icon = document.querySelector(".navI-1");

btnMode.addEventListener("click",() => {
    document.body.classList.toggle("dark");
    icon.classList.toggle("fa-moon");
});