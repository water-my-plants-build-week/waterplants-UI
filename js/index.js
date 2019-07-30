const dropdown = document.querySelector(".dropbtn");
const mobileMenu = document.querySelector("nav");

dropdown.addEventListener('click', (event) => {
    mobileMenu.style.display = "block";
});

