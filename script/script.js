let position = 0;
const slidestoShow = 4;
const slidesToScroll = 1;
const container = document.querySelector('.slider_container');
const track = document.querySelector('.slider_track');
const items = document.querySelectorAll('.slider_item');
const btnPrev = document.querySelector('.button_prev');
const btnNext = document.querySelector('.button_next');

const itemsCount = items.length;
const itemWidth = container.clientWidth / slidestoShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidestoShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
})

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
})

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnPrev.disabled = position <= -(itemsCount - slidestoShow) * itemWidth;
};

checkBtns();