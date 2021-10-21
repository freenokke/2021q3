export default function dateTime() {
    const time = document.querySelector('.time');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.innerHTML = currentTime;
    setTimeout(showTime, 1000);
}
showTime();

//вывод даты

const dateTag = document.querySelector('.date');







}