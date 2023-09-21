const carousel = document.getElementById("carousel");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let currentIndex = 0;
let autoChangeInterval;

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarouselPosition();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
        updateCarouselPosition();
    }
});

function updateCarouselPosition() {
    const itemWidth = carousel.children[0].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function startAutoChange() {
    autoChangeInterval = setInterval(() => {
        if (currentIndex < carousel.children.length - 1) {
            currentIndex++;
            updateCarouselPosition();
        } else {
            currentIndex = 0;
            updateCarouselPosition();
        }
    }, 5000); // Change slide every 5 seconds
}

function stopAutoChange() {
    clearInterval(autoChangeInterval);
}

startAutoChange();

carousel.addEventListener("mouseenter", stopAutoChange);
carousel.addEventListener("mouseleave", startAutoChange);
