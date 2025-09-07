document.querySelector('.menu__close').addEventListener('click', event => {
    document.querySelector('.menu__body').style.right = "-400px";
    setTimeout( () => {
        document.querySelector('.menu').style.opacity = "0";
        setTimeout( () => {
            document.querySelector('.menu').style.display = "none";
        }, 600)
    }, 600)
})

document.querySelector('.menu').addEventListener('click', event => {
    if ( event.target === document.querySelector('.menu') ) {
        document.querySelector('.menu__body').style.right = "-400px";
        setTimeout( () => {
            document.querySelector('.menu').style.opacity = "0";
            setTimeout( () => {
                document.querySelector('.menu').style.display = "none";
            }, 600)
        }, 600)
    }
})

document.querySelector('.header__menu').addEventListener('click', event => {
    document.querySelector('.menu').style.display = "block";
    setTimeout( () => {
        document.querySelector('.menu').style.opacity = "1";
        setTimeout( () => {
            document.querySelector('.menu__body').style.right = "0px";
        }, 600)
    }, 100)
})

if ( document.querySelector('.adv') ) {
    
    document.querySelectorAll('.adv__item').forEach( (item, i) => {
        item.addEventListener('click', event => {

            document.querySelector('.adv__name').style.maxHeight = "0px";
            document.querySelector('.adv__text').style.maxHeight = "0px";
            document.querySelector('.adv__name').style.opacity = "0";
            document.querySelector('.adv__text').style.opacity = "0";

            setTimeout( () => {
                document.querySelectorAll('.adv__item').forEach( (item, i) => {
                    item.classList.remove('adv__item-active');
                })

                item.classList.add('adv__item-active');
            }, 100)

            setTimeout( () => {

                if (i == 0) {
                    document.querySelector('.adv__name').textContent = "Конфиденциальность";
                    document.querySelector('.adv__text').textContent = "Mega обеспечивает полную анонимность — пользователи совершают сделки, не раскрывая личные данные.";
                } else if (i == 1) {
                    document.querySelector('.adv__name').textContent = "Разнообразие товаров";
                    document.querySelector('.adv__text').textContent = "На платформе представлен большой выбор как физических, так и цифровых товаров, что делает её удобной для разных покупателей.";
                } else if (i == 2) {
                    document.querySelector('.adv__name').textContent = "Надёжные оплаты";
                    document.querySelector('.adv__text').textContent = "Использование криптовалют снижает риски мошенничества и гарантирует безопасность всех платежей.";
                } else if (i == 3) {
                    document.querySelector('.adv__name').textContent = "Оценки и отзывы";
                    document.querySelector('.adv__text').textContent = "Система рейтингов помогает находить проверенных продавцов и повышает доверие к площадке.";
                } else if (i == 4) {
                    document.querySelector('.adv__name').textContent = "Удобство использования";
                    document.querySelector('.adv__text').textContent = "Простой интерфейс облегчает навигацию и делает поиск нужного товара быстрым и понятным.";
                } else if (i == 5) {
                    document.querySelector('.adv__name').textContent = "Поддержка пользователей";
                    document.querySelector('.adv__text').textContent = "Служба поддержки оперативно помогает решить любые вопросы, что делает пользование платформой комфортным.";
                } else if (i == 6) {
                    document.querySelector('.adv__name').textContent = "Постоянное развитие";
                    document.querySelector('.adv__text').textContent = "Площадка регулярно обновляется, добавляя новые функции и улучшая пользовательский опыт.";
                } else if (i == 7) {
                    document.querySelector('.adv__name').textContent = "Активное сообщество";
                    document.querySelector('.adv__text').textContent = "Пользователи делятся опытом и советами, создавая дружелюбную атмосферу и помогая новичкам освоиться.";
                }

                document.querySelector('.adv__name').style.maxHeight = "100px";
                document.querySelector('.adv__text').style.maxHeight = "600px";
                document.querySelector('.adv__name').style.opacity = "1";
                document.querySelector('.adv__text').style.opacity = "1";

            }, 600)

        })
    })

}

if ( document.querySelector('.com') ) {

    const swiper = new Swiper('.com__slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Адаптивность (респонсив)
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

}

if ( document.querySelector('.shop') ) {

    const swiper = new Swiper('.shop__slider', {
        slidesPerView: 5,
        spaceBetween: 10,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Адаптивность (респонсив)
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            380: {
                slidesPerView: 2,
            },
            560: {
                slidesPerView: 3,
            },
            680: {
                slidesPerView: 4,
            },
            860: {
                slidesPerView: 5,
            },
        },
    });

}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout( () => {
        document.querySelector('.loading').style.top = "-100%";
    }, 1000)
});