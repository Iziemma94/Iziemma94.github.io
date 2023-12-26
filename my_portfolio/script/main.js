// main.js
document.addEventListener('DOMContentLoaded', function () {
    // Code to run after the DOM has loaded
    const menuButton = document.getElementById('menuButton');
    const navigationMenu = document.getElementById('navigationMenu');

    menuButton.addEventListener('click', function () {
        navigationMenu.classList.toggle('show');
    });
});
