// Seleccionamos el icono del menú y la lista del navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

// Añadimos un evento al icono para que al hacer clic, se muestre u oculte el menú
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('show');
});
