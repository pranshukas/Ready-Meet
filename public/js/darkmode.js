
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var Dark = document.getElementById("dark-mode");
    var icon = document.querySelectorAll(".icon");
    var logoText = document.getElementsByClassName("navbar-brand");
    var userName = document.getElementsByClassName("username");
    if (Dark.getAttribute("name") === "sunny-outline") {
        Dark.setAttribute("name", "moon-outline");
        logoText[0].style.color = userName[0].style.color = icon[0].style.color = icon[1].style.color = icon[2].style.color = icon[3].style.color = "#5F6368";
    } else {
        Dark.setAttribute("name", "sunny-outline");
        logoText[0].style.color = userName[0].style.color = icon[0].style.color = icon[1].style.color = icon[2].style.color = icon[3].style.color = "#fff";
    }
}
