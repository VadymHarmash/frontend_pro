const slider = document.querySelector('.slider__wrapper');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');
const indicatorWrapper = document.querySelector('.indicators');
const totalItems = slider.querySelectorAll('.slider__item').length;

let activeItem = 1;

btnPrev.classList.add('hidden')

btnNext.addEventListener('click', () => {
  if (activeItem < totalItems) {
    activeItem++;
    updateSlider();
  }
})

btnPrev.addEventListener('click', () => {
  if (activeItem > 1) {
    activeItem--;
    updateSlider();
  }
})

indicatorWrapper.addEventListener('click', (e) => {
  if(e.target !== e.currentTarget) {
    activeItem = +e.target.id.slice(e.target.id.length - 1);
    updateSlider()
  }
})

function updateSlider() {
  activeItem === totalItems ? btnNext.classList.add('hidden') : btnNext.classList.remove('hidden');
  activeItem === 1 ? btnPrev.classList.add('hidden') : btnPrev.classList.remove('hidden');

  const items = document.querySelectorAll('.slider__item');
  items.forEach(item => {
    item.classList.remove('active');
  });

  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach(indicator => {
    indicator.classList.remove('active-indicator');
  });

  const currentItem = document.getElementById(`item-${activeItem}`);
  currentItem.classList.add('active');

  const currentIndicator = document.getElementById(`indicator-${activeItem}`);
  currentIndicator.classList.add('active-indicator');
}
