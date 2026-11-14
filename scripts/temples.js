const today = new Date();
document.getElementById("currentyear").textContent = today.getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const hamburgerButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamburgerButton.addEventListener("click", function() {
    navigation.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
});