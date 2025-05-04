

// Отправка заявки

var element = document.getElementById('phone3');
var maskOptions = {
    mask: '+7 (000) 000-00-00',
    lazy: false
} 
var mask = new IMask(element, maskOptions);

document.querySelector('.order__button').addEventListener('click', event => {

    const input = document.querySelectorAll('.order__input')[0];
    const value = input.value.trim();
    const words = value.split(/\s+/); // разделяет по пробелам
    const isValid = words.length === 3 && words.every(word => word.length >= 2);
    
    if ( !isValid ) {
        document.querySelector('.order__message').textContent = 'Введите Ваше полное ФИО';
        document.querySelector('.order__message').style.opacity = '1';
        document.querySelector('.order__message').style.color = '#ff4a4a';
        document.querySelectorAll('.order__name p')[0].style.color = '#ff4a4a';
        setTimeout( () => {
            document.querySelector('.order__message').style.opacity = '0';
            document.querySelectorAll('.order__name p')[0].style.color = '#fff';
        }, 2000)
    } else if ( document.querySelectorAll('.order__input')[1].value == "" || document.querySelectorAll('.order__input')[1].value.includes('+') == true && document.querySelectorAll('.order__input')[1].value.includes('_') == true ) {
        document.querySelector('.order__message').textContent = 'Введите Ваш номер телефона';
        document.querySelector('.order__message').style.opacity = '1';
        document.querySelector('.order__message').style.color = '#ff4a4a';
        document.querySelectorAll('.order__name p')[1].style.color = '#ff4a4a';
        setTimeout( () => {
            document.querySelector('.order__message').style.opacity = '0';
            document.querySelectorAll('.order__name p')[1].style.color = '#fff';
        }, 2000)
    } else if ( document.querySelectorAll('.order__input')[2].value < 2 ) {
        document.querySelector('.order__message').textContent = 'Введите марку желаемого авто';
        document.querySelector('.order__message').style.opacity = '1';
        document.querySelector('.order__message').style.color = '#ff4a4a';
        document.querySelectorAll('.order__name p')[2].style.color = '#ff4a4a';
        setTimeout( () => {
            document.querySelector('.order__message').style.opacity = '0';
            document.querySelectorAll('.order__name p')[2].style.color = '#fff';
        }, 2000)
    } else {

        let messageTg = `🚘 <b>ЗАЯВКА НА ПОДБОР АВТО</b> 🚘\n`;

        document.querySelectorAll('.order__name-text p').forEach( (item, i) => {
            if ( document.querySelectorAll('.order__input')[i].value != "" ) {
                messageTg = messageTg + `<b>${item.textContent} - </b>${document.querySelectorAll('.order__input')[i].value}\n`;
            }
        })

        if ( optionEngine != "" ) { messageTg = messageTg + `<b>Двигатель - </b>${optionEngine}\n`; }
        if ( optionDate != "" ) { messageTg = messageTg + `<b>Когда планируется покупка - </b>${optionDate}\n`; }

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: messageTg
        });

        document.querySelector('.order__message').textContent = 'Заявка была успешно отправлена ✅';
        document.querySelector('.order__message').style.color = '#00bf10';
        document.querySelector('.order__message').style.opacity = '1';
        setTimeout( () => {
            document.querySelector('.order__message').style.opacity = '0';
        }, 5000)

        document.querySelectorAll('.order__input').forEach( item => {
            item.value = "";
        })

        document.querySelectorAll('.order__option').forEach( item => {
            item.classList.remove('order__option-active');
        })

        optionEngine = "";
        optionDate = "";

    }

})

let optionEngine = "";
let optionDate = "";

document.querySelectorAll('.order__option-engine').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.order__option-engine').forEach( item => {
            item.classList.remove('order__option-active');
        })
        item.classList.add('order__option-active');
        optionEngine = `${document.querySelectorAll('.order__option-engine p')[i].textContent}`;

        console.log(optionEngine);
    })
})

document.querySelectorAll('.order__option-date').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.order__option-date').forEach( item => {
            item.classList.remove('order__option-active');
        })
        item.classList.add('order__option-active');
        optionDate = `${document.querySelectorAll('.order__option-date p')[i].textContent}`;

        console.log(optionDate);
    })
})