// Скролл к консультации

document.querySelector('.product__button-call').addEventListener('click', event => {
    document.querySelector(".send").scrollIntoView({ block: "start", behavior: "smooth" });
})


// Скролл к кредитованию

document.querySelector('.product__credit').addEventListener('click', event => {
    document.querySelector(".contact__credit").scrollIntoView({ block: "start", behavior: "smooth" });

    document.querySelector(".contact__credit").style.background = '#ffffff36';
    document.querySelector(".contact__credit").style.padding = '12px 24px';
    setTimeout( () => {
        document.querySelector(".contact__credit").style.background = '#ffffff00';
        setTimeout( () => {
            document.querySelector(".contact__credit").style.background = '#ffffff36';
            setTimeout( () => {
                document.querySelector(".contact__credit").style.background = '#ffffff00';
                setTimeout( () => {
                    document.querySelector(".contact__credit").style.background = '#ffffff36';
                    setTimeout( () => {
                        document.querySelector(".contact__credit").style.background = '#ffffff00';
                        setTimeout( () => {
                            document.querySelector(".contact__credit").style.padding = '0px';
                        }, 400 )
                    }, 400 )
                }, 400 )
            }, 400 )
        }, 400 )
    }, 400 )
})

// Открыть в калькуляторе

document.querySelector('.product__calc').addEventListener('click', event => {
    document.querySelector('.calc').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
    setTimeout( () => {
        document.querySelector('.calc').style.opacity = '1';
        setTimeout( () => {
            document.querySelector('.calc__body').style.top = '50%';
        }, 600 )
    }, 200 )
})

// Маска на номер телефона в модалке

var element = document.getElementById('modal-phone');
var maskOptions = {
    mask: `+7 (000) 000-00-00`,
    lazy: false
} 
var mask = new IMask(element, maskOptions);

// Открытие и сборка карточки заказа

document.querySelector('.product__button-order').addEventListener('click', event => {

    document.querySelector('.modal__img img').src = document.querySelector('.product__gallery .swiper-wrapper .swiper-slide img').src;
    document.querySelector('.modal__info p strong').textContent = document.querySelector('.product__title').textContent;
    document.querySelector('.modal__info span').textContent = document.querySelector('.product__com').textContent;

    document.querySelector('.modal').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
    setTimeout( () => {
        document.querySelector('.modal').style.opacity = '1';
        setTimeout( () => {
            document.querySelector('.modal__body').style.top = '50%';
        }, 600 )
    }, 200 )

})

// Закрытие карточки

document.querySelector('.modal__close').addEventListener('click', event => {
    document.querySelector('.modal__body').style.top = '150%';
    setTimeout( () => {
        document.querySelector('.modal').style.opacity = '0';
        setTimeout( () => {
            document.querySelector('.modal').style.display = 'none';
            document.querySelector('body').style.overflow = 'visible';
        }, 600 )
    }, 200 )
})

// Отправка заявки

document.querySelector('.modal__button').addEventListener('click', event => {

    const input = document.querySelectorAll('.modal__input')[0];
    const value = input.value.trim();
    const words = value.split(/\s+/); // разделяет по пробелам
    const isValid = words.length === 3 && words.every(word => word.length >= 2);
    
    if ( !isValid ) {
        document.querySelector('.modal__message').textContent = 'Введите Ваше полное ФИО';
        document.querySelector('.modal__message').style.maxHeight = '60px';
        document.querySelector('.modal__message').style.color = '#ff4a4a';
        document.querySelector('.modal__message').style.paddingBottom = '20px';
        document.querySelectorAll('.modal__label p')[0].style.color = '#ff4a4a';
        setTimeout( () => {
            document.querySelector('.modal__message').style.maxHeight = '0px';
            document.querySelector('.modal__message').style.paddingBottom = '0px';
            document.querySelectorAll('.modal__label p')[0].style.color = '#fff';
        }, 2000)
    } else if ( document.querySelectorAll('.modal__input')[1].value == "" || document.querySelectorAll('.modal__input')[1].value.includes('+') == true && document.querySelectorAll('.modal__input')[1].value.includes('_') == true ) {
        document.querySelector('.modal__message').textContent = 'Введите Ваш номер телефона';
        document.querySelector('.modal__message').style.maxHeight = '60px';
        document.querySelector('.modal__message').style.color = '#ff4a4a';
        document.querySelector('.modal__message').style.paddingBottom = '20px';
        document.querySelectorAll('.modal__label p')[1].style.color = '#ff4a4a';
        setTimeout( () => {
            document.querySelector('.modal__message').style.maxHeight = '0px';
            document.querySelector('.modal__message').style.paddingBottom = '0px';
            document.querySelectorAll('.modal__label p')[1].style.color = '#fff';
        }, 2000)
    } else {

        let messageTg = `🛒 <b>ЗАКАЗ - ${document.querySelector('.product__title').textContent}</b> 🛒\n`;
        messageTg += `<b>ФИО - </b>${document.querySelectorAll('.modal__input')[0].value}\n`;
        messageTg += `<b>Телефон - </b>${document.querySelectorAll('.modal__input')[1].value}\n\n`;

        messageTg += `<b>Авто - </b>${document.querySelector('.product__title').textContent}\n`;
        messageTg += `<b>Комплектация - </b>${document.querySelector('.product__com').textContent}\n`;
        messageTg += `<b>Цена KRW - </b>${String(parseInt(Number(document.querySelector('.product__krw').textContent.replace(/\D/g, '')))).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₩\n`;
        messageTg += `<b>Цена "под ключ" в РФ - </b>${document.querySelector('.product__price span').textContent}\n`;
        messageTg += `<b>Двигатель - </b>${document.querySelector('.product__param-engine').textContent}\n`;
        messageTg += `<b>Тип топлива - </b>${document.querySelector('.product__param-fuel').textContent}\n`;
        messageTg += `<b>Трансмиссия - </b>${document.querySelector('.product__param-trans').textContent}\n`;
        messageTg += `<b>Пробег - </b>${document.querySelector('.product__param-mile').textContent}\n`;
        messageTg += `<b>Год выпуска - </b>${document.querySelector('.product__param-year').textContent}\n`;
        messageTg += `<b>Цвет кузова - </b>${document.querySelector('.product__param-color').textContent}\n\n`;
        
        messageTg += `<b>Ссылка на нашем сайте - </b>${location.href}\n`;
        messageTg += `<b>Ссылка на Encar - </b>${document.querySelector('.product__encar').href}\n`;

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: messageTg
        });
        document.querySelector('.modal__block').style.opacity = '0';
        document.querySelector('.modal__close').style.opacity = '0';
        setTimeout ( () => {
            document.querySelector('.modal__close').style.display = 'none';
            document.querySelector('.modal__block').style.display = 'none';
            document.querySelector('.modal__ok').style.display = 'flex';
            setTimeout( () => {
                document.querySelector('.modal__ok').style.opacity = '1';
            }, 1000)
        }, 600)

    }

})