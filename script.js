// Бесконечная карусель (клонирование изображений)
function initCarousel() {
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  const items = Array.from(track.children);
  if (items.length === 0) return;
  // Клонируем элементы для плавной бесконечности (2-3 раза)
  const cloneCount = 2;
  for (let i = 0; i < cloneCount; i++) {
    items.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  }
}

// Попап
function openPopup(imgSrc, description) {
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  const popupText = document.getElementById('popup-text');
  if (popupImg) popupImg.src = imgSrc;
  if (popupText) popupText.innerText = description;
  if (popup) popup.classList.add('show');
}

function closePopup() {
  const popup = document.getElementById('popup');
  if (popup) popup.classList.remove('show');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePopup();
});

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
});