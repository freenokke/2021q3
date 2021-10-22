export default function dateTimeGreeting() {
    const time = document.querySelector('.time');
    const dateTag = document.querySelector('.date');
    const greetingTag = document.querySelector('.greeting')
    const name = document.querySelector('.name')

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
    const hour = date.getHours();
    greetingTag.textContent = `Good ${getTimeOfDay()}`;
    function getTimeOfDay() {
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
    setTimeout(showTimeDateGreeting, 1000);
}
    // сохранение введенного имени в LocalStorage
function setLocalStorage() {
    localStorage.setItem('name', name.value);
}

window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)

showTimeDateGreeting();

}