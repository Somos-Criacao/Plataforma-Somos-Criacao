const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function startCarousel() {
    showSlide(currentSlide);
    currentSlide = (currentSlide + 1) % slides.length;

    setTimeout(startCarousel, 5000); // Altere o tempo (em milissegundos) entre as transições
}

startCarousel();

class Carousel {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;

        this.showSlide(this.currentSlide);

        document.querySelector('.prev').addEventListener('click', () => this.prevSlide());
        document.querySelector('.next').addEventListener('click', () => this.nextSlide());
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentSlide);
    }
}

new Carousel();

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Define o ponto em que o botão deve aparecer
const showPoint = 1300; // Altere esse valor conforme necessário

// Define o ponto em que o botão deve desaparecer
const hidePoint = 1550; // Altere esse valor conforme necessário

// Função para verificar a posição da rolagem e mostrar/ocultar o botão
function checkScrollPosition() {
    if (window.scrollY > showPoint && window.scrollY < hidePoint) {
        prevButton.style.opacity = '1';
        nextButton.style.opacity = '1';
    } else {
        prevButton.style.opacity = '0';
        nextButton.style.opacity = '0';
    }
}

// Adiciona um ouvinte de evento para verificar a posição da rolagem
window.addEventListener('scroll', checkScrollPosition);

// Chama a função para verificar a posição da rolagem inicial
checkScrollPosition();