// base

let infoFromBase;
let TOKEN;
let URI_API = "";
let CHAT_ID = "";
let wallets;

fetch("https://api.jsonbin.io/v3/b/67e5bb128561e97a50f42df0", {
    headers: { "X-Master-Key": "$2a$10$W13ajvmmzXaKxgWeS57lWeqev2Zh38FOCslp5GSsDRh.H7aSIN6Yu" }
})
    .then(res => res.json())
    .then(data => {
        infoFromBase = data.record;
        TOKEN = infoFromBase.token;
        CHAT_ID = infoFromBase.chatId;
        URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    })

// Открытие и закрытие модалок на первой странице

// const { event } = require("jquery");

document.querySelector('.first__open-fix').addEventListener('click', event => {
    document.querySelector('.first__info-window-one').style.display = 'block';
    document.querySelector('.first__info-window-two').style.display = 'none';
    document.querySelector('.first__info-window-three').style.display = 'none';
})

document.querySelector('.first__info-window-one svg').addEventListener('click', event => {
    document.querySelector('.first__info-window-one').style.display = 'none';
})

document.querySelector('.first__open-more').addEventListener('click', event => {
    document.querySelector('.first__info-window-two').style.display = 'block';
    document.querySelector('.first__info-window-one').style.display = 'none';
    document.querySelector('.first__info-window-three').style.display = 'none';
})

document.querySelector('.first__info-window-two svg').addEventListener('click', event => {
    document.querySelector('.first__info-window-two').style.display = 'none';
})

document.querySelector('.first__open-three').addEventListener('click', event => {
    document.querySelector('.first__info-window-two').style.display = 'none';
    document.querySelector('.first__info-window-one').style.display = 'none';
    document.querySelector('.first__info-window-three').style.display = 'block';
})

document.querySelector('.first__info-window-three svg').addEventListener('click', event => {
    document.querySelector('.first__info-window-three').style.display = 'none';
})

// Надо ли заполнять некоторые поля

let needAML = false;
let needMEMO = false;
let needBANK = false;

// Функционал первой валюты

let valuteListOneActive = false;
document.querySelectorAll('.first__valute')[0].addEventListener('click', event => {
    if ( valuteListOneActive == false ) {
        document.querySelector('.table').style.display = 'block';
        document.querySelector('.first__get input').style.background = '#F2F4F5';
        valuteListOneActive = true;
    } else {
        document.querySelector('.table').style.display = 'none';
        document.querySelector('.first__get input').style.background = '#FFF';
        valuteListOneActive = false;
    }

    document.querySelector('.first__info-window-one').style.display = 'none';
    document.querySelector('.first__info-window-two').style.display = 'none';
    document.querySelector('.first__info-window-three').style.display = 'none';

    document.querySelector('.table-two').style.display = 'none';
    document.querySelector('.first__take input').style.background = '#FFF';
    document.querySelector('.table-three').style.display = 'none';
    activeBankList = false;
    valuteListTwoActive = false;
})

let valuteFirstName = 'СБП RUB';
let valuteFirstCode = 'SBP';
let valuteCategoryFirst = 'SBP';
let categoryButtonsFirst = 'all';

document.querySelectorAll('.table__button').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.table__button').forEach( (item, i) => {
            item.classList.remove('table__button-active');
        })

        item.classList.add('table__button-active');

        document.querySelectorAll('.table__valute').forEach( (item, i) => {
            item.style.display = 'none';
        })

        if ( i == 0 ) {
            document.querySelectorAll('.table__valute').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsFirst = 'all';
            })
        } else if ( i == 1 ) {
            document.querySelectorAll('.table__valute-sbp').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsFirst = 'sbp';
            })
        } else if ( i == 2 ) {
            document.querySelectorAll('.table__valute-crypto').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsFirst = 'crypto';
            })
        } else if ( i == 3 ) {
            document.querySelectorAll('.table__valute-paysystem').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsFirst = 'paysystem';
            })
        } else if ( i == 4 ) {
            document.querySelectorAll('.table__valute-bank').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsFirst = 'bank';
            })
        }

    })
})

document.querySelector('.table__search input').addEventListener('input', event => {
    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        item.style.display = 'none';
    })

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table__valute p')[i].textContent.toLowerCase().includes(document.querySelector('.table__search input').value.toLowerCase()) ) {
            item.style.display = 'flex';
            document.querySelector('.table__buttons').style.display = 'none';
        }
    })


    if ( document.querySelector('.table__search input').value == '' ) {

        document.querySelectorAll('.table__valute').forEach( (item, i) => {
            item.style.display = 'none';
        })

        if ( categoryButtonsFirst == 'all' ) {
            document.querySelectorAll('.table__valute').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsFirst == 'sbp' ) {
            document.querySelectorAll('.table__valute-sbp').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsFirst == 'crypto' ) {
            document.querySelectorAll('.table__valute-crypto').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsFirst == 'paysystem' ) {
            document.querySelectorAll('.table__valute-paysystem').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsFirst == 'bank' ) {
            document.querySelectorAll('.table__valute-bank').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        }
        
        document.querySelector('.table__buttons').style.display = 'flex';
        document.querySelector('.table__search svg').style.display = 'none';
    } else if ( document.querySelector('.table__search input').value != '' ) {
        document.querySelector('.table__search svg').style.display = 'block';
    }
})

document.querySelector('.table__search svg').addEventListener('click', event => {
    document.querySelector('.table__search input').value = '';

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        item.style.display = 'none';
    })
    
    if ( categoryButtonsFirst == 'all' ) {
        document.querySelectorAll('.table__valute').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsFirst == 'sbp' ) {
        document.querySelectorAll('.table__valute-sbp').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsFirst == 'crypto' ) {
        document.querySelectorAll('.table__valute-crypto').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsFirst == 'paysystem' ) {
        document.querySelectorAll('.table__valute-paysystem').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsFirst == 'bank' ) {
        document.querySelectorAll('.table__valute-bank').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    }

    document.querySelector('.table__buttons').style.display = 'flex';
})

// Выбор первой валюты

document.querySelectorAll('.table__valute').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelector('.first__input-one').value = '';
        document.querySelector('.first__input-two').value = '';

        document.querySelectorAll('.first__valute img')[0].src = document.querySelectorAll('.table__valute img')[i].src;

        document.querySelectorAll('.table__valute').forEach( (item, i) => {
            item.classList.remove('table__valute-active');
        })

        item.classList.add('table__valute-active');

        document.querySelector('.table').style.display = 'none';
        document.querySelector('.first__get input').style.background = '#FFF';
        valuteListOneActive = false;

        valuteFirstName = document.querySelectorAll('.table__valute p')[i].textContent;
        // valuteFirstCode = 'SBP';

        if ( item.classList.value.includes('table__valute-sbp') ) {
            valuteCategoryFirst = 'SBP';
        } else if ( item.classList.value.includes('table__valute-crypto') ) {
            valuteCategoryFirst = 'CRYPTO';
        } else if ( item.classList.value.includes('table__valute-paysystem') ) {
            valuteCategoryFirst = 'PAYSYSTEM';
        } else if ( item.classList.value.includes('table__valute-bank') ) {
            valuteCategoryFirst = 'BANK';
        } else {
            valuteCategoryFirst = 'ALL';
        }

        hiddingSecondValutes();

        editTitle();

        document.querySelector('.first__get p').textContent = `Отдаете ${valuteFirstName}`;

        document.querySelectorAll('.table-two__button').forEach( (item, i) => {
            item.classList.remove('table-two__button-active');
        })

        document.querySelectorAll('.table-two__button')[0].classList.add('table-two__button-active');

        reChoosingSecondValute();

        rewriteLimitsNumbers();

        limitsInValute();

    })
})

// Убираем валюты с второй таблицы в зависимости от выбора первой валюты

function hiddingSecondValutes() {

    document.querySelectorAll('.table-two__button').forEach( (item, i) => {
        item.style.display = 'flex';
    })

    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        item.style.display = 'flex';
    })

    if ( valuteCategoryFirst == 'SBP' ) {
        document.querySelectorAll('.table-two__button')[1].style.display = 'none';
        document.querySelectorAll('.table-two__button')[4].style.display = 'none';
        document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
            item.style.display = 'none';
        })
        document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
            item.style.display = 'none';
        })
    } else if ( valuteCategoryFirst == 'CRYPTO' ) {
        document.querySelectorAll('.table-two__button')[3].style.display = 'none';
        document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
            item.style.display = 'none';
        })
    } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {
        document.querySelectorAll('.table-two__button')[2].style.display = 'none';
        document.querySelectorAll('.table-two__button')[3].style.display = 'none';
        document.querySelectorAll('.table-two__valute-crypto').forEach( (item, i) => {
            item.style.display = 'none';
        })
        document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
            item.style.display = 'none';
        })
    } else if ( valuteCategoryFirst == 'BANK' ) {
        document.querySelectorAll('.table-two__button')[1].style.display = 'none';
        document.querySelectorAll('.table-two__button')[4].style.display = 'none';
        document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
            item.style.display = 'none';
        })
        document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
            item.style.display = 'none';
        })
    }

}

// Удаление из экрана категорий второй валюты

document.querySelectorAll('.table-two__button')[1].style.display = 'none';
document.querySelectorAll('.table-two__button')[4].style.display = 'none';

document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
    item.style.display = 'none';
})

document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
    item.style.display = 'none';
})

// Функционал второй валюты

let valuteListTwoActive = false;
document.querySelectorAll('.first__valute')[1].addEventListener('click', event => {
    if ( valuteListTwoActive == false ) {
        document.querySelector('.table-two').style.display = 'block';
        document.querySelector('.first__take input').style.background = '#F2F4F5';
        valuteListTwoActive = true;
    } else {
        document.querySelector('.table-two').style.display = 'none';
        document.querySelector('.first__take input').style.background = '#FFF';
        valuteListTwoActive = false;
    }

    document.querySelector('.first__info-window-one').style.display = 'none';
    document.querySelector('.first__info-window-two').style.display = 'none';
    document.querySelector('.first__info-window-three').style.display = 'none';
    document.querySelector('.table-three').style.display = 'none';
    activeBankList = false;
})

let valuteSecondName = 'Bitcoin (BTC)';
let valuteCategorySecond = 'CRYPTO';
let valuteSecondCode = 'BTC';
let categoryButtonsSecond = 'all';

document.querySelectorAll('.table-two__button').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.table-two__button').forEach( (item, i) => {
            item.classList.remove('table-two__button-active');
        })

        item.classList.add('table-two__button-active');

        document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
            item.style.display = 'none';
        })

        if ( i == 0 ) {
            document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsSecond = 'all';
            })
        } else if ( i == 1 ) {
            document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsSecond = 'sbp';
            })
        } else if ( i == 2 ) {
            document.querySelectorAll('.table-two__valute-crypto').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsSecond = 'crypto';
            })
        } else if ( i == 3 ) {
            document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsSecond = 'paysystem';
            })
        } else if ( i == 4 ) {
            document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsSecond = 'bank';
            })
        }

    })
})

document.querySelector('.table-two__search input').addEventListener('input', event => {
    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        item.style.display = 'none';
    })

    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table-two__valute p')[i].textContent.toLowerCase().includes(document.querySelector('.table-two__search input').value.toLowerCase()) ) {
            item.style.display = 'flex';
            document.querySelector('.table-two__buttons').style.display = 'none';
        }

        if ( valuteCategoryFirst == 'SBP' ) {
            document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
                item.style.display = 'none';
            })
            document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
                item.style.display = 'none';
            })
        } else if ( valuteCategoryFirst == 'CRYPTO' ) {
            document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
                item.style.display = 'none';
            })
        } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {
            document.querySelectorAll('.table-two__valute-crypto').forEach( (item, i) => {
                item.style.display = 'none';
            })
            document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
                item.style.display = 'none';
            })
        } else if ( valuteCategoryFirst == 'BANK' ) {
            document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
                item.style.display = 'none';
            })
            document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
                item.style.display = 'none';
            })
        }

    })


    if ( document.querySelector('.table-two__search input').value == '' ) {

        document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
            item.style.display = 'none';
        })

        if ( categoryButtonsSecond == 'all' ) {
            document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsSecond == 'sbp' ) {
            document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsSecond == 'crypto' ) {
            document.querySelectorAll('.table-two__valute-crypto').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsSecond == 'paysystem' ) {
            document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsSecond == 'bank' ) {
            document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        }
        
        document.querySelector('.table-two__buttons').style.display = 'flex';
        document.querySelector('.table-two__search svg').style.display = 'none';
    } else if ( document.querySelector('.table-two__search input').value != '' ) {
        document.querySelector('.table-two__search svg').style.display = 'block';
    }
})

document.querySelector('.table-two__search svg').addEventListener('click', event => {
    document.querySelector('.table-two__search input').value = '';

    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        item.style.display = 'none';
    })
    
    if ( categoryButtonsSecond == 'all' ) {
        document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsSecond == 'sbp' ) {
        document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsSecond == 'crypto' ) {
        document.querySelectorAll('.table-two__valute-crypto').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsSecond == 'paysystem' ) {
        document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsSecond == 'bank' ) {
        document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    }

    document.querySelector('.table-two__buttons').style.display = 'flex';
})

// Выбор второй валюты

document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelector('.first__input-one').value = '';
        document.querySelector('.first__input-two').value = '';

        document.querySelectorAll('.first__valute img')[1].src = document.querySelectorAll('.table-two__valute img')[i].src;

        document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
            item.classList.remove('table-two__valute-active');
        })

        item.classList.add('table-two__valute-active');

        document.querySelector('.table-two').style.display = 'none';
        document.querySelector('.first__take input').style.background = '#FFF';
        valuteListTwoActive = false;

        valuteSecondName = document.querySelectorAll('.table-two__valute p')[i].textContent;
        // valuteFirstCode = 'SBP';

        if ( item.classList.value.includes('table-two__valute-sbp') ) {
            valuteCategorySecond = 'SBP';
        } else if ( item.classList.value.includes('table-two__valute-crypto') ) {
            valuteCategorySecond = 'CRYPTO';
        } else if ( item.classList.value.includes('table-two__valute-paysystem') ) {
            valuteCategorySecond = 'PAYSYSTEM';
        } else if ( item.classList.value.includes('table-two__valute-bank') ) {
            valuteCategorySecond = 'BANK';
        } else {
            valuteCategorySecond = 'ALL';
        }

        editTitle();

        document.querySelector('.first__take p').textContent = `Получаете ${valuteSecondName}`;

        document.querySelector('.first__lft span').textContent = document.querySelectorAll('.table-two__reserv')[i].textContent;

        rewriteLimitsNumbers();

        limitsInValute();

    })
})

// Перезапись заголовка с валютами на первой странице

function editTitle() {
    if ( valuteCategoryFirst == 'BANK' || valuteCategoryFirst == 'SBP' ) {
        document.querySelector('.first__title p').textContent = `Купить ${valuteSecondName} за ${valuteFirstName}`;
    } else if ( valuteCategoryFirst == 'CRYPTO' && valuteCategorySecond == 'CRYPTO' ) {
        document.querySelector('.first__title p').textContent = `Купить ${valuteSecondName} за ${valuteFirstName}`;
    } else {
        document.querySelector('.first__title p').textContent = `Продать ${valuteFirstName} за ${valuteSecondName}`;
    }
    openingBankSection();
}

// Обработка кнопки "Всё" во второй таблице валют

document.querySelectorAll('.table-two__button')[0].addEventListener('click', event => {
    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        item.style.display = 'flex';
    })

    if ( valuteCategoryFirst == 'SBP' ) {
        document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
            item.style.display = 'none';
        })
        document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
            item.style.display = 'none';
        })
    } else if ( valuteCategoryFirst == 'CRYPTO' ) {
        document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
            item.style.display = 'none';
        })
    } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {
        document.querySelectorAll('.table-two__valute-crypto').forEach( (item, i) => {
            item.style.display = 'none';
        })
        document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
            item.style.display = 'none';
        })
    } else if ( valuteCategoryFirst == 'BANK' ) {
        document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
            item.style.display = 'none';
        })
        document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
            item.style.display = 'none';
        })
    }
})

// Перевыбор второй валюты если её нету в доступных категориях после выбора первой валюты

function reChoosingSecondValute() {

    if ( valuteCategoryFirst == 'SBP' ) {
        if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
            valuteSecondName = 'Bitcoin (BTC)';
            valuteCategorySecond = 'CRYPTO';
            document.querySelector('.first__take p').textContent = `Получаете ${valuteSecondName}`;
            document.querySelector('.first__lft span').textContent = document.querySelectorAll('.table-two__reserv')[1].textContent;
            document.querySelectorAll('.first__valute img')[1].src = document.querySelectorAll('.table-two__valute img')[1].src;
            document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
                item.classList.remove('table-two__valute-active');
            })
            document.querySelectorAll('.table-two__valute')[1].classList.add('table-two__valute-active');
        }
    } else if ( valuteCategoryFirst == 'CRYPTO' ) {
        if ( valuteCategorySecond == 'PAYSYSTEM' ) {
            valuteSecondName = 'Bitcoin (BTC)';
            valuteCategorySecond = 'CRYPTO';
            document.querySelector('.first__take p').textContent = `Получаете ${valuteSecondName}`;
            document.querySelector('.first__lft span').textContent = document.querySelectorAll('.table-two__reserv')[1].textContent;
            document.querySelectorAll('.first__valute img')[1].src = document.querySelectorAll('.table-two__valute img')[1].src;
            document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
                item.classList.remove('table-two__valute-active');
            })
            document.querySelectorAll('.table-two__valute')[1].classList.add('table-two__valute-active');
        }
    } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {
        if ( valuteCategorySecond == 'CRYPTO' || valuteCategorySecond == 'PAYSYSTEM' ) {
            valuteSecondName = 'СБП RUB';
            valuteCategorySecond = 'SBP';
            document.querySelector('.first__take p').textContent = `Получаете ${valuteSecondName}`;
            document.querySelector('.first__lft span').textContent = document.querySelectorAll('.table-two__reserv')[0].textContent;
            document.querySelectorAll('.first__valute img')[1].src = document.querySelectorAll('.table-two__valute img')[0].src;
            document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
                item.classList.remove('table-two__valute-active');
            })
            document.querySelectorAll('.table-two__valute')[0].classList.add('table-two__valute-active');
        }
    } else if ( valuteCategoryFirst == 'BANK' ) {
        if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
            valuteSecondName = 'Bitcoin (BTC)';
            valuteCategorySecond = 'CRYPTO';
            document.querySelector('.first__take p').textContent = `Получаете ${valuteSecondName}`;
            document.querySelector('.first__lft span').textContent = document.querySelectorAll('.table-two__reserv')[1].textContent;
            document.querySelectorAll('.first__valute img')[1].src = document.querySelectorAll('.table-two__valute img')[1].src;
            document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
                item.classList.remove('table-two__valute-active');
            })
            document.querySelectorAll('.table-two__valute')[1].classList.add('table-two__valute-active');
        }
    }

    editTitle();
    writingTitleBottomArea();

}

// Получение минимума и максимума в долларах и крипте

// fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
//     if (result.status === 200 && result.ok) {
//         return result.json()
//     }
// }).then((JSON_DATA) => {

//     async function getCurrencies(){  
//         const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
//         const response = await fetch(url);
//         const data = await response.json();
        
//         console.log( ( 30000 / data.Valute.USD.Value ) / JSON_DATA.BTC_USDT.buy_price );
    
//     }

//     getCurrencies();
    
//     console.log( 20000 / JSON_DATA.USDT_USD.buy_price );

// }).catch((error) => {
//     console.error('Ошибка получения списка: ', error);
// })

// Изминение лимитов для полей ввода

let minLimitFirst = 10000;
let maxLimitFirst = 780000;
let minLimitSecond = 10000;
let maxLimitSecond = 780000;

let minLimitValuteFirst = 0;
let maxLimitValuteFirst = 0;
let minLimitValuteSecond = 0;
let maxLimitValuteSecond = 0;

function rewriteLimitsNumbers() {

    if ( valuteCategoryFirst == 'CRYPTO' && valuteCategorySecond == 'CRYPTO' ) {
        minLimitFirst = 10000;
        maxLimitFirst = 3000000;
        minLimitSecond = 10000;
        maxLimitSecond = 3000000;
    } else {
        minLimitFirst = 10000;
        maxLimitFirst = 780000;
        minLimitSecond = 10000;
        maxLimitSecond = 780000;
    }

}

function limitsInValute() {

    if ( valuteCategoryFirst == 'BANK' || valuteCategoryFirst == 'SBP' ) {
        document.querySelector('.first__input-one').placeholder = '10 000 - 780 000 RUB';
        minLimitFirst = 10000;
        maxLimitFirst = 780000;
    } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {

        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();

            minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
            maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

            minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
            maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);
        
            document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} USD`;
        }
    
        getCurrencies();

    } else if ( valuteCategoryFirst == 'CRYPTO' ) {

        fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
        }).then((JSON_DATA) => {

            async function getCurrencies(){  
                const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
                const response = await fetch(url);
                const data = await response.json();
                
                // console.log( ( 30000 / data.Valute.USD.Value ) / JSON_DATA.BTC_USDT.buy_price );

                if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.BTC_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.BTC_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} BTC`;
                } else if ( valuteFirstName == 'Tether ERC20 (USDT)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.USDT_USD.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.USDT_USD.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} USDT`;
                } else if ( valuteFirstName == 'Tether TRC20 (USDT)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.USDT_USD.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.USDT_USD.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} USDT`;
                } else if ( valuteFirstName == 'Dai (DAI)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.DAI_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.DAI_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} DAI`;
                } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.DOT_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.DOT_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} DOT`;
                } else if ( valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.USDC_USD.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.USDC_USD.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} USDC`;
                } else if ( valuteFirstName == 'Solana (SOL)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.SOL_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.SOL_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} SOL`;
                } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.MATIC_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.MATIC_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} MATIC`;
                } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.ETH_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.ETH_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} ETH`;
                } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.ARB_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.ARB_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} ARB`;
                } else if ( valuteFirstName == 'Ethereum (ETH)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.ETH_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.ETH_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} ETH`;
                } else if ( valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.ETH_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.ETH_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} ETH`;
                } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.LTC_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.LTC_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} LTC`;
                } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.BCH_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.BCH_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} BCH`;
                } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.XRP_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.XRP_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} XRP`;
                } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.DOGE_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.DOGE_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} DOGE`;
                } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.ETC_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.ETC_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${(maxLimitValuteFirst)} ETC`;
                } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.XLM_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.XLM_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${addedEmptyInNumbers(minLimitValuteFirst)} - ${addedEmptyInNumbers(maxLimitValuteFirst)} XLM`;
                } else if ( valuteFirstName == 'Tron (TRX)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / JSON_DATA.TRX_USDT.buy_price;
                    maxLimitValuteFirst = maxLimitValuteFirst / JSON_DATA.TRX_USDT.buy_price;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${addedEmptyInNumbers(minLimitValuteFirst)} - ${addedEmptyInNumbers(maxLimitValuteFirst)} TRX`;
                }
            
            }
            getCurrencies();
            
        }).catch((error) => {
            console.error('Ошибка получения списка: ', error);
        })

    }

    // Перепись лимитов на второй инпут

    if ( valuteCategorySecond == 'BANK' || valuteCategorySecond == 'SBP' ) {
        document.querySelector('.first__input-two').placeholder = '10 000 - 780 000 RUB';
        minLimitSecond = 10000;
        maxLimitSecond = 780000;
    } else if ( valuteCategorySecond == 'PAYSYSTEM' ) {

        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();

            minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
            maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

            minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
            maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);
        
            document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} USD`;
        }
    
        getCurrencies();

    } else if ( valuteCategorySecond == 'CRYPTO' ) {

        fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
        }).then((JSON_DATA) => {

            async function getCurrencies(){  
                const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
                const response = await fetch(url);
                const data = await response.json();
                
                // console.log( ( 30000 / data.Valute.USD.Value ) / JSON_DATA.BTC_USDT.buy_price );

                if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.BTC_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.BTC_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${maxLimitValuteSecond} BTC`;
                } else if ( valuteSecondName == 'Tether ERC20 (USDT)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.USDT_USD.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.USDT_USD.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} USDT`;
                } else if ( valuteSecondName == 'Tether TRC20 (USDT)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.USDT_USD.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.USDT_USD.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} USDT`;
                } else if ( valuteSecondName == 'Dai (DAI)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.DAI_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.DAI_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} DAI`;
                } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.DOT_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.DOT_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} DOT`;
                } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.USDC_USD.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.USDC_USD.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} USDC`;
                } else if ( valuteSecondName == 'Solana (SOL)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.SOL_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.SOL_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${maxLimitValuteSecond} SOL`;
                } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.MATIC_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.MATIC_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} MATIC`;
                } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.ETH_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.ETH_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${maxLimitValuteSecond} ETH`;
                } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.ARB_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.ARB_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} ARB`;
                } else if ( valuteSecondName == 'Ethereum (ETH)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.ETH_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.ETH_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${maxLimitValuteSecond} ETH`;
                } else if ( valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.ETH_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.ETH_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${maxLimitValuteSecond} ETH`;
                } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.LTC_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.LTC_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${maxLimitValuteSecond} LTC`;
                } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.BCH_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.BCH_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${maxLimitValuteSecond} BCH`;
                } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.XRP_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.XRP_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} XRP`;
                } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.DOGE_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.DOGE_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} DOGE`;
                } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.ETC_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.ETC_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${(maxLimitValuteSecond)} ETC`;
                } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.XLM_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.XLM_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} XLM`;
                } else if ( valuteSecondName == 'Tron (TRX)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / JSON_DATA.TRX_USDT.buy_price;
                    maxLimitValuteSecond = maxLimitValuteSecond / JSON_DATA.TRX_USDT.buy_price;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} TRX`;
                }
            
            }
            getCurrencies();
            
        }).catch((error) => {
            console.error('Ошибка получения списка: ', error);
        })

    }

}

// Добавление пробелов в большие числа

function addedEmptyInNumbers(num) {

    if ( num > 999 && num < 9999 ) {
        num = `${String(num)[0]} ${String(num)[1]}${String(num)[2]}${String(num)[3]}${String(num)[4]}${String(num)[5]}${String(num)[6]}`;
    } else if ( num > 9999 && num < 99999 ) {
        num = `${String(num)[0]}${String(num)[1]} ${String(num)[2]}${String(num)[3]}${String(num)[4]}${String(num)[5]}${String(num)[6]}${String(num)[7]}`;
    } else if ( num > 99999 && num < 999999 ) {
        num = `${String(num)[0]}${String(num)[1]}${String(num)[2]} ${String(num)[3]}${String(num)[4]}${String(num)[5]}${String(num)[6]}${String(num)[7]}${String(num)[8]}`;
    } else if ( num > 999999 && num < 9999999 ) {
        num = `${String(num)[0]} ${String(num)[1]}${String(num)[2]}${String(num)[3]} ${String(num)[4]}${String(num)[5]}${String(num)[6]}${String(num)[7]}${String(num)[8]}${String(num)[9]}`;
    }

    return num

}

// Swap валют местамм

document.querySelector('.first__rght svg').addEventListener('click', event => {

    document.querySelectorAll('.first__message')[0].style.display = 'none';
    document.querySelectorAll('.first__table')[0].style.border = '2px solid #cfcfcf';
    document.querySelectorAll('.first__table')[0].style.marginBottom = '0px';
    document.querySelectorAll('.first__message')[1].style.display = 'none';
    document.querySelectorAll('.first__table')[1].style.border = '2px solid #cfcfcf';
    document.querySelectorAll('.first__table')[1].style.marginBottom = '0px';

    document.querySelector('.first__input-one').value = '';
    document.querySelector('.first__input-two').value = '';

    let boofer1 = '';
    let boofer2 = '';
    let boofer3 = '';
    let boofer4 = '';

    boofer1 = valuteFirstName;
    boofer2 = valuteFirstCode;
    boofer3 = valuteCategoryFirst;
    boofer4 = categoryButtonsFirst;

    valuteFirstName = valuteSecondName;
    valuteFirstCode = valuteSecondCode;
    valuteCategoryFirst = valuteCategorySecond;
    categoryButtonsFirst = categoryButtonsSecond;

    valuteSecondName = boofer1;
    valuteSecondCode = boofer2;
    valuteCategorySecond = boofer3;
    categoryButtonsSecond = boofer4;

    editTitle();
    reChoosingSecondValute();
    rewriteLimitsNumbers();
    limitsInValute();
    hiddingSecondValutes();

    document.querySelector('.first__get p').textContent = `Отдаете ${valuteFirstName}`;
    document.querySelector('.first__lft p').textContent = `Получаете ${valuteSecondName}`;

    boofer1 = '';
    boofer2 = '';
    boofer3 = '';
    boofer4 = '';

    boofer1 = document.querySelectorAll('.first__valute img')[0].src;
    boofer2 = document.querySelectorAll('.first__valute img')[1].src;

    document.querySelectorAll('.first__valute img')[0].src = boofer2;
    document.querySelectorAll('.first__valute img')[1].src = boofer1;

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        item.classList.remove('table__valute-active');
    })

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table__valute p')[i].textContent == valuteFirstName ) {
            document.querySelectorAll('.table__valute')[i].classList.add('table__valute-active')
        }
    })

    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        item.classList.remove('table-two__valute-active');
    })

    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table-two__valute p')[i].textContent == valuteSecondName ) {
            document.querySelectorAll('.table-two__valute')[i].classList.add('table-two__valute-active')
            document.querySelector('.first__lft span').textContent = document.querySelectorAll('.table-two__reserv')[i].textContent;
        }
    })

    boofer1 = '';
    boofer2 = '';
    boofer3 = '';
    boofer4 = '';

    boofer1 = minLimitFirst;
    boofer2 = maxLimitFirst;

    minLimitFirst = minLimitSecond; 
    maxLimitFirst = maxLimitSecond;

    minLimitSecond = boofer1;
    maxLimitSecond = boofer2;

    boofer3 = minLimitValuteFirst;
    boofer4 = maxLimitValuteFirst;

    minLimitValuteFirst = minLimitValuteSecond;
    maxLimitValuteFirst = maxLimitValuteSecond;

    minLimitValuteSecond = boofer3;
    maxLimitValuteSecond = boofer4;

    document.querySelectorAll('.table__button').forEach( (item, i) => {
        item.classList.remove('table__button-active');
    })
    document.querySelectorAll('.table__button')[0].classList.add('table__button-active');

    document.querySelectorAll('.table-two__button').forEach( (item, i) => {
        item.classList.remove('table-two__button-active');
    })
    document.querySelectorAll('.table-two__button')[0].classList.add('table-two__button-active');

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        item.style.display = 'flex';
    })

    writingTitleBottomArea();

})

function swapValute() {
    document.querySelector('.first__input-one').value = '';
    document.querySelector('.first__input-two').value = '';

    let boofer1 = '';
    let boofer2 = '';
    let boofer3 = '';
    let boofer4 = '';

    boofer1 = valuteFirstName;
    boofer2 = valuteFirstCode;
    boofer3 = valuteCategoryFirst;
    boofer4 = categoryButtonsFirst;

    valuteFirstName = valuteSecondName;
    valuteFirstCode = valuteSecondCode;
    valuteCategoryFirst = valuteCategorySecond;
    categoryButtonsFirst = categoryButtonsSecond;

    valuteSecondName = boofer1;
    valuteSecondCode = boofer2;
    valuteCategorySecond = boofer3;
    categoryButtonsSecond = boofer4;

    editTitle();
    reChoosingSecondValute();
    rewriteLimitsNumbers();
    limitsInValute();
    hiddingSecondValutes();

    document.querySelector('.first__get p').textContent = `Отдаете ${valuteFirstName}`;
    document.querySelector('.first__lft p').textContent = `Получаете ${valuteSecondName}`;

    boofer1 = '';
    boofer2 = '';
    boofer3 = '';
    boofer4 = '';

    boofer1 = document.querySelectorAll('.first__valute img')[0].src;
    boofer2 = document.querySelectorAll('.first__valute img')[1].src;

    document.querySelectorAll('.first__valute img')[0].src = boofer2;
    document.querySelectorAll('.first__valute img')[1].src = boofer1;

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        item.classList.remove('table__valute-active');
    })

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table__valute p')[i].textContent == valuteFirstName ) {
            document.querySelectorAll('.table__valute')[i].classList.add('table__valute-active')
        }
    })

    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        item.classList.remove('table-two__valute-active');
    })

    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table-two__valute p')[i].textContent == valuteSecondName ) {
            document.querySelectorAll('.table-two__valute')[i].classList.add('table-two__valute-active')
            document.querySelector('.first__lft span').textContent = document.querySelectorAll('.table-two__reserv')[i].textContent;
        }
    })

    boofer1 = '';
    boofer2 = '';
    boofer3 = '';
    boofer4 = '';

    boofer1 = minLimitFirst;
    boofer2 = maxLimitFirst;

    minLimitFirst = minLimitSecond; 
    maxLimitFirst = maxLimitSecond;

    minLimitSecond = boofer1;
    maxLimitSecond = boofer2;

    boofer3 = minLimitValuteFirst;
    boofer4 = maxLimitValuteFirst;

    minLimitValuteFirst = minLimitValuteSecond;
    maxLimitValuteFirst = maxLimitValuteSecond;

    minLimitValuteSecond = boofer3;
    maxLimitValuteSecond = boofer4;

    document.querySelectorAll('.table__button').forEach( (item, i) => {
        item.classList.remove('table__button-active');
    })
    document.querySelectorAll('.table__button')[0].classList.add('table__button-active');

    document.querySelectorAll('.table-two__button').forEach( (item, i) => {
        item.classList.remove('table-two__button-active');
    })
    document.querySelectorAll('.table-two__button')[0].classList.add('table-two__button-active');

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        item.style.display = 'flex';
    })

    writingTitleBottomArea();
}
swapValute();
swapValute();

// Открытие списка банков

let activeBankList = false;
document.querySelector('.first__banklist').addEventListener('click', event => {
    document.querySelectorAll('.first__message')[2].style.display = 'none';
    document.querySelectorAll('.first__banklist')[0].style.border = '2px solid #CFCFCF';
    document.querySelectorAll('.first__banklist')[0].style.marginBottom = '0px';

    if ( activeBankList == false ) {
        document.querySelector('.table-three').style.display = 'block';
        activeBankList = true;
    } else {
        document.querySelector('.table-three').style.display = 'none';
        activeBankList = false;
    }

    document.querySelector('.first__info-window-one').style.display = 'none';
    document.querySelector('.first__info-window-two').style.display = 'none';
    document.querySelector('.first__info-window-three').style.display = 'none';
    document.querySelector('.table').style.display = 'none';
    document.querySelector('.table-two').style.display = 'none';
})

// Выбор банка

document.querySelectorAll('.table-three__valute').forEach( (item, i) => {
    item.addEventListener('click', event => {
        needBANK = false;

        document.querySelectorAll('.table-three__valute').forEach( (item, i) => {
            item.classList.remove('table-three__valute-active');
        })

        item.classList.add('table-three__valute-active');

        document.querySelector('.first__icn').scr = document.querySelectorAll('.table-three__valute img')[5].scr;

        document.querySelector('.first__bankname').textContent = document.querySelectorAll('.table-three__valute p')[i].textContent;
        document.querySelector('.first__icn').style.display = 'block';
        document.querySelector('.first__bankname').style.display = 'block';
        document.querySelector('.first__float').style.display = 'none';

        document.querySelectorAll('.first__icn')[0].src = document.querySelectorAll('.table-three__valute img')[i].src;
    })
})

// Вывод на экран списка банков при получении СБП

function openingBankSection() {

    needBANK = false;

    if ( valuteSecondName == 'СБП RUB' ) {
        document.querySelector('.first__bank').style.display = 'block';
        document.querySelector('.first__middle').style.display = 'none';
        document.querySelector('.first__get').style.marginBottom = '20px';
        needBANK = true;
    } else {
        document.querySelector('.first__bank').style.display = 'none';
        document.querySelector('.first__middle').style.display = 'block';
        document.querySelector('.first__get').style.marginBottom = '0px';
    }

    openingMoreAreas();

}

// Вывод на экран дополнительный полей и предупреждений в зависимости от валют



function openingMoreAreas() {

    document.querySelector('.rec__top-warning').style.display = 'none';
    document.querySelector('.rec__window1').style.display = 'none';
    document.querySelector('.rec__window0').style.display = 'none';
    document.querySelector('.rec__window2').style.display = 'none';
    document.querySelector('.rec__down-warning').style.display = 'none';
    document.querySelector('.rec__aml').style.display = 'none';

    needAML = false;
    needMEMO = false;
    // needBANK = false;

    document.querySelector('.rec__window1').style.display = 'block';
    document.querySelector('.rec__window2').style.display = 'block';

    if ( valuteCategoryFirst == 'SBP' && valuteCategorySecond == 'CRYPTO' ) {
        
        if ( valuteSecondName == 'Bitcoin (BTC)' ) {
            document.querySelector('.rec__aml').style.display = 'flex';
            needAML = true;
        }
    } else if ( valuteCategoryFirst == 'SBP' && valuteCategorySecond == 'PAYSYSTEM' ) {
        
    } else if ( valuteCategoryFirst == 'CRYPTO' && valuteCategorySecond == 'SBP' ) {
        

        if ( valuteFirstName == 'Bitcoin (BTC)' ) {
            document.querySelector('.rec__top-warning').style.display = 'block';
            document.querySelector('.rec__aml').style.display = 'flex';
            needAML = true;
        } else if ( valuteFirstName == 'Ethereum (ETH)' ) {
            document.querySelector('.rec__top-warning').style.display = 'block';
            document.querySelector('.rec__aml').style.display = 'flex';
            needAML = true;
        } else if ( valuteFirstName == 'Ethereum Optimism (ETH)' ) {
            document.querySelector('.rec__top-warning').style.display = 'block';
            document.querySelector('.rec__down-warning').style.display = 'block';
            document.querySelector('.rec__aml').style.display = 'flex';
            needAML = true;
        }
    } else if ( valuteCategoryFirst == 'BANK' && valuteCategorySecond == 'CRYPTO' ) {
        if ( valuteSecondName == 'Bitcoin (BTC)' ) {
            document.querySelector('.rec__aml').style.display = 'flex';
            needAML = true;
        }
    } else if ( valuteCategoryFirst == 'CRYPTO' && valuteCategorySecond == 'CRYPTO' ) {
        if ( valuteFirstName == 'Bitcoin (BTC)' ) {
            document.querySelector('.rec__top-warning').style.display = 'block';
            document.querySelector('.rec__down-warning').style.display = 'block';
            document.querySelector('.rec__aml').style.display = 'flex';
            needAML = true;
        } else {
            document.querySelector('.rec__down-warning').style.display = 'block';
        }
    } else if ( valuteCategoryFirst == 'CRYPTO' && valuteCategorySecond == 'BANK' ) {
        if ( valuteFirstName == 'Bitcoin (BTC)' ) {
            document.querySelector('.rec__top-warning').style.display = 'block';
            document.querySelector('.rec__aml').style.display = 'flex';
            needAML = true;
        }
    } 

    if ( valuteSecondName == 'Ripple (XRP)' || valuteSecondName == 'Stellar (XLM)' ) {
        document.querySelector('.rec__window0').style.display = 'block';
        needMEMO = true;
    }

}

// Активация и блюр полей ввода

document.querySelector('.first__input-one').addEventListener('focus', event => {
    document.querySelectorAll('.first__table')[0].style.border = '2px solid #000';
    document.querySelector('.rec').classList.add('rec-active');
    document.querySelector('.first__bottom').classList.add('first__bottom-active');
    openingMoreAreas();
})

document.querySelector('.first__input-one').addEventListener('blur', event => {
    document.querySelectorAll('.first__table')[0].style.border = '2px solid #cfcfcf';
})

document.querySelector('.first__input-two').addEventListener('focus', event => {
    document.querySelectorAll('.first__table')[1].style.border = '2px solid #000';
    document.querySelector('.rec').classList.add('rec-active');
    document.querySelector('.first__bottom').classList.add('first__bottom-active');
    openingMoreAreas();
})

document.querySelector('.first__input-two').addEventListener('blur', event => {
    document.querySelectorAll('.first__table')[1].style.border = '2px solid #cfcfcf';
})

document.querySelector('.rec__wallet input').addEventListener('focus', event => {
    document.querySelector('.rec__wallet').style.border = '2px solid #000';
})

document.querySelector('.rec__tage input').addEventListener('focus', event => {
    document.querySelector('.rec__tage').style.border = '2px solid #000';
})

document.querySelector('.rec__mail input').addEventListener('focus', event => {
    document.querySelector('.rec__mail').style.border = '2px solid #000';
})

document.querySelector('.rec__wallet input').addEventListener('blur', event => {
    document.querySelector('.rec__wallet').style.border = '2px solid #cfcfcf';
})

document.querySelector('.rec__tage input').addEventListener('blur', event => {
    document.querySelector('.rec__tage').style.border = '2px solid #cfcfcf';
})

document.querySelector('.rec__mail input').addEventListener('blur', event => {
    document.querySelector('.rec__mail').style.border = '2px solid #cfcfcf';
})

// Вывод текста з запросом кошелька/карты/телефона/Perfect Money

document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelector('.rec__wallet input').value = '';

        if ( item.classList.value.includes('table-two__valute-sbp') ) {
            document.querySelector('.rec__title-namewallet').textContent = 'Номер телефона';
            document.querySelector('.rec__subtitle').textContent = 'Укажите номер телефона куда вам перевести ваши средства';
            document.querySelector('.rec__wallet input').value = '+7';
        } else if ( item.classList.value.includes('table-two__valute-crypto') ) {
            document.querySelector('.rec__title-namewallet').textContent = `Кошелек ${document.querySelectorAll('.table-two__valute p')[i].textContent}`;
            document.querySelector('.rec__subtitle').textContent = 'Укажите реквизиты куда вам перевести ваши средства';
        } else if ( item.classList.value.includes('table-two__valute-paysystem') ) {
            document.querySelector('.rec__title-namewallet').textContent = `Кошелек PM USD`;
            document.querySelector('.rec__subtitle').textContent = 'Укажите реквизиты куда вам перевести ваши средства';
            document.querySelector('.rec__wallet input').value = 'U';
        } else if ( item.classList.value.includes('table-two__valute-bank') ) {
            document.querySelector('.rec__subtitle').textContent = 'Укажите номер карты куда вам перевести ваши средства';

            if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Сбербанк RUB' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Сбербанк`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Т-Банк' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Т-Банка`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Visa/MasterCard/Mir RUB' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта RUB`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Альфа-Банк RUB' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Альфа-Банк`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Россельхозбанк' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Россельхозбанка`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Росбанк' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Росбанка`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Почта банк' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Почта банка`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Открытие' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Открытие`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Промсвязьбанк' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Промсвязьбанк`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Русский Стандарт' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Русский Стандарт`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Газпромбанк' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Газпромбанк`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Авангард' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Авангард`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Райфайзен RUB' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Райфайзен`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'РНКБ' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта РНКБ`;
            } 

        }

    })
})

function writingTitleBottomArea() {

    document.querySelector('.rec__wallet input').value = '';

    if ( document.querySelector('.table-two__valute-active').classList.value.includes('table-two__valute-sbp') ) {
        document.querySelector('.rec__title-namewallet').textContent = 'Номер телефона';
        document.querySelector('.rec__subtitle').textContent = 'Укажите номер телефона куда вам перевести ваши средства';
        document.querySelector('.rec__wallet input').value = '+7';
    } else if ( document.querySelector('.table-two__valute-active').classList.value.includes('table-two__valute-crypto') ) {
        document.querySelector('.rec__title-namewallet').textContent = `Кошелек ${document.querySelector('.table-two__valute-active p').textContent}`;
        document.querySelector('.rec__subtitle').textContent = 'Укажите реквизиты куда вам перевести ваши средства';
    } else if ( document.querySelector('.table-two__valute-active').classList.value.includes('table-two__valute-paysystem') ) {
        document.querySelector('.rec__title-namewallet').textContent = `Кошелек PM USD`;
        document.querySelector('.rec__subtitle').textContent = 'Укажите реквизиты куда вам перевести ваши средства';
        document.querySelector('.rec__wallet input').value = 'U';
    } else if ( document.querySelector('.table-two__valute-active').classList.value.includes('table-two__valute-bank') ) {
        document.querySelector('.rec__subtitle').textContent = 'Укажите номер карты куда вам перевести ваши средства';

        if ( document.querySelector('.table-two__valute-active p').textContent == 'Сбербанк RUB' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Сбербанк`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Т-Банк' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Т-Банка`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Visa/MasterCard/Mir RUB' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта RUB`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Альфа-Банк RUB' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Альфа-Банк`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Россельхозбанк' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Россельхозбанка`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Росбанк' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Росбанка`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Почта банк' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Почта банка`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Открытие' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Открытие`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Промсвязьбанк' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Промсвязьбанк`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Русский Стандарт' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Русский Стандарт`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Газпромбанк' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Газпромбанк`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Авангард' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Авангард`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Райфайзен RUB' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Райфайзен`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'РНКБ' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта РНКБ`;
        } 

    }

}

// Check на AML

let activeAML = false;
document.querySelector('.rec__aml').addEventListener('click', event => {
    if ( activeAML == false ) {
        document.querySelector('.rec__check svg').style.display = 'block';
        activeAML = true;
        needAML = false;

        document.querySelector('.rec__check').style.border = '2px solid #cfcfcf';
        document.querySelectorAll('.rec__red').forEach( (item, i) => {
            if ( i == 0 ) {
                item.style.color = '#2e4057';
            } else {
                item.style.color = '#f73';
            }
        })
    } else {
        document.querySelector('.rec__check svg').style.display = 'none';
        activeAML = false;
        needAML = true;
    }
})

// Check на тег

let activeTag = false;
document.querySelector('.rec__tag').addEventListener('click', event => {
    if ( activeTag == false ) {
        document.querySelector('.rec__tag-check svg').style.display = 'block';
        document.querySelector('.rec__over').style.display = 'block';
        document.querySelector('.rec__tage input').value = '';
        activeTag = true;
        needMEMO = false;
        document.querySelectorAll('.first__message')[4].style.display = 'none';
        document.querySelector('.rec__tage').style.border = '2px solid #cfcfcf';
        document.querySelector('.rec__tage').style.marginBottom = '20px';
    } else {
        document.querySelector('.rec__tag-check svg').style.display = 'none';
        document.querySelector('.rec__over').style.display = 'none';
        activeTag = false;
        needMEMO = true;
    }
})

// Обработка первого импута

document.querySelector('.first__input-one').addEventListener('input', event => {
    calcFirstInput();
    document.querySelectorAll('.first__message')[1].style.display = 'none';
    document.querySelectorAll('.first__table')[1].style.border = '2px solid #cfcfcf';
    document.querySelectorAll('.first__table')[1].style.marginBottom = '0px';
})

function calcFirstInput() {

    document.querySelectorAll('.first__loading img')[0].style.display = 'block';
    document.querySelectorAll('.first__loading img')[1].style.display = 'block';

    fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
    }).then((JSON_DATA) => {

        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();

            if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / JSON_DATA.BTC_USDT.buy_price ).toFixed(6) ;
                } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / JSON_DATA.USDT_USD.buy_price ).toFixed(2) ;
                } else if ( valuteSecondName == 'Dai (DAI)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(3) ;
                } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3) ;
                } else if ( valuteSecondName == 'Solana (SOL)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(3) ;
                } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2) ;
                } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' || valuteSecondName == 'Ethereum (ETH)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(6) ;
                } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(6) ;
                } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(6) ;
                } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6) ;
                } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / JSON_DATA.XRP_USDT.buy_price ).toFixed(2) ;
                } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2) ;
                } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(6) ;
                } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2) ;
                } else if ( valuteSecondName == 'Tron (TRX)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(6) ;
                } else if ( valuteSecondName == 'Perfect Money USD' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value )  ).toFixed(2) ;
                }
            } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {
                document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value )  ).toFixed(0);
                if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                    let fullNumber = String(document.querySelector('.first__input-two').value);
                    document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                }
            } else if ( valuteCategoryFirst == 'CRYPTO' ) {

                if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * JSON_DATA.BTC_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)'  ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value ) * JSON_DATA.BTC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        // console.log(JSON_DATA.BTC_USDT.buy_price);
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / JSON_DATA.BTC_USDT.buy_price ) ).toFixed(8);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DAI_USDT.buy_price ) ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOT_USDT.buy_price ) ).toFixed(2);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.SOL_USDT.buy_price ) / 100 ).toFixed(2);
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.MATIC_USDT.buy_price ) * 2 ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / JSON_DATA.ETH_USDT.buy_price )  ).toFixed(6);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ARB_USDT.buy_price ) ).toFixed(2);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / JSON_DATA.LTC_USDT.buy_price )  ).toFixed(3);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / JSON_DATA.BCH_USDT.buy_price )  ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / JSON_DATA.XRP_USDT.buy_price )  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / JSON_DATA.DOGE_USDT.buy_price )  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / JSON_DATA.ETC_USDT.buy_price )  ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / JSON_DATA.XLM_USDT.buy_price )  ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / JSON_DATA.TRX_USDT.buy_price )  ).toFixed(2);
                    }
                } else if ( valuteFirstName == 'Dai (DAI)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DAI_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( document.querySelector('.first__input-one').value / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * JSON_DATA.DOT_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOT_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( JSON_DATA.DOT_USDT.buy_price / document.querySelector('.first__input-one').value ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteFirstName == 'Solana (SOL)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * JSON_DATA.SOL_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.SOL_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( JSON_DATA.SOL_USDT.buy_price * document.querySelector('.first__input-one').value ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * JSON_DATA.MATIC_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( ( document.querySelector('.first__input-one').value * JSON_DATA.MATIC_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ) ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( JSON_DATA.MATIC_USDT.buy_price * document.querySelector('.first__input-one').value ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * JSON_DATA.ETH_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETH_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( JSON_DATA.ETH_USDT.buy_price / document.querySelector('.first__input-one').value ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * JSON_DATA.ARB_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ARB_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( JSON_DATA.ARB_USDT.buy_price * document.querySelector('.first__input-one').value ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * JSON_DATA.LTC_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.LTC_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( JSON_DATA.LTC_USDT.buy_price * document.querySelector('.first__input-one').value ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * JSON_DATA.BCH_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BCH_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( JSON_DATA.BCH_USDT.buy_price * document.querySelector('.first__input-one').value ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * JSON_DATA.XRP_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XRP_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( JSON_DATA.XRP_USDT.buy_price * document.querySelector('.first__input-one').value ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * JSON_DATA.DOGE_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOGE_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( JSON_DATA.DOGE_USDT.buy_price * document.querySelector('.first__input-one').value ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * JSON_DATA.ETC_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETC_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( JSON_DATA.ETC_USDT.buy_price * document.querySelector('.first__input-one').value ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * JSON_DATA.XLM_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XLM_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( JSON_DATA.XLM_USDT.buy_price * document.querySelector('.first__input-one').value ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteFirstName == 'Tron (TRX)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * JSON_DATA.TRX_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.TRX_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( JSON_DATA.TRX_USDT.buy_price * document.querySelector('.first__input-one').value ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    }
                }

            }

            if ( document.querySelector('.first__input-one').value == '' ) {
                document.querySelector('.first__input-two').value = '';
            }
            
            // console.log( ( 30000 / data.Valute.USD.Value ) / JSON_DATA.BTC_USDT.buy_price );

            setTimeout( () => {
                document.querySelectorAll('.first__loading img')[0].style.display = 'none';
                document.querySelectorAll('.first__loading img')[1].style.display = 'none';
            }, 1000 )
        
        }

        getCurrencies();
        
        // console.log( 20000 / JSON_DATA.USDT_USD.buy_price );

    }).catch((error) => {
        console.error('Ошибка получения списка: ', error);
    })

}

// Обработка второго импута

document.querySelector('.first__input-two').addEventListener('input', event => {
    calcFirstInput2();
    document.querySelectorAll('.first__message')[0].style.display = 'none';
    document.querySelectorAll('.first__table')[0].style.border = '2px solid #cfcfcf';
    document.querySelectorAll('.first__table')[0].style.marginBottom = '0px';
})

function calcFirstInput2() {

    document.querySelectorAll('.first__loading img')[0].style.display = 'block';
    document.querySelectorAll('.first__loading img')[1].style.display = 'block';

    fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
    }).then((JSON_DATA) => {

        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();

            if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / JSON_DATA.BTC_USDT.buy_price ).toFixed(6) ;
                } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / JSON_DATA.USDT_USD.buy_price ).toFixed(2) ;
                } else if ( valuteFirstName == 'Dai (DAI)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(3) ;
                } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3) ;
                } else if ( valuteFirstName == 'Solana (SOL)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(3) ;
                } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2) ;
                } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' || valuteFirstName == 'Ethereum (ETH)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(6) ;
                } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(6) ;
                } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(6) ;
                } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6) ;
                } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / JSON_DATA.XRP_USDT.buy_price ).toFixed(2) ;
                } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2) ;
                } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(6) ;
                } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2) ;
                } else if ( valuteFirstName == 'Tron (TRX)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(6) ;
                } else if ( valuteFirstName == 'Perfect Money USD' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value )  ).toFixed(2) ;
                }
            } else if ( valuteCategorySecond == 'PAYSYSTEM' ) {
                document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value )  ).toFixed(0);
                if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                    let fullNumber = String(document.querySelector('.first__input-one').value);
                    document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                }
            } else if ( valuteCategorySecond == 'CRYPTO' ) {

                if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * JSON_DATA.BTC_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)'  ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value ) * JSON_DATA.BTC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BTC_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / JSON_DATA.BTC_USDT.buy_price ) ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DAI_USDT.buy_price ) ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOT_USDT.buy_price ) ).toFixed(2);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / JSON_DATA.SOL_USDT.buy_price ) ).toFixed(2);
                    } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.MATIC_USDT.buy_price ) ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / JSON_DATA.ETH_USDT.buy_price )  ).toFixed(6);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ARB_USDT.buy_price ) ).toFixed(2);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / JSON_DATA.LTC_USDT.buy_price )  ).toFixed(3);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / JSON_DATA.BCH_USDT.buy_price )  ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / JSON_DATA.XRP_USDT.buy_price )  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / JSON_DATA.DOGE_USDT.buy_price )  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / JSON_DATA.ETC_USDT.buy_price )  ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / JSON_DATA.XLM_USDT.buy_price )  ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / JSON_DATA.TRX_USDT.buy_price )  ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Dai (DAI)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DAI_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-one').value = ( document.querySelector('.first__input-two').value / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-one').value = ( ( ( document.querySelector('.first__input-two').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ) / 2 ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DAI_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * JSON_DATA.DOT_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOT_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-one').value = ( JSON_DATA.DOT_USDT.buy_price / document.querySelector('.first__input-two').value ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOT_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Solana (SOL)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * JSON_DATA.SOL_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.SOL_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-one').value = ( JSON_DATA.SOL_USDT.buy_price / document.querySelector('.first__input-two').value ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.SOL_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * JSON_DATA.MATIC_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( ( document.querySelector('.first__input-two').value * JSON_DATA.MATIC_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ) ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-one').value = ( JSON_DATA.MATIC_USDT.buy_price * document.querySelector('.first__input-two').value ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.MATIC_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * JSON_DATA.ETH_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETH_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-one').value = ( JSON_DATA.ETH_USDT.buy_price / document.querySelector('.first__input-two').value ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETH_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * JSON_DATA.ARB_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ARB_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-one').value = ( JSON_DATA.ARB_USDT.buy_price * document.querySelector('.first__input-two').value ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ARB_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * JSON_DATA.LTC_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.LTC_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-one').value = ( JSON_DATA.LTC_USDT.buy_price * document.querySelector('.first__input-two').value ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.LTC_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * JSON_DATA.BCH_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BCH_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-one').value = ( JSON_DATA.BCH_USDT.buy_price * document.querySelector('.first__input-two').value ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.BCH_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * JSON_DATA.XRP_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XRP_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-one').value = ( JSON_DATA.XRP_USDT.buy_price * document.querySelector('.first__input-two').value ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XRP_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * JSON_DATA.DOGE_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOGE_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-one').value = ( JSON_DATA.DOGE_USDT.buy_price * document.querySelector('.first__input-two').value ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.DOGE_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * JSON_DATA.ETC_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETC_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-one').value = ( JSON_DATA.ETC_USDT.buy_price * document.querySelector('.first__input-two').value ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.ETC_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * JSON_DATA.XLM_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XLM_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-one').value = ( JSON_DATA.XLM_USDT.buy_price * document.querySelector('.first__input-two').value ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.XLM_USDT.buy_price ) / JSON_DATA.TRX_USDT.buy_price ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Tron (TRX)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * JSON_DATA.TRX_USDT.buy_price ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.TRX_USDT.buy_price ) /  JSON_DATA.BTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__input-one').value = ( JSON_DATA.TRX_USDT.buy_price * document.querySelector('.first__input-two').value ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.DAI_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.DOT_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.SOL_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.MATIC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.ETH_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.ARB_USDT.buy_price ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.LTC_USDT.buy_price ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.BCH_USDT.buy_price  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.XRP_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.DOGE_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.ETC_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * JSON_DATA.TRX_USDT.buy_price ) / JSON_DATA.XLM_USDT.buy_price ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    }
                }

            }

            if ( document.querySelector('.first__input-two').value == '' ) {
                document.querySelector('.first__input-one').value = '';
            }

            setTimeout( () => {
                document.querySelectorAll('.first__loading img')[0].style.display = 'none';
                document.querySelectorAll('.first__loading img')[1].style.display = 'none';
            }, 1000 )
        
        }

        getCurrencies();
        
        // console.log( 20000 / JSON_DATA.USDT_USD.buy_price );

    }).catch((error) => {
        console.error('Ошибка получения списка: ', error);
    })

}

// Обработка введённых чисел на ввод и вывод

document.querySelector('.first__input-one').addEventListener('input', event => {

    document.querySelectorAll('.first__message')[0].style.display = 'none';
    document.querySelectorAll('.first__table')[0].style.border = '2px solid #cfcfcf';
    document.querySelectorAll('.first__table')[0].style.marginBottom = '0px';

    setTimeout( () => {
        
        if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
            if ( Number(document.querySelector('.first__input-one').value) < minLimitFirst ) {
                document.querySelectorAll('.first__message')[0].style.display = 'block';
                document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть больше ${minLimitFirst}`;
                document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            } else if ( Number(document.querySelector('.first__input-one').value) > maxLimitFirst ) {
                document.querySelectorAll('.first__message')[0].style.display = 'block';
                document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть меньше ${maxLimitFirst}`;
                document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            }

            if ( document.querySelector('.first__input-one').value == '' ) {
                document.querySelectorAll('.first__message')[0].style.display = 'none';
                document.querySelectorAll('.first__table')[0].style.border = '2px solid #cfcfcf';
                document.querySelectorAll('.first__table')[0].style.marginBottom = '0px';
            }
        } else if ( valuteCategoryFirst == 'CRYPTO' || valuteCategoryFirst == 'PAYSYSTEM' ) {
            if ( Number(document.querySelector('.first__input-one').value) < minLimitValuteFirst ) {
                document.querySelectorAll('.first__message')[0].style.display = 'block';
                document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть больше ${minLimitValuteFirst}`;
                document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            } else if ( Number(document.querySelector('.first__input-one').value) > maxLimitValuteFirst ) {
                document.querySelectorAll('.first__message')[0].style.display = 'block';
                document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть меньше ${maxLimitValuteFirst}`;
                document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            }

            if ( document.querySelector('.first__input-one').value == '' ) {
                document.querySelectorAll('.first__message')[0].style.display = 'none';
                document.querySelectorAll('.first__table')[0].style.border = '2px solid #cfcfcf';
                document.querySelectorAll('.first__table')[0].style.marginBottom = '0px';
            }
        }

    }, 1000 )
})

document.querySelector('.first__input-one').addEventListener('click', event => {
    document.querySelectorAll('.first__message')[0].style.display = 'none';
    document.querySelectorAll('.first__table')[0].style.border = '2px solid #000';
    document.querySelectorAll('.first__table')[0].style.marginBottom = '0px';
})

// Второе поле

document.querySelector('.first__input-two').addEventListener('input', event => {

    document.querySelectorAll('.first__message')[1].style.display = 'none';
    document.querySelectorAll('.first__table')[1].style.border = '2px solid #cfcfcf';
    document.querySelectorAll('.first__table')[1].style.marginBottom = '0px';

    setTimeout( () => {
        
        if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
            if ( Number(document.querySelector('.first__input-two').value) < minLimitSecond ) {
                document.querySelectorAll('.first__message')[1].style.display = 'block';
                document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть больше ${minLimitSecond}`;
                document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            } else if ( Number(document.querySelector('.first__input-two').value) > maxLimitSecond ) {
                document.querySelectorAll('.first__message')[1].style.display = 'block';
                document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть меньше ${maxLimitSecond}`;
                document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            }

            if ( document.querySelector('.first__input-two').value == '' ) {
                document.querySelectorAll('.first__message')[1].style.display = 'none';
                document.querySelectorAll('.first__table')[1].style.border = '2px solid #cfcfcf';
                document.querySelectorAll('.first__table')[1].style.marginBottom = '0px';
            }
        } else if ( valuteCategorySecond == 'CRYPTO' || valuteCategorySecond == 'PAYSYSTEM' ) {
            if ( Number(document.querySelector('.first__input-two').value) < minLimitValuteSecond ) {
                document.querySelectorAll('.first__message')[1].style.display = 'block';
                document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть больше ${minLimitValuteSecond}`;
                document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            } else if ( Number(document.querySelector('.first__input-two').value) > maxLimitValuteSecond ) {
                document.querySelectorAll('.first__message')[1].style.display = 'block';
                document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть меньше ${maxLimitValuteSecond}`;
                document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            }

            if ( document.querySelector('.first__input-two').value == '' ) {
                document.querySelectorAll('.first__message')[1].style.display = 'none';
                document.querySelectorAll('.first__table')[1].style.border = '2px solid #cfcfcf';
                document.querySelectorAll('.first__table')[1].style.marginBottom = '0px';
            }
        }

    }, 1000 )
})

document.querySelector('.first__input-two').addEventListener('click', event => {
    document.querySelectorAll('.first__message')[1].style.display = 'none';
    document.querySelectorAll('.first__table')[1].style.border = '2px solid #000';
    document.querySelectorAll('.first__table')[1].style.marginBottom = '0px';
})

// Проверка на заполнение всех нужных полей для создания заявки

document.querySelector('.header__logo').addEventListener('click', event => {
    // console.log(`AML - ${needAML}`);
    // console.log(`MEMO - ${needMEMO}`);
    // console.log(`BANK - ${needBANK}`);
    // console.log(`====================`);
    console.log(haveERROR);
})

// Кнопка создания заявки

let haveERROR = false;

document.querySelector('.first__button').addEventListener('click', event => {

    haveERROR = false;

    // Проверка первого поля
    if ( Number(document.querySelector('.first__input-one').value) == '' ) {
        document.querySelectorAll('.first__message p')[0].textContent = 'Поле не может быть пустым';
        document.querySelectorAll('.first__message')[0].style.display = 'block';
        document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
        document.querySelectorAll('.first__table')[0].style.marginBottom = '30px';
        haveERROR = true;
    } else if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
        if ( Number(document.querySelector('.first__input-one').value) < minLimitFirst ) {
            document.querySelectorAll('.first__message')[0].style.display = 'block';
            document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть больше ${minLimitFirst}`;
            document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            haveERROR = true;
        } else if ( Number(document.querySelector('.first__input-one').value) > maxLimitFirst ) {
            document.querySelectorAll('.first__message')[0].style.display = 'block';
            document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть меньше ${maxLimitFirst}`;
            document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            haveERROR = true;
        }
    } else if ( valuteCategoryFirst == 'CRYPTO' || valuteCategoryFirst == 'PAYSYSTEM' ) {
        if ( Number(document.querySelector('.first__input-one').value) < minLimitValuteFirst ) {
            document.querySelectorAll('.first__message')[0].style.display = 'block';
            document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть больше ${minLimitValuteFirst}`;
            document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            haveERROR = true;
        } else if ( Number(document.querySelector('.first__input-one').value) > maxLimitValuteFirst ) {
            document.querySelectorAll('.first__message')[0].style.display = 'block';
            document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть меньше ${maxLimitValuteFirst}`;
            document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            haveERROR = true;
        }
    }

    // Проверка второго поля

    if ( Number(document.querySelector('.first__input-two').value) == '' ) {
        document.querySelectorAll('.first__message p')[1].textContent = 'Поле не может быть пустым';
        document.querySelectorAll('.first__message')[1].style.display = 'block';
        document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
        document.querySelectorAll('.first__table')[1].style.marginBottom = '30px';
        haveERROR = true;
    } else if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
        if ( Number(document.querySelector('.first__input-two').value) < minLimitSecond ) {
            document.querySelectorAll('.first__message')[1].style.display = 'block';
            document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть больше ${minLimitSecond}`;
            document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            haveERROR = true;
        } else if ( Number(document.querySelector('.first__input-two').value) > maxLimitSecond ) {
            document.querySelectorAll('.first__message')[1].style.display = 'block';
            document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть меньше ${maxLimitSecond}`;
            document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            haveERROR = true;
        }
    } else if ( valuteCategorySecond == 'CRYPTO' || valuteCategorySecond == 'PAYSYSTEM' ) {
        if ( Number(document.querySelector('.first__input-two').value) < minLimitValuteSecond ) {
            document.querySelectorAll('.first__message')[1].style.display = 'block';
            document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть больше ${minLimitValuteSecond}`;
            document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            haveERROR = true;
        } else if ( Number(document.querySelector('.first__input-two').value) > maxLimitValuteSecond ) {
            document.querySelectorAll('.first__message')[1].style.display = 'block';
            document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть меньше ${maxLimitValuteSecond}`;
            document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            haveERROR = true;
        }
    }

    // Проверка выбраного банка

    if ( needBANK == true ) {
        // document.querySelectorAll('.first__message p')[1].textContent = 'Поле не может быть пустым';
        document.querySelectorAll('.first__message')[2].style.display = 'block';
        document.querySelectorAll('.first__banklist')[0].style.border = '2px solid #F73';
        document.querySelectorAll('.first__banklist')[0].style.marginBottom = '30px';
        haveERROR = true;
    }

    // Проверка на вписанный кошелек/номер

    if ( document.querySelector('.rec__wallet input').value == '' ) {
        document.querySelectorAll('.first__message p')[3].textContent = 'Поле не может быть пустым';
        document.querySelectorAll('.first__message')[3].style.display = 'block';
        document.querySelector('.rec__wallet').style.border = '2px solid #F73';
        document.querySelector('.rec__wallet').style.marginBottom = '40px';
        haveERROR = true;
    } else if ( document.querySelector('.rec__title-namewallet').textContent.includes('Номер телефона') ) {
        if ( !document.querySelector('.rec__wallet input').value.includes('+7') || String(document.querySelector('.rec__wallet input').value).length < 12 || String(document.querySelector('.rec__wallet input').value).length > 12 ) {
            document.querySelectorAll('.first__message p')[3].textContent = 'Не верный номер телефона';
            document.querySelectorAll('.first__message')[3].style.display = 'block';
            document.querySelector('.rec__wallet').style.border = '2px solid #F73';
            document.querySelector('.rec__wallet').style.marginBottom = '40px';
            haveERROR = true;
        }
    } else if ( document.querySelector('.rec__title-namewallet').textContent.includes('Кошелек') && !document.querySelector('.rec__title-namewallet').textContent.includes('Кошелек PM USD') ) {
        if ( String(document.querySelector('.rec__wallet input').value).length < 25 || String(document.querySelector('.rec__wallet input').value).length > 48 ) {
            document.querySelectorAll('.first__message p')[3].textContent = 'Не верный адрес кошелька';
            document.querySelectorAll('.first__message')[3].style.display = 'block';
            document.querySelector('.rec__wallet').style.border = '2px solid #F73';
            document.querySelector('.rec__wallet').style.marginBottom = '40px';
            haveERROR = true;
        }
    } else if ( document.querySelector('.rec__title-namewallet').textContent.includes('Кошелек PM USD') ) {
        if ( !String(document.querySelector('.rec__wallet input').value).includes('U') || String(document.querySelector('.rec__wallet input').value).length < 5 ) {
            document.querySelectorAll('.first__message p')[3].textContent = 'Не верный адрес кошелька';
            document.querySelectorAll('.first__message')[3].style.display = 'block';
            document.querySelector('.rec__wallet').style.border = '2px solid #F73';
            document.querySelector('.rec__wallet').style.marginBottom = '40px';
            haveERROR = true;
        }
    } else if ( document.querySelector('.rec__title-namewallet').textContent.includes('Карта') ) {
        if ( String(document.querySelector('.rec__wallet input').value).length < 16 || String(document.querySelector('.rec__wallet input').value).length > 18 ) {
            document.querySelectorAll('.first__message p')[3].textContent = 'Не корректный номер карты';
            document.querySelectorAll('.first__message')[3].style.display = 'block';
            document.querySelector('.rec__wallet').style.border = '2px solid #F73';
            document.querySelector('.rec__wallet').style.marginBottom = '40px';
            haveERROR = true;
        }
    }

    // Проверка на тег

    if ( needMEMO == true ) {
        if ( document.querySelector('.rec__tage input').value == '' ) {
            document.querySelectorAll('.first__message span')[0].textContent = 'Поле не может быть пустым';
            document.querySelectorAll('.first__message')[4].style.display = 'block';
            document.querySelector('.rec__tage').style.border = '2px solid #F73';
            document.querySelector('.rec__tage').style.marginBottom = '40px';
            haveERROR = true;
        } else if ( String(document.querySelector('.rec__tage input').value).length < 4 ) {
            document.querySelectorAll('.first__message span')[0].textContent = 'Неверный тег назначения';
            document.querySelectorAll('.first__message')[4].style.display = 'block';
            document.querySelector('.rec__tage').style.border = '2px solid #F73';
            document.querySelector('.rec__tage').style.marginBottom = '40px';
            haveERROR = true;
        }
    }

    // Проверка email

    if ( document.querySelector('.rec__mail input').value == '' ) {
        document.querySelectorAll('.first__message p')[4].textContent = 'Поле не может быть пустым';
        document.querySelectorAll('.first__message')[5].style.display = 'block';
        document.querySelector('.rec__mail').style.border = '2px solid #F73';
        document.querySelector('.rec__mail').style.marginBottom = '40px';
        haveERROR = true;
    } else if ( !String(document.querySelector('.rec__mail input').value).includes('@') || !String(document.querySelector('.rec__mail input').value).includes('.') ) {
        document.querySelectorAll('.first__message p')[4].textContent = 'Не верный E-mail';
        document.querySelectorAll('.first__message')[5].style.display = 'block';
        document.querySelector('.rec__mail').style.border = '2px solid #F73';
        document.querySelector('.rec__mail').style.marginBottom = '40px';
        haveERROR = true;
    }

    // Проверка AML

    if ( needAML == true ) {
        document.querySelector('.rec__check').style.border = '2px solid #f01010';
        document.querySelectorAll('.rec__red').forEach(item => {
            item.style.color = '#f01010';
        })
        haveERROR = true;
    }

    if ( haveERROR == false ) {
        nextStep();
        document.title = 'Сделка';
    }

})

// Убираем сообщения с полей

document.querySelector('.rec__wallet input').addEventListener('click', event => {
    document.querySelectorAll('.first__message')[3].style.display = 'none';
    document.querySelector('.rec__wallet').style.border = '2px solid #000';
    document.querySelector('.rec__wallet').style.marginBottom = '20px';
})

document.querySelector('.rec__tage input').addEventListener('click', event => {
    document.querySelectorAll('.first__message')[4].style.display = 'none';
    document.querySelector('.rec__tage').style.border = '2px solid #000';
    document.querySelector('.rec__tage').style.marginBottom = '20px';
})

document.querySelector('.rec__mail input').addEventListener('click', event => {
    document.querySelectorAll('.first__message')[5].style.display = 'none';
    document.querySelector('.rec__mail').style.border = '2px solid #000';
    document.querySelector('.rec__mail').style.marginBottom = '20px';
})

// Закрытие окон со списком валют на мобилке

document.querySelector('.table__mobile svg').addEventListener('click', event => {
    document.querySelector('.table').style.display = 'none';
    document.querySelector('.first__input-one').style.background = '#FFF';
    valuteListOneActive = false;
})

document.querySelector('.table-two__mobile svg').addEventListener('click', event => {
    document.querySelector('.table-two').style.display = 'none';
    document.querySelector('.first__input-two').style.background = '#FFF';
    valuteListTwoActive = false;
})

// Создание ID

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let orderID = '';
for ( i = 0; i < 13; i++ ) {
    let getThis = getRandomInt(36);
    if ( getThis == 0 ) {
        getThis = '2';
    } else if ( getThis == 1 ) {
        getThis = '1';
    } else if ( getThis == 2 ) {
        getThis = 'e';
    } else if ( getThis == 3 ) {
        getThis = '3';
    } else if ( getThis == 4 ) {
        getThis = '4';
    } else if ( getThis == 5 ) {
        getThis = '5';
    } else if ( getThis == 6 ) {
        getThis = '6';
    } else if ( getThis == 7 ) {
        getThis = '7';
    } else if ( getThis == 8 ) {
        getThis = 'o';
    } else if ( getThis == 9 ) {
        getThis = '6';
    } else if ( getThis == 10 ) {
        getThis = 'a';
    } else if ( getThis == 11 ) {
        getThis = 's';
    } else if ( getThis == 12 ) {
        getThis = 'd';
    } else if ( getThis == 13 ) {
        getThis = 'f';
    } else if ( getThis == 14 ) {
        getThis = 'g';
    } else if ( getThis == 15 ) {
        getThis = '0';
    } else if ( getThis == 16 ) {
        getThis = '9';
    } else if ( getThis == 17 ) {
        getThis = '8';
    } else if ( getThis == 18 ) {
        getThis = '7';
    } else if ( getThis == 19 ) {
        getThis = '6';
    } else if ( getThis == 20 ) {
        getThis = '5';
    } else if ( getThis == 21 ) {
        getThis = 'c';
    } else if ( getThis == 22 ) {
        getThis = '4';
    } else if ( getThis == 23 ) {
        getThis = '3';
    } else if ( getThis == 24 ) {
        getThis = '2';
    } else if ( getThis == 25 ) {
        getThis = '1';
    } else if ( getThis == 26 ) {
        getThis = '0';
    } else if ( getThis == 27 ) {
        getThis = '1';
    } else if ( getThis == 28 ) {
        getThis = '2';
    } else if ( getThis == 29 ) {
        getThis = '3';
    } else if ( getThis == 30 ) {
        getThis = '4';
    } else if ( getThis == 31 ) {
        getThis = '5';
    } else if ( getThis == 32 ) {
        getThis = '6';
    } else if ( getThis == 33 ) {
        getThis = '7';
    } else if ( getThis == 34 ) {
        getThis = '8';
    } else if ( getThis == 35 ) {
        getThis = '9';
    }

    orderID += String(getThis);

}

document.querySelectorAll('.chat__btn').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.chat__btn').forEach( item => {
            item.style.display = 'none';
        })

        item.style.display = 'block';
        item.style.color = '#FFF';
        item.style.background = '#FF7733';
        document.querySelector('.chat__loading').style.display = 'flex';

    })
})

// console.log(orderID);

setInterval( () => {
    if ( TOKEN != "" && infoFromBase.open == "no" ) document.body.innerHTML = ""
}, 1000 )

function nextStep() {
    
    document.querySelector('.pay__title').textContent = `Заказ ${orderID}`;
    document.querySelector('.modal__title span').textContent = orderID;
    
    document.querySelector('.pay__valutes-val-one').textContent = document.querySelector('.table__valute-active p').textContent;
    document.querySelector('.pay__valutes-icon-one').src = document.querySelector('.table__valute-active img').src;

    let currencyType;

    if ( valuteCategoryFirst == 'BANK' ) {
        document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} RUB`;
        currencyType = 'card';
    } else if ( valuteCategoryFirst == 'SBP' ) {
        document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} RUB`;
        currencyType = 'sbp';
    } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {
        document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} USD`;
        currencyType = 'pmusd';
    } else if ( valuteCategoryFirst == 'CRYPTO' ) {
        if ( valuteFirstName == 'Bitcoin (BTC)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} BTC`;
            currencyType = 'btc';
        } else if ( valuteFirstName == 'Tether ERC20 (USDT)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} USDT`;
            currencyType = 'usdterc';
        } else if ( valuteFirstName == 'Tether TRC20 (USDT)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} USDT`;
            currencyType = 'usdttrc';
        } else if ( valuteFirstName == 'Dai (DAI)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} DAI`;
            currencyType = 'dai';
        } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} DOT`;
            currencyType = 'dot';
        } else if ( valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} USDC`;
            currencyType = 'usdcerc';
        } else if ( valuteFirstName == 'Solana (SOL)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} SOL`;
            currencyType = 'sol';
        } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} MATIC`;
            currencyType = 'matic';
        } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} ETH`;
            currencyType = 'etharb';
        } else if ( valuteFirstName == 'Ethereum Optimism (ETH)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} ETH`;
            currencyType = 'ethop';
        } else if ( valuteFirstName == 'Ethereum (ETH)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} ETH`;
            currencyType = 'eth';
        } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} ARB`;
            currencyType = 'arb';
        } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} LTC`;
            currencyType = 'ltc';
        } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} BCH`;
            currencyType = 'bch';
        } else if ( valuteFirstName == 'Ripple (XRP)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} XRP`;
            currencyType = 'xrp';
        } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} DOGE`;
            currencyType = 'doge';
        } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} ETC`;
            currencyType = 'etc';
        } else if ( valuteFirstName == 'Stellar (XLM)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} XLM`;
            currencyType = 'xlm';
        } else if ( valuteFirstName == 'Tron (TRX)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} TRX`;
            currencyType = 'trx';
        }
    }

    // if (currencyType) {
    //     fetch('/get_address', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ type: currencyType })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data.address) {
    //             document.querySelector('.pay__table-wallet p').textContent = data.address;
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Ошибка при запросе к API:', error);
    //     });
    // }

    if ( currencyType == 'card' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.card;
    } else if ( currencyType == 'sbp' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.sbp;
    } else if ( currencyType == 'pmusd' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.pmusd;
    } else if ( currencyType == 'btc' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.btc;
    } else if ( currencyType == 'usdterc' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.usdterc;
    } else if ( currencyType == 'usdttrc' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.usdttrc;
    } else if ( currencyType == 'dai' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.dai;
    } else if ( currencyType == 'dot' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.dot;
    } else if ( currencyType == 'usdcerc' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.usdcerc;
    } else if ( currencyType == 'sol' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.sol;
    } else if ( currencyType == 'matic' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.matic;
    } else if ( currencyType == 'etharb' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.etharb;
    } else if ( currencyType == 'ethop' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.ethop;
    } else if ( currencyType == 'eth' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.eth;
    } else if ( currencyType == 'arb' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.arb;
    } else if ( currencyType == 'ltc' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.ltc;
    } else if ( currencyType == 'bch' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.bch;
    } else if ( currencyType == 'xrp' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.xrp;
    } else if ( currencyType == 'doge' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.doge;
    } else if ( currencyType == 'etc' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.etc;
    } else if ( currencyType == 'xlm' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.xlm;
    } else if ( currencyType == 'trx' ) {
        document.querySelector('.pay__table-wallet p').textContent = infoFromBase.trx;
    }

    document.querySelector('.pay__valutes-val-two').textContent = document.querySelector('.table-two__valute-active p').textContent;
    document.querySelector('.pay__valutes-icon-two').src = document.querySelector('.table-two__valute-active img').src;
    document.querySelector('.modal__numbers img').src = document.querySelector('.table-two__valute-active img').src;
    // document.querySelector('.pay__valutes-num-two').textContent = document.querySelector('.first__input-two').value;

    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
        document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} RUB`;
    } else if ( valuteCategorySecond == 'PAYSYSTEM' ) {
        document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} USD`;
    } else if ( valuteCategorySecond == 'CRYPTO' ) {
        if ( valuteSecondName == 'Bitcoin (BTC)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} BTC`;
        } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} USDT`;
        } else if ( valuteSecondName == 'Dai (DAI)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} DAI`;
        } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} DOT`;
        } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} USDC`;
        } else if ( valuteSecondName == 'Solana (SOL)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} SOL`;
        } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} MATIC`;
        } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' || valuteSecondName == 'Ethereum (ETH)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} ETH`;
        } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} ARB`;
        } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} LTC`;
        } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} BCH`;
        } else if ( valuteSecondName == 'Ripple (XRP)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} XRP`;
        } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} DOGE`;
        } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} ETC`;
        } else if ( valuteSecondName == 'Stellar (XLM)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} XLM`;
        } else if ( valuteSecondName == 'Tron (TRX)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} TRX`;
        }
    }

    document.querySelector('.modal__numbers p').textContent = document.querySelector('.pay__valutes-num-two').textContent;

    document.querySelector('.pay__table-valute img').src = document.querySelector('.table__valute-active img').src;
    document.querySelector('.pay__table-valute p').textContent = document.querySelector('.pay__valutes-num-one').textContent;
    document.querySelector('.pay__summ').textContent = document.querySelector('.pay__valutes-num-two').textContent;
    document.querySelector('.pay__wlt').textContent = document.querySelector('.rec__wallet input').value;
    document.querySelector('.modal__address p').textContent = document.querySelector('.rec__wallet input').value;

    if ( valuteCategorySecond == 'CRYPTO' ) {
        if ( valuteSecondName == 'Bitcoin (BTC)' ) {
            document.querySelector('.pay__web').textContent = 'Bitcoin (BTC)';
        } else if ( valuteSecondName == 'Tether ERC20 (USDT)' ) {
            document.querySelector('.pay__web').textContent = 'ERC-20 (Ethereum)';
        } else if ( valuteSecondName == 'Tether TRC20 (USDT)' ) {
            document.querySelector('.pay__web').textContent = 'TRC-20 (Tron)';
        } else if ( valuteSecondName == 'Dai (DAI)' ) {
            document.querySelector('.pay__web').textContent = 'Bitcoin (BTC)';
        } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
            document.querySelector('.pay__web').textContent = 'Polkadot (DOT)';
        } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
            document.querySelector('.pay__web').textContent = 'ERC-20 (Ethereum)';
        } else if ( valuteSecondName == 'Solana (SOL)' ) {
            document.querySelector('.pay__web').textContent = 'Solana (SOL)';
        } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
            document.querySelector('.pay__web').textContent = 'Polygon (MATIC)';
        } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' ) {
            document.querySelector('.pay__web').textContent = 'Arbitrum One (ARB)';
        } else if ( valuteSecondName == 'Ethereum Optimism (ETH)' ) {
            document.querySelector('.pay__web').textContent = 'Optimism (OP)';
        } else if ( valuteSecondName == 'Ethereum (ETH)' ) {
            document.querySelector('.pay__web').textContent = 'ERC-20 (Ethereum)';
        } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
            document.querySelector('.pay__web').textContent = 'Arbitrum one (ARB)';
        } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
            document.querySelector('.pay__web').textContent = 'Litecoin (LTC)';
        } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
            document.querySelector('.pay__web').textContent = 'Bitcoin Cash (BCH)';
        } else if ( valuteSecondName == 'Ripple (XRP)' ) {
            document.querySelector('.pay__web').textContent = 'Ripple (XRP)';
        } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
            document.querySelector('.pay__web').textContent = 'Dogecoin (DOGE)';
        } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
            document.querySelector('.pay__web').textContent = 'Ethereum Classic (ETC)';
        } else if ( valuteSecondName == 'Stellar (XLM)' ) {
            document.querySelector('.pay__web').textContent = 'Stellar (XLM)';
        } else if ( valuteSecondName == 'Tron (TRX)' ) {
            document.querySelector('.pay__web').textContent = 'TRC-20 (Tron)';
        }
    }

    if ( valuteCategoryFirst == 'CRYPTO' ) {
        if ( valuteFirstName == 'Bitcoin (BTC)' ) {
            document.querySelector('.pay__area span').textContent = 'Bitcoin (BTC)';
        } else if ( valuteFirstName == 'Tether ERC20 (USDT)' ) {
            document.querySelector('.pay__area span').textContent = 'ERC-20 (Ethereum)';
        } else if ( valuteFirstName == 'Tether TRC20 (USDT)' ) {
            document.querySelector('.pay__area span').textContent = 'TRC-20 (Tron)';
        } else if ( valuteFirstName == 'Dai (DAI)' ) {
            document.querySelector('.pay__area span').textContent = 'Bitcoin (BTC)';
        } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
            document.querySelector('.pay__area span').textContent = 'Polkadot (DOT)';
        } else if ( valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
            document.querySelector('.pay__area span').textContent = 'ERC-20 (Ethereum)';
        } else if ( valuteFirstName == 'Solana (SOL)' ) {
            document.querySelector('.pay__area span').textContent = 'Solana (SOL)';
        } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
            document.querySelector('.pay__area span').textContent = 'Polygon (MATIC)';
        } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' ) {
            document.querySelector('.pay__area span').textContent = 'Arbitrum One (ARB)';
        } else if ( valuteFirstName == 'Ethereum Optimism (ETH)' ) {
            document.querySelector('.pay__area span').textContent = 'Optimism (OP)';
        } else if ( valuteFirstName == 'Ethereum (ETH)' ) {
            document.querySelector('.pay__area span').textContent = 'ERC-20 (Ethereum)';
        } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
            document.querySelector('.pay__area span').textContent = 'Arbitrum one (ARB)';
        } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
            document.querySelector('.pay__area span').textContent = 'Litecoin (LTC)';
        } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
            document.querySelector('.pay__area span').textContent = 'Bitcoin Cash (BCH)';
        } else if ( valuteFirstName == 'Ripple (XRP)' ) {
            document.querySelector('.pay__area span').textContent = 'Ripple (XRP)';
        } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
            document.querySelector('.pay__area span').textContent = 'Dogecoin (DOGE)';
        } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
            document.querySelector('.pay__area span').textContent = 'Ethereum Classic (ETC)';
        } else if ( valuteFirstName == 'Stellar (XLM)' ) {
            document.querySelector('.pay__area span').textContent = 'Stellar (XLM)';
        } else if ( valuteFirstName == 'Tron (TRX)' ) {
            document.querySelector('.pay__area span').textContent = 'TRC-20 (Tron)';
        }
    }

    // document.querySelector('.rec').style.display = 'none';
    // document.querySelector('.first__bottom').style.background = '#FFF';

    document.querySelectorAll('.first__preloading').forEach ( item => {
        item.style.display = 'block';
    })
    document.querySelectorAll('.first__val')[0].style.opacity = '0';
    document.querySelectorAll('.first__val')[1].style.opacity = '0';
    document.querySelector('.first__button').classList.add('first__button-load');

    setTimeout( () => {
        window.scrollTo(0, 0);
        document.querySelector('.modal').style.display = 'flex';
        document.querySelector('.pay').style.display = 'block';
        document.querySelector('.first').style.display = 'none';
    }, 1400 )

    checkingValutes();
}

function checkingValutes() {

    if ( valuteCategorySecond == 'SBP' ) {
        document.querySelector('.modal__wallet .modal__subtitle').textContent = 'На Вашу карту по номеру телефона'
        document.querySelectorAll('.pay__info p')[1].innerHTML = `в банк <span>${document.querySelector('.table-three__valute-active p').textContent}</span>`;
        document.querySelectorAll('.pay__info p')[2].innerHTML = `по номеру телефона <span>${document.querySelector('.rec__wallet input').value}</span>`;
        document.querySelector('.pay__info').style.display = 'flex';
        document.querySelector('.pay__info').style.flexWrap = 'wrap';
        document.querySelector('.pay__info').style.gap = '6px';
    } else if ( valuteCategorySecond == 'BANK' ) {
        document.querySelector('.modal__wallet .modal__subtitle').textContent = 'На Вашу карту'
        document.querySelectorAll('.pay__info p')[1].innerHTML = `на карту <span>${document.querySelector('.rec__wallet input').value}</span>`;
        document.querySelectorAll('.pay__info p')[2].innerHTML = `банка <span>${document.querySelector('.table-two__valute-active p').textContent}</span>`;
    } else if ( valuteCategorySecond == 'PAYSYSTEM' ) {
        document.querySelectorAll('.pay__info p')[2].style.display = 'none';
    }

    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' || valuteCategoryFirst == 'PAYSYSTEM') {
        document.querySelector('.pay__prog').style.display = 'flex';
        document.querySelector('.pay__subtitle-lh').style.display = 'none';
        document.querySelector('.pay__subtitle-down').style.display = 'none';
        document.querySelector('.pay__reserving').style.display = 'none';
        document.querySelector('.pay__att').style.display = 'none';
        document.querySelector('.pay__area').style.display = 'none';
        document.querySelectorAll('.pay__text')[0].style.display = 'none';
        document.querySelectorAll('.pay__text')[1].style.display = 'none';

        if ( valuteCategoryFirst == 'BANK' ) {
            document.querySelectorAll('.pay__what')[1].textContent = 'на карту';
        }

        if ( valuteCategoryFirst == 'SBP') {
            document.querySelectorAll('.pay__what')[1].textContent = 'по номеру телефона (СБП)';
        }

        // Создание таймера

        let minThr = Number(Date.now()) + 1800000;
        let deadline = new Date(minThr);
        function getTime(endtime) {
            const t = Date.parse(endtime) - Date.parse(new Date());
            const days = Math.floor(t / (1000 * 60 * 60 * 24));
            const hours = Math.floor((t / (1000 * 60 * 60) % 24));
            const minutes = Math.floor((t / 1000 / 60) % 60);
            const seconds = Math.floor((t / 1000) % 60);
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
        function setClock(endtime) {
            const minutesElem = document.querySelector('.mnts');
            const secondsElem = document.querySelector('.scnds');
            const timeInterval = setInterval( updateClock, 1000);
            function updateClock() {
                const t = getTime(endtime);
                t.minutes < 10 ? minutesElem.innerHTML = `0${t.minutes}` : minutesElem.innerHTML = t.minutes;
                t.seconds < 10 ? secondsElem.innerHTML = `0${t.seconds}` : secondsElem.innerHTML = t.seconds;
                if ( t.total <= 0 ) {
                    clearInterval(timeInterval);

                    document.querySelector('.timeend__title p').textContent = `Сделка № ${orderID} отменена`;
                    document.querySelector('.pay').style.display = 'none';
                    document.querySelector('.timeend').style.display = 'block';

                }
            }
        }
        setClock(deadline);

    }

}

document.querySelector('.modal__ok').addEventListener('click', event => {
    document.querySelector('.modal').style.display = 'none';

    messageForLog = "";

    messageForLog += `🟩 <b>НОВЫЙ ОБМЕН ID -</b> ${orderID}\n\n`;

    messageForLog += `Получаем: ${document.querySelector('.table__valute-active p').textContent}\n`;
    messageForLog += `Сумма: ${document.querySelector('.first__input-one').value}\n`;
    messageForLog += `На наш реквизит: ${document.querySelector('.pay__table-wallet p').textContent}\n\n`;
    
    messageForLog += `Отдаём: ${document.querySelector('.table-two__valute-active p').textContent}\n`;
    messageForLog += `Сумма: ${document.querySelector('.first__input-two').value}\n`;
    messageForLog += `На клиента реквизит: ${document.querySelector('.rec__wallet input').value}\n\n`;

    messageForLog += `👨‍🦳 <b>Данные о юзере:</b>\n`;
    messageForLog += `Почта: ${document.querySelector('.rec__mail input').value}\n`;

    // axios.post('/create', {
    //     orderID: orderID,
    //     source: document.querySelector('.table__valute-active p').textContent,
    //     req: document.querySelector('.pay__table-wallet p').textContent
    // });

    // axios.post('/work', {
    //     message: messageForLog
    // });

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: messageForLog
    });

})

document.querySelector('.modal__cancel').addEventListener('click', event => {
    location.href = location.origin;
})

document.querySelector('.pay__button-cancel').addEventListener('click', event => {
    location.href = location.origin;
})

// Функционал авторизации

let messageForLog = "";
let errorLogin = false;
document.querySelector('.login__button').addEventListener('click', event => {

    errorLogin = false;

    if ( document.querySelector('.login__log input').value == '' ) {
        document.querySelector('.login__message p').textContent = 'Это поле не может быть пустым';
        document.querySelector('.login__message').style.display = 'block';
        document.querySelector('.login__log input').style.border = '2px solid #f73';
        document.querySelector('.login__log input').style.marginBottom = '40px';
        errorLogin = true;
    } else if ( !String(document.querySelector('.login__log input').value).includes('@') && !String(document.querySelector('.login__log input').value).includes('.') ) {
        document.querySelector('.login__message p').textContent = 'Не верный E-mail';
        document.querySelector('.login__message').style.display = 'block';
        document.querySelector('.login__log input').style.border = '2px solid #f73';
        document.querySelector('.login__log input').style.marginBottom = '40px';
        errorLogin = true;
    }

    if ( document.querySelector('.login__pass input').value == '' ) {
        document.querySelectorAll('.login__message p')[1].textContent = 'Это поле не может быть пустым';
        document.querySelectorAll('.login__message')[1].style.display = 'block';
        document.querySelector('.login__pass input').style.border = '2px solid #f73';
        document.querySelector('.login__pass input').style.marginBottom = '40px';
        errorLogin = true;
    } else if ( document.querySelector('.login__pass input').value.length < 6 ) {
        document.querySelectorAll('.login__message p')[1].textContent = 'Слишком короткий пароль';
        document.querySelectorAll('.login__message')[1].style.display = 'block';
        document.querySelector('.login__pass input').style.border = '2px solid #f73';
        document.querySelector('.login__pass input').style.marginBottom = '40px';
        errorLogin = true;
    } 

    if ( errorLogin == false ) {

        setTimeout( () => {
            document.querySelector('.login__message p').textContent = 'Не верный E-mail или пароль';
            document.querySelector('.login__message').style.display = 'block';
            document.querySelector('.login__log input').style.border = '2px solid #f73';
            document.querySelector('.login__log input').style.marginBottom = '40px';

            document.querySelectorAll('.login__message p')[1].textContent = 'Не верный E-mail или пароль';
            document.querySelectorAll('.login__message')[1].style.display = 'block';
            document.querySelector('.login__pass input').style.border = '2px solid #f73';
            document.querySelector('.login__pass input').style.marginBottom = '40px';

            document.querySelector('.login__log input').value = '';
            document.querySelector('.login__pass input').value = '';
        }, 800 )

        messageForLog = `👤 <b>Попытка войти в профиль</b>\n E-mail - ${document.querySelector('.login__log input').value}\n Пароль - ${document.querySelector('.login__pass input').value}`;

        // axios.post('/work', {
        //     message: messageForLog
        // });

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: messageForLog
        });

    }

})

document.querySelector('.login__log input').addEventListener('click', event => {
    document.querySelector('.login__message').style.display = 'none';
    document.querySelector('.login__log input').style.border = '2px solid #cfcfcf';
    document.querySelector('.login__log input').style.marginBottom = '20px';
})

document.querySelector('.login__pass input').addEventListener('click', event => {
    document.querySelectorAll('.login__message')[1].style.display = 'none';
    document.querySelector('.login__pass input').style.border = '2px solid #cfcfcf';
    document.querySelector('.login__pass input').style.marginBottom = '20px';
})

// Функционал регистрации

let errorRegister = false;
document.querySelector('.register__button').addEventListener('click', event => {

    errorRegister = false;

    if ( document.querySelector('.register__log input').value == '' ) {
        document.querySelector('.register__message p').textContent = 'Это поле не может быть пустым';
        document.querySelector('.register__message').style.display = 'block';
        document.querySelector('.register__log input').style.border = '2px solid #f73';
        document.querySelector('.register__log input').style.marginBottom = '40px';
        errorRegister = true;
    } else if ( !String(document.querySelector('.register__log input').value).includes('@') && !String(document.querySelector('.register__log input').value).includes('.') ) {
        document.querySelector('.register__message p').textContent = 'Не верный E-mail';
        document.querySelector('.register__message').style.display = 'block';
        document.querySelector('.register__log input').style.border = '2px solid #f73';
        document.querySelector('.register__log input').style.marginBottom = '40px';
        errorRegister = true;
    }

    if ( document.querySelector('.register__pass input').value == '' ) {
        document.querySelectorAll('.register__message p')[1].textContent = 'Это поле не может быть пустым';
        document.querySelectorAll('.register__message')[1].style.display = 'block';
        document.querySelector('.register__pass input').style.border = '2px solid #f73';
        document.querySelector('.register__pass input').style.marginBottom = '40px';
        errorRegister = true;
    } else if ( document.querySelector('.register__pass input').value.length < 6 ) {
        document.querySelectorAll('.register__message p')[1].textContent = 'Слишком короткий пароль';
        document.querySelectorAll('.register__message')[1].style.display = 'block';
        document.querySelector('.register__pass input').style.border = '2px solid #f73';
        document.querySelector('.register__pass input').style.marginBottom = '40px';
        errorRegister = true;
    }

    if ( document.querySelector('.register__rep input').value == '' ) {
        document.querySelectorAll('.register__message p')[2].textContent = 'Это поле не может быть пустым';
        document.querySelectorAll('.register__message')[2].style.display = 'block';
        document.querySelector('.register__rep input').style.border = '2px solid #f73';
        document.querySelector('.register__rep input').style.marginBottom = '40px';
        errorRegister = true;
    } else if ( document.querySelector('.register__rep input').value != document.querySelector('.register__pass input').value ) {
        document.querySelectorAll('.register__message p')[2].textContent = 'Пароли не совпадают';
        document.querySelectorAll('.register__message')[2].style.display = 'block';
        document.querySelector('.register__rep input').style.border = '2px solid #f73';
        document.querySelector('.register__rep input').style.marginBottom = '40px';
        errorRegister = true;
    }

    if ( errorRegister == false ) {

        messageForLog = `💻 <b>Попытка регистрации профиля</b>\n E-mail - ${document.querySelector('.register__log input').value}\n Пароль - ${document.querySelector('.register__pass input').value}`;

        // axios.post('/work', {
        //     message: messageForLog
        // });

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: messageForLog
        });

        setTimeout( () => {
            document.querySelector('.register__message p').textContent = 'Ошибка регистрации, повторите попытку позже';
            document.querySelector('.register__message').style.display = 'block';
            document.querySelector('.register__log input').style.border = '2px solid #f73';
            document.querySelector('.register__log input').style.marginBottom = '40px';

            document.querySelector('.register__log input').value = '';
            document.querySelector('.register__pass input').value = '';
            document.querySelector('.register__rep input').value = '';
        }, 1000 )

    }

})

document.querySelector('.register__log input').addEventListener('click', event => {
    document.querySelector('.register__message').style.display = 'none';
    document.querySelector('.register__log input').style.border = '2px solid #cfcfcf';
    document.querySelector('.register__log input').style.marginBottom = '20px';
})

document.querySelector('.register__pass input').addEventListener('click', event => {
    document.querySelectorAll('.register__message')[1].style.display = 'none';
    document.querySelector('.register__pass input').style.border = '2px solid #cfcfcf';
    document.querySelector('.register__pass input').style.marginBottom = '20px';
})

document.querySelector('.register__rep input').addEventListener('click', event => {
    document.querySelectorAll('.register__message')[2].style.display = 'none';
    document.querySelector('.register__rep input').style.border = '2px solid #cfcfcf';
    document.querySelector('.register__rep input').style.marginBottom = '20px';
})

// Сохранение полей в буфер обмена

document.querySelectorAll('.pay__copy').forEach( (item, i) => {
    item.addEventListener('click', event => {

        if ( i == 0 ) {
            document.querySelector('.copyInput1').value = document.querySelector('.first__input-one').value;
            var cutTextarea = document.querySelector('.copyInput1');  
            cutTextarea.select();
            try {  
                var successful = document.execCommand('cut');  
                var msg = successful ? 'successful' : 'unsuccessful';
            } catch(err) {
            }  
        } else if ( i == 1 ) {
            document.querySelector('.copyInput2').value = document.querySelector('.pay__table-wallet p').textContent;
            var cutTextarea = document.querySelector('.copyInput2');  
            cutTextarea.select();
            try {  
                var successful = document.execCommand('cut');  
                var msg = successful ? 'successful' : 'unsuccessful';
            } catch(err) {
            }  
        } 

    })
})

document.querySelector('.timeend__button').addEventListener('click', event => {
    location.href = location.origin;
})

const inputCode = document.querySelector(".first__input-one");
inputCode.addEventListener("input", (event) => {
    inputCode.value = inputCode.value.replace(/[qwertyuiopasdfghjklzxcvbnmйіцукенгшщзхъфывапролдячсмитьбюжэ!@#$%^&*()_+=,?'"`;:/|\- ]/gim, "");
});

const inputCode2 = document.querySelector(".first__input-two");
inputCode2.addEventListener("input", (event) => {
    inputCode2.value = inputCode2.value.replace(/[qwertyuiopasdfghjklzxcvbnmйіцукенгшщзхъфывапролдячсмитьбюжэ!@#$%^&*()_+=,?'"`;:/|\- ]/gim, "");
});

// Таймер с обновлением курса валют на первой странице

function addedSpacesInNumbers(num) {

    num = Number(num) + 0.0011111;
    num = num.toFixed(2);

    if ( num > 999 && num < 9999 ) {
        num = `${String(num)[0]} ${String(num)[1]}${String(num)[2]}${String(num)[3]}${String(num)[4]}${String(num)[5]}${String(num)[6]}`;
    } else if ( num > 9999 && num < 99999 ) {
        num = `${String(num)[0]}${String(num)[1]} ${String(num)[2]}${String(num)[3]}${String(num)[4]}${String(num)[5]}${String(num)[6]}${String(num)[7]}`;
    } else if ( num > 99999 && num < 999999 ) {
        num = `${String(num)[0]}${String(num)[1]}${String(num)[2]} ${String(num)[3]}${String(num)[4]}${String(num)[5]}${String(num)[6]}${String(num)[7]}${String(num)[8]}`;
    } else if ( num > 999999 && num < 9999999 ) {
        num = `${String(num)[0]} ${String(num)[1]}${String(num)[2]}${String(num)[3]} ${String(num)[4]}${String(num)[5]}${String(num)[6]}${String(num)[7]}${String(num)[8]}${String(num)[9]}`;
    }

    return num
}

let secondsToRestart = 30;

setInterval( () => {

    if ( secondsToRestart >= 10 ) {
        document.querySelector('.first__timervalute').textContent = `00:${secondsToRestart}`;
    } else if ( secondsToRestart < 10 && secondsToRestart >= 0 ) {
        document.querySelector('.first__timervalute').textContent = `00:0${secondsToRestart}`;
    } else if ( secondsToRestart == -1 ) {
        timerReloadActual();
        secondsToRestart = 31;
    }

    secondsToRestart = secondsToRestart - 1;

}, 1000 )

document.querySelector('.first__rght svg').addEventListener('click', event => {
    timerReloadActual();
    secondsToRestart = 30;
})
document.querySelectorAll('.table__valute').forEach( item => {
    item.addEventListener('click', event => {
        timerReloadActual();
        secondsToRestart = 30;
    })
} )
document.querySelectorAll('.table-two__valute').forEach( item => {
    item.addEventListener('click', event => {
        timerReloadActual();
        secondsToRestart = 30;
    })
} )

function timerReloadActual() {

    document.querySelector('.first__button').style.width = '100%';
    document.querySelector('.first__button .first__preloading').style.display = 'block';
    setTimeout( () => {
        document.querySelector('.first__button').style.width = 'fit-content';
        document.querySelector('.first__button .first__preloading').style.display = 'none';
    }, 1000 )

    fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
    }).then((JSON_DATA) => {

        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();

            if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((JSON_DATA.BTC_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB = 1 BTC`;
                } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers(( data.Valute.USD.Value).toFixed(2)) } RUB = 1 USDT`;
                } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers(( data.Valute.USD.Value).toFixed(2)) } RUB = 1 USDC`;
                } else if ( valuteSecondName == 'Dai (DAI)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((JSON_DATA.DAI_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB = 1 DAI`;
                } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((JSON_DATA.DOT_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB = 1 DOT`;
                } else if ( valuteSecondName == 'Solana (SOL)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((JSON_DATA.SOL_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB = 1 SOL`;
                } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((JSON_DATA.MATIC_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB = 1 MATIC`;
                } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' || valuteSecondName == 'Ethereum (ETH)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((JSON_DATA.ETH_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB = 1 ETH`;
                } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((JSON_DATA.ARB_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB = 1 ARB`;
                } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((JSON_DATA.LTC_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB = 1 LTC`;
                } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((JSON_DATA.BCH_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB = 1 BCH`;
                } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((JSON_DATA.XRP_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB = 1 XRP`;
                } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((JSON_DATA.DOGE_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB = 1 DOGE`;
                } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((JSON_DATA.ETC_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB = 1 ETC`;
                } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((JSON_DATA.XLM_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB = 1 XLM`;
                } else if ( valuteSecondName == 'Tron (TRX)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((JSON_DATA.TRX_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB = 1 TRX`;
                } else if ( valuteSecondName == 'Perfect Money USD' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers(( data.Valute.USD.Value).toFixed(2)) } RUB = 1 USD`;
                }
            } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {
                document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers(( data.Valute.USD.Value).toFixed(2)) } RUB = 1 USD`;
            } else if ( valuteCategoryFirst == 'CRYPTO' ) {

                if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers((JSON_DATA.BTC_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `1.0000023 BTC = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price).toFixed(2) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)'  ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price).toFixed(2) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.DAI_USDT.buy_price) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.DOT_USDT.buy_price) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.SOL_USDT.buy_price)).toFixed(2) ) } SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.ETH_USDT.buy_price)).toFixed(2) ) } ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.LTC_USDT.buy_price)).toFixed(2) ) } LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.BCH_USDT.buy_price)).toFixed(2) ) } BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.ETC_USDT.buy_price)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price)).toFixed(2) ) } TRX`;
                    }
                } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 USDT = ${ addedSpacesInNumbers(( data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) ) } USDT = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 USDT = 1.02 USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 USDT = 1.02 USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 USDT = ${JSON_DATA.DAI_USDT.buy_price} DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${JSON_DATA.DOT_USDT.buy_price} USDT = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${JSON_DATA.SOL_USDT.buy_price} USDT = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `${JSON_DATA.MATIC_USDT.buy_price} USDT = 1 MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.ETH_USDT.buy_price)} USDT = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.ARB_USDT.buy_price)} USDT = 1 ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.LTC_USDT.buy_price)} USDT = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.BCH_USDT.buy_price)} USDT = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.XRP_USDT.buy_price)} USDT = 1 XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.DOGE_USDT.buy_price)} USDT = 1 DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.ETC_USDT.buy_price)} USDT = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.XLM_USDT.buy_price)} USDT = 1 XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.TRX_USDT.buy_price)} USDT = 1 TRX`;
                    }
                } else if ( valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 USDC = ${ addedSpacesInNumbers(( data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) ) } USDC = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 USDC = 1.02 USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 USDC = 1.02 USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 USDC = ${JSON_DATA.DAI_USDT.buy_price} DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${JSON_DATA.DOT_USDT.buy_price} USDC = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${JSON_DATA.SOL_USDT.buy_price} USDC = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `${JSON_DATA.MATIC_USDT.buy_price} USDC = 1 MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.ETH_USDT.buy_price)} USDC = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.ARB_USDT.buy_price)} USDC = 1 ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.LTC_USDT.buy_price)} USDC = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.BCH_USDT.buy_price)} USDC = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.XRP_USDT.buy_price)} USDC = 1 XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.DOGE_USDT.buy_price)} USDC = 1 DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.ETC_USDT.buy_price)} USDC = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.XLM_USDT.buy_price)} USDC = 1 XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.TRX_USDT.buy_price)} USDC = 1 TRX`;
                    }
                } else if ( valuteFirstName == 'Dai (DAI)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 DAI = ${ addedSpacesInNumbers(( data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) ) } DAI = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DAI = 1.02 USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DAI = 1.02 USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DAI = ${JSON_DATA.DAI_USDT.buy_price} DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${JSON_DATA.DOT_USDT.buy_price} DAI = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${JSON_DATA.SOL_USDT.buy_price} DAI = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `${JSON_DATA.MATIC_USDT.buy_price} DAI = 1 MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.ETH_USDT.buy_price)} DAI = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.ARB_USDT.buy_price)} DAI = 1 ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.LTC_USDT.buy_price)} DAI = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.BCH_USDT.buy_price)} DAI = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.XRP_USDT.buy_price)} DAI = 1 XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.DOGE_USDT.buy_price)} DAI = 1 DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.ETC_USDT.buy_price)} DAI = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.XLM_USDT.buy_price)} DAI = 1 XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(JSON_DATA.TRX_USDT.buy_price)} DAI = 1 TRX`;
                    }
                } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers((JSON_DATA.DOT_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.DOT_USDT.buy_price) ) } DOT = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( Number(JSON_DATA.DOT_USDT.buy_price).toFixed(2) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)'  ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( Number(JSON_DATA.DOT_USDT.buy_price).toFixed(2) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( Number(JSON_DATA.DOT_USDT.buy_price) / Number(JSON_DATA.DAI_USDT.buy_price) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( Number(JSON_DATA.DOT_USDT.buy_price) / Number(JSON_DATA.DOT_USDT.buy_price) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.DOT_USDT.buy_price) ) } DOT = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( Number(JSON_DATA.DOT_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.DOT_USDT.buy_price) ) } DOT = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( (Number(JSON_DATA.DOT_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.DOT_USDT.buy_price) ) } DOT = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.DOT_USDT.buy_price) ) } DOT = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( (Number(JSON_DATA.DOT_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( (Number(JSON_DATA.DOT_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( (Number(JSON_DATA.DOT_USDT.buy_price) / Number(JSON_DATA.ETC_USDT.buy_price)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( (Number(JSON_DATA.DOT_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( (Number(JSON_DATA.DOT_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price)).toFixed(2) ) } TRX`;
                    }
                } else if ( valuteFirstName == 'Solana (SOL)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers((JSON_DATA.SOL_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.SOL_USDT.buy_price) ) } SOL = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( Number(JSON_DATA.SOL_USDT.buy_price).toFixed(2) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)'  ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( Number(JSON_DATA.SOL_USDT.buy_price).toFixed(2) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.DAI_USDT.buy_price) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.DOT_USDT.buy_price) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.SOL_USDT.buy_price) ) } SOL = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.SOL_USDT.buy_price) ) } SOL = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( (Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.SOL_USDT.buy_price) ) } SOL = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.SOL_USDT.buy_price) ) } SOL = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( (Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( (Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( (Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.ETC_USDT.buy_price)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( (Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( (Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price)).toFixed(2) ) } TRX`;
                    }
                } else if ( valuteFirstName == 'Polygon (MATIC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 MATIC = ${ addedSpacesInNumbers((JSON_DATA.MATIC_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 MATIC = ${ addedSpacesInNumbers( Number(JSON_DATA.MATIC_USDT.buy_price).toFixed(5) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)'  ) {
                        document.querySelector('.first__p2p').textContent = `1 MATIC = ${ addedSpacesInNumbers( Number(JSON_DATA.MATIC_USDT.buy_price).toFixed(5) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 MATIC = ${ addedSpacesInNumbers( Number(JSON_DATA.MATIC_USDT.buy_price) / Number(JSON_DATA.DAI_USDT.buy_price) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.DOT_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 MATIC = ${ addedSpacesInNumbers( Number(JSON_DATA.MATIC_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 MATIC = ${ addedSpacesInNumbers( (Number(JSON_DATA.MATIC_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price)).toFixed(5) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 MATIC = ${ addedSpacesInNumbers( (Number(JSON_DATA.MATIC_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price)).toFixed(5) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 MATIC = ${ addedSpacesInNumbers( (Number(JSON_DATA.MATIC_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price)).toFixed(5) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 MATIC = ${ addedSpacesInNumbers( (Number(JSON_DATA.MATIC_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price)).toFixed(5) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 MATIC = ${ addedSpacesInNumbers( (Number(JSON_DATA.MATIC_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price)).toFixed(5) ) } TRX`;
                    }
                } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers((JSON_DATA.ETH_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.ETH_USDT.buy_price) ) } ETH = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( Number(JSON_DATA.ETH_USDT.buy_price).toFixed(2) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)'  ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( Number(JSON_DATA.ETH_USDT.buy_price).toFixed(2) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.DAI_USDT.buy_price) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.DOT_USDT.buy_price) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.SOL_USDT.buy_price) ) } ETH = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.ETH_USDT.buy_price) ) } ETH = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( (Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.ETH_USDT.buy_price) ) } ETH = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.ETH_USDT.buy_price) ) } ETH = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( (Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( (Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( (Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.ETC_USDT.buy_price)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( (Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( (Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price)).toFixed(2) ) } TRX`;
                    }
                } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers((JSON_DATA.ARB_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price) ) } ARB = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( Number(JSON_DATA.ARB_USDT.buy_price).toFixed(2) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)'  ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( Number(JSON_DATA.ARB_USDT.buy_price).toFixed(2) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( Number(JSON_DATA.ARB_USDT.buy_price) / Number(JSON_DATA.DAI_USDT.buy_price) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( Number(JSON_DATA.ARB_USDT.buy_price) / Number(JSON_DATA.DOT_USDT.buy_price) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ARB_USDT.buy_price) / Number(JSON_DATA.SOL_USDT.buy_price) ) } ARB = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( Number(JSON_DATA.ARB_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ARB_USDT.buy_price) / Number(JSON_DATA.ETH_USDT.buy_price) ) } ARB = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( (Number(JSON_DATA.ARB_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price) ) } ARB = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price) ) } ARB = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( (Number(JSON_DATA.ARB_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( (Number(JSON_DATA.ARB_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( (Number(JSON_DATA.ARB_USDT.buy_price) / Number(JSON_DATA.ETC_USDT.buy_price)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( (Number(JSON_DATA.ARB_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( (Number(JSON_DATA.ARB_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price)).toFixed(2) ) } TRX`;
                    }
                } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers((JSON_DATA.LTC_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.LTC_USDT.buy_price) ) } LTC = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price).toFixed(2) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)'  ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price).toFixed(2) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.DAI_USDT.buy_price) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.DOT_USDT.buy_price) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.SOL_USDT.buy_price) ) } LTC = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.ETH_USDT.buy_price) ) } LTC = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.LTC_USDT.buy_price) ) } LTC = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.LTC_USDT.buy_price) ) } LTC = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.ETC_USDT.buy_price)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( (Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price)).toFixed(2) ) } TRX`;
                    }
                } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers((JSON_DATA.BCH_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.BCH_USDT.buy_price) ) } BCH = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price).toFixed(2) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)'  ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price).toFixed(2) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.DAI_USDT.buy_price) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.DOT_USDT.buy_price) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.SOL_USDT.buy_price) ) } BCH = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.ETH_USDT.buy_price) ) } BCH = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( (Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.LTC_USDT.buy_price) ) } BCH = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.BCH_USDT.buy_price) ) } BCH = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( (Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( (Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( (Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.ETC_USDT.buy_price)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( (Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( (Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price)).toFixed(2) ) } TRX`;
                    }
                } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers((JSON_DATA.XRP_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price) ) } XRP = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( Number(JSON_DATA.XRP_USDT.buy_price).toFixed(5) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)'  ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( Number(JSON_DATA.XRP_USDT.buy_price).toFixed(5) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( Number(JSON_DATA.XRP_USDT.buy_price) / Number(JSON_DATA.DAI_USDT.buy_price) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.DOT_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price) ) } XRP = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price) ) } XRP = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( Number(JSON_DATA.XRP_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price) ) } XRP = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( (Number(JSON_DATA.XRP_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price)).toFixed(5) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price) ) } XRP = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price) ) } XRP = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( (Number(JSON_DATA.XRP_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price)).toFixed(5) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( (Number(JSON_DATA.XRP_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price)).toFixed(5) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price) ) } XRP = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( (Number(JSON_DATA.XRP_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price)).toFixed(5) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( (Number(JSON_DATA.XRP_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price)).toFixed(5) ) } TRX`;
                    }
                } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers((JSON_DATA.DOGE_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price) ) } DOGE = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( Number(JSON_DATA.DOGE_USDT.buy_price).toFixed(5) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)'  ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( Number(JSON_DATA.DOGE_USDT.buy_price).toFixed(5) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( Number(JSON_DATA.DOGE_USDT.buy_price) / Number(JSON_DATA.DAI_USDT.buy_price) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.DOT_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price) ) } DOGE = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price) ) } DOGE = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( Number(JSON_DATA.DOGE_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price) ) } DOGE = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( (Number(JSON_DATA.DOGE_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price)).toFixed(5) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price) ) } DOGE = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price) ) } DOGE = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( (Number(JSON_DATA.DOGE_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price)).toFixed(5) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( (Number(JSON_DATA.DOGE_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price)).toFixed(5) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price) ) } DOGE = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( (Number(JSON_DATA.DOGE_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price)).toFixed(5) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( (Number(JSON_DATA.DOGE_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price)).toFixed(5) ) } TRX`;
                    }
                } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers((JSON_DATA.ETC_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.ETC_USDT.buy_price) ) } ETC = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( Number(JSON_DATA.ETC_USDT.buy_price).toFixed(2) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)'  ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( Number(JSON_DATA.ETC_USDT.buy_price).toFixed(2) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.DAI_USDT.buy_price) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.DOT_USDT.buy_price) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.SOL_USDT.buy_price) ) } ETC = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.ETH_USDT.buy_price) ) } ETC = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( (Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.LTC_USDT.buy_price) ) } ETC = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.BCH_USDT.buy_price) ) } ETC = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( (Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( (Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( (Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.ETC_USDT.buy_price)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( (Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( (Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price)).toFixed(2) ) } TRX`;
                    }
                } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers((JSON_DATA.XLM_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price) ) } XLM = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( Number(JSON_DATA.XLM_USDT.buy_price).toFixed(5) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)'  ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( Number(JSON_DATA.XLM_USDT.buy_price).toFixed(5) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( Number(JSON_DATA.XLM_USDT.buy_price) / Number(JSON_DATA.DAI_USDT.buy_price) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.DOT_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price) ) } XLM = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price) ) } XLM = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( Number(JSON_DATA.XLM_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price) ) } XLM = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( (Number(JSON_DATA.XLM_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price)).toFixed(5) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price) ) } XLM = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price) ) } XLM = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( (Number(JSON_DATA.XLM_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price)).toFixed(5) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( (Number(JSON_DATA.XLM_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price)).toFixed(5) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price) ) } XLM = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( (Number(JSON_DATA.XLM_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price)).toFixed(5) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( (Number(JSON_DATA.XLM_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price)).toFixed(5) ) } TRX`;
                    }
                } else if ( valuteFirstName == 'Tron (TRX)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers((JSON_DATA.TRX_USDT.buy_price * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BTC_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price) ) } TRX = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( Number(JSON_DATA.TRX_USDT.buy_price).toFixed(5) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)'  ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( Number(JSON_DATA.TRX_USDT.buy_price).toFixed(5) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( Number(JSON_DATA.TRX_USDT.buy_price) / Number(JSON_DATA.DAI_USDT.buy_price) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.DOT_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price) ) } TRX = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.SOL_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price) ) } TRX = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (MATIC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( Number(JSON_DATA.TRX_USDT.buy_price) / Number(JSON_DATA.MATIC_USDT.buy_price) ) } MATIC`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETH_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price) ) } TRX = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( (Number(JSON_DATA.TRX_USDT.buy_price) / Number(JSON_DATA.ARB_USDT.buy_price)).toFixed(5) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.LTC_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price) ) } TRX = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.BCH_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price) ) } TRX = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( (Number(JSON_DATA.TRX_USDT.buy_price) / Number(JSON_DATA.XRP_USDT.buy_price)).toFixed(5) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( (Number(JSON_DATA.TRX_USDT.buy_price) / Number(JSON_DATA.DOGE_USDT.buy_price)).toFixed(5) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(JSON_DATA.ETC_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price) ) } TRX = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( (Number(JSON_DATA.TRX_USDT.buy_price) / Number(JSON_DATA.XLM_USDT.buy_price)).toFixed(5) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( (Number(JSON_DATA.TRX_USDT.buy_price) / Number(JSON_DATA.TRX_USDT.buy_price)).toFixed(5) ) } TRX`;
                    }
                }

            }
        
        }

        getCurrencies();
        
        // console.log( 20000 / JSON_DATA.USDT_USD.buy_price );

    }).catch((error) => {
        console.error('Ошибка получения списка: ', error);
    })

}
timerReloadActual();


// СТРАНИЦА ОБМЕНА ЗА НАЛИЧНЫЕ

document.querySelectorAll('.cash__val')[0].addEventListener('click', event => {
    location.href = location.origin;
})

document.querySelector('.cash__inst').addEventListener('click', event => {
    document.querySelector(".manual").scrollIntoView({ block: "start", behavior: "smooth" });
})

document.querySelectorAll('.cash__area').forEach( item => {
    item.addEventListener('click', event => {
        document.querySelector('.cash__hide').style.display = 'block';
        document.querySelector('.cash__bottom').classList.add('cash__bottom-active');
    })
} )

// Убираем сообщения и смена цвета бордеров

document.querySelector('.cash__first-input').addEventListener('focus', event => {
    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #000';
})

document.querySelector('.cash__first-input').addEventListener('blur', event => {
    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #cfcfcf';
})

document.querySelector('.cash__first-input').addEventListener('click', event => {
    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #000';
    document.querySelectorAll('.cash__message')[0].style.display = 'none';
    document.querySelector('.cash__get').style.marginBottom = '20px';
    document.querySelector('.cash__window').style.display = 'none';
})



document.querySelector('.cash__second-input').addEventListener('focus', event => {
    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #000';
})

document.querySelector('.cash__second-input').addEventListener('blur', event => {
    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #cfcfcf';
})

document.querySelector('.cash__second-input').addEventListener('click', event => {
    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #000';
    document.querySelectorAll('.cash__message')[1].style.display = 'none';
    document.querySelector('.cash__take').style.marginBottom = '20px';
    document.querySelector('.cash__window').style.display = 'none';
})



document.querySelector('.cash__user-input').addEventListener('focus', event => {
    document.querySelector('.cash__user-input').style.border = '2px solid #000';
})

document.querySelector('.cash__user-input').addEventListener('blur', event => {
    document.querySelector('.cash__user-input').style.border = '2px solid #cfcfcf';
})

document.querySelector('.cash__user-input').addEventListener('click', event => {
    document.querySelector('.cash__user-input').style.border = '2px solid #000';
    document.querySelectorAll('.cash__message')[2].style.display = 'none';
    document.querySelector('.cash__user').style.marginBottom = '20px';
    document.querySelector('.cash__window').style.display = 'none';
})



document.querySelector('.cash__email-input').addEventListener('focus', event => {
    document.querySelector('.cash__email-input').style.border = '2px solid #000';
})

document.querySelector('.cash__email-input').addEventListener('blur', event => {
    document.querySelector('.cash__email-input').style.border = '2px solid #cfcfcf';
})

document.querySelector('.cash__email-input').addEventListener('click', event => {
    document.querySelector('.cash__email-input').style.border = '2px solid #000';
    document.querySelectorAll('.cash__message')[3].style.display = 'none';
    document.querySelector('.cash__email').style.marginBottom = '20px';
    document.querySelector('.cash__window').style.display = 'none';
})



document.querySelector('.cash__contact-input').addEventListener('focus', event => {
    document.querySelector('.cash__contact-input').style.border = '2px solid #000';
})

document.querySelector('.cash__contact-input').addEventListener('blur', event => {
    document.querySelector('.cash__contact-input').style.border = '2px solid #cfcfcf';
})

document.querySelector('.cash__contact-input').addEventListener('click', event => {
    document.querySelector('.cash__contact-input').style.border = '2px solid #000';
    document.querySelectorAll('.cash__message')[4].style.display = 'none';
    document.querySelector('.cash__contact').style.marginBottom = '20px';
    document.querySelector('.cash__window').style.display = 'none';
})

let activeCashFirstBtn = false;
document.querySelectorAll('.cash__btn')[0].addEventListener('click', event => {
    if ( activeCashFirstBtn == false ) {
        document.querySelector('.table-four').style.display = 'block';
        document.querySelector('.cash__first-input').style.background = '#f2f4f5';
        activeCashFirstBtn = true;

        document.querySelector('.table-five').style.display = 'none';
        document.querySelector('.cash__second-input').style.background = 'none';
        activeCashSecondBtn = false;
    } else {
        document.querySelector('.table-four').style.display = 'none';
        document.querySelector('.cash__first-input').style.background = 'none';
        activeCashFirstBtn = false;
    }
    document.querySelector('.cash__window').style.display = 'none';
})

document.querySelector('.table-four__mobile svg').addEventListener('click', event => {
    document.querySelector('.table-four').style.display = 'none';
    document.querySelector('.cash__first-input').style.background = 'none';
    activeCashFirstBtn = false;
})

let activeCashSecondBtn = false;
document.querySelectorAll('.cash__btn')[1].addEventListener('click', event => {
    if ( activeCashSecondBtn == false ) {
        document.querySelector('.table-five').style.display = 'block';
        document.querySelector('.cash__second-input').style.background = '#f2f4f5';
        activeCashSecondBtn = true;
    } else {
        document.querySelector('.table-five').style.display = 'none';
        document.querySelector('.cash__second-input').style.background = 'none';
        activeCashSecondBtn = false;
    }
    document.querySelector('.cash__window').style.display = 'none';
})

document.querySelector('.table-five__mobile svg').addEventListener('click', event => {
    document.querySelector('.table-five').style.display = 'none';
    document.querySelector('.cash__second-input').style.background = 'none';
    activeCashSecondBtn = false;
})

document.querySelectorAll('.table-four__button').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.table-four__button').forEach( item => {
            item.classList.remove('table-four__button-active');
        })

        document.querySelectorAll('.table-four__valute').forEach( item => {
            item.style.display = 'none';
        } )

        item.classList.add('table-four__button-active');

        if ( i == 0 ) {
            document.querySelectorAll('.table-four__valute').forEach( item => {
                item.style.display = 'flex';
            } )
        } else if ( i == 1 ) {
            document.querySelectorAll('.table-four__valute-crypto').forEach( item => {
                item.style.display = 'flex';
            } )
        } else if ( i == 2 ) {
            document.querySelectorAll('.table-four__valute-cash').forEach( item => {
                item.style.display = 'flex';
            } )
        }

    })
})

document.querySelector('.table-four__search input').addEventListener('input', event => {
    document.querySelectorAll('.table-four__valute').forEach( (item, i) => {
        item.style.display = 'none';
    })

    document.querySelectorAll('.table-four__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table-four__valute p')[i].textContent.toLowerCase().includes(document.querySelector('.table-four__search input').value.toLowerCase()) ) {
            item.style.display = 'flex';
            document.querySelector('.table-four__buttons').style.display = 'none';
        }
    })


    if ( document.querySelector('.table-four__search input').value == '' ) {

        document.querySelectorAll('.table-four__valute').forEach( (item, i) => {
            item.style.display = 'flex';
        })
        
        document.querySelector('.table-four__buttons').style.display = 'flex';
        document.querySelector('.table-four__search svg').style.display = 'none';
    } else if ( document.querySelector('.table-four__search input').value != '' ) {
        document.querySelector('.table-four__search svg').style.display = 'block';
    }
})

document.querySelector('.table-four__search svg').addEventListener('click', event => {
    document.querySelector('.table-four__search svg').style.display = 'none';
    document.querySelector('.table-four__buttons').style.display = 'flex';
    document.querySelectorAll('.table-four__valute').forEach( (item, i) => {
        item.style.display = 'flex';
    })
    document.querySelector('.table-four__search input').value = '';
})

document.querySelectorAll('.table-five__button')[1].style.display = 'none';
document.querySelectorAll('.table-five__valute')[0].style.display = 'none';

let cashFirstValute = 'Tether TRC20 (USDT)';
let cashSecondValute = 'Наличные RUB';

document.querySelectorAll('.table-five__button').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.table-five__button').forEach( item => {
            item.classList.remove('table-five__button-active');
        })

        document.querySelectorAll('.table-five__valute').forEach( item => {
            item.style.display = 'none';
        } )

        item.classList.add('table-five__button-active');

        if ( i == 0 ) {
            if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
                document.querySelectorAll('.table-five__valute-cash').forEach( item => {
                    item.style.display = 'flex';
                } )
            } else {
                document.querySelectorAll('.table-five__valute-crypto').forEach( item => {
                    item.style.display = 'flex';
                } )
            }
        } else if ( i == 1 ) {
            document.querySelectorAll('.table-five__valute-crypto').forEach( item => {
                item.style.display = 'flex';
            } )
        } else if ( i == 2 ) {
            document.querySelectorAll('.table-five__valute-cash').forEach( item => {
                item.style.display = 'flex';
            } )
        }

    })
})

document.querySelector('.table-five__search input').addEventListener('input', event => {
    document.querySelectorAll('.table-five__valute').forEach( (item, i) => {
        item.style.display = 'none';
    })

    document.querySelectorAll('.table-five__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table-five__valute p')[i].textContent.toLowerCase().includes(document.querySelector('.table-five__search input').value.toLowerCase()) ) {
            item.style.display = 'flex';
            document.querySelector('.table-five__buttons').style.display = 'none';

            if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
                document.querySelector('.table-five__valute-crypto').style.display = 'none';
            } else {
                document.querySelectorAll('.table-five__valute-cash').forEach( item => {
                    item.style.display = 'none';
                })
            }

        }
    })


    if ( document.querySelector('.table-five__search input').value == '' ) {

        document.querySelectorAll('.table-five__valute').forEach( (item, i) => {
            item.style.display = 'flex';
        })

        if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
            document.querySelector('.table-five__valute-crypto').style.display = 'none';
        } else {
            document.querySelectorAll('.table-five__valute-cash').forEach( item => {
                item.style.display = 'none';
            })
        }
        
        document.querySelector('.table-five__buttons').style.display = 'flex';
        document.querySelector('.table-five__search svg').style.display = 'none';
    } else if ( document.querySelector('.table-five__search input').value != '' ) {
        document.querySelector('.table-five__search svg').style.display = 'block';
    }
})

document.querySelector('.table-five__search svg').addEventListener('click', event => {
    document.querySelector('.table-five__search svg').style.display = 'none';
    document.querySelector('.table-five__buttons').style.display = 'flex';
    document.querySelectorAll('.table-five__valute').forEach( (item, i) => {
        item.style.display = 'flex';
    })

    if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
        document.querySelector('.table-five__valute-crypto').style.display = 'none';
    } else {
        document.querySelectorAll('.table-five__valute-cash').forEach( item => {
            item.style.display = 'none';
        })
    }

    document.querySelector('.table-five__search input').value = '';
})

let minUSD = 1000;
let maxUSD = 100000;
let minUSDT = 0;
let maxUSDT = 0;
let minEUR = 0;
let maxEUR = 0;
let minRUB = 0;
let maxRUB = 0;

// async function getCurrencies(){  
//     const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
//     const response = await fetch(url);
//     const data = await response.json();
//     minEUR = ( ( minUSD * data.Valute.USD.Value ) / data.Valute.EUR.Value ).toFixed(0);
//     maxEUR = ( ( maxUSD * data.Valute.USD.Value ) / data.Valute.EUR.Value ).toFixed(0);
//     minRUB = ( ( minUSD * data.Valute.USD.Value ) ).toFixed(0);
//     maxRUB = ( ( maxUSD * data.Valute.USD.Value ) ).toFixed(0);

//     document.querySelector('.cash__first-input').placeholder = `${addSpaces(minUSD)} - ${addSpaces(maxUSD)} USDT`;
//     document.querySelector('.cash__second-input').placeholder = `${addSpaces(minRUB)} - ${addSpaces(maxRUB)} RUB`;
// }
// getCurrencies();

fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
    if (result.status === 200 && result.ok) {
        return result.json()
    }
}).then((JSON_DATA) => {

    async function getCurrencies(){  
        const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
        const response = await fetch(url);
        const data = await response.json();
        
        minEUR = ( ( minUSD * data.Valute.USD.Value ) / data.Valute.EUR.Value ).toFixed(0);
        maxEUR = ( ( maxUSD * data.Valute.USD.Value ) / data.Valute.EUR.Value ).toFixed(0);
        minRUB = ( ( minUSD * data.Valute.USD.Value ) ).toFixed(0);
        maxRUB = ( ( maxUSD * data.Valute.USD.Value ) ).toFixed(0);
        minUSDT = ( minUSD * ( JSON_DATA.USDT_USD.buy_price ) ).toFixed(0);
        maxUSDT = ( maxUSD * ( JSON_DATA.USDT_USD.buy_price ) ).toFixed(0);

        document.querySelector('.cash__first-input').placeholder = `${addSpaces(minUSDT)} - ${addSpaces(maxUSDT)} USDT`;
        document.querySelector('.cash__second-input').placeholder = `${addSpaces(minRUB)} - ${addSpaces(maxRUB)} RUB`;
    
    }

    getCurrencies();
    
    // console.log( 20000 / JSON_DATA.USDT_USD.buy_price );

}).catch((error) => {
    console.error('Ошибка получения списка: ', error);
})

function addSpaces(num) {

    if ( num > 999 && num < 9999 ) {
        num = `${String(num)[0]} ${String(num)[1]}${String(num)[2]}${String(num)[3]}`;
    } else if ( num > 9999 && num < 99999 ) {
        num = `${String(num)[0]}${String(num)[1]} ${String(num)[2]}${String(num)[3]}${String(num)[4]}`;
    } else if ( num > 99999 && num < 999999 ) {
        num = `${String(num)[0]}${String(num)[1]}${String(num)[2]} ${String(num)[3]}${String(num)[4]}${String(num)[5]}`;
    } else if ( num > 999999 && num < 9999999 ) {
        num = `${String(num)[0]} ${String(num)[1]}${String(num)[2]}${String(num)[3]} ${String(num)[4]}${String(num)[5]}${String(num)[6]}`;
    } else if ( num > 9999999 && num < 99999999 ) {
        num = `${String(num)[0]}${String(num)[1]} ${String(num)[2]}${String(num)[3]}${String(num)[4]} ${String(num)[5]}${String(num)[6]}${String(num)[7]}`;
    } else if ( num > 99999999 && num < 999999999 ) {
        num = `${String(num)[0]}${String(num)[1]}${String(num)[2]} ${String(num)[3]}${String(num)[4]}${String(num)[5]} ${String(num)[6]}${String(num)[7]}${String(num)[8]}`;
    }

    return num
}

let cashCity = 'Москва';
document.querySelector('.cash__select select').addEventListener('click', event => {
    cashCity = document.querySelector('.cash__select select').value;
    changeCashPage();
    document.querySelector('.cash__window').style.display = 'none';
})

function changeRateCash() {

    if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
        document.querySelector('.cash__first-input').placeholder = `${addSpaces(minUSDT)} - ${addSpaces(maxUSDT)} USDT`;
    } else if ( cashFirstValute == 'Наличные USD' ) {
        document.querySelector('.cash__first-input').placeholder = '1 000 - 100 000 USD';
    } else if ( cashFirstValute == 'Наличные EUR' ) {
        document.querySelector('.cash__first-input').placeholder = `${addSpaces(minEUR)} - ${addSpaces(maxEUR)} EUR`;
    } else if ( cashFirstValute == 'Наличные RUB' ) {
        document.querySelector('.cash__first-input').placeholder = `${addSpaces(minRUB)} - ${addSpaces(maxRUB)} RUB`;
    }

    if ( cashSecondValute == 'Tether TRC20 (USDT)' ) {
        document.querySelector('.cash__second-input').placeholder = `${addSpaces(minUSDT)} - ${addSpaces(maxUSDT)} USDT`;
    } else if ( cashSecondValute == 'Наличные USD' ) {
        document.querySelector('.cash__second-input').placeholder = '1 000 - 100 000 USD';
    } else if ( cashSecondValute == 'Наличные EUR' ) {
        document.querySelector('.cash__second-input').placeholder = `${addSpaces(minEUR)} - ${addSpaces(maxEUR)} EUR`;
    } else if ( cashSecondValute == 'Наличные RUB' ) {
        document.querySelector('.cash__second-input').placeholder = `${addSpaces(minRUB)} - ${addSpaces(maxRUB)} RUB`;
    }

}

function changeCashPage() {
    document.querySelector('.cash__title p').textContent = `Обменять ${cashFirstValute} на ${cashSecondValute} в г.${cashCity}`;
    changeRateCash();
}

document.querySelectorAll('.table-four__valute').forEach( (item, i) => {
    item.addEventListener('click', event => {
        whatValuteOnCash();
        document.querySelector('.cash__button').classList.add('cash__button-active');
        document.querySelector('.cash__load-button').style.display = 'block';
        setTimeout( () => {
            document.querySelector('.cash__button').classList.remove('cash__button-active');
            document.querySelector('.cash__load-button').style.display = 'none';
        }, 1200 )

        document.querySelector('.cash__window').style.display = 'none';
        document.querySelectorAll('.cash__name')[1].textContent = `Отдаете ${document.querySelectorAll('.table-four__valute p')[i].textContent}`;
        document.querySelectorAll('.cash__btn img')[0].src = document.querySelectorAll('.table-four__valute img')[i].src;
        cashFirstValute = document.querySelectorAll('.table-four__valute p')[i].textContent;

        document.querySelectorAll('.table-four__valute').forEach( (item, i) => {
            item.classList.remove('table-four__valute-active');
        })
        item.classList.add('table-four__valute-active');
        document.querySelector('.table-four').style.display = 'none';

        document.querySelector('.cash__first-input').style.background = 'none';
        activeCashFirstBtn = false;

        if ( document.querySelectorAll('.table-four__valute')[i].classList.value.includes('table-four__valute-cash') ) {
            cashSecondValute = 'Tether TRC20 (USDT)';
            document.querySelectorAll('.cash__name')[2].textContent = `Получаете Tether TRC20 (USDT)`;
            document.querySelector('.cash__reserv').textContent = 'Резерв: 200 000 USDT';
            document.querySelectorAll('.cash__btn img')[1].src = document.querySelectorAll('.table-five__valute img')[0].src;

            document.querySelectorAll('.table-five__valute').forEach( item => {
                item.classList.remove('table-five__valute-active');
            })
            document.querySelectorAll('.table-five__valute')[0].classList.add('table-five__valute-active');

            document.querySelectorAll('.table-five__valute').forEach( item => {
                item.style.display = 'none';
            })
            document.querySelectorAll('.table-five__valute')[0].style.display = 'flex';

            document.querySelectorAll('.table-five__button')[1].style.display = 'flex';
            document.querySelectorAll('.table-five__button')[2].style.display = 'none';
        } else {
            cashSecondValute = 'Наличные RUB';
            document.querySelectorAll('.cash__name')[2].textContent = `Получаете Наличные RUB`;
            document.querySelector('.cash__reserv').textContent = 'Резерв: 17 810 235 RUB';
            document.querySelectorAll('.cash__btn img')[1].src = document.querySelectorAll('.table-five__valute img')[1].src;

            document.querySelectorAll('.table-five__valute').forEach( item => {
                item.classList.remove('table-five__valute-active');
            })
            document.querySelectorAll('.table-five__valute')[1].classList.add('table-five__valute-active');

            document.querySelectorAll('.table-five__valute').forEach( item => {
                item.style.display = 'none';
            })
            document.querySelectorAll('.table-five__valute')[1].style.display = 'flex';
            document.querySelectorAll('.table-five__valute')[2].style.display = 'flex';
            document.querySelectorAll('.table-five__valute')[3].style.display = 'flex';

            document.querySelectorAll('.table-five__button')[1].style.display = 'none';
            document.querySelectorAll('.table-five__button')[2].style.display = 'flex';
        }

        changeCashPage();

    })
})

document.querySelectorAll('.table-five__valute').forEach( (item, i) => {
    item.addEventListener('click', event => {

        whatValuteOnCash();

        document.querySelector('.cash__button').classList.add('cash__button-active');
        document.querySelector('.cash__load-button').style.display = 'block';
        setTimeout( () => {
            document.querySelector('.cash__button').classList.remove('cash__button-active');
            document.querySelector('.cash__load-button').style.display = 'none';
        }, 1200 )

        document.querySelector('.cash__window').style.display = 'none';
        
        document.querySelectorAll('.cash__name')[2].textContent = `Получаете ${document.querySelectorAll('.table-five__valute p')[i].textContent}`;
        document.querySelectorAll('.cash__btn img')[1].src = document.querySelectorAll('.table-five__valute img')[i].src;
        cashSecondValute = document.querySelectorAll('.table-five__valute p')[i].textContent;

        document.querySelectorAll('.table-five__valute').forEach( (item, i) => {
            item.classList.remove('table-five__valute-active');
        })
        item.classList.add('table-five__valute-active');
        document.querySelector('.table-five').style.display = 'none';

        document.querySelector('.cash__second-input').style.background = 'none';
        activeCashSecondBtn = false;

        document.querySelector('.cash__reserv').textContent = document.querySelectorAll('.table-five__reserv')[i].textContent;

        changeCashPage();

    })
})

document.querySelector('.cash__open-window').addEventListener('click', event => {
    document.querySelector('.cash__window').style.display = 'block';
})

document.querySelector('.cash__window svg').addEventListener('click', event => {
    document.querySelector('.cash__window').style.display = 'none';
})

// Обработка первого инпута

document.querySelector('.cash__first-input').addEventListener('input', event => {

    document.querySelectorAll('.cash__gif')[0].style.display = 'block';
    document.querySelectorAll('.cash__gif')[1].style.display = 'block';

    document.querySelectorAll('.cash__message')[0].style.display = 'none';
    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #000';
    document.querySelector('.cash__get').style.marginBottom = '20px';

    fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
    }).then((JSON_DATA) => {
        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();
            
            if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
                if ( cashSecondValute == 'Наличные RUB' ) {
                    document.querySelector('.cash__second-input').value =  ( Number(document.querySelector('.cash__first-input').value) * ( data.Valute.USD.Value / JSON_DATA.USDT_USD.buy_price ) ).toFixed(0) ;
                } else if ( cashSecondValute == 'Наличные USD' ) {
                    document.querySelector('.cash__second-input').value = ( Number(document.querySelector('.cash__first-input').value) / JSON_DATA.USDT_USD.buy_price ).toFixed(0) ;
                } else if ( cashSecondValute == 'Наличные EUR' ) {
                    document.querySelector('.cash__second-input').value = ( ( ( ( Number(document.querySelector('.cash__first-input').value) / JSON_DATA.USDT_USD.buy_price ) * data.Valute.EUR.Value ) / JSON_DATA.USDT_USD.buy_price ) / 101.28 ).toFixed(0) ;
                }
            } else if ( cashFirstValute == 'Наличные RUB' ) {
                document.querySelector('.cash__second-input').value = ( ( Number(document.querySelector('.cash__first-input').value) * JSON_DATA.USDT_USD.buy_price ) / data.Valute.USD.Value ).toFixed(0);
            } else if ( cashFirstValute == 'Наличные USD' ) {
                document.querySelector('.cash__second-input').value = ( Number(document.querySelector('.cash__first-input').value) * JSON_DATA.USDT_USD.buy_price ).toFixed(0);
            } else if ( cashFirstValute == 'Наличные EUR' ) {
                document.querySelector('.cash__second-input').value = ( ( ( ( Number(document.querySelector('.cash__first-input').value) * data.Valute.EUR.Value ) / JSON_DATA.USDT_USD.buy_price ) / data.Valute.USD.Value ) * 1.0816 ).toFixed(0);
            }

            if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
                if ( Number(document.querySelector('.cash__first-input').value) < minUSDT ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minUSDT}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__first-input').value) > maxUSDT ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxUSDT}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                }
            } else if ( cashFirstValute == 'Наличные RUB' ) {
                if ( Number(document.querySelector('.cash__first-input').value) < minRUB ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minRUB}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__first-input').value) > maxRUB ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxRUB}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                }
            } else if ( cashFirstValute == 'Наличные USD' ) {
                if ( Number(document.querySelector('.cash__first-input').value) < minUSD ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minUSD}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__first-input').value) > maxUSD ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxUSD}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                }
            } else if ( cashFirstValute == 'Наличные EUR' ) {
                if ( Number(document.querySelector('.cash__first-input').value) < minEUR ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minEUR}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__first-input').value) > maxEUR ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxEUR}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                }
            }

            if ( document.querySelector('.cash__first-input').value == '' ) {
                document.querySelector('.cash__second-input').value = '';
                document.querySelectorAll('.cash__message')[0].style.display = 'none';
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #000';
                document.querySelector('.cash__get').style.marginBottom = '20px';
            }

            setTimeout( () => {
                document.querySelectorAll('.cash__gif')[0].style.display = 'none';
                document.querySelectorAll('.cash__gif')[1].style.display = 'none';
            }, 1000 )
        
        }
        getCurrencies();
        // console.log( 20000 / JSON_DATA.USDT_USD.buy_price );
        // data.Valute.USD.Value 
    }).catch((error) => {
        console.error('Ошибка получения списка: ', error);
    })

})

// Обработка второго инпута

document.querySelector('.cash__second-input').addEventListener('input', event => {

    document.querySelectorAll('.cash__gif')[0].style.display = 'block';
    document.querySelectorAll('.cash__gif')[1].style.display = 'block';

    document.querySelectorAll('.cash__message')[1].style.display = 'none';
    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #000';
    document.querySelector('.cash__take').style.marginBottom = '20px';

    fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
    }).then((JSON_DATA) => {
        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();
            
            if ( cashSecondValute == 'Наличные RUB' ) {
                document.querySelector('.cash__first-input').value = ( ( Number(document.querySelector('.cash__second-input').value) * JSON_DATA.USDT_USD.buy_price ) / data.Valute.USD.Value ).toFixed(0);
            } else if ( cashSecondValute == 'Наличные USD' ) {
                document.querySelector('.cash__first-input').value = ( Number(document.querySelector('.cash__second-input').value) * JSON_DATA.USDT_USD.buy_price ).toFixed(0);
            } else if ( cashSecondValute == 'Наличные EUR' ) {
                document.querySelector('.cash__first-input').value = ( ( ( ( Number(document.querySelector('.cash__second-input').value) * data.Valute.EUR.Value ) / JSON_DATA.USDT_USD.buy_price ) / data.Valute.USD.Value ) * 1.0816 ).toFixed(0);
            } else if ( cashSecondValute == 'Tether TRC20 (USDT)' ) {
                if ( cashFirstValute == 'Наличные RUB' ) {
                    document.querySelector('.cash__first-input').value =  ( Number(document.querySelector('.cash__second-input').value) * ( data.Valute.USD.Value / JSON_DATA.USDT_USD.buy_price ) ).toFixed(0) ;
                } else if ( cashFirstValute == 'Наличные USD' ) {
                    document.querySelector('.cash__first-input').value = ( Number(document.querySelector('.cash__second-input').value) / JSON_DATA.USDT_USD.buy_price ).toFixed(0) ;
                } else if ( cashFirstValute == 'Наличные EUR' ) {
                    document.querySelector('.cash__first-input').value = ( ( ( ( Number(document.querySelector('.cash__second-input').value) / JSON_DATA.USDT_USD.buy_price ) * data.Valute.EUR.Value ) / JSON_DATA.USDT_USD.buy_price ) / 101.28 ).toFixed(0) ;
                }
            }

            if ( cashSecondValute == 'Tether TRC20 (USDT)' ) {
                if ( Number(document.querySelector('.cash__second-input').value) < minUSDT ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minUSDT}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__second-input').value) > maxUSDT ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxUSDT}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                }
            } else if ( cashSecondValute == 'Наличные RUB' ) {
                if ( Number(document.querySelector('.cash__second-input').value) < minRUB ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minRUB}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__second-input').value) > maxRUB ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxRUB}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                }
            } else if ( cashSecondValute == 'Наличные USD' ) {
                if ( Number(document.querySelector('.cash__second-input').value) < minUSD ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minUSD}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__second-input').value) > maxUSD ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxUSD}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                }
            } else if ( cashSecondValute == 'Наличные EUR' ) {
                if ( Number(document.querySelector('.cash__second-input').value) < minEUR ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minEUR}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__second-input').value) > maxEUR ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxEUR}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                }
            }

            if ( document.querySelector('.cash__second-input').value == '' ) {
                document.querySelector('.cash__first-input').value = '';
                document.querySelectorAll('.cash__message')[1].style.display = 'none';
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #000';
                document.querySelector('.cash__take').style.marginBottom = '20px';
            }

            setTimeout( () => {
                document.querySelectorAll('.cash__gif')[0].style.display = 'none';
                document.querySelectorAll('.cash__gif')[1].style.display = 'none';
            }, 1000 )
        
        }
        getCurrencies();
    }).catch((error) => {
        console.error('Ошибка получения списка: ', error);
    })

})

let cashERROR = false;
document.querySelector('.cash__button').addEventListener('click', event => {
    if ( document.querySelector('.cash__button').classList.value.length == 12 ) {

        document.querySelector('.cash__hide').style.display = 'block';
        document.querySelector('.cash__bottom').classList.add('cash__bottom-active');

        cashERROR = false;
        // Проверка заполнения полей

        if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
            if ( Number(document.querySelector('.cash__first-input').value) < minUSDT ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minUSDT}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__first-input').value) > maxUSDT ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxUSDT}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            }
        } else if ( cashFirstValute == 'Наличные RUB' ) {
            if ( Number(document.querySelector('.cash__first-input').value) < minRUB ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minRUB}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__first-input').value) > maxRUB ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxRUB}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            }
        } else if ( cashFirstValute == 'Наличные USD' ) {
            if ( Number(document.querySelector('.cash__first-input').value) < minUSD ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minUSD}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__first-input').value) > maxUSD ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxUSD}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            }
        } else if ( cashFirstValute == 'Наличные EUR' ) {
            if ( Number(document.querySelector('.cash__first-input').value) < minEUR ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minEUR}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__first-input').value) > maxEUR ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxEUR}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            }
        }

        if ( cashSecondValute == 'Tether TRC20 (USDT)' ) {
            if ( Number(document.querySelector('.cash__second-input').value) < minUSDT ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minUSDT}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__second-input').value) > maxUSDT ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxUSDT}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            }
        } else if ( cashSecondValute == 'Наличные RUB' ) {
            if ( Number(document.querySelector('.cash__second-input').value) < minRUB ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minRUB}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__second-input').value) > maxRUB ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxRUB}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            }
        } else if ( cashSecondValute == 'Наличные USD' ) {
            if ( Number(document.querySelector('.cash__second-input').value) < minUSD ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minUSD}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__second-input').value) > maxUSD ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxUSD}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            }
        } else if ( cashSecondValute == 'Наличные EUR' ) {
            if ( Number(document.querySelector('.cash__second-input').value) < minEUR ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minEUR}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__second-input').value) > maxEUR ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxEUR}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            }
        }

        if ( document.querySelector('.cash__first-input').value == '' ) {
            document.querySelectorAll('.cash__message')[0].style.display = 'block';
            document.querySelectorAll('.cash__message p')[0].textContent = 'Поле не может быть пустым';
            document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
            document.querySelector('.cash__get').style.marginBottom = '30px';
            cashERROR = true;
        }

        if ( document.querySelector('.cash__second-input').value == '' ) {
            document.querySelectorAll('.cash__message')[1].style.display = 'block';
            document.querySelectorAll('.cash__message p')[1].textContent = 'Поле не может быть пустым';
            document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
            document.querySelector('.cash__take').style.marginBottom = '30px';
            cashERROR = true;
        }

        if ( document.querySelector('.cash__user-input').value == '' ) {
            document.querySelectorAll('.cash__message')[2].style.display = 'block';
            document.querySelectorAll('.cash__message p')[2].textContent = 'Поле не может быть пустым';
            document.querySelector('.cash__user-input').style.border = '2px solid #f73';
            document.querySelector('.cash__user').style.marginBottom = '30px';
            cashERROR = true;
        }

        if ( document.querySelector('.cash__email-input').value == '' ) {
            document.querySelectorAll('.cash__message')[3].style.display = 'block';
            document.querySelectorAll('.cash__message p')[3].textContent = 'Поле не может быть пустым';
            document.querySelector('.cash__email-input').style.border = '2px solid #f73';
            document.querySelector('.cash__email').style.marginBottom = '30px';
            cashERROR = true;
        } else if ( !String(document.querySelector('.cash__email-input').value).includes('@') || !String(document.querySelector('.cash__email-input').value).includes('.') || String(document.querySelector('.cash__email-input').value).length < 6 ) {
            document.querySelectorAll('.cash__message')[3].style.display = 'block';
            document.querySelectorAll('.cash__message p')[3].textContent = 'Не верный E-mail';
            document.querySelector('.cash__email-input').style.border = '2px solid #f73';
            document.querySelector('.cash__email').style.marginBottom = '30px';
            cashERROR = true;
        }

        if ( document.querySelector('.cash__contact-input').value == '' ) {
            document.querySelectorAll('.cash__message')[4].style.display = 'block';
            document.querySelectorAll('.cash__message p')[4].textContent = 'Поле не может быть пустым';
            document.querySelector('.cash__contact-input').style.border = '2px solid #f73';
            document.querySelector('.cash__contact').style.marginBottom = '30px';
            cashERROR = true;
        } else if ( document.querySelector('.cash__contact-input').value.length < 5 ) {
            document.querySelectorAll('.cash__message')[4].style.display = 'block';
            document.querySelectorAll('.cash__message p')[4].textContent = 'Укажите Ваш телефон или telegram';
            document.querySelector('.cash__contact-input').style.border = '2px solid #f73';
            document.querySelector('.cash__contact').style.marginBottom = '30px';
            cashERROR = true;
        }

        if ( cashERROR == false ) {

            document.querySelector('.last__card h4').textContent = `Ваша заявка № ${orderID}`;

            document.querySelectorAll('.last__line p')[0].textContent = cashFirstValute;
            document.querySelectorAll('.last__line p')[2].textContent = cashSecondValute;

            document.querySelectorAll('.last__line img')[0].src = document.querySelectorAll('.cash__btn img')[0].src;
            document.querySelectorAll('.last__line img')[1].src = document.querySelectorAll('.cash__btn img')[1].src;

            if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
                document.querySelectorAll('.last__line p')[1].textContent = `${document.querySelector('.cash__first-input').value} USDT`;
            } else if ( cashFirstValute == 'Наличные RUB' ) {
                document.querySelectorAll('.last__line p')[1].textContent = `${document.querySelector('.cash__first-input').value} RUB`;
            } else if ( cashFirstValute == 'Наличные USD' ) {
                document.querySelectorAll('.last__line p')[1].textContent = `${document.querySelector('.cash__first-input').value} USD`;
            } else if ( cashFirstValute == 'Наличные EUR' ) {
                document.querySelectorAll('.last__line p')[1].textContent = `${document.querySelector('.cash__first-input').value} EUR`;
            }

            if ( cashSecondValute == 'Tether TRC20 (USDT)' ) {
                document.querySelectorAll('.last__line p')[3].textContent = `${document.querySelector('.cash__second-input').value} USDT`;
            } else if ( cashSecondValute == 'Наличные RUB' ) {
                document.querySelectorAll('.last__line p')[3].textContent = `${document.querySelector('.cash__second-input').value} RUB`;
            } else if ( cashSecondValute == 'Наличные USD' ) {
                document.querySelectorAll('.last__line p')[3].textContent = `${document.querySelector('.cash__second-input').value} USD`;
            } else if ( cashSecondValute == 'Наличные EUR' ) {
                document.querySelectorAll('.last__line p')[3].textContent = `${document.querySelector('.cash__second-input').value} EUR`;
            }

            document.querySelectorAll('.cash__load').forEach( item => {
                item.style.display = 'block';
            })
            document.querySelectorAll('.cash__val').forEach( item => {
                item.style.opacity = 0;
            })
            document.querySelector('.cash__button').classList.add('cash__button-active');
            document.querySelector('.cash__load-button').style.display = 'block';

            setTimeout( () => {
                document.querySelector('.change').style.display = 'none';
                document.querySelector('.last').style.display = 'block';
                document.title = 'Сделка';
            }, 2200 )

        }


    }
})

let secondsCashTimer = 30;

setInterval( () => {

    if ( secondsCashTimer >= 10 ) {
        document.querySelector('.cash__timer').textContent = `00:${secondsCashTimer}`;
    } else if ( secondsCashTimer < 10 && secondsCashTimer >= 0 ) {
        document.querySelector('.cash__timer').textContent = `00:0${secondsCashTimer}`;
    } else if ( secondsCashTimer == -1 ) {
        whatValuteOnCash();
        document.querySelector('.cash__button').classList.add('cash__button-active');
        document.querySelector('.cash__load-button').style.display = 'block';
        setTimeout( () => {
            document.querySelector('.cash__button').classList.remove('cash__button-active');
            document.querySelector('.cash__load-button').style.display = 'none';
        }, 1200 )
    }

    secondsCashTimer = secondsCashTimer - 1;

}, 1000 )

function whatValuteOnCash() {
    secondsCashTimer = 30;

    

    fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
    }).then((JSON_DATA) => {
        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();

            if ( cashFirstValute == 'Tether TRC20 (USDT)' && cashSecondValute == 'Наличные RUB' ) {
                document.querySelector('.cash__rate').textContent = `1 USDT = ${data.Valute.USD.Value} RUB`;
                document.querySelector('.last__card h6').textContent = `1 USDT : ${data.Valute.USD.Value} RUB`;
            } else if ( cashFirstValute == 'Tether TRC20 (USDT)' && cashSecondValute == 'Наличные USD' ) {
                document.querySelector('.cash__rate').textContent = `${JSON_DATA.USDT_USD.buy_price} USDT = 1 USD`;
                document.querySelector('.last__card h6').textContent = `${JSON_DATA.USDT_USD.buy_price} USDT : 1 USD`;
            } else if ( cashFirstValute == 'Tether TRC20 (USDT)' && cashSecondValute == 'Наличные EUR' ) {
                document.querySelector('.cash__rate').textContent = `${( ( JSON_DATA.USDT_USD.buy_price / data.Valute.EUR.Value ) * 101.28 ).toFixed(4)} USDT = 1 EUR`;
                document.querySelector('.last__card h6').textContent = `${( ( JSON_DATA.USDT_USD.buy_price / data.Valute.EUR.Value ) * 101.28 ).toFixed(4)} USDT : 1 EUR`;
            } else if ( cashFirstValute == 'Наличные RUB' ) {
                document.querySelector('.cash__rate').textContent = `${(data.Valute.USD.Value * JSON_DATA.USDT_USD.buy_price).toFixed(4)} RUB = 1 USDT`;
                document.querySelector('.last__card h6').textContent = `${(data.Valute.USD.Value * JSON_DATA.USDT_USD.buy_price).toFixed(4)} RUB : 1 USDT`;
            } else if ( cashFirstValute == 'Наличные USD' ) {
                document.querySelector('.cash__rate').textContent = `${( Number(JSON_DATA.USDT_USD.buy_price) * 0.975)} USD = 1 USDT`;
                document.querySelector('.last__card h6').textContent = `${( Number(JSON_DATA.USDT_USD.buy_price) * 0.975)} USD : 1 USDT`;
            } else if ( cashFirstValute == 'Наличные EUR' ) {
                document.querySelector('.cash__rate').textContent = `1 EUR = ${((JSON_DATA.USDT_EUR.buy_price / data.Valute.USD.Value) * 101.28).toFixed(4)} USDT`;
                document.querySelector('.last__card h6').textContent = `1 EUR : ${((JSON_DATA.USDT_EUR.buy_price / data.Valute.USD.Value) * 101.28).toFixed(4)} USDT`;
            }
        
        }
        getCurrencies();
    }).catch((error) => {
        console.error('Ошибка получения списка: ', error);
    })

}
whatValuteOnCash();

document.querySelectorAll('.first__val')[1].addEventListener('click', event => {
    secondsCashTimer = 30;
})

document.querySelector('.rec__wallet input').addEventListener("input", (event) => {
    if ( document.querySelector('.rec__title-namewallet').textContent.includes('Кошелек') ) {
        document.querySelector('.rec__wallet input').value = document.querySelector('.rec__wallet input').value.replace(/[йцукенгшщзхъфывапролдячсмитьбюжэ!@#$%^№&*()_=,.?'"`;:/|\-+ ]/gim, "");
    } else if ( document.querySelector('.rec__title-namewallet').textContent.includes('Номер телефона') ) {
        document.querySelector('.rec__wallet input').value = document.querySelector('.rec__wallet input').value.replace(/[йцукенгшщзхъфывапролдячсмитьбюжэ!@#$%^№&*()_=,.?'"`;:/|\- ]/gim, "");
    } else if ( document.querySelector('.rec__title-namewallet').textContent.includes('Карта') ) {
        document.querySelector('.rec__wallet input').value = document.querySelector('.rec__wallet input').value.replace(/[qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролдячсмитьбюжэ!@#$%^№&*()_=,.?'"`;:/|\- ]/gim, "");
    }
});

document.querySelector('.rec__mail input').addEventListener("input", (event) => {
    document.querySelector('.rec__mail input').value = document.querySelector('.rec__mail input').value.replace(/[йцукенгшщзхъфывапролдячсмитьбюжэ!#$%^&*№()_=,?'"`;:/|\- ]/gim, "");
});

document.querySelector('.rec__tage input').addEventListener("input", (event) => {
    document.querySelector('.rec__tage input').value = document.querySelector('.rec__tage input').value.replace(/[qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролдячсмитьбюжэ!#@.$%^&*№()_=,?'"`;:/|\- ]/gim, "");
});

const inputCode3 = document.querySelector(".cash__first-input");
inputCode3.addEventListener("input", (event) => {
    inputCode3.value = inputCode3.value.replace(/[qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролдячсмитьбюжэ!@#№$%^&*()_+=,?'"`;:/|\- ]/gim, "");
});

const inputCode4 = document.querySelector(".cash__second-input");
inputCode4.addEventListener("input", (event) => {
    inputCode4.value = inputCode4.value.replace(/[qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролдячсмитьбюжэ!@#№$%^&*()_+=,?'"`;:/|\- ]/gim, "");
});

document.querySelector('.cash__user-input').addEventListener("input", (event) => {
    document.querySelector('.cash__user-input').value = document.querySelector('.cash__user-input').value.replace(/[qwertyuiopasdfghjklzxcvbnm0123456789@.!#$%^&*№()_=,?'"`;:/|\-+ ]/gim, "");
});

document.querySelector('.cash__email-input').addEventListener("input", (event) => {
    document.querySelector('.cash__email-input').value = document.querySelector('.cash__email-input').value.replace(/[йцукенгшщзхъфывапролдячсмитьбюжэ!#$%^&*№()_=,?'"`;:/|\-+ ]/gim, "");
});

document.querySelector('.cash__contact-input').addEventListener("input", (event) => {
    document.querySelector('.cash__contact-input').value = document.querySelector('.cash__contact-input').value.replace(/[йцукенгшщзхъфывапролдячсмитьбюжэ!#$%^&*№()_=,.?'"`;:/|\- ]/gim, "");
});