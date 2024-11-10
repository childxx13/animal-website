// Анимация увеличения изображения при наведении мыши на всех страницах
document.querySelectorAll('.animated-image').forEach((image) => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// Реакция на нажатие клавиши "D" на странице "Собаки"
if (document.getElementById("dogsPage")) {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'd' || event.key === 'D') {
            const dogDescriptions = document.querySelectorAll('.animal p');
            dogDescriptions.forEach(p => {
                p.style.backgroundColor = 'lightyellow';
            });
            setTimeout(() => {
                dogDescriptions.forEach(p => {
                    p.style.backgroundColor = ''; // Возвращаем оригинальный фон
                });
            }, 1000); // Через 1 секунду возвращаем цвет обратно
        }
    });

    // Добавляем реакцию на нажатие стрелок вверх и вниз для увеличения и уменьшения изображения
    document.querySelectorAll('.animated-image').forEach((image) => {
        let scale = 1; // Начальный масштаб изображения
        image.addEventListener('mouseover', () => {
            document.addEventListener('keydown', (event) => {
                if (event.key === 'ArrowUp') {
                    scale += 0.1; // Увеличиваем изображение
                    image.style.transform = `scale(${scale})`;
                } else if (event.key === 'ArrowDown') {
                    scale = Math.max(0.5, scale - 0.1); // Уменьшаем изображение, минимум до половины размера
                    image.style.transform = `scale(${scale})`;
                }
            });
        });
    });
}

// Плавное появление текста и реакция на нажатие клавиши "C" на странице "Кошки"
if (document.getElementById("catsPage")) {
    const catText = document.querySelector('p');
    catText.classList.add('hidden'); // Добавьте класс "hidden" в CSS для скрытия элемента
    window.addEventListener('scroll', () => {
        if (catText.classList.contains('hidden')) {
            catText.classList.remove('hidden');
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'c' || event.key === 'C') {
            const catDescriptions = document.querySelectorAll('.animal p');
            catDescriptions.forEach(p => {
                p.style.transform = 'scale(1.2)'; // Увеличиваем текст
                p.style.transition = 'transform 0.3s ease';
            });
            setTimeout(() => {
                catDescriptions.forEach(p => {
                    p.style.transform = 'scale(1)'; // Возвращаем текст к нормальному размеру
                });
            }, 1000); // Через 1 секунду возвращаем текст обратно
        }
    });

    // Добавляем реакцию на стрелки влево и вправо для вращения текста под изображениями
    document.addEventListener('keydown', (event) => {
        const catDescriptions = document.querySelectorAll('.animal p');
        catDescriptions.forEach(p => {
            let currentRotation = parseInt(p.getAttribute('data-rotation') || '0');
            
            if (event.key === 'ArrowRight') {
                currentRotation += 10; // Поворачиваем текст на 10 градусов вправо
            } else if (event.key === 'ArrowLeft') {
                currentRotation -= 10; // Поворачиваем текст на 10 градусов влево
            }
            
            p.style.transform = `rotate(${currentRotation}deg)`;
            p.setAttribute('data-rotation', currentRotation); // Сохраняем текущее значение поворота
        });
    });
}

// Анимация кнопки на странице "Птицы"
if (document.title === "Птицы") {
    const birdButton = document.createElement('button');
    birdButton.textContent = 'Узнать больше';
    birdButton.style.padding = '10px 20px';
    birdButton.style.fontSize = '1em';
    birdButton.style.cursor = 'pointer';
    birdButton.style.marginTop = '20px';
    birdButton.style.transition = 'background-color 0.3s ease';

    birdButton.onmouseover = () => {
        birdButton.style.backgroundColor = '#333';
        birdButton.style.color = 'white';
    };

    birdButton.onmouseout = () => {
        birdButton.style.backgroundColor = '';
        birdButton.style.color = '';
    };

    birdButton.onclick = () => {
        alert('Птицы - это удивительный мир пернатых!');
    };

    document.body.appendChild(birdButton);
}
