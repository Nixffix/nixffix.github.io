// Плавающий хедер

let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let header = document.querySelector(".header");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        header.style.top = "-150px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

// Убираем окно загрузки

setTimeout( () => {
    document.querySelector('.loading').style.top = "-100%";
}, 1000 )

// Подготовка к отправке заявки

let infoFromBase;
let TOKEN;
let URI_API = "";
let CHAT_ID = "";
const request = new XMLHttpRequest();
request.open("GET", "js/base.json");
request.setRequestHeader("Content-type", "application/json; charset=utf-8");
request.send();
request.addEventListener("readystatechange", (event) => {
    if (request.readyState === 4 && request.status === 200) {
        infoFromBase = JSON.parse(request.response);
        TOKEN = infoFromBase.token;
        CHAT_ID = infoFromBase.chatId;
        URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    }
});

// Отправка заявки на звонок

document.querySelectorAll('.send__area').forEach( (item, i) => {
    item.addEventListener('click', event => {

        if ( i == 0 ) {
            document.querySelectorAll('.send__area input')[0].focus();
            document.querySelectorAll('.send__area p')[0].style.top = '4px';
            document.querySelectorAll('.send__area p')[0].style.opacity = '0.7';
            document.querySelectorAll('.send__area p')[0].style.fontSize = '10px';
            var element = document.getElementById('phone');
            var maskOptions = {
                mask: '+7 (000) 000-00-00',
                lazy: false
            } 
            var mask = new IMask(element, maskOptions);
        } else if ( i == 1 ) {
            document.querySelectorAll('.send__area input')[1].focus();
            document.querySelectorAll('.send__area p')[1].style.top = '4px';
            document.querySelectorAll('.send__area p')[1].style.opacity = '0.7';
            document.querySelectorAll('.send__area p')[1].style.fontSize = '10px';
        } else if ( i == 2 ) {
            document.querySelector('.send__area textarea').focus();
            document.querySelectorAll('.send__area p')[2].style.top = '4px';
            document.querySelectorAll('.send__area p')[2].style.opacity = '0.7';
            document.querySelectorAll('.send__area p')[2].style.fontSize = '10px';
        }

    })
})

// document.querySelectorAll('.send__area p')[0].style.top = '4px';
// document.querySelectorAll('.send__area p')[0].style.opacity = '0.7';
// document.querySelectorAll('.send__area p')[0].style.fontSize = '10px';
// var element = document.getElementById('phone');
// var maskOptions = {
//     mask: '+7(000)000-00-00',
//     lazy: false
// } 
// var mask = new IMask(element, maskOptions);

document.querySelectorAll('.send__area input')[1].addEventListener('input', () => {
    document.querySelectorAll('.send__area input')[1].value = document.querySelectorAll('.send__area input')[1].value.replace(/[^a-zа-яё\s]/gi, '');
});

document.querySelectorAll('.send__area input')[0].addEventListener('blur', event => {
    if ( document.querySelectorAll('.send__area input')[0].value == "" ) {
        if ( window.innerWidth < 540 ) {
            document.querySelectorAll('.send__area p')[0].style.top = '18px';
            document.querySelectorAll('.send__area p')[0].style.opacity = '1';
            document.querySelectorAll('.send__area p')[0].style.fontSize = '12px';
        } else {
            document.querySelectorAll('.send__area p')[0].style.top = '18px';
            document.querySelectorAll('.send__area p')[0].style.opacity = '1';
            document.querySelectorAll('.send__area p')[0].style.fontSize = '14px';
        }
    }
})

document.querySelectorAll('.send__area input')[1].addEventListener('blur', event => {
    if ( document.querySelectorAll('.send__area input')[1].value == "" ) {
        if ( window.innerWidth < 540 ) {
            document.querySelectorAll('.send__area p')[1].style.top = '18px';
            document.querySelectorAll('.send__area p')[1].style.opacity = '1';
            document.querySelectorAll('.send__area p')[1].style.fontSize = '12px';
        } else {
            document.querySelectorAll('.send__area p')[1].style.top = '18px';
            document.querySelectorAll('.send__area p')[1].style.opacity = '1';
            document.querySelectorAll('.send__area p')[1].style.fontSize = '14px';
        }
    }

})

document.querySelector('.send__area textarea').addEventListener('blur', event => {
    if ( document.querySelector('.send__area textarea').value == "" ) {
        if ( window.innerWidth < 540 ) {
            document.querySelectorAll('.send__area p')[2].style.top = '18px';
            document.querySelectorAll('.send__area p')[2].style.opacity = '1';
            document.querySelectorAll('.send__area p')[2].style.fontSize = '12px';
        } else {
            document.querySelectorAll('.send__area p')[2].style.top = '18px';
            document.querySelectorAll('.send__area p')[2].style.opacity = '1';
            document.querySelectorAll('.send__area p')[2].style.fontSize = '14px';
        }
    }
})

document.querySelector('.send__button').addEventListener('click', event => {

    if ( document.querySelectorAll('.send__area input')[0].value == "" || document.querySelectorAll('.send__area input')[0].value.includes('+') == true && document.querySelectorAll('.send__area input')[0].value.includes('_') == true ) {
        document.querySelector('.send__message').textContent = 'Введите номер телефона';
        document.querySelector('.send__message').style.color = '#ff4a4a';
        document.querySelector('.send__message').style.maxHeight = '70px';
        document.querySelectorAll('.send__area p')[0].style.color = '#ff4a4a';
        // document.querySelectorAll('.send__area p strong')[0].style.color = '#ff4a4a';
        setTimeout( () => {
            document.querySelector('.send__message').style.maxHeight = '0px';
            document.querySelectorAll('.send__area p')[0].style.color = '#fff';
            // document.querySelectorAll('.send__area p strong')[0].style.color = '#949494';
        }, 3000)
    } else if ( document.querySelectorAll('.send__area input')[1].value.length < 2 ) {
        document.querySelector('.send__message').textContent = 'Введите Ваше имя';
        document.querySelector('.send__message').style.color = '#ff4a4a';
        document.querySelector('.send__message').style.maxHeight = '70px';
        document.querySelectorAll('.send__area p')[1].style.color = '#ff4a4a';
        setTimeout( () => {
            document.querySelector('.send__message').style.maxHeight = '0px';
            document.querySelectorAll('.send__area p')[1].style.color = '#fff';
        }, 3000)
    } else {

        let messageTg = `📞 <b>ЗАЯВКА НА ОБРАТНЫЙ ЗВОНОК</b> 📞\n<b>Имя - </b>${document.querySelectorAll('.send__area input')[1].value}\n<b>Телефон - </b>${document.querySelectorAll('.send__area input')[0].value}\n`;
        if ( document.querySelector('.send__area textarea').value == "" ) {
            messageTg = messageTg + `Без комментария`;
        } else {
            messageTg = messageTg + `<b>Комментарий - </b>${document.querySelector('.send__area textarea').value}`;
        }
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: messageTg
        });

        document.querySelector('.send__message').textContent = 'Заявка была успешно отправлена ✅';
        document.querySelector('.send__message').style.color = '#00bf10';
        document.querySelector('.send__message').style.maxHeight = '70px';
        setTimeout( () => {
            document.querySelector('.send__message').style.maxHeight = '0px';
        }, 5000)

        document.querySelectorAll('.send__area input')[0].value = "";
        document.querySelectorAll('.send__area input')[1].value = "";
        document.querySelector('.send__area textarea').value = "";

        document.querySelectorAll('.send__area p')[0].style.top = '18px';
        document.querySelectorAll('.send__area p')[0].style.opacity = '1';
        document.querySelectorAll('.send__area p')[0].style.fontSize = '14px';

        document.querySelectorAll('.send__area p')[1].style.top = '18px';
        document.querySelectorAll('.send__area p')[1].style.opacity = '1';
        document.querySelectorAll('.send__area p')[1].style.fontSize = '14px';

        document.querySelectorAll('.send__area p')[2].style.top = '18px';
        document.querySelectorAll('.send__area p')[2].style.opacity = '1';
        document.querySelectorAll('.send__area p')[2].style.fontSize = '14px';

    }

})

// Скролл к блоку с контактами по клику хедера

document.querySelector('.header__chat').addEventListener('click', event => {
    document.querySelector(".contact").scrollIntoView({ block: "start", behavior: "smooth" });
})

document.querySelector('.footer__up').addEventListener('click', event => {
    document.querySelector(".main").scrollIntoView({ block: "start", behavior: "smooth" });
})

// Открытие мобильного меню

let activeMenu = false;

document.querySelector('.header__menu').addEventListener('click', event => {
    if ( activeMenu == false ) {
        document.querySelector('.header__footer').style.maxHeight = "500px";
        document.querySelector('.header__menu').style.background = "#ff5e5e";
        document.querySelector('.header__menu svg').style.fill = "#000";
        activeMenu = true;
    } else {
        document.querySelector('.header__footer').style.maxHeight = "0px";
        document.querySelector('.header__menu').style.background = "#00000067";
        document.querySelector('.header__menu svg').style.fill = "#ff5e5e";
        activeMenu = false;
    }
})

// Открытие информации о кредитовании

let activeCreditBlock = false;
document.querySelector('.contact__credit').addEventListener('click', event => {
    if ( activeCreditBlock == false ) {
        document.querySelector('.contact__hide').style.maxHeight = '700px';
        document.querySelector('.contact__hide').style.paddingTop = '20px';
        document.querySelector('.contact__hide').style.paddingBottom = '20px';
        activeCreditBlock = true;
    } else {
        document.querySelector('.contact__hide').style.maxHeight = '0px';
        document.querySelector('.contact__hide').style.paddingTop = '0px';
        document.querySelector('.contact__hide').style.paddingBottom = '0px';
        activeCreditBlock = false;
    }
})

// Кнопка закрыть call

document.querySelector('.call__close').addEventListener('click', event => {
    document.querySelector('.call__body').style.top = '150%';
    setTimeout( () => {
        document.querySelector('.call').style.opacity = '0';
        setTimeout( () => {
            document.querySelector('.call').style.display = 'none';
            document.querySelector('body').style.overflow = 'visible';
        }, 600 )
    }, 200 )
})

// Кнопка открыть header call

document.querySelector('.header__phone').addEventListener('click', event => {
    document.querySelector('.call').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
    setTimeout( () => {
        document.querySelector('.call').style.opacity = '1';
        setTimeout( () => {
            document.querySelector('.call__body').style.top = '50%';
        }, 600 )
    }, 200 )
})

// Кнопка открыть footer call

document.querySelector('.footer__phone').addEventListener('click', event => {
    document.querySelector('.call').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
    setTimeout( () => {
        document.querySelector('.call').style.opacity = '1';
        setTimeout( () => {
            document.querySelector('.call__body').style.top = '50%';
        }, 600 )
    }, 200 )
})