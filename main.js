// [Theme Customization]
const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

darkButton.addEventListener("click", function ()  {
    document.body.classList.remove("light-theme");
    
});

lightButton.addEventListener("click", function () {
    document.body.classList.add("light-theme");
});


// [Section Navigator]


const menuButton = document.getElementById("menu-button");
const closeSidebar = document.getElementById("close-sidebar");
const sidebar = document.getElementById("sidebar");

menuButton.addEventListener("click", function () {
    sidebar.classList.add("active");
});

closeSidebar.addEventListener("click", function () {
    sidebar.classList.remove("active");
});