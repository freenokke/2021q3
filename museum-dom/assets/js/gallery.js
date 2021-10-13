// Автоматическая генерация изображений
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

// Анимация при скролле

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const galleryImages = document.querySelectorAll('.gallery__img');
console.log("🚀 ~ file: gallery.js ~ line 45 ~ sliderImages", gallery)


function checkSlide(e) {
    galleryImages.forEach((slideImage) => {
        const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
        const imageBottom = slideImage.offsetParent.offsetTop + slideImage.height;
        const isHalfShown = slideInAt > slideImage.offsetTop;
        const isNotScrolledPast = window.scrollY > imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            slideImage.classList.add('active');
        } else {
            console.log('false')
            slideImage.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide));