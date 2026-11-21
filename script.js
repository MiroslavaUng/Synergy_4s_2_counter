// Находим элементы на странице
const resultBox = document.getElementById('result');
const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const warningBox = document.getElementById('warning');

// Текущее значение счетчика
let currentValue = 0;

// Функция обновления интерфейса (цвет, текст, блокировка кнопок)
function updateUI() {
    // 1. Обновляем текст
    resultBox.textContent = currentValue;

    // 2. Меняем цвет фона окна результата
    if (currentValue > 0) {
        resultBox.style.backgroundColor = '#FFD700'; // Желтый
    } else if (currentValue < 0) {
        resultBox.style.backgroundColor = '#32CD32'; // Зеленый
    } else {
        resultBox.style.backgroundColor = '#FF4500'; // Красный
    }

    // 3. Блокировка кнопок и вывод предупреждения
    if (currentValue >= 10) {
        btnPlus.disabled = true;  // Блокируем плюс
        warningBox.textContent = 'Вы достигли экстремального значения!';
    } else if (currentValue <= -10) {
        btnMinus.disabled = true; // Блокируем минус
        warningBox.textContent = 'Вы достигли экстремального значения!';
    } else {
        // Если значение от -9 до 9, кнопки активны, текст скрыт
        btnPlus.disabled = false;
        btnMinus.disabled = false;
        warningBox.textContent = '';
    }
}

// Слушатель событий для кнопки "плюс"
btnPlus.addEventListener('click', () => {
    currentValue++;
    updateUI();
});

// Слушатель событий для кнопки "минус"
btnMinus.addEventListener('click', () => {
    currentValue--;
    updateUI();
});

// Инициализация при загрузке страницы (чтобы окно сразу стало красным)
updateUI();