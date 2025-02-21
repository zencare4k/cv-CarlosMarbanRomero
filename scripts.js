function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}