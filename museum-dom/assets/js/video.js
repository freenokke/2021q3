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

            // Custom Player

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
    mainPlayBtn.style.display = "block";
    toolbarPlayBtn.style.backgroundImage = 'url(./assets/img/video/toolbar-icon-play.svg)'
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
        toolbarPlayBtn.style.backgroundImage = 'url(./assets/img/video/pause.svg)'
    }

})



videoTag.addEventListener('timeupdate', function() {
    const value = this.currentTime * 100 / this.duration || 0;
    progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, #C4C4C4 100%)`
    progress.value = this.currentTime * 100 / this.duration || 0;
})

progress.addEventListener('click', function(e) {
    let xPos = Math.floor(e.pageX - progress.offsetLeft);
    let current = xPos / (progress.offsetWidth / 100);
    videoTag.currentTime = videoTag.duration * (current / 100);

    //альтернативный
    // const length = videoTag.duration;
    // videoTag.currentTime = (length / 100) * this.value;

})

progress2.addEventListener('input', function() {
    let volume = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volume * 100}%, #fff ${volume * 100}%, #C4C4C4 100%)`
    videoTag.volume = volume;
    console.log(videoTag.volume)
})