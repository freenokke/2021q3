const pictureInnerContainer  = document.querySelector('.picture-container-inner');

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
    }

const arr = [];
let i = 1;
while (i < 16) {
    const img = document.createElement('img');
    img.classList.add('gallery__img')
    img.src = `assets/img/gallery/galery${i}.jpg`;
    img.alt = `showplace`;
    arr.push(img)
    i++
}

const mixedArr = shuffle(arr)


mixedArr.map((item) => {
    pictureInnerContainer.append(item);
})


// console.log('******Выполненные пункты:******')
// console.log('Вёрстка валидная +10')
// console.log('Вёрстка семантическая. В коде страницы присутствуют следующие элементы (указано минимальное количество, может быть больше) +24')
// console.log('Вёрстка соответствует макету +45')
// console.log('Требования к css +18')
// console.log('******Частично выполненные пункты******')
// console.log('Интерактивность, реализуемая через css +20')
// console.log('Интерактивность, реализуемая через js +14')
// console.log('******Невыполненные пункты******')
// console.log('Форма покупки билетов +0')


//Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },

    // Navigation arrows
    navigation: {
    nextEl: '.handle__next-button',
    prevEl: '.handle__previous-button',
    },

    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },

    spaceBetween: 2,
});


const swiperNextArrow = document.querySelector('.handle__next-button');
const swiperPrevArrow = document.querySelector('.handle__previous-button');
const swiperBullet = document.querySelectorAll('.swiper-pagination-bullet');
const currentSlideNumber = document.querySelector('.current');
const swiperBlock = document.querySelector('.swiper');
const paginationBlock = document.querySelector('.welcome-slider_toolbar');

// swiperNextArrow.addEventListener('click', (e) => {
//     const currentSlideIndex  = document.querySelector('.swiper-slide-active');
//     currentSlideNumber.textContent = `0${currentSlideIndex.dataset.index}`;
// })

// swiperPrevArrow.addEventListener('click', (e) => {
//     const currentSlideIndex  = document.querySelector('.swiper-slide-active');
//     currentSlideNumber.textContent = `0${currentSlideIndex.dataset.index}`;
// })


// swiperBullet.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         const currentSlideIndex  = document.querySelector('.swiper-slide-active');
//         currentSlideNumber.textContent = `0${currentSlideIndex.dataset.index}`;
//     })
// })


paginationBlock.addEventListener('click', (e) => {
    const currentSlideIndex  = document.querySelector('.swiper-slide-active');
    currentSlideNumber.textContent = `0${currentSlideIndex.dataset.index}`;
    
})

swiper.on ('slideChange',  () => {
    const currentSlideIndex  = swiper.realIndex;
    console.log(currentSlideIndex)
    currentSlideNumber.textContent = `0${+currentSlideIndex + 1}`;
})

