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



