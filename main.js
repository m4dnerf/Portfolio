const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}

// Dark theme
darkButton.addEventListener("click", function () {
    document.body.classList.remove("light-theme");

    localStorage.setItem("theme", "dark");
});

// Light theme
lightButton.addEventListener("click", function () {
    document.body.classList.add("light-theme");

    localStorage.setItem("theme", "light");
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

