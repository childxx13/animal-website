// Добавляем событие для увеличения изображения при наведении
document.querySelectorAll(".animated-image").forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
        img.style.border = "2px solid blue";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
        img.style.border = "none";
    });
    img.addEventListener("click", () => {
        alert(`Вы выбрали птицу: ${img.alt}`);
    });
});

// Реализация переключения между изображениями с помощью клавиатуры
let currentIndex = 0;
const birdImages = document.querySelectorAll(".animated-image");

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % birdImages.length;
        highlightImage(currentIndex);
    } else if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + birdImages.length) % birdImages.length;
        highlightImage(currentIndex);
    }
});

function highlightImage(index) {
    birdImages.forEach(img => img.style.border = "none");
    birdImages[index].style.border = "2px solid red";
}
