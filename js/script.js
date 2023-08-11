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
const cards = document.querySelectorAll(".swiper-slide");
console.log(cards);
// Добавление обработчиков события "resize" и "click"
window.addEventListener("resize", handleResize);
btn.addEventListener("click", handleClick);

// Функция обработчика события "resize"
function handleResize() {
  cards.forEach((item, index) => {
    item.classList.remove("hidden");
    if (window.innerWidth > 767 && window.innerWidth < 1120 && index >= 6) {
      item.classList.add("hidden");
    } else if (window.innerWidth > 1119 && index >= 8) {
      item.classList.add("hidden");
    }
  });
}

// Функция обработчика события "click" на кнопке
function handleClick() {
  cards.forEach((item, index) => {
    if (window.innerWidth > 1119 && index >= 8) {
      item.classList.toggle("hidden");
      btn.classList.toggle("brands__click_hide");
    } else if (
      window.innerWidth > 767 &&
      window.innerWidth < 1120 &&
      index >= 6
    ) {
      item.classList.toggle("hidden");
      btn.classList.toggle("brands__click_hide");
    }
    if (btn.textContent === "Показать все") {
      btn.textContent = "Скрыть";
    } else {
      btn.textContent = "Показать все";
    }
  });
}

// Вызов функций при загрузке страницы
handleResize();
