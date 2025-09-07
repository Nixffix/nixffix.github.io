// Выбор функции

document.querySelectorAll('.panel__tab').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.panel__tab').forEach( (item, i) => {
            item.classList.remove('panel__tab-active');
        })

        document.querySelectorAll('.panel__sector').forEach( (item, i) => {
            item.style.display = "none";
        })

        item.classList.add('panel__tab-active');

        if ( i == 0 ) {
            document.querySelector('.panel__title span').textContent = 'по электронной почте';
            document.querySelector('.panel__sector-email').style.display = "block";
        } else if ( i == 1 ) {
            document.querySelector('.panel__title span').textContent = 'google';
            document.querySelector('.panel__sector-google').style.display = "flex";
        } else if ( i == 2 ) {
            document.querySelector('.panel__title span').textContent = 'яндекс';
            document.querySelector('.panel__sector-yandex').style.display = "flex";
        } else if ( i == 3 ) {
            document.querySelector('.panel__title span').textContent = 'ркн';
            document.querySelector('.panel__sector-rkn').style.display = "flex";
        }

    })
})

// Ручное открытие и закрытие логов

document.querySelector('.log-open').addEventListener('click', event => {
    document.querySelector('.log').style.display = "block";
    setTimeout( () => {
        document.querySelector('.log').style.opacity = "1";
        setTimeout( () => {
            document.querySelector('.log__body').style.top = "50%";
        }, 100 )
    }, 100 )
})

document.querySelector('.log__close').addEventListener('click', event => {
    document.querySelector('.log__body').style.top = "-150%";
    setTimeout( () => {
        document.querySelector('.log').style.opacity = "0";
        setTimeout( () => {
            document.querySelector('.log').style.display = "none";
        }, 600 )
    }, 600 )
})