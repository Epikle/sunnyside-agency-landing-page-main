
document.querySelector("#mobile_menu_link").addEventListener("click", (event) => {
    document.getElementById("nav").classList.toggle("mobile");
    event.preventDefault();
}, false);