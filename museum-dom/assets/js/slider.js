//Swiper for Welcome section

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slideActiveClass: 'swiper-slide-current',

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
const welcomeSection = document.getElementById('welcome');
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
    const currentSlideIndex  = welcomeSection.querySelector('.swiper-slide-active');
    currentSlideNumber.textContent = `0${currentSlideIndex.dataset.index}`;
    
})

swiper.on ('slideChange',  () => {
    const currentSlideIndex  = swiper.realIndex;
    currentSlideNumber.textContent = `0${+currentSlideIndex + 1}`;
})



                                            //Swiper for Video section

const swiper2 = new Swiper('.swiper-video-playlist', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,

    // If we need pagination
    pagination: {
    el: '.video-content__playlist-pagination',
    bulletActiveClass: 'bullet-active',
    bulletClass: 'playlist-pagination__item',
    clickable: true,
    bulletElement: "div",
    },

    // Navigation arrows
    navigation: {
    nextEl: '.next',
    prevEl: '.previous',
    },
});







