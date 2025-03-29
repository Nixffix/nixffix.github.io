// Настройки слайдера

const slider = new Swiper(".slider", {
    speed: 500,
    autoHeight: false,
    slidesPerView: 1.3,
    spaceBetween: 16,
    navigation: {
      nextEl: ".slider__right",
      prevEl: ".slider__left",
    },
    pagination: {
        el: '.swiper-pagination',
    },
  });

// Открытие и переключатель для инструкции

let activeGuide = false;
document.querySelector('.app__open').addEventListener('click', event => {
    if ( activeGuide == false ) {
        document.querySelector('.app__platform').style.maxHeight = '60px';
        document.querySelector('.hide').style.maxHeight = '2000px';
        if ( window.innerWidth > 1024 ) {
            document.querySelector('.hide').style.marginBottom = '88px';
        } else {
            document.querySelector('.hide').style.marginBottom = '74px';
        }
        document.querySelector('.app__open svg').style.transform = 'scale(1, -1) rotate(-180deg)';
        activeGuide = true;
    } else {
        document.querySelector('.app__platform').style.height = '0px';
        document.querySelector('.hide').style.height = '0px';
        document.querySelector('.app__platform').style.maxHeight = '0px';
        document.querySelector('.hide').style.maxHeight = '0px';
        if ( window.innerWidth > 1024 ) {
            document.querySelector('.hide').style.marginBottom = '50px';
        } else {
            document.querySelector('.hide').style.marginBottom = '14px';
        }
        document.querySelector('.app__open svg').style.transform = 'scale(1, -1) rotate(0deg)';
        activeGuide = false;
        setTimeout( () => {
            document.querySelector('.app__platform').style.height = 'auto';
            document.querySelector('.hide').style.height = 'auto';
        }, 300 )
    }
})

document.querySelector('.app__replace .app__open').addEventListener('click', event => {
    if ( activeGuide == false ) {
        document.querySelector('.app__replace .app__platform').style.maxHeight = '60px';
        document.querySelector('.hide').style.maxHeight = '2000px';
        if ( window.innerWidth > 1024 ) {
            document.querySelector('.hide').style.marginBottom = '88px';
        } else {
            document.querySelector('.hide').style.marginBottom = '74px';
        }
        document.querySelector('.app__replace .app__open svg').style.transform = 'scale(1, -1) rotate(-180deg)';
        activeGuide = true;
    } else {
        document.querySelector('.app__replace .app__platform').style.height = '0px';
        document.querySelector('.hide').style.height = '0px';
        document.querySelector('.app__replace .app__platform').style.maxHeight = '0px';
        document.querySelector('.hide').style.maxHeight = '0px';
        if ( window.innerWidth > 1024 ) {
            document.querySelector('.hide').style.marginBottom = '50px';
        } else {
            document.querySelector('.hide').style.marginBottom = '14px';
        }
        document.querySelector('.app__replace .app__open svg').style.transform = 'scale(1, -1) rotate(0deg)';
        activeGuide = false;
        setTimeout( () => {
            document.querySelector('.app__replace .app__platform').style.height = 'auto';
            document.querySelector('.hide').style.height = 'auto';
        }, 300 )
    }
})

document.querySelectorAll('.hide__text')[0].textContent = `Или откройте сайт ${location.origin} в Google Chrome на Android и авторизуйтесь.`;
document.querySelectorAll('.app__button')[0].addEventListener('click', event => {
    document.querySelectorAll('.app__button')[1].classList.remove('app__button-active');
    document.querySelectorAll('.app__button')[0].classList.add('app__button-active');
    document.querySelectorAll('.hide__text')[0].textContent = `Или откройте сайт ${location.origin} в Google Chrome на Android и авторизуйтесь.`;
    document.querySelectorAll('.hide__text')[1].textContent = 'В появившемся списке выберите пункт «Установить приложение».';
    document.querySelectorAll('.hide__text')[2].textContent = 'Подтвердите установку приложения.';
    document.querySelectorAll('.hide__text')[3].textContent = 'Приложение установлено на Ваш смартфон, запустите его нажав на иконку. Мы замаскировали ее под Яндекс.';
    document.querySelectorAll('.hide__right img')[0].src = 'images/android1.png';
    document.querySelectorAll('.hide__right img')[1].src = 'images/android2.png';
    document.querySelectorAll('.hide__right img')[2].src = 'images/android3.png';
    document.querySelectorAll('.hide__right img')[3].src = 'images/android4.png';
})

document.querySelectorAll('.app__button')[1].addEventListener('click', event => {
    document.querySelectorAll('.app__button')[0].classList.remove('app__button-active');
    document.querySelectorAll('.app__button')[1].classList.add('app__button-active');
    document.querySelectorAll('.hide__text')[0].textContent = `Или откройте сайт ${location.origin} в Safari на Iphone и авторизуйтесь.`;
    document.querySelectorAll('.hide__text')[1].textContent = 'В появившемся списке окне выберите пункт На экран «Домой».';
    document.querySelectorAll('.hide__text')[2].textContent = 'Далее нажмите «Добавить» в правом верхнем углу.';
    document.querySelectorAll('.hide__text')[3].textContent = 'Приложение установлено на Ваш смартфон, запустите его нажав на иконку. Мы замаскировали ее под Яндекс.';
    document.querySelectorAll('.hide__right img')[0].src = 'images/ios1.png';
    document.querySelectorAll('.hide__right img')[1].src = 'images/ios2.png';
    document.querySelectorAll('.hide__right img')[2].src = 'images/ios3.png';
    document.querySelectorAll('.hide__right img')[3].src = 'images/ios4.png';
})

document.querySelectorAll('.app__button')[2].addEventListener('click', event => {
    document.querySelectorAll('.app__button')[3].classList.remove('app__button-active');
    document.querySelectorAll('.app__button')[2].classList.add('app__button-active');
    document.querySelectorAll('.hide__text')[0].textContent = `Или откройте сайт ${location.origin} в Google Chrome на Android и авторизуйтесь.`;
    document.querySelectorAll('.hide__text')[1].textContent = 'В появившемся списке выберите пункт «Установить приложение».';
    document.querySelectorAll('.hide__text')[2].textContent = 'Подтвердите установку приложения.';
    document.querySelectorAll('.hide__text')[3].textContent = 'Приложение установлено на Ваш смартфон, запустите его нажав на иконку. Мы замаскировали ее под Яндекс.';
    document.querySelectorAll('.hide__right img')[0].src = 'images/android1.png';
    document.querySelectorAll('.hide__right img')[1].src = 'images/android2.png';
    document.querySelectorAll('.hide__right img')[2].src = 'images/android3.png';
    document.querySelectorAll('.hide__right img')[3].src = 'images/android4.png';
})

document.querySelectorAll('.app__button')[3].addEventListener('click', event => {
    document.querySelectorAll('.app__button')[2].classList.remove('app__button-active');
    document.querySelectorAll('.app__button')[3].classList.add('app__button-active');
    document.querySelectorAll('.hide__text')[0].textContent = `Или откройте сайт ${location.origin} в Safari на Iphone и авторизуйтесь.`;
    document.querySelectorAll('.hide__text')[1].textContent = 'В появившемся списке окне выберите пункт На экран «Домой».';
    document.querySelectorAll('.hide__text')[2].textContent = 'Далее нажмите «Добавить» в правом верхнем углу.';
    document.querySelectorAll('.hide__text')[3].textContent = 'Приложение установлено на Ваш смартфон, запустите его нажав на иконку. Мы замаскировали ее под Яндекс.';
    document.querySelectorAll('.hide__right img')[0].src = 'images/ios1.png';
    document.querySelectorAll('.hide__right img')[1].src = 'images/ios2.png';
    document.querySelectorAll('.hide__right img')[2].src = 'images/ios3.png';
    document.querySelectorAll('.hide__right img')[3].src = 'images/ios4.png';
})

// Открытие поисковых окон для поиска

document.querySelectorAll('.filter__area').forEach( (item, i) => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.modal')[i + 1].style.display = 'block';
        setTimeout( () => {
            document.querySelectorAll('.modal')[i + 1].style.opacity = '1';
            document.querySelectorAll('.modal')[i + 1].style.transform = 'scale(1)';
        }, 100 )
    })
} )

// Функция редиректа на телеграм

function goTelegram() {
    setTimeout( () => {
        document.location.href = 'https://t.me/tripscantop_bot';
    }, 100 )
}

// Переход в тг

document.querySelectorAll('.goTo').forEach( item => {
    item.addEventListener('click', event => {
        goTelegram();
    })
} )

// Страница auth

document.querySelector('.auth__btn p').style.color = '#1976D2';

document.querySelectorAll('.auth__btn').forEach( (item, i) => {
    item.addEventListener('click', event => {
        if ( i == 0 ) {
            document.querySelector('.auth__registration').style.display = 'block';
            document.querySelector('.auth__login').style.display = 'none';
            document.querySelector('.auth__fix').style.display = 'none';
            document.querySelectorAll('.auth__btn p')[1].style.color = '#191C1F';
            document.querySelectorAll('.auth__btn p')[0].style.color = '#1976D2';
            document.querySelector('.auth__hr').style.left = '0%';
            document.location.href = `${location.origin}#auth-up`;
        } else if ( i == 1 ) {
            document.querySelector('.auth__registration').style.display = 'none';
            document.querySelector('.auth__login').style.display = 'block';
            document.querySelector('.auth__fix').style.display = 'block';
            document.querySelectorAll('.auth__btn p')[0].style.color = '#191C1F';
            document.querySelectorAll('.auth__btn p')[1].style.color = '#1976D2';
            document.querySelector('.auth__hr').style.left = '50%';
            document.location.href = `${location.origin}#auth-in`;
        }
    })
})

// Обработка полей

document.querySelectorAll('.auth__input input').forEach( (item, i) => {
    item.addEventListener('focus', event => {
        document.querySelectorAll('.auth__border')[i].style.opacity = 1;
        document.querySelectorAll('.auth__placeholder')[i].style.opacity = 0;
        document.querySelectorAll('.auth__input input')[i].style.color = '#1976D2';
    })
})

document.querySelectorAll('.auth__input input').forEach( (item, i) => {
    item.addEventListener('blur', event => {
        if ( item.value == '' ) {
            document.querySelectorAll('.auth__border')[i].style.opacity = 0;
            document.querySelectorAll('.auth__placeholder')[i].style.opacity = 1;
            document.querySelectorAll('.auth__input input')[i].style.color = '#191C1F';
        } else {
            document.querySelectorAll('.auth__border')[i].style.opacity = 0;
            document.querySelectorAll('.auth__placeholder')[i].style.opacity = 0;
            document.querySelectorAll('.auth__input input')[i].style.color = '#191C1F';
        }

        if ( document.querySelectorAll('.auth__input input')[2].value != document.querySelectorAll('.auth__input input')[3].value && document.querySelectorAll('.auth__input input')[3].value != '' ) {
            document.querySelectorAll('.auth__border')[3].style.opacity = 1;
        }

    })
})

// Смотреть введённый пароль

document.querySelectorAll('.auth__eye').forEach( (item, i) => {
    item.addEventListener('click', event => {
        if ( i == 0 ) {
            document.querySelectorAll('.auth__input input')[2].type = 'text';
            document.querySelectorAll('.auth__eye')[0].style.display = 'none';
            document.querySelectorAll('.auth__look')[0].style.display = 'flex';
        } else if ( i == 1 ) {
            document.querySelectorAll('.auth__input input')[3].type = 'text';
            document.querySelectorAll('.auth__eye')[1].style.display = 'none';
            document.querySelectorAll('.auth__look')[1].style.display = 'flex';
        } else if ( i == 2 ) {
            document.querySelectorAll('.auth__input input')[5].type = 'text';
            document.querySelectorAll('.auth__eye')[2].style.display = 'none';
            document.querySelectorAll('.auth__look')[2].style.display = 'flex';
        } 
    })
})

// Проверка полей

let hasErrorReg = [true, true, true, true, true];

// Проверка логина

document.querySelectorAll('.auth__input input')[0].addEventListener('input', event => {
    if ( event.target.value != '' ) {
        document.querySelectorAll('.auth__good')[0].style.display = 'flex';
        hasErrorReg[0] = false;
    } else {
        document.querySelectorAll('.auth__good')[0].style.display = 'none';
        hasErrorReg[0] = true;
    }
    checkRegistration();
})

// Проверка никнейма

document.querySelectorAll('.auth__input input')[1].addEventListener('input', event => {
    if ( event.target.value != '' ) {
        document.querySelectorAll('.auth__good')[1].style.display = 'flex';
        hasErrorReg[1] = false;
    } else {
        document.querySelectorAll('.auth__good')[1].style.display = 'none';
        hasErrorReg[1] = true;
    }
    checkRegistration();
})

// Проверка пароля

document.querySelectorAll('.auth__input input')[2].addEventListener('input', event => {
    if ( event.target.value != '' ) {
        document.querySelectorAll('.auth__check')[0].style.display = 'flex';
        hasErrorReg[2] = false;
    } else {
        document.querySelectorAll('.auth__check')[0].style.display = 'none';
        hasErrorReg[2] = true;
    }
    checkRegistration();
})

// Проверка повторного пароля

document.querySelectorAll('.auth__input input')[3].addEventListener('input', event => {
    if ( document.querySelectorAll('.auth__input input')[2].value == document.querySelectorAll('.auth__input input')[3].value ) {
        document.querySelectorAll('.auth__check')[1].style.display = 'flex';
        document.querySelector('.auth__close').style.display = 'none';
        document.querySelector('.auth__warning').style.display = 'none';
        document.querySelectorAll('.auth__border')[3].style.background = '#1976D2';
        document.querySelectorAll('.auth__border')[3].style.bottom = '-2px';
        hasErrorReg[3] = false;
    } else if ( document.querySelectorAll('.auth__input input')[3].value == '' ) {
        document.querySelector('.auth__warning').style.display = 'none';
        document.querySelectorAll('.auth__border')[3].style.background = '#1976D2';
        document.querySelectorAll('.auth__border')[3].style.bottom = '-2px';
        document.querySelector('.auth__close').style.display = 'none';
        hasErrorReg[3] = true;
    } else {
        document.querySelectorAll('.auth__check')[1].style.display = 'none';
        document.querySelector('.auth__close').style.display = 'flex';
        document.querySelector('.auth__warning').style.display = 'block';
        document.querySelectorAll('.auth__border')[3].style.background = '#FF6635';
        document.querySelectorAll('.auth__border')[3].style.bottom = '-14px';
        hasErrorReg[3] = true;
    }
    checkRegistration();
})

// Удаление повторного пароля

document.querySelector('.auth__close').addEventListener('click', event => {
    document.querySelectorAll('.auth__input input')[3].value = '';
    document.querySelector('.auth__warning').style.display = 'none';
    document.querySelectorAll('.auth__border')[3].style.background = '#1976D2';
    document.querySelectorAll('.auth__border')[3].style.bottom = '-2px';
    document.querySelectorAll('.auth__border')[3].style.opacity = '0';
    document.querySelectorAll('.auth__placeholder')[3].style.opacity = '1';
    document.querySelector('.auth__close').style.display = 'none';
})

// Скрытие пароля

document.querySelectorAll('.auth__look').forEach( (item, i) => {
    item.addEventListener('click', event => {
        if ( i == 0 ) {
            document.querySelectorAll('.auth__input input')[2].type = 'password';
            document.querySelectorAll('.auth__eye')[0].style.display = 'flex';
            document.querySelectorAll('.auth__look')[0].style.display = 'none';
        } else if ( i == 1 ) {
            document.querySelectorAll('.auth__input input')[3].type = 'password';
            document.querySelectorAll('.auth__eye')[1].style.display = 'flex';
            document.querySelectorAll('.auth__look')[1].style.display = 'none';
        } else if ( i == 2 ) {
            document.querySelectorAll('.auth__input input')[5].type = 'password';
            document.querySelectorAll('.auth__eye')[2].style.display = 'flex';
            document.querySelectorAll('.auth__look')[2].style.display = 'none';
        }
    })
})

// Согласие с правилами

let activeAprove = false;
document.querySelector('.auth__sqr').addEventListener('click', event => {
    if ( activeAprove == false ) {
        document.querySelector('.auth__ok').style.opacity = '1';
        hasErrorReg[4] = false;
        activeAprove = true;
    } else {
        document.querySelector('.auth__ok').style.opacity = '0';
        hasErrorReg[4] = true;
        activeAprove = false;
    }
    checkRegistration();
})

// Проверка на полную готовность регистрации

function checkRegistration() {
    if ( hasErrorReg.includes(true) ) {
        document.querySelector('.auth__button').classList.remove('auth__button-active');
    } else {
        document.querySelector('.auth__button').classList.add('auth__button-active');
    }
}

// Открытие модалки с правилами

document.querySelector('.auth__okay p span').addEventListener('click', event => {
    document.querySelector('.popup').style.display = 'flex';
    setTimeout( () => {
        document.querySelector('.popup').style.opacity = '1';
    }, 100 )
})

// Закрытие модалки с правилами

document.querySelector('.popup').addEventListener('click', event => {
    if ( event.target === document.querySelector('.popup') ) {
        document.querySelector('.popup').style.opacity = '0';
        setTimeout( () => {
            document.querySelector('.popup').style.display = 'none';
        }, 700 )
    }
})

document.querySelector('.popup__button').addEventListener('click', event => {
    document.querySelector('.popup').style.opacity = '0';
    setTimeout( () => {
        document.querySelector('.popup').style.display = 'none';
    }, 700 )
})

// Проверка полей авторизации

document.querySelectorAll('.auth__input input')[4].addEventListener('input', event => {
    checkLogin();
})

document.querySelectorAll('.auth__input input')[5].addEventListener('input', event => {
    checkLogin();
})

function checkLogin() {
    if ( document.querySelectorAll('.auth__input input')[4].value != '' && document.querySelectorAll('.auth__input input')[5].value != '' ) {
        document.querySelector('.auth__enter').classList.add('auth__enter-active');
    } else {
        document.querySelector('.auth__enter').classList.remove('auth__enter-active');
    }
}

// Открытие страницы авторизации

document.querySelector('.header__registration').addEventListener('click', event => {
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.auth').style.display = 'flex';
    document.location.href = `${location.origin}#auth-up`;
})

document.querySelector('.header__login').addEventListener('click', event => {
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.auth').style.display = 'flex';
    setTimeout( () => {
        document.querySelector('.auth__registration').style.display = 'none';
        document.querySelector('.auth__login').style.display = 'block';
        document.querySelector('.auth__fix').style.display = 'block';
        document.querySelectorAll('.auth__btn p')[0].style.color = '#191C1F';
        document.querySelectorAll('.auth__btn p')[1].style.color = '#1976D2';
        document.querySelector('.auth__hr').style.left = '50%';
    }, 100 )
    document.location.href = `${location.origin}#auth-in`;
})

document.querySelector('.auth__logo').addEventListener('click', event => {
    document.querySelector('.header').style.display = 'flex';
    document.querySelector('.main').style.display = 'block';
    document.querySelector('.auth').style.display = 'none';
})

// Обработка кнопок регистрации и авторизации

document.querySelector('.auth__button').addEventListener('click', event => {
    document.querySelector('.auth__button-active p').style.display = 'none';
    document.querySelector('.auth__button-active img').style.display = 'block';
    document.querySelector('.auth__button').style.background = '#b1b1b1';
    document.querySelector('.auth__button').style.cursor = 'default';
})

document.querySelector('.auth__enter').addEventListener('click', event => {
    document.querySelector('.auth__enter-active p').style.display = 'none';
    document.querySelector('.auth__enter-active img').style.display = 'block';
    document.querySelector('.auth__enter').style.background = '#b1b1b1';
    document.querySelector('.auth__enter').style.cursor = 'default';
})

// Открытие окна с выбором маркетплейса

document.querySelector('.platform').addEventListener('click', event => {
    document.querySelector('.modal-platform').style.display = 'block';
    setTimeout( () => {
        document.querySelector('.modal-platform').style.opacity = '1';
        document.querySelector('.modal-platform').style.transform = 'scale(1)';
    }, 200 )
})

// Закрытие окна с выбором маркетплейса

document.querySelector('.modal-platform .modal__close').addEventListener('click', event => {
    document.querySelector('.modal-platform').style.opacity = '0';
    setTimeout( () => {
        document.querySelector('.modal-platform').style.display = 'none';
        document.querySelector('.modal-platform').style.transform = 'scale(0.7)';
    }, 800 )
})

document.querySelector('.modal-platform .modal__go').addEventListener('click', event => {
    document.querySelector('.modal-platform').style.opacity = '0';
    setTimeout( () => {
        document.querySelector('.modal-platform').style.display = 'none';
        document.querySelector('.modal-platform').style.transform = 'scale(0.7)';
    }, 800 )
})

// Выбор маркетплейса

let choiseMarket = [false, false, false, false, false];
document.querySelectorAll('.modal__plat-option').forEach( (item, i) => {
    item.addEventListener('click', event => {

        if ( choiseMarket[i] == false ) {
            item.classList.add('modal__plat-active');
            document.querySelectorAll('.platform__option')[i].style.display = 'flex';
            choiseMarket[i] = true;
        } else {
            item.classList.remove('modal__plat-active');
            document.querySelectorAll('.platform__option')[i].style.display = 'none';
            choiseMarket[i] = false;
        }

        if ( choiseMarket.includes(true) ) {
            document.querySelector('.modal__plat-global').style.background = '#fff';
            document.querySelector('.modal__plat-global').style.color = '#191C1F';
            document.querySelector('.platform__default').style.display = 'none';
        } else {
            document.querySelector('.modal__plat-global').style.background = '#EDF4FC';
            document.querySelector('.modal__plat-global').style.color = '#1976D2';
            document.querySelector('.platform__default').style.display = 'block';
        }

        if ( choiseMarket[0] == true && choiseMarket[1] == true && choiseMarket[2] == true && choiseMarket[3] == true && choiseMarket[4] == true ) {
            choiseMarket.forEach( (item, i) => {
                choiseMarket[i] = false;
                document.querySelectorAll('.modal__plat-option')[i].classList.remove('modal__plat-active');
                document.querySelectorAll('.platform__option')[i].style.display = 'none';
            })
            document.querySelector('.modal__plat-global').style.background = '#EDF4FC';
            document.querySelector('.modal__plat-global').style.color = '#1976D2';
            document.querySelector('.platform__default').style.display = 'block';
        }

    })
})

document.querySelector('.modal__plat-global').addEventListener('click', event => {
    choiseMarket.forEach( (item, i) => {
        choiseMarket[i] = false;
        document.querySelectorAll('.modal__plat-option')[i].classList.remove('modal__plat-active');
        document.querySelectorAll('.platform__option')[i].style.display = 'none';
    })
    document.querySelector('.modal__plat-global').style.background = '#EDF4FC';
    document.querySelector('.modal__plat-global').style.color = '#1976D2';
    document.querySelector('.platform__default').style.display = 'block';
})

// Поиск маркетплейсов

document.querySelector('.modal-platform .modal__find input').addEventListener('input', event => {
    document.querySelectorAll('.modal__plat-option').forEach( (item, i) => {
        item.style.display = 'none';
        if ( item.textContent.toLocaleLowerCase().includes(document.querySelector('.modal-platform .modal__find input').value.toLocaleLowerCase()) ) {
            item.style.display = 'flex';
        }
    })
})

// Фикс текста

document.querySelectorAll('.best__hide')[1].textContent = '+ еще локации'

// Сладйер магазинов

const swiper = new Swiper(".shop__slider", {
    speed: 500,
    autoHeight: false,
    slidesPerView: 'auto'
});



// Переход в тг по скролу внутри модального окна

document.querySelector('.modal-city').addEventListener('touchmove', goTelegram);
document.querySelector('.modal-location').addEventListener('touchmove', goTelegram);
document.querySelector('.modal-category').addEventListener('touchmove', goTelegram);
document.querySelector('.forgot').addEventListener('touchmove', goTelegram);

// Переход на страницу восстановления доступа

document.querySelector('.auth__fix').addEventListener('click', event => {
    document.querySelector('.auth').style.display = 'none';
    document.querySelector('.forgot').style.display = 'flex';
    document.querySelector('.header').style.display = 'flex';
    document.querySelector('.header').style.top = '-100px';
    document.location.href = `${location.origin}#restoring-access`;
    // setTimeout( () => {
    //     goTelegram();
    // }, 500 )
})

// Работа таймера

function paintZero(num) {
    if ( num < 10 && num > -1 ) {
        num = `0${num}`;
    }
    return num
}

let saveHour = 0;
let saveMin = 0;
let saveSec = 0;

function update() {
    var dt = new Date;
    var tz = dt.getTimezoneOffset();
    var now = Math.floor(dt / 1000 - tz * 60);
    var next = Math.ceil((dt / 1000 / 60 - tz) / 60 / 24) * 60 * 60 * 24;
    var left = next - now;
    var hours = ~~ (left/60/60);
    var mins = ~~(left/60%60);
    var secs = ~~(left%60);
    
    hours = hours + 11;
    if ( hours > 24 ) {
        hours = hours % 24;
    }

    hours = paintZero(hours);
    mins = paintZero(mins);
    secs = paintZero(secs);

    saveHour = hours;
    saveMin = mins;
    saveSec = secs;

    document.querySelectorAll('.links__table span')[0].textContent = `${hours}:${mins}:${secs}`;
    document.querySelectorAll('.links__table span')[1].textContent = `3 д. ${hours}:${mins}:${secs}`;
    document.querySelectorAll('.links__table span')[2].textContent = `4 д. ${hours}:${mins}:${secs}`;
    document.querySelectorAll('.links__table span')[3].textContent = `6 д. ${hours}:${mins}:${secs}`;
    document.querySelectorAll('.links__table span')[4].textContent = `${hours}:${mins}:${secs}`;
    document.querySelectorAll('.links__table span')[5].textContent = `3 д. ${hours}:${mins}:${secs}`;
    document.querySelectorAll('.links__table span')[6].textContent = `4 д. ${hours}:${mins}:${secs}`;
    document.querySelectorAll('.links__table span')[7].textContent = `6 д. ${hours}:${mins}:${secs}`;
    document.querySelectorAll('.links__time')[0].textContent = `${hours}:${mins}:${secs}`;
    document.querySelectorAll('.links__time')[1].textContent = `3 д. ${hours}:${mins}:${secs}`;
    document.querySelectorAll('.links__time')[2].textContent = `4 д. ${hours}:${mins}:${secs}`;
    document.querySelectorAll('.links__time')[3].textContent = `6 д. ${hours}:${mins}:${secs}`;
    document.querySelectorAll('.links__time')[4].textContent = `${hours}:${mins}:${secs}`;
    document.querySelectorAll('.links__time')[5].textContent = `3 д. ${hours}:${mins}:${secs}`;
    document.querySelectorAll('.links__time')[6].textContent = `4 д. ${hours}:${mins}:${secs}`;
    document.querySelectorAll('.links__time')[7].textContent = `6 д. ${hours}:${mins}:${secs}`;

    if ( hours < 12 ) {
        document.querySelectorAll('.links__table-first')[0].style.background = '#FF6635';
        document.querySelectorAll('.links__table-first')[0].style.color = '#FFF';
        document.querySelectorAll('.links__table-first svg')[0].style.fill = '#FFF';
        document.querySelectorAll('.links__table-first')[1].style.background = '#FF6635';
        document.querySelectorAll('.links__table-first')[1].style.color = '#FFF';
        document.querySelectorAll('.links__table-first svg')[1].style.fill = '#FFF';
    } else {
        document.querySelectorAll('.links__table-first')[0].style.background = '#EEF1F8';
        document.querySelectorAll('.links__table-first')[0].style.color = '#191C1F';
        document.querySelectorAll('.links__table-first svg')[0].style.fill = '#4791DB';
        document.querySelectorAll('.links__table-first')[1].style.background = '#EEF1F8';
        document.querySelectorAll('.links__table-first')[1].style.color = '#191C1F';
        document.querySelectorAll('.links__table-first svg')[1].style.fill = '#4791DB';
    }

    if ( left <= 0 ) {
        location.reload();
    }
}
update();
setInterval(update, 1000);

// Открытие табличек с ссылкой и таймером

let openModal = false;

document.querySelectorAll('.links__table').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.links__window').forEach( item => {
            item.style.opacity = '0';
            item.style.display = 'none';
        } )

        setTimeout( () => {
            document.querySelectorAll('.links__window')[i].style.display = 'block';
            setTimeout( () => {
                document.querySelectorAll('.links__window')[i].style.opacity = '1';
            }, 100 )
        }, 100 )

        openModal = true;

    })
})

// Закрытие таблички

document.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.links__window');
    
    modals.forEach(modal => {
      if (!modal.contains(event.target)) {
        modal.style.display = 'none';
      }
    });
});

// Закрытие окна с инфой об оплате

document.querySelector('.payment__close').addEventListener('click', event => {
    document.querySelector('.payment').style.display = 'none';
    localStorage.setItem('TripScanBlockPayment', 'close');
})

// Копирование ссылок кликом

document.querySelectorAll('.links__right')[0].addEventListener('click', event => {
    copyTimersInfo();
})

document.querySelectorAll('.links__right')[1].addEventListener('click', event => {
    copyTimersInfo();
})

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text copied!');
            document.querySelector('.copy').style.transform = 'scale(1)';
            setTimeout( () => {
                document.querySelector('.copy').style.transform = 'scale(0)';
            }, 2000 )
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try {
            document.execCommand('copy');
            console.log('Text copied!');
        } catch (err) {
            console.error('Failed to copy:', err);
        }
        document.body.removeChild(textarea);
    }
}

function getEndDate(days, hours, minutes, seconds) {
    const now = new Date();
    const endTime = new Date(now.getTime() + (days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds) * 1000);

    const day = String(endTime.getDate()).padStart(2, '0');
    const month = String(endTime.getMonth() + 1).padStart(2, '0');
    const year = endTime.getFullYear();
    const time = endTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

    // return `${day}.${month}.${year} в 11:00`;
    return `${day}.${month}.${year} в ${time}`;
}

function copyTimersInfo() {
    const first = getEndDate(0, saveHour, saveMin, saveSec);
    const second = getEndDate(3, saveHour, saveMin, saveSec);
    const third = getEndDate(4, saveHour, saveMin, saveSec);
    const fourth = getEndDate(6, saveHour, saveMin, saveSec);
    copyToClipboard(`${document.querySelectorAll('.links__link h6')[0].textContent} будет отключен ${first} | ${document.querySelectorAll('.links__link h6')[1].textContent} будет отключен ${second} | ${document.querySelectorAll('.links__link h6')[2].textContent} будет отключен ${third} | ${document.querySelectorAll('.links__link h6')[3].textContent} будет отключен ${fourth}`);
}

// Закрытие окна с установкой приложения

// document.querySelector('.tab__right').addEventListener('click', event => {
//     document.querySelector('.tab').style.display = 'none';
// })

// Установка отдельной вкладки

let installPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    // document.getElementById("install-button").style.display = "block";
});

document.querySelector(".tab").addEventListener("click", event => {
    if ( event.target.classList.contains('close-tab') ) {
        document.querySelector('.tab').style.display = 'none';
        localStorage.setItem('TripScanBlockApp', 'close');
    } else {
        if (installPrompt) {
            installPrompt.prompt();
            installPrompt.userChoice.then((choice) => {
                if (choice.outcome === "accepted") {
                    console.log("PWA установлено!");
                    localStorage.setItem('TripScanBlockApp', 'close');
                }
                installPrompt = null;
            });
        }
    }
});

if (window.matchMedia('(display-mode: standalone)').matches) {
    window.open = function () { return null; }; // Блокируем открытие новых вкладок
}

if ( localStorage.getItem('TripScanBlockPayment') == 'close' ) {
    document.querySelector('.payment').style.display = 'none';
}
if ( localStorage.getItem('TripScanBlockApp') == 'close' ) {
    document.querySelector('.tab').style.display = 'none';
}

// Изменение ссылки

// document.location.href = `${location.origin}#cityId=1`;
