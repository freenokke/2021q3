export default function dateTime() {
    const time = document.querySelector('.time');
    const dateTag = document.querySelector('.date');

function showTime() {
    const date = new Date();
    //вывод времени
    const currentTime = date.toLocaleTimeString();
    time.innerHTML = currentTime;
    //вывод даты
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-En', options);
    dateTag.textContent = currentDate;
    setTimeout(showTime, 1000);
}
showTime();







}