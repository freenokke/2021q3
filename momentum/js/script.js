    const time = document.querySelector('.time');
    const dateTag = document.querySelector('.date');
    const greetingTag = document.querySelector('.greeting')
    const inputName = document.querySelector('.name')
    const bodyElement = document.querySelector('body')
    const sliderArrowLeft = document.querySelector('.slide-prev')
    const sliderArrowRight = document.querySelector('.slide-next')
    let randomNum = getRandomNum();
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    const inputCity = document.querySelector('.city')

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
    console.log("🚀 ~ file: script.js ~ line 123 ~ getWeather ~ url", url)
    const res = await fetch(url);
    const data = await res.json(); 
    console.log(data.weather[0].id, data.weather[0].description, data.main.temp);

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
}

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

inputCity.addEventListener('change', () => {
    getWeather(inputCity.value);
})




showTimeDateGreeting();
setBg();
sliderArrowLeft.addEventListener('click', getSlidePrev)
sliderArrowRight.addEventListener('click', getSlideNext)
