import playList from './playList.js';

    const time = document.querySelector('.time');
    const dateTag = document.querySelector('.date');
    const greetingTag = document.querySelector('.greeting')
    const inputName = document.querySelector('.name')
    const bodyElement = document.querySelector('body')
    const sliderArrowLeft = document.querySelector('.slide-prev')
    const sliderArrowRight = document.querySelector('.slide-next');

    let randomNum = getRandomNum();

    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    const weatherDescription = document.querySelector('.weather-description');
    const inputCity = document.querySelector('.city')

    const quote = document.querySelector('.quote');
    const author = document.querySelector('.author');
    const changeQuoteBtn = document.querySelector('.change-quote');

    const audio = document.querySelector('audio');
    const audioPlayBtn = document.querySelector('.play');
    const audioPrevBtn = document.querySelector('.play-prev')
    const audioNextBtn = document.querySelector('.play-next')
    let playNum = 0;
    let isPlay = false;
    let isEnded = audio.ended;
    console.log("🚀 ~ file: script.js ~ line 29 ~ isEnded", isEnded)
    const playListContainer = document.querySelector('.play-list');

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
        };
    } else if (timeOfDay == 'afternoon') {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/${num ? bgSLiderNum : bgNum}.jpg`;
        img.onload = () => {
            bodyElement.style.backgroundImage = `url(${img.src})`;
        };
    } else if (timeOfDay == 'evening') {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${num ? bgSLiderNum : bgNum}.jpg`;
        img.onload = () => {
            bodyElement.style.backgroundImage = `url(${img.src})`;
        };
    } else if (timeOfDay == 'night') {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${num ? bgSLiderNum : bgNum}.jpg`;
        img.onload = () => {
            bodyElement.style.backgroundImage = `url(${img.src})`;
        };
    }       
}

function getSlidePrev() {
    let i = randomNum;
    if (i > 1) {
        randomNum -= 1;
    } else {
        randomNum = 20;
    }
    setBg(randomNum)
}

function getSlideNext() {
    let i = randomNum;
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

//**Выводим данные о погоде через API
async function getWeather(city) { 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=0a8e313b2ad9cc6efaa2adc43baf9561&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `Температура: ${Math.trunc(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Ветер: ${Math.trunc(data.wind.speed)} м/с`;
    humidity.textContent = `Влажность: ${Math.trunc(data.main.humidity)}%`
}

//**Выводим цитаты из локального файла json
async function getQuotes(num) { 
    const url = '../assets/json/quotes.json';

    const res = await fetch(url);
    const data = await res.json(); 

    quote.textContent = data[num ? num : 0].text;
    author.textContent = data[num ? num : 0].author;
}

//** Аудиоплеер */
// ф-ция запуска аудио
function playAudio() {
    if (!isPlay) {
        audio.src = playList[playNum].src;
        audio.play();
        audioPlayBtn.classList.remove('play');
        audioPlayBtn.classList.add('pause');
        isPlay = true;
    } else {
        audio.pause();
        audioPlayBtn.classList.remove('pause');
        audioPlayBtn.classList.add('play');
        isPlay = false;
    }
    // audio.currentTime = 0;
}

// ф-ция перелистывания треков
function playNext() {
    if (playNum > playList.length - 2) {
        playNum = 0;
    } else {
        playNum ++;
    }
    audio.src = playList[playNum].src;
    audio.play();
    audioPlayBtn.classList.remove('play');
    audioPlayBtn.classList.add('pause');
    isPlay = true;
}

function playPrev() {
    if (playNum < 1) {
        playNum = 4;
    }
    playNum--;
    audio.src = playList[playNum].src;
    audio.play();
    audioPlayBtn.classList.remove('play');
    audioPlayBtn.classList.add('pause');
    isPlay = true;
}

// Вывод названия треков
playList.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = item.title;
    playListContainer.append(li);
})


// сохранение введенных данных в LocalStorage
function setLocalStorage() {
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('city', inputCity.value);
}
window.addEventListener('beforeunload', setLocalStorage)

// получение данных из LS при перезагрузке для inputName
window.addEventListener('load', () => {
    if(localStorage.getItem('name')) {
        inputName.value = localStorage.getItem('name');
    }
})
// получение данных из LS при перезагрузке для inputCity
window.addEventListener('load', () => {
    if(localStorage.getItem('city')) {
        inputCity.value = localStorage.getItem('city');
        getWeather(inputCity.value);
    } else {
        inputCity.value = 'Минск'
        getWeather('Минск');
    }
})
// обновление цитаты при перезагрузке страницы
window.addEventListener('load', () => {
    const randomNum = getRandomNum(0, 8);
    getQuotes(randomNum);
})

showTimeDateGreeting();
setBg();
sliderArrowLeft.addEventListener('click', getSlidePrev)
sliderArrowRight.addEventListener('click', getSlideNext)
inputCity.addEventListener('change', () => {
    getWeather(inputCity.value);
})
changeQuoteBtn.addEventListener('click', () => {
    const randomNum = getRandomNum(0, 8);
    getQuotes(randomNum);
})

// обработчики событий по кликам на кнопки управления
audioPlayBtn.addEventListener('click', playAudio);
audioNextBtn.addEventListener('click', playNext);
audioPrevBtn.addEventListener('click', playPrev);

// подсвечивание текущего проигрываемого трека
const list = document.querySelectorAll('.play-item');

audio.addEventListener('play', () => {
    list.forEach((item, index) => {
        item.classList.remove('active');
    })
    list[playNum].classList.add('active');
});
// запуск следующего трека после окончания текущего
audio.addEventListener('ended', playNext);



