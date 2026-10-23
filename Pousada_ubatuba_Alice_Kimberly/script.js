const slides = document.querySelectorAll('.hero-slide');
const indicadores = document.querySelectorAll('.indicador');

const botaoAnterior = document.getElementById('prevSlide');
const botaoProximo = document.getElementById('nextSlide');

let slideAtual = 0;

function mostrarSlide(indice) {

    slides.forEach(function(slide) {
        slide.classList.remove('ativo');
    });

    indicadores.forEach(function(indicador) {
        indicador.classList.remove('ativo');
    });

    slides[indice].classList.add('ativo');
    indicadores[indice].classList.add('ativo');

    slideAtual = indice;
}

botaoProximo.addEventListener('click', function() {

    slideAtual = slideAtual + 1;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    mostrarSlide(slideAtual);
});

botaoAnterior.addEventListener('click', function() {

    slideAtual = slideAtual - 1;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    mostrarSlide(slideAtual);
});

indicadores.forEach(function(indicador, indice) {

    indicador.addEventListener('click', function() {
        mostrarSlide(indice);
    });

});