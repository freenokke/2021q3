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


// pictureInnerContainer.append(img);