console.log("main.js loaded");


const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

darkButton.addEventListener("click", () => {
    document.body.classList.remove("light-theme");
    
});

lightButton.addEventListener("click", () => {
    document.body.classList.add("light-theme");
});