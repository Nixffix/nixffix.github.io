document.querySelectorAll('.header__menu svg')[1].style.display = 'none';
document.querySelectorAll('.header__lil-menu svg')[1].style.display = 'none';

let activeMenu = false;

document.querySelector('.header__menu').addEventListener('click', event => {
    if ( activeMenu == false ) {
        document.querySelectorAll('.header__menu svg')[0].style.display = 'none';
        document.querySelectorAll('.header__lil-menu svg')[0].style.display = 'none';
        document.querySelectorAll('.header__menu svg')[1].style.display = 'block';
        document.querySelectorAll('.header__lil-menu svg')[1].style.display = 'block';

        document.querySelector('.menu').style.display = 'flex';
        activeMenu = true;
    } else {
        document.querySelectorAll('.header__menu svg')[0].style.display = 'block';
        document.querySelectorAll('.header__lil-menu svg')[0].style.display = 'block';
        document.querySelectorAll('.header__menu svg')[1].style.display = 'none';
        document.querySelectorAll('.header__lil-menu svg')[1].style.display = 'none';

        document.querySelector('.menu').style.display = 'none';
        activeMenu = false;
    }
})

document.querySelector('.header__lil-menu').addEventListener('click', event => {
    if ( activeMenu == false ) {
        document.querySelectorAll('.header__menu svg')[0].style.display = 'none';
        document.querySelectorAll('.header__lil-menu svg')[0].style.display = 'none';
        document.querySelectorAll('.header__menu svg')[1].style.display = 'block';
        document.querySelectorAll('.header__lil-menu svg')[1].style.display = 'block';

        document.querySelector('.menu').style.display = 'flex';
        activeMenu = true;
    } else {
        document.querySelectorAll('.header__menu svg')[0].style.display = 'block';
        document.querySelectorAll('.header__lil-menu svg')[0].style.display = 'block';
        document.querySelectorAll('.header__menu svg')[1].style.display = 'none';
        document.querySelectorAll('.header__lil-menu svg')[1].style.display = 'none';

        document.querySelector('.menu').style.display = 'none';
        activeMenu = false;
    }
})

document.querySelector('.menu').addEventListener('click', event => {
    if ( event.target === document.querySelector('.menu') ) {
        document.querySelectorAll('.header__menu svg')[0].style.display = 'block';
        document.querySelectorAll('.header__lil-menu svg')[0].style.display = 'block';
        document.querySelectorAll('.header__menu svg')[1].style.display = 'none';
        document.querySelectorAll('.header__lil-menu svg')[1].style.display = 'none';

        document.querySelector('.menu').style.display = 'none';
        activeMenu = false;
    }
})

document.querySelectorAll('.menu__button').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('section').forEach( item => {
            item.style.display = 'none';
        })

        window.scrollTo(0, 0);

        if ( i == 0 ) {
            document.querySelector('.review').style.display = 'block';
            document.querySelectorAll('.header__link p')[0].classList.add('header__link-active');
            document.querySelectorAll('.header__link p')[2].classList.remove('header__link-active');
            renewLinkStyle();
            document.querySelectorAll('.footer__link')[1].style.opacity = '0.6';

            document.querySelector('.review__preloading').style.display = 'block';
            document.querySelector('.review__body').style.display = 'none';

            document.title = 'Отзывы';

            setTimeout( () => {
                document.querySelector('.review__preloading').style.display = 'none';
                document.querySelector('.review__body').style.display = 'block';
            }, 600 )
        } else if ( i == 1 ) {
            document.title = 'Вход';
            document.querySelector('.auth').style.display = 'flex';
            document.querySelector('.login').style.display = 'flex';
            document.querySelector('.register').style.display = 'none';
            document.querySelector('.forgot').style.display = 'none';
            document.querySelectorAll('.header__link p')[2].classList.add('header__link-active');
            document.querySelectorAll('.header__link p')[0].classList.remove('header__link-active');
            renewLinkStyle();
        }

        document.querySelectorAll('.header__menu svg')[0].style.display = 'block';
        document.querySelectorAll('.header__lil-menu svg')[0].style.display = 'block';
        document.querySelectorAll('.header__menu svg')[1].style.display = 'none';
        document.querySelectorAll('.header__lil-menu svg')[1].style.display = 'none';

        document.querySelector('.menu').style.display = 'none';
        activeMenu = false;

    })
})