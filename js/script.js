const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

menuToggle,addEventListener('click',()=>{
    const isVisible = navbar.style.display === 'flex';
    navbar.style.display = isVisible ? 'none': 'flex';

});