const progress = document.querySelector('.progress');
const progress2 = document.querySelector('.progress-volume');

progress.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, #C4C4C4 100%)`
})

progress2.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, #C4C4C4 100%)`
})

