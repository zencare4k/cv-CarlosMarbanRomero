function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '🌞'; // Sol para modo oscuro
    } else {
        darkModeToggle.textContent = '🌜'; // Luna para modo claro
    }
}

// Inicializa el icono del botón de modo oscuro al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '🌞'; // Sol para modo oscuro
    } else {
        darkModeToggle.textContent = '🌜'; // Luna para modo claro
    }
});