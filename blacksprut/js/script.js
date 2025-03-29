document.querySelector('.open').addEventListener( 'click', event => {
    document.querySelector('.header').style.display = 'block';
    setTimeout( () => {
        document.querySelector('.header').style.opacity = '1';
        setTimeout( () => {
            document.querySelector('.header__body').style.left = '0px';
        }, 600)
    }, 200)
})

document.querySelector('.header__close').addEventListener( 'click', event => {
    if ( window.innerWidth > 459 ) {
        document.querySelector('.header__body').style.left = '-460px';
    } else {
        document.querySelector('.header__body').style.left = '-300px';
    }
    setTimeout( () => {
        document.querySelector('.header').style.opacity = '0';
        setTimeout( () => {
            document.querySelector('.header').style.display = 'none';
        }, 200)
    }, 600)
})

document.querySelector('.header').addEventListener( 'click', event => {
    if ( window.innerWidth > 459 ) {
        document.querySelector('.header__body').style.left = '-460px';
    } else {
        document.querySelector('.header__body').style.left = '-300px';
    }
    setTimeout( () => {
        document.querySelector('.header').style.opacity = '0';
        setTimeout( () => {
            document.querySelector('.header').style.display = 'none';
        }, 200)
    }, 600)
})