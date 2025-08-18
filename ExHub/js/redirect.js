document.querySelectorAll('.footer__link').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('section').forEach( item => {
            item.style.display = 'none';
        })

        window.scrollTo(0, 0);

        renewLinkStyle();

        item.style.opacity = '0.6';

        document.querySelectorAll('.header__link p')[0].classList.remove('header__link-active');
        document.querySelectorAll('.header__link p')[2].classList.remove('header__link-active');

        if ( i == 0 ) {
            location.href = location.origin;
            document.querySelector('.first').style.display = 'block';
            item.style.opacity = '1';
        } else if ( i == 1 ) {
            document.querySelector('.review').style.display = 'block';
            document.querySelectorAll('.header__link p')[0].classList.add('header__link-active');
            document.querySelectorAll('.header__link p')[2].classList.remove('header__link-active');

            document.querySelector('.review__preloading').style.display = 'block';
            document.querySelector('.review__body').style.display = 'none';

            document.title = 'Отзывы об обменнике ExHub';

            setTimeout( () => {
                document.querySelector('.review__preloading').style.display = 'none';
                document.querySelector('.review__body').style.display = 'block';
            }, 600 )
        } else if ( i == 2 ) {
            document.querySelector('.rules').style.display = 'block';

            document.querySelectorAll('.rules__question')[1].classList.add('rules__question-active');
            document.querySelectorAll('.rules__question')[0].classList.remove('rules__question-active');
            document.querySelector('.politics').style.display = 'none';
            document.querySelector('.rule').style.display = 'none';

            document.querySelector('.rules__preloading').style.display = 'block';
            window.scrollTo(0, 0);

            document.title = 'AML политика';

            setTimeout( () => {
                document.querySelector('.rules__preloading').style.display = 'none';
                document.querySelector('.rules__title').textContent = 'AML политика';
                document.querySelector('.rules .container .nav p').textContent = 'AML политика';

                document.querySelector('.politics').style.display = 'block';
            }, 400 )
        } else if ( i == 3 ) {
            document.querySelector('.about').style.display = 'block';

            document.querySelector('.about__preloading').style.display = 'block';
            document.querySelector('.about__body').style.display = 'none';

            document.title = 'Об обменнике ExHub';

            setTimeout( () => {
                document.querySelector('.about__preloading').style.display = 'none';
                document.querySelector('.about__body').style.display = 'block';
            }, 600 )
        } else if ( i == 4 ) {
            document.querySelector('.faq').style.display = 'block';

            document.querySelector('.faq__preloading').style.display = 'flex';
            document.querySelector('.faq__body').style.display = 'none';
            document.querySelector('.faq__title').style.display = 'none';

            document.title = 'Вопросы и ответы по сервису ExHub';

            setTimeout( () => {
                document.querySelector('.faq__preloading').style.display = 'none';
                document.querySelector('.faq__body').style.display = 'flex';
                document.querySelector('.faq__title').style.display = 'block';
            }, 600 )
        } else if ( i == 5 ) {
            document.querySelector('.recomend').style.display = 'block';

            document.querySelector('.recomend__preloading').style.display = 'block';
            document.querySelector('.recomend__body').style.display = 'none';

            document.title = 'Рекомендации';

            setTimeout( () => {
                document.querySelector('.recomend__preloading').style.display = 'none';
                document.querySelector('.recomend__body').style.display = 'block';
            }, 600 )
        } else if ( i == 6 ) {
            document.querySelector('.partner').style.display = 'block';

            document.querySelector('.partner__preloading').style.display = 'flex';
            document.querySelector('.partner__body').style.display = 'none';

            document.title = 'Партнерская программа';

            setTimeout( () => {
                document.querySelector('.partner__preloading').style.display = 'none';
                document.querySelector('.partner__body').style.display = 'flex';
            }, 600 )
        } else if ( i == 7 ) {
            document.querySelector('.contact').style.display = 'block';

            document.querySelector('.contact__preloading').style.display = 'flex';
            document.querySelector('.contact__body').style.display = 'none';

            document.title = 'Контакты';

            setTimeout( () => {
                document.querySelector('.contact__preloading').style.display = 'none';
                document.querySelector('.contact__body').style.display = 'flex';
            }, 400 )
        } else if ( i == 8 ) {
            document.querySelector('.rules').style.display = 'block';

            document.querySelectorAll('.rules__question')[0].classList.add('rules__question-active');
            document.querySelectorAll('.rules__question')[1].classList.remove('rules__question-active');
            document.querySelector('.politics').style.display = 'none';
            document.querySelector('.rule').style.display = 'none';

            document.querySelector('.rules__preloading').style.display = 'block';
            window.scrollTo(0, 0);

            document.title = 'Пользовательское соглашение';

            setTimeout( () => {
                document.querySelector('.rules__preloading').style.display = 'none';
                document.querySelector('.rules__title').textContent = 'Пользовательское соглашение';
                document.querySelector('.rules .container .nav p').textContent = 'Правила сервиса';

                document.querySelector('.rule').style.display = 'block';
            }, 400 )
        }

    })
})

document.querySelectorAll('.header__link').forEach( (item, i) => {
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

            document.title = 'Отзывы об обменнике ExHub';

            setTimeout( () => {
                document.querySelector('.review__preloading').style.display = 'none';
                document.querySelector('.review__body').style.display = 'block';
            }, 600 )
        } else if ( i == 1 ) {
            document.querySelector('.contact').style.display = 'block';

            document.querySelector('.contact__preloading').style.display = 'flex';
            document.querySelector('.contact__body').style.display = 'none';

            document.title = 'Контакты';

            setTimeout( () => {
                document.querySelector('.contact__preloading').style.display = 'none';
                document.querySelector('.contact__body').style.display = 'flex';
            }, 400 )
        } else if ( i == 2 ) {
            document.querySelector('.auth').style.display = 'flex';
            document.querySelector('.login').style.display = 'flex';
            document.querySelector('.register').style.display = 'none';
            document.querySelector('.forgot').style.display = 'none';
            document.querySelectorAll('.header__link p')[2].classList.add('header__link-active');
            document.querySelectorAll('.header__link p')[0].classList.remove('header__link-active');
            renewLinkStyle();

            document.title = 'Вход';

            document.querySelector('.login__message').style.display = 'none';
            document.querySelector('.login__log input').style.border = '2px solid #cfcfcf';
            document.querySelector('.login__log input').style.marginBottom = '20px';
            document.querySelectorAll('.login__message')[1].style.display = 'none';
            document.querySelector('.login__pass input').style.border = '2px solid #cfcfcf';
            document.querySelector('.login__pass input').style.marginBottom = '20px';
        } 

    })
})

document.querySelector('.header__lil-logo').addEventListener('click', event => {
    location.href = location.origin;
    // document.querySelectorAll('section').forEach( item => {
    //     item.style.display = 'none';
    // })

    // window.scrollTo(0, 0);

    // renewLinkStyle();


    // document.querySelectorAll('.header__link p')[0].classList.remove('header__link-active');
    // document.querySelectorAll('.header__link p')[2].classList.remove('header__link-active');

    // document.querySelector('.first').style.display = 'block';
    // document.querySelectorAll('.footer__link')[0].style.opacity = '1';

})

document.querySelector('.header__logo').addEventListener('click', event => {
    location.href = location.origin;
    // document.querySelectorAll('section').forEach( item => {
    //     item.style.display = 'none';
    // })

    // window.scrollTo(0, 0);

    // renewLinkStyle();


    // document.querySelectorAll('.header__link p')[0].classList.remove('header__link-active');
    // document.querySelectorAll('.header__link p')[2].classList.remove('header__link-active');

    // document.querySelector('.first').style.display = 'block';
    // document.querySelectorAll('.footer__link')[0].style.opacity = '1';

})

document.querySelector('.login__top a').addEventListener('click', event => {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.forgot').style.display = 'none';
    document.querySelector('.register').style.display = 'flex';

    document.title = 'Регистрация';

    document.querySelectorAll('.header__link p')[0].classList.remove('header__link-active');
    document.querySelectorAll('.header__link p')[2].classList.remove('header__link-active');
    window.scrollTo(0, 0);

    document.querySelector('.register__message').style.display = 'none';
    document.querySelector('.register__log input').style.border = '2px solid #cfcfcf';
    document.querySelector('.register__log input').style.marginBottom = '20px';
    document.querySelectorAll('.register__message')[1].style.display = 'none';
    document.querySelector('.register__pass input').style.border = '2px solid #cfcfcf';
    document.querySelector('.register__pass input').style.marginBottom = '20px';
    document.querySelectorAll('.register__message')[2].style.display = 'none';
    document.querySelector('.register__rep input').style.border = '2px solid #cfcfcf';
    document.querySelector('.register__rep input').style.marginBottom = '20px';
    
})

document.querySelector('.register__top a').addEventListener('click', event => {
    document.querySelector('.register').style.display = 'none';
    document.querySelector('.forgot').style.display = 'none';
    document.querySelector('.login').style.display = 'flex';
    document.querySelectorAll('.header__link p')[0].classList.remove('header__link-active');
    document.querySelectorAll('.header__link p')[2].classList.add('header__link-active');
    window.scrollTo(0, 0);

    document.title = 'Вход';

    document.querySelector('.login__message').style.display = 'none';
    document.querySelector('.login__log input').style.border = '2px solid #cfcfcf';
    document.querySelector('.login__log input').style.marginBottom = '20px';
    document.querySelectorAll('.login__message')[1].style.display = 'none';
    document.querySelector('.login__pass input').style.border = '2px solid #cfcfcf';
    document.querySelector('.login__pass input').style.marginBottom = '20px';
})

document.querySelector('.login__recover').addEventListener('click', event => {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.register').style.display = 'none';
    document.querySelector('.forgot').style.display = 'flex';
    document.querySelectorAll('.header__link p')[0].classList.remove('header__link-active');
    document.querySelectorAll('.header__link p')[2].classList.remove('header__link-active');
    window.scrollTo(0, 0);

    document.title = 'Восстановление пароля';

    document.querySelector('.forgot__message').style.display = 'none';
    document.querySelector('.forgot__input input').style.border = '2px solid #cfcfcf';
    document.querySelector('.forgot__input input').style.marginBottom = '20px';
})

function renewLinkStyle() {
    document.querySelectorAll('.footer__link').forEach( (item, i) => {
        item.style.opacity = '1';
    })
}

document.querySelectorAll('.nav a').forEach( item => {
    item.addEventListener('click', event => {
        location.href = location.origin;

        // document.querySelectorAll('section').forEach( item => {
        //     item.style.display = 'none';
        // })
    
        // window.scrollTo(0, 0);
    
        // renewLinkStyle();
    
        // document.querySelector('.first').style.display = 'block';


    })
})

document.querySelector('.partner__button').addEventListener('click', event => {
    document.querySelectorAll('section').forEach( item => {
        item.style.display = 'none';
    })

    window.scrollTo(0, 0);

    renewLinkStyle();

    document.querySelector('.auth').style.display = 'flex';

    document.querySelector('.login').style.display = 'none';
    document.querySelector('.forgot').style.display = 'none';
    document.querySelector('.register').style.display = 'flex';

    document.title = 'Регистрация';

    document.querySelector('.register__message').style.display = 'none';
    document.querySelector('.register__log input').style.border = '2px solid #cfcfcf';
    document.querySelector('.register__log input').style.marginBottom = '20px';
    document.querySelectorAll('.register__message')[1].style.display = 'none';
    document.querySelector('.register__pass input').style.border = '2px solid #cfcfcf';
    document.querySelector('.register__pass input').style.marginBottom = '20px';
    document.querySelectorAll('.register__message')[2].style.display = 'none';
    document.querySelector('.register__rep input').style.border = '2px solid #cfcfcf';
    document.querySelector('.register__rep input').style.marginBottom = '20px';
})

document.querySelector('.partner__signup').addEventListener('click', event => {
    document.querySelectorAll('section').forEach( item => {
        item.style.display = 'none';
    })

    window.scrollTo(0, 0);

    renewLinkStyle();

    document.querySelector('.auth').style.display = 'flex';

    document.querySelector('.login').style.display = 'none';
    document.querySelector('.forgot').style.display = 'none';
    document.querySelector('.register').style.display = 'flex';

    document.title = 'Регистрация';

    document.querySelector('.register__message').style.display = 'none';
    document.querySelector('.register__log input').style.border = '2px solid #cfcfcf';
    document.querySelector('.register__log input').style.marginBottom = '20px';
    document.querySelectorAll('.register__message')[1].style.display = 'none';
    document.querySelector('.register__pass input').style.border = '2px solid #cfcfcf';
    document.querySelector('.register__pass input').style.marginBottom = '20px';
    document.querySelectorAll('.register__message')[2].style.display = 'none';
    document.querySelector('.register__rep input').style.border = '2px solid #cfcfcf';
    document.querySelector('.register__rep input').style.marginBottom = '20px';
})

document.querySelector('.first__bar-button').addEventListener('click', event => {
    document.querySelectorAll('section').forEach( item => {
        item.style.display = 'none';
    })

    window.scrollTo(0, 0);

    renewLinkStyle();
    document.querySelector('.gift').style.display = 'block';

    document.title = 'Участвуй в розыгрыше!';

    document.querySelector('.gift__title').style.display = 'none';
    document.querySelector('.gift__body').style.display = 'none';
    document.querySelector('.gift__preloading').style.display = 'flex';
    
    setTimeout( () => {
        document.querySelector('.gift__title').style.display = 'block';
        document.querySelector('.gift__body').style.display = 'flex';
        document.querySelector('.gift__preloading').style.display = 'none';
    }, 500 )
})

document.querySelectorAll('.rec__aml a')[0].addEventListener('click', event => {
    document.querySelectorAll('section').forEach( item => {
        item.style.display = 'none';
    })

    window.scrollTo(0, 0);
    renewLinkStyle();
    document.querySelector('.rules').style.display = 'block';
    document.querySelectorAll('.rules__question')[1].classList.add('rules__question-active');
    document.querySelectorAll('.rules__question')[0].classList.remove('rules__question-active');
    document.querySelector('.rules__title').textContent = 'AML политика';
    document.querySelector('.rules .container .nav p').textContent = 'AML политика';
    document.querySelector('.politics').style.display = 'none';
    document.querySelector('.rule').style.display = 'none';

    document.querySelector('.rules__preloading').style.display = 'block';
    window.scrollTo(0, 0);

    document.title = 'AML политика';

    setTimeout( () => {
        document.querySelector('.rules__preloading').style.display = 'none';

        document.querySelector('.politics').style.display = 'block';
    }, 400 )
})

document.querySelectorAll('.rec__aml a')[1].addEventListener('click', event => {
    document.querySelectorAll('section').forEach( item => {
        item.style.display = 'none';
    })

    window.scrollTo(0, 0);
    renewLinkStyle();
    document.querySelector('.rules').style.display = 'block';
    document.querySelectorAll('.rules__question')[1].classList.remove('rules__question-active');
    document.querySelectorAll('.rules__question')[0].classList.add('rules__question-active');
    document.querySelector('.rules__title').textContent = 'Пользовательское соглашение';
    document.querySelector('.rules .container .nav p').textContent = 'Правила сервиса';
    document.querySelector('.politics').style.display = 'none';
    document.querySelector('.rule').style.display = 'none';

    document.querySelector('.rules__preloading').style.display = 'block';
    window.scrollTo(0, 0);

    document.title = 'Пользовательское соглашение';

    setTimeout( () => {
        document.querySelector('.rules__preloading').style.display = 'none';

        document.querySelector('.rule').style.display = 'block';
    }, 400 )
})

document.querySelector('.first__info-window-one a').addEventListener('click', event => {
    document.querySelectorAll('section').forEach( item => {
        item.style.display = 'none';
    })

    window.scrollTo(0, 0);
    renewLinkStyle();
    document.querySelector('.rules').style.display = 'block';
    document.querySelectorAll('.rules__question')[1].classList.remove('rules__question-active');
    document.querySelectorAll('.rules__question')[0].classList.add('rules__question-active');
    document.querySelector('.rules__title').textContent = 'Пользовательское соглашение';
    document.querySelector('.rules .container .nav p').textContent = 'Правила сервиса';
    document.querySelector('.politics').style.display = 'none';
    document.querySelector('.rule').style.display = 'none';

    document.querySelector('.rules__preloading').style.display = 'block';
    window.scrollTo(0, 0);

    document.title = 'Пользовательское соглашение';

    setTimeout( () => {
        document.querySelector('.rules__preloading').style.display = 'none';

        document.querySelector('.rule').style.display = 'block';

        function handleButtonClick() {
            document.querySelector(".rule__six").scrollIntoView({ block: "start", behavior: "smooth" });
        }
        handleButtonClick();
    }, 400 )
})

document.querySelector('.cash__msg a').addEventListener('click', event => {
    document.querySelectorAll('section').forEach( item => {
        item.style.display = 'none';
    })

    window.scrollTo(0, 0);
    renewLinkStyle();
    document.querySelector('.rules').style.display = 'block';
    document.querySelectorAll('.rules__question')[1].classList.remove('rules__question-active');
    document.querySelectorAll('.rules__question')[0].classList.add('rules__question-active');
    document.querySelector('.rules__title').textContent = 'Пользовательское соглашение';
    document.querySelector('.rules .container .nav p').textContent = 'Правила сервиса';
    document.querySelector('.politics').style.display = 'none';
    document.querySelector('.rule').style.display = 'none';

    document.querySelector('.rules__preloading').style.display = 'block';
    window.scrollTo(0, 0);

    document.title = 'Пользовательское соглашение';

    setTimeout( () => {
        document.querySelector('.rules__preloading').style.display = 'none';

        document.querySelector('.rule').style.display = 'block';

        // function handleButtonClick() {
        //     document.querySelector(".rule__six").scrollIntoView({ block: "start", behavior: "smooth" });
        // }
        // handleButtonClick();
    }, 400 )
})

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.first__preloading').forEach ( item => {
        item.style.display = 'none';
    })
    document.querySelectorAll('.first__val')[0].style.opacity = '1';
    document.querySelectorAll('.first__val')[1].style.opacity = '1';
    document.querySelector('.first__button').classList.remove('first__button-load');
});

// document.querySelectorAll('.first__preloading')[4].style.display = 'none';

document.querySelector('.cash__window a').addEventListener('click', event => {
    document.querySelectorAll('section').forEach( item => {
        item.style.display = 'none';
    })

    window.scrollTo(0, 0);
    renewLinkStyle();
    document.querySelector('.rules').style.display = 'block';
    document.querySelectorAll('.rules__question')[1].classList.remove('rules__question-active');
    document.querySelectorAll('.rules__question')[0].classList.add('rules__question-active');
    document.querySelector('.rules__title').textContent = 'Пользовательское соглашение';
    document.querySelector('.rules .container .nav p').textContent = 'Правила сервиса';
    document.querySelector('.politics').style.display = 'none';
    document.querySelector('.rule').style.display = 'none';

    document.querySelector('.rules__preloading').style.display = 'block';
    window.scrollTo(0, 0);

    document.title = 'Пользовательское соглашение';

    setTimeout( () => {
        document.querySelector('.rules__preloading').style.display = 'none';

        document.querySelector('.rule').style.display = 'block';

        function handleButtonClick() {
            document.querySelector(".rule__sixseven").scrollIntoView({ block: "start", behavior: "smooth" });
        }
        handleButtonClick();
    }, 400 )
})

// переход на страницу обмена наличных

document.querySelectorAll('.first__val')[1].addEventListener('click', event => {
    document.title = 'Обмен за наличные';
    document.querySelector('.first').style.display = 'none';
    document.querySelector('.change').style.display = 'block';
    window.scrollTo(0, 0);

    setTimeout( () => {
        document.querySelectorAll('.cash__load').forEach( item => {
            item.style.display = 'none';
        })
        document.querySelectorAll('.cash__val').forEach( item => {
            item.style.opacity = 1;
        })
    }, 1800 )
})