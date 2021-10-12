                // Styling progressbar

const progress = document.querySelector('.progress');
const progress2 = document.querySelector('.progress-volume');

// progress.addEventListener('input', function() {
//     const value = percent;
//     console.log("🚀 ~ file: video.js ~ line 9 ~ progress.addEventListener ~ value", value)
//     this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, #C4C4C4 100%)`
// })

// progress2.addEventListener('input', function() {
//     const value = this.value;
//     this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, #C4C4C4 100%)`
// })

            // Объявление переменных

const playlistPaginationBlock = document.querySelector('.playlist-pagination__container');
const videoSection = document.getElementById('video')
const videoContentBlock = videoSection.querySelector('.video-content')
const videoTag = videoSection.querySelector("video");
const videoToolbarBlock = videoSection.querySelector('.video-content__toolbar')
const iframeVid = document.querySelectorAll('iframe');
                /*Кнопки управления */
const toolbarPlayBtn = videoSection.querySelector('.play_button');
const toolbarVolumeBtn = videoSection.querySelector('.volume_button');
const toolbarFullScrBtn = videoSection.querySelector('.fullscreen_button');
const mainPlayBtn = videoSection.querySelector('.main_play_button');


                    // обработчик по клику на элементы управления слайдером с видео
playlistPaginationBlock.addEventListener('click', (e) => {
    const currentSlideIndex  = videoSection.querySelector('.swiper-slide-active');
    let slideNum = currentSlideIndex.dataset.index;
    sourceTag = videoTag.firstElementChild;
    videoTag.setAttribute('poster', `./assets/img/video/poster${slideNum}.jpg` );  
    sourceTag.setAttribute('src', `./assets/video/video${slideNum}.mp4`);
    videoTag.load();
    mainPlayBtn.style.display = "block";
    toolbarPlayBtn.style.backgroundImage = 'url(./assets/img/video/toolbar-icon-play.svg)'
})
            // Обработчик кликов по блоку с видео (делегирование)
videoContentBlock.addEventListener('click', (e) => {
            // если клик по кнопке плей в панели управления
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
            //если клик по области видео (убираем кнопку плей на самой зоне воспроизведения)
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
            //если  клик по основной кнопке в зоне воспроизведения
    if (e.target == mainPlayBtn) {
        videoTag.play();
        mainPlayBtn.style.display = "none";
        toolbarPlayBtn.style.backgroundImage = 'url(./assets/img/video/pause.svg)'
    }
            // если клик по кнопке громкости
    if (e.target == toolbarVolumeBtn) {
        if (videoTag.volume > 0) {
            const value = 0;
            progress2.value = value;
            videoTag.volume = value;
            progress2.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value * 100}%, #fff ${value * 100}%, #C4C4C4 100%)`
            toolbarVolumeBtn.style.backgroundImage = 'url(./assets/img/video/mute.svg)';
        } else {
            const value = 0.5;
            progress2.value = value;
            videoTag.volume = value;
            progress2.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value * 100}%, #fff ${value * 100}%, #C4C4C4 100%)`
            toolbarVolumeBtn.style.backgroundImage = 'url(./assets/img/video/toolbar-icon-volume.svg)';
        }       
    }
        // если клик по кнопке полноэкранного режима
    if (e.target == toolbarFullScrBtn ) {
        videoTag.requestFullscreen();
    }
    
})


            //отображение произведения видео
videoTag.addEventListener('timeupdate', function() {
    const value = this.currentTime * 100 / this.duration || 0;
    progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, #C4C4C4 100%)`
    progress.value = this.currentTime * 100 / this.duration || 0;

    if (progress.value == 100) {
        toolbarPlayBtn.style.backgroundImage = 'url(./assets/img/video/toolbar-icon-play.svg)'
        mainPlayBtn.style.display = "block";
        progress.value = 0;   
        progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${0}%, #fff ${0}%, #C4C4C4 100%)`
    }
})
        //Переход ползунка прогрессбара в место клика
progress.addEventListener('click', function(e) {
    let xPos = Math.floor(e.pageX - progress.offsetLeft);
    let current = xPos / (progress.offsetWidth / 100);
    videoTag.currentTime = videoTag.duration * (current / 100);

    //альтернативный
    // const length = videoTag.duration;
    // videoTag.currentTime = (length / 100) * this.value;

})
            // Громкость
progress2.addEventListener('input', function() {
    let volume = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volume * 100}%, #fff ${volume * 100}%, #C4C4C4 100%)`
    videoTag.volume = volume;
    console.log(videoTag.volume)
    if (this.value == 0) toolbarVolumeBtn.style.backgroundImage = 'url(./assets/img/video/mute.svg)';
    else toolbarVolumeBtn.style.backgroundImage = 'url(./assets/img/video/toolbar-icon-volume.svg)';
})



iframeVid.forEach((item) => {
    playlistPaginationBlock.addEventListener('click', () => {
        item.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    })
})

