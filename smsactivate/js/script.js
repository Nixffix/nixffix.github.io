async function fetchBalance() {
    document.querySelector('.panel__picture img').src = "images/loading.gif";

    try {
      const res = await fetch('/balance');
      const data = await res.json();
      const balance = data.balance.split(':')[1];
      setTimeout( () => {
        document.querySelector('.panel__balance').textContent = `Баланс ${balance} $`;
        document.querySelector('.logs__balance span').textContent = balance;
        document.querySelector('.panel__picture img').src = "images/profile.png";
      }, 400)
    } catch (e) {
        console.log(data.balance);
    }
}

fetchBalance();

let activeCountryId = 'null';
let listActiveCountry = [];
async function loadCountries() {
    try {
        const res = await fetch('/countries');
        const data = await res.json();
        
        Object.values(data).forEach(country => {
            let newCountry = document.createElement('p');
            newCountry.classList.add('panel__variable');
            newCountry.textContent = country.rus;
            newCountry.id = country.id;
            document.querySelector('.panel__window-country').append(newCountry);
        });

        document.querySelector('.panel__window-country .panel__input input').addEventListener('input', event => {
            document.querySelectorAll('.panel__variable').forEach( item => {
                item.style.display = "none";
            } )

            document.querySelectorAll('.panel__variable').forEach( item => {
                if ( item.textContent.toLocaleLowerCase().includes(document.querySelector('.panel__window-country .panel__input input').value.toLocaleLowerCase()) ) {
                    item.style.display = "block";
                }
            } )
        })
        
        function repaintCounties() {

            document.querySelectorAll('.panel__country-name').forEach( item => {
                item.remove();
            } )

            document.querySelectorAll('.panel__variable').forEach( item => {
                item.classList.remove('panel__variable-active');
            })

            if ( listActiveCountry.length > 0 ) {

                document.querySelector('.panel__lock').style.display = "none";

                listActiveCountry.forEach( (item, i) => {
                    document.querySelectorAll('.panel__window-country .panel__variable').forEach( (variable, j) => {
                        if ( variable.textContent == item ) {
                            variable.classList.add('panel__variable-active');
                        }
                    })

                    let newCountry = document.createElement('div');
                    newCountry.innerHTML = `
                        <p>${item}</p>
                        <div class="panel__delete">
                            <img src="images/close.png" alt="close">
                        </div>
                    `;
                    newCountry.classList.add('panel__country');
                    newCountry.classList.add('panel__country-name');
                    document.querySelector('.panel__choose-country').append(newCountry);
                })

                document.querySelectorAll('.panel__choose-country .panel__delete').forEach( (item, i) => {
                    item.addEventListener('click', event => {
                        listActiveCountry = listActiveCountry.filter(country => country !== document.querySelectorAll('.panel__country-name p')[i].textContent);
                        repaintCounties();
                    })
                })

                console.log(activeCountryId);
                loadOperators(activeCountryId);

            } else {
                document.querySelector('.panel__lock').style.display = "block";

                document.querySelectorAll('.panel__window-operator .panel__variable').forEach( item => {
                    item.remove();
                })

                document.querySelector('.panel__window-operator').style.maxHeight = "0px";
                document.querySelector('.panel__window-operator').style.padding = "0px 20px";
                activeWindowOperator = false;

                listActiveOperators = [];
                document.querySelectorAll('.panel__window-operator .panel__variable').forEach( (item, i) => {
                    item.classList.remove('panel__variable-active');
                })

                document.querySelectorAll('.panel__operator-name').forEach( item => {
                    item.remove();
                })
                

            }

        }

        document.querySelectorAll('.panel__variable').forEach( item => {
            item.addEventListener('click', event => {
                if ( item.classList.length > 1 ) {
                    
                    listActiveCountry = listActiveCountry.filter(country => country !== item.textContent);
                    repaintCounties();

                } else {

                    if ( listActiveCountry.length == 0 ) {
                        listActiveCountry.push(item.textContent);
                        activeCountryId = item.id;
                        repaintCounties();
                    }

                }
            })
        } )

    } catch (e) {
        console.error('Не получилось загрузить страны', e);
    }
}

loadCountries();

let activeWindowCountry = false;
document.querySelector('.panel__country-all').addEventListener('click', event => {
    if ( activeWindowCountry == false ) {
        document.querySelector('.panel__window-country').style.maxHeight = "380px";
        document.querySelector('.panel__window-country').style.padding = "20px";
        activeWindowCountry = true;

        document.querySelector('.panel__window-operator').style.maxHeight = "0px";
        document.querySelector('.panel__window-operator').style.padding = "0px 20px";
        activeWindowOperator = false;
    } else {
        document.querySelector('.panel__window-country').style.maxHeight = "0px";
        document.querySelector('.panel__window-country').style.padding = "0px 20px";
        activeWindowCountry = false;
    }
})

let activeWindowOperator = false;
document.querySelector('.panel__operator-all').addEventListener('click', event => {
    if ( activeWindowOperator == false ) {
        document.querySelector('.panel__window-operator').style.maxHeight = "380px";
        document.querySelector('.panel__window-operator').style.padding = "20px";
        activeWindowOperator = true;
    } else {
        document.querySelector('.panel__window-operator').style.maxHeight = "0px";
        document.querySelector('.panel__window-operator').style.padding = "0px 20px";
        activeWindowOperator = false;
    }
})

let listActiveOperators = [];
async function loadOperators(countryId) {
    try {
        const res = await fetch(`/operators/${countryId}`);
        const data = await res.json();

        const arr = Object.values(data.countryOperators)[0];
        console.log(arr);

        document.querySelectorAll('.panel__window-operator .panel__variable').forEach( item => {
            item.remove();
        })

        if ( document.querySelector('.panel__warn') ) document.querySelector('.panel__warn').remove();

        arr.forEach( (item, i) => {
            let newOperator = document.createElement('p');
            newOperator.classList.add('panel__variable');
            newOperator.classList.add('panel__variable-operator');
            newOperator.textContent = item;
            document.querySelector('.panel__window-operator').append(newOperator);
        })

        function repaintOperators() {

            document.querySelectorAll('.panel__window-operator .panel__variable').forEach( (item, i) => {
                item.classList.remove('panel__variable-active');
            })

            document.querySelectorAll('.panel__operator-name').forEach( item => {
                item.remove();
            })

            listActiveOperators.forEach( (item, i) => {
                document.querySelectorAll('.panel__variable-operator').forEach( (operator, j) => {
                    if ( item == operator.textContent ) {
                        operator.classList.add('panel__variable-active')
                    }
                })

                let newOperator = document.createElement('p');
                newOperator.classList.add('panel__operator');
                newOperator.classList.add('panel__operator-name');
                newOperator.innerHTML = `
                    <p>${item}</p>
                    <div class="panel__delete">
                        <img src="images/close.png" alt="close">
                    </div>
                `;
                document.querySelector('.panel__choose-operator').append(newOperator);
            })

            document.querySelectorAll('.panel__choose-operator .panel__delete').forEach( (item, i) => {
                item.addEventListener('click', event => {
                    listActiveOperators = listActiveOperators.filter(country => country !== document.querySelectorAll('.panel__operator-name p')[i].textContent);
                    repaintOperators();
                })
            })

        }

        document.querySelectorAll('.panel__variable-operator').forEach( (item, i) => {
            item.addEventListener('click', event => {
                if ( item.classList.contains('panel__variable-active') ) {
                    listActiveOperators = listActiveOperators.filter(country => country !== item.textContent);
                    repaintOperators();
                } else {
                    if ( listActiveOperators.length == 0 ) {
                        listActiveOperators.push(item.textContent);
                        repaintOperators();
                    }
                }
            })
        })

        document.querySelector('.panel__button-clear').addEventListener('click', event => {

            listActiveCountry = [];
            listActiveOperators = [];
            activeCountryId = "null";

            repaintOperators();
            
            document.querySelectorAll('.panel__country-name').forEach( item => {
                item.remove();
            } )

            document.querySelectorAll('.panel__variable').forEach( item => {
                item.classList.remove('panel__variable-active');
            })

            document.querySelector('.panel__price-max').value = "";
            document.querySelector('.panel__order').value = "";

            document.querySelector('.find').style.maxHeight = '0px';
            document.querySelector('.find').style.padding = '0px 40px';
            document.querySelector('.find').style.marginTop = '0px';
            
            document.querySelector('.logs').style.marginTop = '0px';
            document.querySelector('.logs').style.padding = '0px 40px';
            document.querySelector('.logs').style.maxHeight = '0px';

            document.querySelector('.list').style.marginTop = '0px';
            document.querySelector('.list').style.padding = '0px 40px';
            document.querySelector('.list').style.maxHeight = '0px';

        })

    } catch (e) {
        console.error('Не получилось загрузить операторов', e);
        document.querySelector('.panel__window-operator').innerHTML = "<p class='panel__warn'>Нету выбранных операторов</p>";
    }
}

document.querySelector('.panel__order').addEventListener('input', () => {
  document.querySelector('.panel__order').value = document.querySelector('.panel__order').value.replace(/[^0-9]/g, '');
});

document.querySelector('.panel__price-max').addEventListener('input', () => {
  document.querySelector('.panel__price-max').value = document.querySelector('.panel__price-max').value.replace(/[^0-9.]/g, '');
});

async function fetchRentServices(params) {
  const query = new URLSearchParams(params);
  try {
    const res = await fetch(`/rent-services?${query.toString()}`);
    const data = await res.json();
    console.log('Rent services:', data);
    return data;
  } catch (e) {
    console.error('Error loading rent services', e);
  }
}

async function fetchNumbersStatus({ country, operator }) {
  const query = new URLSearchParams({ country, operator });
  try {
    const res = await fetch(`/numbers-status?${query.toString()}`);
    const data = await res.json();
    console.log('Numbers status:', data.tg);
    document.querySelector('.find').style.maxHeight = '400px';
    document.querySelector('.find').style.padding = '20px 40px';
    document.querySelector('.find').style.marginTop = '20px';
    if ( data.tg == undefined ) {
        document.querySelector('.find__title').textContent = `Результат поиска [ ${listActiveCountry[0]} / ${listActiveOperators[0]} ] = 0 штук`;
    } else {
        document.querySelector('.find__title').textContent = `Результат поиска [ ${listActiveCountry[0]} / ${listActiveOperators[0]} ] = ${data.tg} штук`;
    }

    return data;
  } catch (e) {
    console.error('Не получилось получить статус номеров', e);
  }
}

document.querySelector('.panel__button-find').addEventListener('click', event => {
    if ( activeCountryId != "null" && listActiveOperators.length != 0 ) {
        fetchNumbersStatus({
            country: activeCountryId,
            operator: listActiveOperators[0]
        });
    } else {

        document.querySelector('.panel__message').style.marginTop = '10px';
        document.querySelector('.panel__message').style.padding = '10px 24px';
        document.querySelector('.panel__message').style.maxHeight = '100px';

        if ( activeCountryId == "null" ) {
            document.querySelector('.panel__message').textContent = `⚠️ Выберите страну ⚠️`;
        } else if ( listActiveOperators.length == 0  ) {
            document.querySelector('.panel__message').textContent = `⚠️ Выберите оператора ⚠️`;
        }

        setTimeout( () => {
            document.querySelector('.panel__message').style.marginTop = '0px';
            document.querySelector('.panel__message').style.padding = '0px 24px';
            document.querySelector('.panel__message').style.maxHeight = '0px';
        }, 3000)

    }
})

document.querySelector('.panel__button-buy').addEventListener('click', async function (e) {
    if ( activeCountryId != "null" && listActiveOperators.length != 0 && Number(document.querySelector('.panel__price-max').value) > 0 ) {

        e.preventDefault();

        const service = "tg";
        const country = activeCountryId;
        const operator = listActiveOperators[0];
        const maxPrice = Number(document.querySelector('.panel__price-max').value);
        const useCashBack = "true";

        try {
            const params = new URLSearchParams({
                service,
                country,
                operator,
                maxPrice,
                useCashBack
        });

        const res = await fetch(`/buy-number?${params.toString()}`);
        const data = await res.text();

        fetchBalance();

        console.log(`Ответ сервера: ${data}`);

        const str = data;
        const parts = str.split(":");

        if ( data == "NO_NUMBERS" ) {
            document.querySelector('.find__title').textContent = `❌ Нету выбранных номеров по этой цене`;
        } else if ( data != "NO_NUMBERS" && parts[0] == "ACCESS_NUMBER" ) {
            document.querySelector('.find__title').textContent = `✅ Куплен номер +${parts[2]} | ID заказа #${parts[1]}`;
        } else {
            document.querySelector('.find__title').textContent = `👾 ${data} 👾`;
        }

        document.querySelector('.find').style.maxHeight = '400px';
        document.querySelector('.find').style.padding = '20px 40px';
        document.querySelector('.find').style.marginTop = '20px';
        

        } catch (err) {
            console.error(err);
            document.getElementById('result').innerText = 'Ошибка при покупке номера';
        }

    } else {
        console.log('Не все данные введены');

        document.querySelector('.panel__message').style.marginTop = '10px';
        document.querySelector('.panel__message').style.padding = '10px 24px';
        document.querySelector('.panel__message').style.maxHeight = '100px';

        if ( activeCountryId == "null" ) {
            document.querySelector('.panel__message').textContent = `⚠️ Выберите страну ⚠️`;
        } else if ( listActiveOperators.length == 0  ) {
            document.querySelector('.panel__message').textContent = `⚠️ Выберите оператора ⚠️`;
        } else if ( Number(document.querySelector('.panel__price-max').value) <= 0 ) {
            document.querySelector('.panel__message').textContent = `⚠️ Укажите максимальную цену ⚠️`;
        }
        
        setTimeout( () => {
            document.querySelector('.panel__message').style.marginTop = '0px';
            document.querySelector('.panel__message').style.padding = '0px 24px';
            document.querySelector('.panel__message').style.maxHeight = '0px';
        }, 3000)

    }
});

document.querySelector('.panel__button-start').addEventListener('click', async function (e) {

    if ( activeCountryId != "null" && listActiveOperators.length != 0 && Number(document.querySelector('.panel__price-max').value) > 0 && Number(document.querySelector('.panel__order').value) > 0 ) {

        document.querySelector('.panel__details').textContent = `${listActiveCountry[0]} / ${listActiveOperators[0]} / ${document.querySelector('.panel__order').value} шт / до ${document.querySelector('.panel__price-max').value}$`;

        document.querySelector('.panel__proof').style.display = "block";
        setTimeout( () => {
            document.querySelector('.panel__proof').style.opacity = "1";
            setTimeout( () => {
                document.querySelector('.panel__modal').style.top = "50%";
            }, 300)
        }, 100)

    } else {
        console.log('Не все данные введены');

        document.querySelector('.panel__message').style.marginTop = '10px';
        document.querySelector('.panel__message').style.padding = '10px 24px';
        document.querySelector('.panel__message').style.maxHeight = '100px';

        if ( activeCountryId == "null" ) {
            document.querySelector('.panel__message').textContent = `⚠️ Выберите страну ⚠️`;
        } else if ( listActiveOperators.length == 0  ) {
            document.querySelector('.panel__message').textContent = `⚠️ Выберите оператора ⚠️`;
        } else if ( Number(document.querySelector('.panel__order').value) <= 0) {
            document.querySelector('.panel__message').textContent = `⚠️ Укажите нужное количество номеров ⚠️`;
        } else if ( Number(document.querySelector('.panel__price-max').value) <= 0 ) {
            document.querySelector('.panel__message').textContent = `⚠️ Укажите максимальную цену за номер ⚠️`;
        }

        setTimeout( () => {
            document.querySelector('.panel__message').style.marginTop = '0px';
            document.querySelector('.panel__message').style.padding = '0px 24px';
            document.querySelector('.panel__message').style.maxHeight = '0px';
        }, 3000)


    }

});

document.querySelector('.panel__no').addEventListener('click', event => {
    document.querySelector('.panel__modal').style.top = "150%";
    setTimeout( () => {
        document.querySelector('.panel__proof').style.opacity = "0";
        setTimeout( () => {
            document.querySelector('.panel__proof').style.display = "none";
        }, 300)
    }, 300)
})

function createNewLog(text) {
    let newLog = document.createElement('div');
    newLog.classList.add('logs__text');
    newLog.innerHTML = `<span>${getCurrentTimeNow()}</span><p>${text}</p>`;
    document.querySelector('.logs__wall').prepend(newLog);

    limitLogs(300);
}

let monitorInterval = null;
let boughtCount = 0;
let monitoring = false;

document.querySelector('.panel__yes').addEventListener('click', async () => {

    document.querySelector('.logs__param-country span').textContent = listActiveCountry[0];
    document.querySelector('.logs__param-operator span').textContent = listActiveOperators[0];
    document.querySelector('.logs__param-max span').textContent = Number(document.querySelector('.panel__price-max').value);
    document.querySelector('.logs__param-start span').textContent = getCurrentTimeNow();
    document.querySelector('.logs__param-final span').textContent = Number(document.querySelector('.panel__order').value);

    document.querySelector('.find').style.maxHeight = '0px';
    document.querySelector('.find').style.padding = '0px 40px';
    document.querySelector('.find').style.marginTop = '0px';
    document.querySelector('.panel__modal').style.top = "150%";
    document.querySelector('.panel__switch').style.top = "50%";
    document.querySelector('.panel__add').style.bottom = "20px";
    document.querySelector('.logs').style.marginTop = "20px";
    document.querySelector('.logs').style.maxHeight = "600px";
    document.querySelector('.logs').style.padding = "40px";
    document.querySelector('.logs__wall').innerHTML = "";

    setTimeout(() => {
        document.querySelector('.logs').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);

    createNewLog("🚀 Запуск мониторинга и автозакупа");

    if (activeCountryId === "null" || listActiveOperators.length === 0 || Number(document.querySelector('.panel__price-max').value) <= 0) {
        createNewLog('❌ Не все данные введены');
        return;
    }

    const targetCount = Number(document.querySelector('.panel__order').value);
    if (targetCount <= 0) {
        createNewLog('❌ Неверное количество номеров');
        return;
    }

    if (monitoring) {
        createNewLog('❌ Процесс уже запущен');
        return;
    }

    monitoring = true;
    document.querySelector('.logs__loading').style.display = "block";
    boughtCount = 0;

    const service = "tg";
    const country = activeCountryId;
    const operator = listActiveOperators[0];
    const maxPrice = Number(document.querySelector('.panel__price-max').value);
    const useCashBack = "true";

    async function buyLoop() {
        if (!monitoring) return;

        if (boughtCount >= targetCount) {
            createNewLog(`🎉 Куплено ${boughtCount} номеров. Процесс окончен.`);
            document.querySelector('.logs__loading').style.display = "none";
            monitoring = false;
            return;
        }

        try {
            const params = new URLSearchParams({ service, country, operator, maxPrice, useCashBack });
            const res = await fetch(`/buy-number?${params.toString()}`);
            const data = await res.text();

            if ( data === "NO_NUMBERS" ) {
                createNewLog(`❌ Нету выбранных номеров по выбранной цене`);
            } else if ( data === "NO_BALANCE" ) {
                createNewLog(`🤷‍♂️ Недостаточный баланс`);
                stopMonitoring();
                return;
            } else {
                const parts = data.split(":");
                if (parts[0] === "ACCESS_NUMBER") {
                    boughtCount++;
                    createNewLog(`✅ Куплен номер +${parts[2]} | ID заказа #${parts[1]} | Куплено: ${boughtCount}/${targetCount}`);
                    fetchBalance();
                    document.querySelector('.logs__param-done span').textContent = boughtCount;

                    document.querySelector('.list').style.marginTop = "20px";
                    document.querySelector('.list').style.maxHeight = "600px";
                    document.querySelector('.list').style.padding = "20px 20px";
                    document.querySelector('.list__title span').textContent = boughtCount;
                    let newProduct = document.createElement('div');
                    newProduct.classList.add('list__card');
                    newProduct.id = parts[1];
                    newProduct.innerHTML = `
                        <div class="list__id">#${boughtCount}</div>
                        <div class="list__time">${getCurrentTimeNow()}</div>
                        <div class="list__number">
                            <p>+${parts[2]}</p>
                            <div class="list__copy">
                                <img src="images/copy.png" alt="copy">
                            </div>
                        </div>
                        <div class="list__sms">
                            <p>Ожидает SMS</p>
                        </div>
                        <div class="list__refund">
                            <img src="images/close.png" alt="close">
                        </div>
                    `;

                    newProduct.addEventListener('click', function () {
                        const text = parts[2];
                        
                        if (navigator.clipboard && window.isSecureContext) {
                            navigator.clipboard.writeText(text)
                                .then(() => console.log("Скопировано!"))
                                .catch(err => console.error("Ошибка копирования: ", err));
                        } else {
                            let textarea = document.createElement('textarea');
                            textarea.value = text;
                            textarea.style.position = 'fixed';
                            textarea.style.left = '-9999px';
                            document.body.appendChild(textarea);
                            textarea.focus();
                            textarea.select();
                            try {
                                document.execCommand('copy');
                                console.log("Скопировано!");
                            } catch (err) {
                                console.error("Ошибка копирования: ", err);
                            }
                            document.body.removeChild(textarea);
                        }

                        newProduct.style.background = "#b9ff931d";
                        setTimeout( () => {
                            newProduct.style.background = "#1818182e";
                        }, 600)
                    });

                    document.querySelector('.list__wall').append(newProduct);

                } else if (parts[0] === "WRONG_MAX_PRICE") {
                    createNewLog(`💳 Минимальная цена за номер в наличии ${parts[1]} $`);
                } else {
                    createNewLog(`👾 ${data} 👾`);
                }
            }

        } catch (err) {
            console.error(err);
            createNewLog('❌ Ошибка при покупке номера');
        }

        buyLoop();
    }

    buyLoop();
});


document.querySelector('.panel__add').addEventListener('click', () => {
    window.open(location.origin, '_blank');
});

document.querySelector('.panel__switch').addEventListener('click', event => {

    document.querySelector('.panel__switch').style.top = "-150%";
    document.querySelector('.panel__add').style.bottom = "-120px";
    setTimeout( () => {
        document.querySelector('.panel__proof').style.opacity = "0";
        setTimeout( () => {
            document.querySelector('.panel__proof').style.display = "none";
        }, 300)
    }, 300)
    document.querySelector('.logs__loading').style.display = "none";

})

function getCurrentTimestamp() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

function getCurrentTimeNow() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}


document.querySelector('.panel__switch').addEventListener('click', function () {
    stopMonitoring();
    setTimeout( () => {
        createNewLog('✋ Процесс остановлен пользователем');
    }, 700)
});

function stopMonitoring() {
    if (monitorInterval) {
        clearInterval(monitorInterval);
        monitorInterval = null;
    }
    monitoring = false;

    document.querySelector('.logs__loading').style.display = "none";
    console.log('Процесс остановлен пользователем');
}

document.querySelector('.panel__update').addEventListener('click', event => {
    fetchBalance();
})

function updateTime() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const timeStr = `${hh}:${mm}:${ss}`;

  const timeElem = document.querySelector('.logs__time p');
  if (timeElem) {
    timeElem.textContent = timeStr;
  }

  if ( monitoring == true ) {
    document.querySelector('.logs__status span').textContent = "В процессе";
    document.querySelector('.logs__circle').classList.remove('logs__circle-off');
    document.querySelector('.logs__circle').classList.add('logs__circle-on');
  } else if ( monitoring == false ) {
    document.querySelector('.logs__status span').textContent = "Завершен";
    document.querySelector('.logs__circle').classList.add('logs__circle-off');
    document.querySelector('.logs__circle').classList.remove('logs__circle-on');
  }

}

updateTime();
setInterval(updateTime, 1000);

function limitLogs(maxLogs) {
  const logs = document.querySelectorAll('.logs__text');
  if (logs.length > maxLogs) {
    for (let i = logs.length - 1; i >= maxLogs; i--) {
      logs[i].remove();
    }
  }
}