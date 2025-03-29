// Открытие карточек в FAQ

let activeFaqCards = [false, false, false, false, false, false];
document.querySelectorAll('.faq__top').forEach( (item, i) => {
    item.addEventListener('click', event => {
        if ( activeFaqCards[i] == false ) {
            document.querySelectorAll('.faq__top').forEach( (item, i) => {
                document.querySelectorAll('.faq__info')[i].style.maxHeight = '0px';
                document.querySelectorAll('.faq__info')[i].style.padding = '0px 20px';
                document.querySelectorAll('.faq__open')[i].style.transform = 'rotate(0deg)';
                activeFaqCards[i] = false;
            })
            document.querySelectorAll('.faq__info')[i].style.maxHeight = '400px';
            document.querySelectorAll('.faq__info')[i].style.padding = '30px 20px';
            document.querySelectorAll('.faq__open')[i].style.transform = 'rotate(45deg)';
            activeFaqCards[i] = true;
        } else {
            document.querySelectorAll('.faq__info')[i].style.maxHeight = '0px';
            document.querySelectorAll('.faq__info')[i].style.padding = '0px 20px';
            document.querySelectorAll('.faq__open')[i].style.transform = 'rotate(0deg)';
            activeFaqCards[i] = false;
        }

    })
} )

// Кнопки навигации

document.querySelector('.header__logo').addEventListener('click', event => {
    document.querySelector(".first").scrollIntoView({ block: "start", behavior: "smooth" });
})

document.querySelectorAll('.header__link').forEach( (item, i) => {
    item.addEventListener('click', event => {

        if ( i == 0 ) {
            document.querySelector(".second").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 1 ) {
            document.querySelector(".earn").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 2 ) {
            document.querySelector(".job").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 3 ) {
            document.querySelector(".review").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 4 ) {
            document.querySelector(".faq").scrollIntoView({ block: "start", behavior: "smooth" });
        }

    })
})

document.querySelectorAll('.header__list p').forEach( (item, i) => {
    item.addEventListener('click', event => {

        if ( i == 0 ) {
            document.querySelector(".second").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 1 ) {
            document.querySelector(".earn").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 2 ) {
            document.querySelector(".job").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 3 ) {
            document.querySelector(".review").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 4 ) {
            document.querySelector(".faq").scrollIntoView({ block: "start", behavior: "smooth" });
        }

    })
})

// Мобильное меню

let activeMenu = false;

document.querySelector('.header__menu').addEventListener('click', event => {
    if ( activeMenu == false ) {
        document.querySelector('.header__list').style.maxHeight = '250px';
        document.querySelector('.header__svg1').style.top = '150%';
        document.querySelector('.header__svg2').style.top = '50%';
        activeMenu = true;
    } else {
        document.querySelector('.header__list').style.maxHeight = '0px';
        document.querySelector('.header__svg1').style.top = '50%';
        document.querySelector('.header__svg2').style.top = '-50%';
        activeMenu = false;
    }
})