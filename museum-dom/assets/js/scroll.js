
const scrollUp = document.querySelector('.scroll-up');

scrollUp.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

window.addEventListener('scroll', () => {
    const height = pageYOffset;
    if (height > 900) {
        scrollUp.classList.add('scroll-up--active');  
    }
    else {
        scrollUp.classList.remove('scroll-up--active');
    }
    console.log('height: ', height);

})