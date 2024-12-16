let currentSlide = 1;
const totalSlides = 8;

function nextSlide() {
    // Ocultar slide y fondo actual
    document.getElementById(`slide${currentSlide}`).classList.remove('active');
    document.getElementById(`bg${currentSlide}`).classList.remove('active');
    
    // Calcular siguiente slide
    currentSlide = currentSlide % totalSlides + 1;
    
    // Mostrar siguiente slide y fondo
    document.getElementById(`slide${currentSlide}`).classList.add('active');
    document.getElementById(`bg${currentSlide}`).classList.add('active');
} 

// Inicializar primer fondo como activo
window.onload = function() {
    document.getElementById('bg1').classList.add('active');
};