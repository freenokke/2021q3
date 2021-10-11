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

const playlistPaginationBlock = document.querySelector('.playlist-pagination__container');
const videoSection = document.getElementById('video')
const videoContentBlock = videoSection.querySelector('.video-content')
const videoTag = videoSection.querySelector("video");
const videoToolbarBlock = videoSection.querySelector('.video-content__toolbar')
                /*Handle elements */
const toolbarPlayBtn = videoSection.querySelector('.play_button');
const mainPlayBtn = videoSection.querySelector('.main_play_button');

playlistPaginationBlock.addEventListener('click', (e) => {
    const currentSlideIndex  = videoSection.querySelector('.swiper-slide-active');
    let slideNum = currentSlideIndex.dataset.index;
    sourceTag = videoTag.firstElementChild;
    videoTag.setAttribute('poster', `./assets/img/video/poster${slideNum}.jpg` );  
    sourceTag.setAttribute('src', `./assets/video/video${slideNum}.mp4`);
    videoTag.load();
})

videoContentBlock.addEventListener('click', (e) => {
    if (e.target == toolbarPlayBtn) {

        if (videoTag.paused) {
            videoTag.play();
            toolbarPlayBtn.style.backgroundImage = 'url(./assets/img/video/pause.svg)'
            mainPlayBtn.style.display = "none";
        } else {
            videoTag.pause();
            toolbarPlayBtn.style.backgroundImage = 'url(./assets/img/video/toolbar-icon-play.svg)'
            mainPlayBtn.style.display = "block";
        }
    }

    if (e.target == videoTag) {
        if (videoTag.paused) {
            videoTag.play();
            toolbarPlayBtn.style.backgroundImage = 'url(./assets/img/video/pause.svg)'
            mainPlayBtn.style.display = "none";
        } else {
            videoTag.pause();
            toolbarPlayBtn.style.backgroundImage = 'url(./assets/img/video/toolbar-icon-play.svg)'
            mainPlayBtn.style.display = "block";
        }
    }

    if (e.target == mainPlayBtn) {
        videoTag.play();
        mainPlayBtn.style.display = "none";
    }

})




