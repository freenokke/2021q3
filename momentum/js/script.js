    const time = document.querySelector('.time');
    const dateTag = document.querySelector('.date');
    const greetingTag = document.querySelector('.greeting')
    const inputName = document.querySelector('.name')
    const bodyElement = document.querySelector('body')
    const sliderArrowLeft = document.querySelector('.slide-prev')
    const sliderArrowRight = document.querySelector('.slide-next')
    let randomNum = getRandomNum();
    console.log("🚀 randomNum", randomNum)

//**Фунция вывода времени/даты/приветствия**
function showTimeDateGreeting() {
    const date = new Date();
    //вывод времени
    const currentTime = date.toLocaleTimeString();
    time.innerHTML = currentTime;

    //вывод даты
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-En', options);
    dateTag.textContent = currentDate;

    //вывод приветствия в зависимости от времени суток
    greetingTag.textContent = `Good ${getTimeOfDay()}`;

    setTimeout(showTimeDateGreeting, 1000);
}

    // сохранение введенного имени в LocalStorage
function setLocalStorage() {
    localStorage.setItem('name', inputName.value);
}

window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('name')) {
        inputName.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)

//**Вывод фоновых картинок в зависимости от времени суток**

    // установка рандомных изображений
function setBg(num) {
    let bgNum = new String(randomNum).padStart(2, '0');
    let bgSLiderNum = num ? new String(num).padStart(2, '0') : null; // для слайдера
    const timeOfDay = getTimeOfDay();
    const img = new Image();
    if (timeOfDay == 'morning') {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${num ? bgSLiderNum : bgNum}.jpg`;
        img.onload = () => {
            bodyElement.style.backgroundImage = `url(${img.src})`;
            console.log(bodyElement.style.backgroundImage)
        };
    } else if (timeOfDay == 'afternoon') {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/${num ? bgSLiderNum : bgNum}.jpg`;
        img.onload = () => {
            bodyElement.style.backgroundImage = `url(${img.src})`;
            console.log(bodyElement.style.backgroundImage)
        };
    } else if (timeOfDay == 'evening') {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${num ? bgSLiderNum : bgNum}.jpg`;
        img.onload = () => {
            bodyElement.style.backgroundImage = `url(${img.src})`;
            console.log(bodyElement.style.backgroundImage)
        };
    } else if (timeOfDay == 'night') {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${num ? bgSLiderNum : bgNum}.jpg`;
        img.onload = () => {
            bodyElement.style.backgroundImage = `url(${img.src})`;
            console.log(bodyElement.style.backgroundImage)
        };
    }       
}

function getSlidePrev() {
    let i = randomNum;
    console.log("🚀 getSlidePrev ~ i", i, randomNum)
    if (i > 1) {
        randomNum -= 1;
    } else {
        randomNum = 20;
    }
    setBg(randomNum)
}

function getSlideNext() {
    let i = randomNum;
    console.log("🚀 getSlideNext ~ i", i, randomNum)
    if (i < 20) {
        randomNum += 1;
    } else {
        randomNum = 1;
    }
    setBg(randomNum)
}

    //генерируем рандонмное число от 1 до 20 включительно
function getRandomNum(min = 1, max = 20) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;   
}

    //получаем текущий период суток
function getTimeOfDay() {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 0 && hour < 6) {
        return 'night'
    } else if (hour >= 6 && hour < 12) {
        return 'morning'
    } else if (hour >= 12 && hour < 18) {
        return 'afternoon'
    } else if (hour >= 18 && hour < 24) {
        return 'evening'
    }
}








showTimeDateGreeting();
setBg();
sliderArrowLeft.addEventListener('click', getSlidePrev)
sliderArrowRight.addEventListener('click', getSlideNext)