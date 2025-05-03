// Получаем список авто

function getArray(value) {
    fetch('../js/vehicles.json')
    // fetch('http://localhost:3001/api/vehicles')
    .then(res => {
        if (!res.ok) throw new Error('Ошибка сервера: ' + res.status);
        return res.json();
    })
    .then(data => {
        parseArray(data, value)
    })
    .catch(err => console.error('Ошибка при получении данных:', err));
}


// console.log(location.href.replace(/\D/g, ''));
// Кнопка закрыть

document.querySelector('.calc__close').addEventListener('click', event => {
    document.querySelector('.calc__body').style.top = '150%';
    setTimeout( () => {
        document.querySelector('.calc').style.opacity = '0';
        setTimeout( () => {
            document.querySelector('.calc').style.display = 'none';
            document.querySelector('body').style.overflow = 'visible';
        }, 600 )
    }, 200 )
})

// Кнопка открыть header

document.querySelector('.header__calc').addEventListener('click', event => {
    document.querySelector('.calc').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
    setTimeout( () => {
        document.querySelector('.calc').style.opacity = '1';
        setTimeout( () => {
            document.querySelector('.calc__body').style.top = '50%';
        }, 600 )
    }, 200 )
})

// Кнопка открыть footer

document.querySelector('.footer__calc').addEventListener('click', event => {
    document.querySelector('.calc').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
    setTimeout( () => {
        document.querySelector('.calc').style.opacity = '1';
        setTimeout( () => {
            document.querySelector('.calc__body').style.top = '50%';
        }, 600 )
    }, 200 )
})

// Получаем курс вона к рублю

let valueKRW, valueUSD, valueEUR = 0;
fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
    if (result.status === 200 && result.ok) {
        return result.json()
    }
}).then((JSON_DATA) => {
    async function getCurrencies(){  
        const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
        const response = await fetch(url);
        const data = await response.json();
        valueKRW = data.Valute.KRW.Value / 1000;
        valueUSD = data.Valute.USD.Value;
        valueEUR = data.Valute.EUR.Value;
        calcAllPrices();
        getArray(data);
    }
    getCurrencies();
}).catch((error) => {
    console.error('Ошибка получения списка: ', error);
})

// Валидация инпута и добавление пробелов

const input = document.getElementById('numberInput');
input.addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, ''); // Убираем все нецифры
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Ставим пробелы
    this.value = value;
});

const input2 = document.querySelector('.calc__engine');
input2.addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, '');
    this.value = value;
    calculateCustomsDuty();
});

input.addEventListener('input', event => {
    if ( input.value == "" || input.value == "0" ) {
        document.querySelector('.calc__area strong').textContent = '= 0 ₽';
        document.querySelectorAll('.calc__price')[6].textContent = `0 ₽`;
        document.querySelectorAll('.calc__price')[7].textContent = `0 ₩`;
        document.querySelectorAll('.calc__price')[8].textContent = `0 $`;
    } else {
        document.querySelector('.calc__area strong').textContent = `= ${fromKRWtoRUB(input.value)} ₽`;
        document.querySelectorAll('.calc__price')[6].textContent = `${fromKRWtoRUB(input.value)} ₽`;
        document.querySelectorAll('.calc__price')[7].textContent = `${input.value} ₩`;
        document.querySelectorAll('.calc__price')[8].textContent = `${fromKRWtoUSD(input.value)} $`;
        document.querySelectorAll('.calc__price-rub')[2].textContent = `${String(parseInt((input.value.replace(/\D/g, '') - 1000000) * valueKRW)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₽`;
        document.querySelectorAll('.calc__price-krw')[2].textContent = `${String(parseInt((input.value.replace(/\D/g, '') - 1000000))).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₩`;
        document.querySelectorAll('.calc__price-usd')[2].textContent = `${String(parseInt((input.value.replace(/\D/g, '') - 1000000) * (valueKRW / valueUSD))).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} $`;
    }
    document.querySelector('.calc__area strong').style.fontSize = '26px';
    setTimeout( () => {
        if ( window.innerWidth > 540 ) {
            document.querySelector('.calc__area strong').style.fontSize = '16px';
        } else {
            document.querySelector('.calc__area strong').style.fontSize = '12px';
        }
    }, 100)
    if ( input.value != "" ) {
        document.querySelector('.calc__delete').style.transform = "translateY(-50%) scale(1)";
        document.querySelector('.calc__delete').style.cursor = "pointer";
    } else {
        document.querySelector('.calc__delete').style.transform = "translateY(-50%) scale(0)";
        document.querySelector('.calc__delete').style.cursor = "default";
    }
    calculateCustomsDuty();
})

function fromKRWtoRUB(input) {
    let numbers = input.replace(/\D/g, '');
    numbers = String(parseInt(numbers * valueKRW)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return numbers;
}

function fromKRWtoUSD(input) {
    let numbers = input.replace(/\D/g, '');
    numbers = String(parseInt(numbers * (valueKRW / valueUSD))).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return numbers;
}

function fromRUBtoKRW(input) {
    let numbers = input.replace(/\D/g, '');
    numbers = String(parseInt( numbers / valueKRW )).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return numbers;
}

function fromRUBtoUSD(input) {
    let numbers = input.replace(/\D/g, '');
    numbers = String(parseInt( numbers / valueUSD )).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return numbers;
}

function fromUSDtoRUB(input) {
    let numbers = input.replace(/\D/g, '');
    numbers = String(parseInt( numbers * valueUSD )).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return numbers;
}

function fromUSDtoKRW(input) {
    let numbers = input.replace(/\D/g, '');
    numbers = String(parseInt( numbers * ( valueUSD / valueKRW ) )).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return numbers;
}

document.querySelector('.calc__delete').addEventListener('click', event => {
    document.querySelector('.calc__delete').style.transform = "translateY(-50%) scale(0)";
    document.querySelector('.calc__delete').style.cursor = "default";
    document.querySelector('.calc__input').value = "";
    document.querySelector('.calc__engine').value = "";
    document.querySelector('.calc__area strong').textContent = "= 0 ₽";
    document.querySelectorAll('.calc__price')[6].textContent = `0 ₽`;
    document.querySelectorAll('.calc__price')[7].textContent = `0 ₩`;
    document.querySelectorAll('.calc__price')[8].textContent = `0 $`;
    document.querySelectorAll('.calc__price-rub')[7].textContent = "0 ₽";
    document.querySelectorAll('.calc__price-krw')[7].textContent = "0 ₩";
    document.querySelectorAll('.calc__price-usd')[7].textContent = "0 $";
    document.querySelector('.calc__result span').textContent = "0";
})

function calcAllPrices() {
    document.querySelectorAll('.calc__price-rub').forEach( (item, i) => {
        if ( Number(item.textContent.replace(/\D/g, '')) > 0 ) {
            // item.style.background = "#000"
            document.querySelectorAll('.calc__price-krw')[i].textContent = `${fromRUBtoKRW(item.textContent)} ₩`;
            document.querySelectorAll('.calc__price-usd')[i].textContent = `${fromRUBtoUSD(item.textContent)} $`;
        }
    })

    document.querySelectorAll('.calc__price-krw').forEach( (item, i) => {
        if ( Number(item.textContent.replace(/\D/g, '')) > 0 ) {
            // item.style.background = "#000"
            if ( Number(document.querySelectorAll('.calc__price-rub')[i].textContent.replace(/\D/g, '')) <= 0 ) {
                document.querySelectorAll('.calc__price-rub')[i].textContent = `${fromKRWtoRUB(item.textContent)} ₽`;
            }
            if ( Number(document.querySelectorAll('.calc__price-usd')[i].textContent.replace(/\D/g, '')) <= 0 ) {
                document.querySelectorAll('.calc__price-usd')[i].textContent = `${fromKRWtoUSD(item.textContent)} $`;
            }
        }
    })

    document.querySelectorAll('.calc__price-usd').forEach( (item, i) => {
        if ( Number(item.textContent.replace(/\D/g, '')) > 0 ) {
            if ( Number(document.querySelectorAll('.calc__price-rub')[i].textContent.replace(/\D/g, '')) <= 0 ) {
                document.querySelectorAll('.calc__price-rub')[i].textContent = `${fromUSDtoRUB(item.textContent)} ₽`;
            }
            if ( Number(document.querySelectorAll('.calc__price-krw')[i].textContent.replace(/\D/g, '')) <= 0 ) {
                document.querySelectorAll('.calc__price-krw')[i].textContent = `${fromUSDtoKRW(item.textContent)} ₩`;
            }
        }
    })
}

// Выбор возраста авто

let activeOld = "before3";

document.querySelectorAll('.calc__variable-old').forEach( (item, i) => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.calc__variable-old').forEach( (item, i) => {
            item.classList.remove('calc__variable-active');
        })
        item.classList.add('calc__variable-active');
        if ( i == 0 ) {
            activeOld = "before3";
        } else if ( i == 1 ) {
            activeOld = "beetwen3and5";
        } else if ( i == 2 ) {
            activeOld = "after5";
        }
        calculateCustomsDuty();
    })
})

// Выбор объема двигателя

let activeEngine = 1000;

document.querySelectorAll('.calc__variable-eng').forEach( (item, i) => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.calc__variable-eng').forEach( (item, i) => {
            item.classList.remove('calc__variable-active');
        })
        item.classList.add('calc__variable-active');
        if ( i == 0 ) {
            activeEngine = 1000;
        } else if ( i == 1 ) {
            activeEngine = 1500;
        } else if ( i == 2 ) {
            activeEngine = 1800;
        } else if ( i == 3 ) {
            activeEngine = 2300;
        } else if ( i == 4 ) {
            activeEngine = 3000;
        } else if ( i == 5 ) {
            activeEngine = 3001;
        }
    })
})

// Рассчёт стоимости растаможки

function calculateCustomsDuty() {
    const euroRate = valueEUR; // курс евро к рублю (примерно, лучше подгружать динамически)
    const krwToRub = valueKRW; // курс воны к рублю (примерно)
  
    let engineVolume = Number(document.querySelector('.calc__engine').value);
    // const carPriceRUB = carPriceKRW * krwToRub;
    let carPriceRUB = document.querySelector('.calc__area strong').textContent; // переводим в рубли
    carPriceRUB = carPriceRUB.replace(/\D/g, '');
    // const currentYear = new Date().getFullYear();
    // const carAge = currentYear - year;
  
    let duty = 0;
  
    if ( activeOld == "before3" ) {
      // Авто до 3 лет — % от стоимости
      const percentDuty = Math.max(
        carPriceRUB * 0.15, // минимум 15%
        carPriceRUB * 0.48 // максимум 48%
      );
      duty = percentDuty;
    } else if ( activeOld == "beetwen3and5" ) {
      // Авто от 3 до 5 лет — ставка за см³
      if (engineVolume <= 1000) duty = engineVolume * 1.5 * euroRate;
      else if (engineVolume <= 1500) duty = engineVolume * 1.7 * euroRate;
      else if (engineVolume <= 1800) duty = engineVolume * 2.5 * euroRate;
      else if (engineVolume <= 2300) duty = engineVolume * 2.7 * euroRate;
      else if (engineVolume <= 3000) duty = engineVolume * 3.0 * euroRate;
      else duty = engineVolume * 3.6 * euroRate;
    } else if ( activeOld == "after5" ) {
      // Авто старше 5 лет
      if (engineVolume <= 1000) duty = engineVolume * 3.0 * euroRate;
      else if (engineVolume <= 1500) duty = engineVolume * 3.2 * euroRate;
      else if (engineVolume <= 1800) duty = engineVolume * 3.5 * euroRate;
      else if (engineVolume <= 2300) duty = engineVolume * 4.8 * euroRate;
      else if (engineVolume <= 3000) duty = engineVolume * 5.0 * euroRate;
      else duty = engineVolume * 5.7 * euroRate;
    }
  
  
    // Акциз (для бензиновых авто с объемом > 3000см³ или дизельных > 2500см³) — обычно пропускаем
  
    // console.log(engineVolume)
    if ( document.querySelector('.calc__engine').value == "" || document.querySelector('.calc__input').value == "" ) {
        document.querySelectorAll('.calc__price-rub')[7].textContent = "0 ₽";
        document.querySelectorAll('.calc__price-krw')[7].textContent = "0 ₩";
        document.querySelectorAll('.calc__price-usd')[7].textContent = "0 $";
    } else {
        let totalCustomsCost = String(parseInt(duty)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        document.querySelectorAll('.calc__price-rub')[7].textContent = `${totalCustomsCost} ₽`;
        document.querySelectorAll('.calc__price-krw')[7].textContent = `${fromRUBtoKRW(totalCustomsCost)} ₩`;
        document.querySelectorAll('.calc__price-usd')[7].textContent = `${fromRUBtoUSD(totalCustomsCost)} $`;
    }
    summFinalyPrice();
}
  

let activeAllService = false;
document.querySelector('.calc__list').addEventListener('click', event => {
    if ( activeAllService == false ) {
        document.querySelector('.calc__block').style.maxHeight = "1500px";
        document.querySelector('.calc__list p').textContent = "Закрыть список";
        activeAllService = true;
    } else {
        document.querySelector('.calc__block').style.maxHeight = "0px";
        document.querySelector('.calc__list p').textContent = "Открыть весь список расходов";
        activeAllService = false;
    }
})

function summFinalyPrice() {
    let summAllPriceInRub = 0;
    document.querySelectorAll('.calc__price-rub').forEach( (item, i) => {
        summAllPriceInRub = Number(summAllPriceInRub) + Number(item.textContent.replace(/\D/g, ''));
    })
    if ( document.querySelector('.calc__engine').value == "" || document.querySelector('.calc__input').value == "" ) {
        document.querySelector('.calc__result span').textContent = "0";
    } else {
        document.querySelector('.calc__result span').textContent = String(parseInt( summAllPriceInRub )).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    if ( document.querySelector('.product__price span') ) {
        document.querySelector('.product__price span').textContent = `${String(parseInt( summAllPriceInRub )).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₽`;
    }
}

// Проверка на наличие кнопки step

if ( document.querySelector('.step__calc') ) {
    document.querySelector('.step__calc').addEventListener('click', event => {
        document.querySelector('.calc').style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
        setTimeout( () => {
            document.querySelector('.calc').style.opacity = '1';
            setTimeout( () => {
                document.querySelector('.calc__body').style.top = '50%';
            }, 600 )
        }, 200 )
    })
} 

// Запуск сборки страницы
function parseArray(cars, value) {
    let valueKRW = value.Valute.KRW.Value / 1000;
    let arrBasicAuto = [];
    let arrPremiumAuto = [];
    let arrForHome = [];

    // console.log(cars[0]);

    cars.forEach( (item, i) => {
        let priceInRub = parseInt((cars[i].price * 10000) * valueKRW);
        if ( priceInRub > 4500000 ) {
            arrPremiumAuto.push(item);
        } else {
            arrBasicAuto.push(item);
        }

        if ( priceInRub < 3500000 && priceInRub > 1400000 ) {
            arrForHome.push(item);
        }
    })

    function getRandomItems(arr, count) {
        let result = [];
        let usedIndexes = new Set();
        while (result.length < count && result.length < arr.length) {
            let index = Math.floor(Math.random() * arr.length);
            if (!usedIndexes.has(index)) {
                result.push(arr[index]);
                usedIndexes.add(index);
            }
        }
        return result;
    }
    let showBasicAuto = getRandomItems(arrForHome, 4);
    let showPremiumAuto = getRandomItems(arrPremiumAuto, 4);

    document.querySelectorAll('.catalog__image').forEach( (item, i) => {
        document.querySelectorAll('.catalog__card')[i].href = `product.html#${showBasicAuto[i].vehicle_id}`;
        const imgPath = `${showBasicAuto[i].main_photo.slice(0, -5)}3.jpg`;
        const fallbackPath = `${showBasicAuto[i].main_photo.slice(0, -5)}1.jpg`;
        const img = new Image();
        img.onload = function () {
            document.querySelectorAll('.catalog__img-active')[i].src = imgPath;
        };
        img.onerror = function () {
            document.querySelectorAll('.catalog__img-active')[i].src = fallbackPath;
        };
        img.src = imgPath;
        document.querySelectorAll('.catalog__img-hd')[i].src = `${showBasicAuto[i].main_photo.slice(0, -5)}2.jpg`;
        document.querySelectorAll('.catalog__mark')[i].textContent = showBasicAuto[i].grade_detail.model.model_group.manufacturer.name.replace(/_/g, " ");
        document.querySelectorAll('.catalog__model')[i].textContent = showBasicAuto[i].grade_detail.model.model_group.name;
        document.querySelectorAll('.catalog__variable')[i].textContent = showBasicAuto[i].grade_detail.name;
        document.querySelectorAll('.catalog__mile')[i].textContent = `${String(parseInt(showBasicAuto[i].mileage)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} км`;
        document.querySelectorAll('.catalog__age')[i].textContent = showBasicAuto[i].year;
        document.querySelectorAll('.catalog__fuel')[i].textContent = showBasicAuto[i].fuel_type;
        // document.querySelectorAll('.catalog__eng')[i].textContent = `${showBasicAuto[i].engine.slice(0, -3)} см³`;
        if (showBasicAuto[i].engine) {
            document.querySelectorAll('.catalog__eng')[i].textContent = `${showBasicAuto[i].engine.replace(/\D/g, '')} см³`;
        } else {
            document.querySelectorAll('.catalog__eng')[i].textContent = 'Электромотор';
        }        
        document.querySelectorAll('.catalog__trans')[i].textContent = showBasicAuto[i].transmission;
        document.querySelectorAll('.catalog__krw')[i].textContent = `${String(parseInt(showBasicAuto[i].price * 10000)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₩`;
        document.querySelectorAll('.catalog__price span')[i].textContent = `${String(parseInt((showBasicAuto[i].price * 10000) * valueKRW)).replace(/\B(?=(\d{3})+(?!\d))/g, '.').slice(0, -3)}000 ₽`;
    })

    document.querySelectorAll('.catalog__fuel').forEach( (item, i) => {
        if ( item.textContent == "diesel" ) {
            item.textContent = "Дизель";
        } else if ( item.textContent == "gasoline" ) {
            item.textContent = "Бензин";
        } else if ( item.textContent == "hybrid" ) {
            item.textContent = "Гибрид";
        } else if ( item.textContent == "lpg" ) {
            item.textContent = "Газ (LPG)";
        } else if ( item.textContent == "electric" ) {
            item.textContent = "Электромобиль";
        } else if ( item.textContent == "gasoline_lpg" ) {
            item.textContent = "Бензин/Газ";
        } 
    })

    document.querySelectorAll('.catalog__trans').forEach( (item, i) => {
        if ( item.textContent == "auto" ) {
            item.textContent = "Автоматическая";
        } else if ( item.textContent == "manual" ) {
            item.textContent = "Механическая";
        } else if ( item.textContent == "cvt" ) {
            item.textContent = "Вариатор";
        } 
    })

    // let uniqueFuelTypes = [];
    // cars.forEach(car => {
    //     if (car.color && !uniqueFuelTypes.includes(car.color)) {
    //         uniqueFuelTypes.push(car.color);
    //     }
    // });
    // console.log(uniqueFuelTypes);

    document.querySelectorAll('.premium__image').forEach( (item, i) => {
        document.querySelectorAll('.premium__card')[i].href = `product.html#${showPremiumAuto[i].vehicle_id}`;
        // document.querySelectorAll('.premium__img-active')[i].src = `${showPremiumAuto[i].main_photo.slice(0, -5)}3.jpg`;
        const imgPath = `${showPremiumAuto[i].main_photo.slice(0, -5)}3.jpg`;
        const fallbackPath = `${showPremiumAuto[i].main_photo.slice(0, -5)}1.jpg`;
        const img = new Image();
        img.onload = function () {
            document.querySelectorAll('.premium__img-active')[i].src = imgPath;
        };
        img.onerror = function () {
            document.querySelectorAll('.premium__img-active')[i].src = fallbackPath;
        };
        img.src = imgPath;
        document.querySelectorAll('.premium__img-hd')[i].src = `${showPremiumAuto[i].main_photo.slice(0, -5)}2.jpg`;
        document.querySelectorAll('.premium__mark')[i].textContent = showPremiumAuto[i].grade_detail.model.model_group.manufacturer.name.replace(/_/g, " ");
        document.querySelectorAll('.premium__model')[i].textContent = showPremiumAuto[i].grade_detail.model.model_group.name;
        document.querySelectorAll('.premium__variable')[i].textContent = showPremiumAuto[i].grade_detail.name;
        document.querySelectorAll('.premium__mile')[i].textContent = `${String(parseInt(showPremiumAuto[i].mileage)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} км`;
        document.querySelectorAll('.premium__age')[i].textContent = showPremiumAuto[i].year;
        document.querySelectorAll('.premium__fuel')[i].textContent = showPremiumAuto[i].fuel_type;
        if (showPremiumAuto[i].engine) {
            document.querySelectorAll('.premium__eng')[i].textContent = `${showPremiumAuto[i].engine.replace(/\D/g, '')} см³`;
        } else {
            document.querySelectorAll('.premium__eng')[i].textContent = 'Электромотор';
        }
        document.querySelectorAll('.premium__trans')[i].textContent = showPremiumAuto[i].transmission;
        document.querySelectorAll('.premium__krw')[i].textContent = `${String(parseInt(showPremiumAuto[i].price * 10000)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₩`;
        document.querySelectorAll('.premium__price span')[i].textContent = `${String(parseInt((showPremiumAuto[i].price * 10000) * valueKRW)).replace(/\B(?=(\d{3})+(?!\d))/g, '.').slice(0, -3)}000 ₽`;
    })

    document.querySelectorAll('.premium__fuel').forEach( (item, i) => {
        if ( item.textContent == "diesel" ) {
            item.textContent = "Дизель";
        } else if ( item.textContent == "gasoline" ) {
            item.textContent = "Бензин";
        } else if ( item.textContent == "hybrid" ) {
            item.textContent = "Гибрид";
        } else if ( item.textContent == "lpg" ) {
            item.textContent = "Газ (LPG)";
        } else if ( item.textContent == "electric" ) {
            item.textContent = "Электромобиль";
        } else if ( item.textContent == "gasoline_lpg" ) {
            item.textContent = "Бензин/Газ";
        } 
    })

    document.querySelectorAll('.premium__trans').forEach( (item, i) => {
        if ( item.textContent == "auto" ) {
            item.textContent = "Автоматическая";
        } else if ( item.textContent == "manual" ) {
            item.textContent = "Механическая";
        } else if ( item.textContent == "cvt" ) {
            item.textContent = "Вариатор";
        } 
    })

    // Сбор страницы авто

    if (window.location.href.includes('product')) {
        
        let statusAuto = "nothing";

        const id = window.location.hash.replace('#', '');
        let productCarFromArr;
        arrBasicAuto.forEach( (item, i) => {
            if ( id == item.vehicle_id ) {
                productCarFromArr = item;
                statusAuto = "basic";
                // Ставим метку в шапке
                document.querySelectorAll('.header__link')[1].classList.add('header__link-active');
            }
        })

        arrPremiumAuto.forEach( (item, i) => {
            if ( id == item.vehicle_id ) {
                productCarFromArr = item;
                statusAuto = "premium";
                // Ставим метку в шапке
                document.querySelectorAll('.header__link')[2].classList.add('header__link-active');
            }
        })

        if ( productCarFromArr ) {
            
            document.querySelector('.nav-product').style.display = "flex";
            document.querySelector('.product__body').style.display = "flex";
            document.querySelector('.product__empty').style.display = "none";

            document.title = `Купить ${String(productCarFromArr.grade_detail.model.model_group.manufacturer.name).replace(/_/g, " ")} ${productCarFromArr.grade_detail.model.model_group.name} ${productCarFromArr.grade_detail.name}`;

            document.querySelector('.nav__mark').textContent = String(productCarFromArr.grade_detail.model.model_group.manufacturer.name).replace(/_/g, " ");
            document.querySelector('.nav__mark').href = `catalog.html#${String(productCarFromArr.grade_detail.model.model_group.manufacturer.name).replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "")}`;
            document.querySelector('.nav__model').textContent = `${String(productCarFromArr.grade_detail.model.model_group.manufacturer.name).replace(/_/g, " ")} ${productCarFromArr.grade_detail.model.model_group.name}`;
            document.querySelector('.product__title').textContent = `${productCarFromArr.grade_detail.model.model_group.manufacturer.name.replace(/_/g, " ")} ${productCarFromArr.grade_detail.model.model_group.name}`;
            document.querySelector('.product__com').textContent = `${productCarFromArr.grade_detail.name}`;
            document.querySelector('.product__krw').textContent = `Стоимость авто в Корее — ${String(parseInt(productCarFromArr.price * 10000)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₩`;
            // document.querySelector('.product__price span').textContent = `~ ${String(parseInt((productCarFromArr.price * 10000) * valueKRW)).replace(/\B(?=(\d{3})+(?!\d))/g, '.').slice(0, -3)}000 ₽`;
            document.querySelector('.product__param-color').textContent = productCarFromArr.color;
            document.querySelector('.product__param-mile').textContent = `${String(parseInt(productCarFromArr.mileage)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} км`;
            document.querySelector('.product__param-trans').textContent = productCarFromArr.transmission;
            
            if ( statusAuto == "premium" ) {
                document.querySelector('.main').classList.add('main-premium');
                document.querySelector('.modal').classList.add('modal-premium');
                document.querySelector('.nav__mark').href = `premium.html#${String(productCarFromArr.grade_detail.model.model_group.manufacturer.name).replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "")}`;
                document.querySelector('.nav__story').href = `premium.html`;
                document.querySelector('.nav__story').textContent = 'Премиум';
            }

            if (productCarFromArr.engine) {
                document.querySelector('.product__param-engine').textContent = `${productCarFromArr.engine.replace(/\D/g, '')} см³`;
            } else {
                document.querySelector('.product__param-engine').textContent = `Электромотор`;
            }
            document.querySelector('.product__param-fuel').textContent = productCarFromArr.fuel_type;
            document.querySelector('.product__param-year').textContent = productCarFromArr.year;
            document.querySelector('.product__encar').href = `https://fem.encar.com/cars/detail/${productCarFromArr.vehicle_id}`;

            const colorMap = {
                "black": "Чёрный",
                "silver": "Серебристый",
                "white": "Белый",
                "silver_gray": "Серебристо-серый",
                "dark_green": "Тёмно-зелёный",
                "pearl": "Перламутровый",
                "gray": "Серый",
                "yellow": "Жёлтый",
                "bright_silver": "Ярко-серебристый",
                "blue": "Синий",
                "red": "Красный",
                "brown": "Коричневый",
                "light_gold": "Светло-золотистый",
                "green": "Зелёный",
                "light_blue": "Голубой",
                "white_two_tone": "Двухцветный белый",
                "light_green": "Светло-зелёный",
                "galaxy": "Галактический",
                "beige": "Бежевый",
                "pink": "Розовый",
                "maroon": "Бордовый",
                "purple": "Фиолетовый",
                "gold": "Золотой",
                "orange": "Оранжевый",
                "black_two_tone": "Двухцветный чёрный",
                "teal": "Бирюзовый"
            };
              
            // console.log(productCarFromArr.engine);

            const colorElement = document.querySelector('.product__param-color');
            if (colorElement) {
                const currentColor = colorElement.textContent.trim().toLowerCase();
                if (colorMap[currentColor]) {
                    colorElement.textContent = colorMap[currentColor];
                }
            }

            if ( document.querySelector('.product__param-trans').textContent == "auto" ) {
                document.querySelector('.product__param-trans').textContent = "Автоматическая";
            } else if ( document.querySelector('.product__param-trans').textContent == "manual" ) {
                document.querySelector('.product__param-trans').textContent = "Механическая";
            } else if ( document.querySelector('.product__param-trans').textContent == "cvt" ) {
                document.querySelector('.product__param-trans').textContent = "Вариатор";
            } 

            if ( document.querySelector('.product__param-fuel').textContent == "diesel" ) {
                document.querySelector('.product__param-fuel').textContent = "Дизель";
            } else if ( document.querySelector('.product__param-fuel').textContent == "gasoline" ) {
                document.querySelector('.product__param-fuel').textContent = "Бензин";
            } else if ( document.querySelector('.product__param-fuel').textContent == "hybrid" ) {
                document.querySelector('.product__param-fuel').textContent = "Гибрид";
            } else if ( document.querySelector('.product__param-fuel').textContent == "lpg" ) {
                document.querySelector('.product__param-fuel').textContent = "Газ (LPG)";
            } else if ( document.querySelector('.product__param-fuel').textContent == "electric" ) {
                document.querySelector('.product__param-fuel').textContent = "Электромобиль";
            } else if ( document.querySelector('.product__param-fuel').textContent == "gasoline_lpg" ) {
                document.querySelector('.product__param-fuel').textContent = "Бензин/Газ";
            }

            // Добавляем слайды

            function loadGalleryImages(baseUrl) {
                const basePath = baseUrl.slice(0, -6); // удаляем '1.jpg'
                const mainWrapper = document.querySelector('.product__image .swiper-wrapper');
                const thumbWrapper = document.querySelector('.product__gallery .swiper-wrapper');
                let index = 1;
                
                

                function tryLoadImage(i) {
                    const testImg = new Image();
                    let fullImgUrl;
                    if ( i < 10 ) {
                        fullImgUrl = `${basePath}0${i}.jpg`;
                    } else {
                        fullImgUrl = `${basePath}${i}.jpg`;
                    }
                    console.log(i);
                    testImg.onload = () => {
                        // Добавляем основной слайд
                        const mainSlide = document.createElement('div');
                        mainSlide.classList.add('swiper-slide');
                        mainSlide.innerHTML = `<img src="${fullImgUrl}" alt="photo">`;
                        mainWrapper.appendChild(mainSlide);
            
                        // Добавляем миниатюру
                        const thumbSlide = document.createElement('div');
                        thumbSlide.classList.add('swiper-slide');
                        thumbSlide.innerHTML = `<img src="${fullImgUrl}" alt="photo">`;
                        thumbWrapper.appendChild(thumbSlide);

                        tryLoadImage(i + 1)
                    };
            
                    testImg.onerror = () => {
                        // Если ни одной картинки не загрузилось — вставляем заглушку
                        if (!mainWrapper.querySelector('.swiper-slide')) {
                            const fallback = '../images/logo-none-lil.png';
            
                            const mainSlide = document.createElement('div');
                            mainSlide.classList.add('swiper-slide');
                            mainSlide.innerHTML = `<img src="${fallback}" alt="photo">`;
                            mainWrapper.appendChild(mainSlide);
            
                            const thumbSlide = document.createElement('div');
                            thumbSlide.classList.add('swiper-slide');
                            thumbSlide.innerHTML = `<img src="${fallback}" alt="photo">`;
                            thumbWrapper.appendChild(thumbSlide);
                        }
            
                        // Только здесь вызываем инициализацию Swiper
                        initGallerySwiper();
                    };
            
                    testImg.src = fullImgUrl;
                }
            
                tryLoadImage(index);
            }
            

            loadGalleryImages(productCarFromArr.main_photo);

            // document.querySelector('.swiper-slide img').onerror = function() {
            //     console.log('Ошибка загрузки картинки');
                // Можно установить запасное изображение:
                // document.querySelector('.target-img').src = 'путь/к/запасной-картинке.jpg';
            // };

            

            function initGallerySwiper() {
                const galleryThumbs = new Swiper('.product__gallery', {
                    spaceBetween: 10,
                    slidesPerView: 5,
                    watchSlidesProgress: true,
                });
            
                const galleryTop = new Swiper('.product__image', {
                    spaceBetween: 10,
                    autoHeight: true, // авто-высота в зависимости от содержимого
                    thumbs: {
                        swiper: galleryThumbs,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction',
                    },
                });
            }
            

            // Калькуляция полной стоимости авто

            document.querySelector('.calc__subtitle').textContent = `Приблизительная стоимость ${String(productCarFromArr.grade_detail.model.model_group.manufacturer.name).replace(/_/g, " ")} ${productCarFromArr.grade_detail.model.model_group.name} под ключ в России`;
            document.querySelectorAll('.calc__descr')[0].textContent = `Цена авто в корейских вонах`;
            document.querySelectorAll('.calc__descr')[1].textContent = `Объём двигателя (см³)`;
            document.querySelectorAll('.calc__descr')[2].textContent = `Возраст авто`;

            document.querySelector('.calc__input').value = String(parseInt(productCarFromArr.price * 10000)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            document.querySelector('.calc__area strong').textContent = `= ${String(parseInt((productCarFromArr.price * 10000) * valueKRW)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₽`;
            document.querySelector('.calc__engine').value = String(parseInt(productCarFromArr.price * 10000)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

            if (productCarFromArr.engine) {
                document.querySelector('.calc__engine').value = `${productCarFromArr.engine.replace(/\D/g, '')}`;
            } else {
                document.querySelector('.calc__engine').value = `Электромотор`;
            }

            document.querySelectorAll('.calc__variable').forEach( item => {
                item.classList.remove('calc__variable-active');
            })
            const carAge = new Date().getFullYear() - parseInt(productCarFromArr.year);
            if (carAge < 3) {
                document.querySelectorAll('.calc__variable-old')[0].classList.add('calc__variable-active');
                activeOld = "before3";
            } else if (carAge >= 3 && carAge <= 5) {
                document.querySelectorAll('.calc__variable-old')[1].classList.add('calc__variable-active');
                activeOld = "beetwen3and5";
            } else {
                document.querySelectorAll('.calc__variable-old')[2].classList.add('calc__variable-active');
                activeOld = "after5";
            }

            // Таблица

            document.querySelectorAll('.calc__price-rub')[2].textContent = `${String(parseInt((productCarFromArr.price * 10000 - 1000000) * valueKRW)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₽`;
            document.querySelectorAll('.calc__price-krw')[2].textContent = `${String(parseInt((productCarFromArr.price * 10000)) - 1000000).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₩`;
            document.querySelectorAll('.calc__price-usd')[2].textContent = `${fromKRWtoUSD(String((productCarFromArr.price * 10000) - 1000000))} $`;

            calculateCustomsDuty();

        } 

    }
    
    if ( location.href.includes('catalog') ) {
        firstRenderCatalog(cars, value);
    }
    if ( location.href.includes('premium') ) {
        firstRenderCatalog(cars, value);
    }

    document.querySelector('.loading').style.top = "-100%";
}