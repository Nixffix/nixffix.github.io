let activeVideo = false;

document.querySelector('.promo__circle').addEventListener('click', event => {
    if ( activeVideo == false ) {
        document.querySelector('.promo__play').style.display = 'none';
        document.querySelector('.promo__pause').style.display = 'block';
        document.querySelector('.promo__left video').play();
        activeVideo = true;
        document.querySelector('.promo__bar').style.opacity = '0';
        document.querySelector('.promo__circle').style.opacity = '0';
    } else {
        document.querySelector('.promo__play').style.display = 'block';
        document.querySelector('.promo__pause').style.display = 'none';
        document.querySelector('.promo__left video').pause();
        activeVideo = false;
    }
})

document.querySelector('.promo__left').addEventListener('mouseenter', () => {
    document.querySelector('.promo__bar').style.opacity = '1';
    document.querySelector('.promo__circle').style.opacity = '1';
})

document.querySelector('.promo__left').addEventListener('mouseleave', () => {
    if ( document.querySelector('.promo__left video').paused ) {
        document.querySelector('.promo__bar').style.opacity = '1';
        document.querySelector('.promo__circle').style.opacity = '1';
    } else {
        document.querySelector('.promo__bar').style.opacity = '0';
        document.querySelector('.promo__circle').style.opacity = '0';
    }
})

document.querySelector('.promo__left video').addEventListener('ended', event => {
    document.querySelector('.promo__play').style.display = 'block';
    document.querySelector('.promo__pause').style.display = 'none';
    document.querySelector('.promo__left video').pause();
    document.querySelector('.promo__bar').style.opacity = '1';
    document.querySelector('.promo__circle').style.opacity = '1';
    activeVideo = false;
})

document.querySelector('.promo__left video').addEventListener('play', event => {
    console.log(event);
})

const video = document.querySelector('.promo__left video');
const progressCircle = document.getElementById('progressCircle');
const circumference = 2 * Math.PI * 50;

video.addEventListener('timeupdate', () => {
const progress = video.currentTime / video.duration;
progressCircle.style.strokeDashoffset = circumference * (1 - progress);
});