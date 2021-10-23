    const time = document.querySelector('.time');
    const dateTag = document.querySelector('.date');
    const greetingTag = document.querySelector('.greeting')
    const inputName = document.querySelector('.name')
    const bodyElement = document.querySelector('body')

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
function setBg() {
    const bgNum = new String(getRandomNum()).padStart(2, '0');
    const timeOfDay = getTimeOfDay();
    if (timeOfDay == 'morning') {
        bodyElement.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${bgNum}.jpg')`;
    } else if (timeOfDay == 'afternoon') {
        bodyElement.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/${bgNum}.jpg')`;
    } else if (timeOfDay == 'evening') {
        bodyElement.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${bgNum}.jpg')`;
    } else if (timeOfDay == 'night') {
        bodyElement.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${bgNum}.jpg')`;
    }
    
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