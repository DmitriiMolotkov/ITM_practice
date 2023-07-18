// Инициализация Swiper только при ширине экрана меньше 720px
if (window.innerWidth < 768) {
  const swiper = new Swiper(".swiper", {
    // Настройки Swiper
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 16,
  });
}

// Получение ссылки на кнопку с классом "brands__click_show"
const btn = document.querySelector(".brands__click_show");
// Получение массива карточек с классом "swiper-slide"
const cards = Array.from(document.querySelectorAll(".swiper-slide"));

// Добавление обработчиков события "resize" и "click"
window.addEventListener("resize", handleResize);
btn.addEventListener("click", handleClick);

// Функция обработчика события "resize"
function handleResize() {
  // Проверка ширины окна и вызов соответствующей функции
  if (window.innerWidth > 767 && window.innerWidth < 1120) {
    response1();
  }
  if (window.innerWidth > 1119) {
    response2();
  }
}

// Функция для обработки первого условия ширины окна
function response1() {
  // Применение класса "hidden" ко всем элементам массива карточек
  cards.forEach((item, index) => {
    item.classList.add("hidden");
    // Удаление класса "hidden" у элементов с индексом меньше 6
    if (index < 6) {
      item.classList.remove("hidden");
    }
  });
}

// Функция для обработки второго условия ширины окна
function response2() {
  // Применение класса "hidden" ко всем элементам массива карточек
  cards.forEach((item, index) => {
    item.classList.add("hidden");
    // Удаление класса "hidden" у элементов с индексом меньше 8
    if (index < 8) {
      item.classList.remove("hidden");
    }
  });
}

// Функция обработчика события "click" на кнопке
function handleClick() {
  // Проверка ширины окна и скрытие/отображение элементов
  if (window.innerWidth > 1119) {
    cards.forEach((item, index) => {
      // Скрытие/отображение элементов с индексом больше или равным 8
      if (index >= 8) {
        item.classList.toggle("hidden");
        btn.classList.toggle('brands__click_hide');
      }
    });
  }
  if (window.innerWidth > 767 && window.innerWidth < 1120) {
    cards.forEach((item, index) => {
      // Скрытие/отображение элементов с индексом больше или равным 6
      if (index >= 6) {
        item.classList.toggle("hidden");
        btn.classList.toggle('brands__click_hide');
      }
    });
  }

  // Изменение текста кнопки в зависимости от текущего состояния
  if (btn.textContent === "Показать все") {
    btn.textContent = 'Скрыть';
  } else {
    btn.textContent = 'Показать все';
  }
}

// Вызов функций при загрузке страницы
handleResize();