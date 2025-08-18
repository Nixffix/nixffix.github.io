new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    slidesPerGroup: 1,
    freeMode: true,
    // loop: true,
    // loopedSlides: 10,
    navigation: {
        nextEl: '.rev__nav-right',
        prevEl: '.rev__nav-left',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // breakpoints: {
    //     280: {
    //         slidesPerView: 1,
    //         slidesPerGroup: 1,
    //     },
    //     640: {
    //         slidesPerView: 2,
    //         slidesPerGroup: 1,
    //     },
    //     768: {
    //         slidesPerView: 3,
    //         slidesPerGroup: 1,
    //     }
    // }
});