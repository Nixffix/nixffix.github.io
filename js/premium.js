// Функция отрисовки открытия каталога, она вызываеться после получения всех запросов из calculate.js

function firstRenderCatalog(cars, value) {

    // Валидация инпутов

    document.querySelector('.catalog__input-date-start').addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '');
    });
    document.querySelector('.catalog__input-date-end').addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '');
    });
    document.querySelector('.catalog__input-engine-start').addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '');
    });
    document.querySelector('.catalog__input-engine-end').addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '');
    });

    document.querySelector('.catalog__input-price-start').addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, ''); // Убираем все нецифры
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Ставим пробелы
        this.value = value;
    });
    document.querySelector('.catalog__input-price-end').addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, ''); // Убираем все нецифры
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Ставим пробелы
        this.value = value;
    });

    document.querySelector('.catalog__input-mile-start').addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, ''); // Убираем все нецифры
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Ставим пробелы
        this.value = value;
    });
    document.querySelector('.catalog__input-mile-end').addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, ''); // Убираем все нецифры
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Ставим пробелы
        this.value = value;
    });

    // Установка первой страницы и выбор количества отображаемого количества карточек на 1 странице
    let activePage = 1;
    let cardsOnPage = 12;

    let arrBasicAuto = [];
    let arrPremiumAuto = [];

    // Фильтр базовых от премиум авто
    cars.forEach( (item, i) => {
        let priceInRub = parseInt((cars[i].price * 10000) * valueKRW);
        if ( priceInRub > 4500000 ) {
            arrPremiumAuto.push(item);
        } else {
            arrBasicAuto.push(item);
        }
    })
    
    // Получаем все уникальные данные
    let uniqueMark = [];
    let uniqueModel = [];
    let uniqueComplect = [];
    let uniqueFuelTypes = [];
    arrPremiumAuto.forEach(car => {
        if (car.grade_detail.model.model_group.manufacturer.name.replace(/_/g, " ") && !uniqueMark.includes(car.grade_detail.model.model_group.manufacturer.name.replace(/_/g, " "))) {
            if ( car.grade_detail.model.model_group.manufacturer.name.replace(/_/g, " ") == "etc" ) {

            } else {
                uniqueMark.push(car.grade_detail.model.model_group.manufacturer.name.replace(/_/g, " "));
            }
        }
        if (car.grade_detail.model.model_group.name && !uniqueModel.includes(car.grade_detail.model.model_group.name)) {
            uniqueModel.push(car.grade_detail.model.model_group.name);
        }
        if (car.grade_detail.name && !uniqueComplect.includes(car.grade_detail.name)) {
            uniqueComplect.push(car.grade_detail.name);
        }
        if (car.fuel_type && !uniqueFuelTypes.includes(car.fuel_type)) {
            uniqueFuelTypes.push(car.fuel_type);
        }
    });

    // Отображаем все уникальные данные в поля для ввода
    uniqueMark.sort((a, b) => a.localeCompare(b, 'ru', { sensitivity: 'base' }));
    uniqueMark.forEach( (item, i) => {
        let newVariable = document.createElement('p');
        newVariable.textContent = item;
        document.querySelector('.catalog__params-mark').append(newVariable);
    })

    uniqueModel.sort((a, b) => a.localeCompare(b, 'ru', { sensitivity: 'base' }));
    uniqueModel.forEach( (item, i) => {
        let newVariable = document.createElement('p');
        newVariable.textContent = item;
        document.querySelector('.catalog__params-model').append(newVariable);
    })

    uniqueComplect.sort((a, b) => a.localeCompare(b, 'ru', { sensitivity: 'base' }));
    uniqueComplect.forEach( (item, i) => {
        let newVariable = document.createElement('p');
        newVariable.textContent = item;
        document.querySelector('.catalog__params-complect').append(newVariable);
    })

    let uniqueFuelTypesRU = [];
    uniqueFuelTypes.forEach( (item, i) => {
        if ( item == "diesel" ) {
            uniqueFuelTypesRU.push("Дизель");
        } else if ( item == "gasoline" ) {
            uniqueFuelTypesRU.push("Бензин");
        } else if ( item == "hybrid" ) {
            uniqueFuelTypesRU.push("Гибрид");
        } else if ( item == "lpg" ) {
            uniqueFuelTypesRU.push("Газ (LPG)");
        } else if ( item == "electric" ) {
            uniqueFuelTypesRU.push("Электромобиль");
        } else if ( item == "gasoline_lpg" ) {
            uniqueFuelTypesRU.push("Бензин/Газ");
        } 
    })

    uniqueFuelTypesRU.sort((a, b) => a.localeCompare(b, 'ru', { sensitivity: 'base' }));
    uniqueFuelTypesRU.forEach( (item, i) => {
        let newVariable = document.createElement('p');
        newVariable.textContent = item;
        document.querySelector('.catalog__params-fuel').append(newVariable);
    })

    // Функционал отображения списков
    document.querySelector('.catalog__input-mark').addEventListener('focus', event => {
        document.querySelector('.catalog__params-mark').style.maxHeight = '200px';
    })
    document.querySelector('.catalog__input-mark').addEventListener('blur', event => {
        document.querySelector('.catalog__params-mark').style.maxHeight = '0px';
    })

    document.querySelector('.catalog__input-model').addEventListener('focus', event => {
        document.querySelector('.catalog__params-model').style.maxHeight = '200px';
    })
    document.querySelector('.catalog__input-model').addEventListener('blur', event => {
        document.querySelector('.catalog__params-model').style.maxHeight = '0px';
    })

    document.querySelector('.catalog__input-complect').addEventListener('focus', event => {
        document.querySelector('.catalog__params-complect').style.maxHeight = '200px';
    })
    document.querySelector('.catalog__input-complect').addEventListener('blur', event => {
        document.querySelector('.catalog__params-complect').style.maxHeight = '0px';
    })

    document.querySelector('.catalog__input-fuel').addEventListener('focus', event => {
        document.querySelector('.catalog__params-fuel').style.maxHeight = '200px';
    })
    document.querySelector('.catalog__input-fuel').addEventListener('blur', event => {
        document.querySelector('.catalog__params-fuel').style.maxHeight = '0px';
    })

    // Выбор марки авто
    document.querySelectorAll('.catalog__params-mark p').forEach( (item, i) => {
        item.addEventListener('click', event => {
            document.querySelector('.catalog__input-mark').value = item.textContent;
            document.querySelector('.catalog__input-model').value = "";
            document.querySelector('.catalog__input-complect').value = "";
            document.querySelector('.catalog__blocked-complect').style.display = 'block';

            document.querySelector('.catalog__blocked-model').style.display = 'none';
            document.querySelectorAll('.catalog__params-model p').forEach( item => {
                if ( item ) item.remove();
                // item.style.display = 'none';
            })

            let searchModel = [];
            arrPremiumAuto.forEach( (item, i) => {
                if ( item.grade_detail.model.model_group.manufacturer.name.replace(/_/g, " ") == document.querySelector('.catalog__input-mark').value ) {
                    if (item.grade_detail.model.model_group.name && !searchModel.includes(item.grade_detail.model.model_group.name)) {
                        searchModel.push(item.grade_detail.model.model_group.name);
                    }
                    
                }
            })

            searchModel.sort((a, b) => a.localeCompare(b, 'ru', { sensitivity: 'base' }));
            searchModel.forEach( (item, i) => {
                let newVariable = document.createElement('p');
                newVariable.textContent = item;
                document.querySelector('.catalog__params-model').append(newVariable);
            })

            // Выбор модели авто
            document.querySelectorAll('.catalog__params-model p').forEach( (item, i) => {
                item.addEventListener('click', event => {
                    document.querySelector('.catalog__input-model').value = item.textContent;
                    document.querySelector('.catalog__input-complect').value = "";

                    document.querySelector('.catalog__blocked-complect').style.display = 'none';
                    document.querySelectorAll('.catalog__params-complect p').forEach( item => {
                        if ( item ) item.remove();
                    })

                    let searchComplect = [];
                    arrPremiumAuto.forEach( (item, i) => {
                        if ( item.grade_detail.model.model_group.manufacturer.name.replace(/_/g, " ") == document.querySelector('.catalog__input-mark').value && item.grade_detail.model.model_group.name == document.querySelector('.catalog__input-model').value ) {
                            if (item.grade_detail.name && !searchComplect.includes(item.grade_detail.name)) {
                                searchComplect.push(item.grade_detail.name);
                            }
                            
                        }
                    })

                    searchComplect.sort((a, b) => a.localeCompare(b, 'ru', { sensitivity: 'base' }));
                    searchComplect.forEach( (item, i) => {
                        let newVariable = document.createElement('p');
                        newVariable.textContent = item;
                        document.querySelector('.catalog__params-complect').append(newVariable);
                    })

                    // Выбор комплектации
                    document.querySelectorAll('.catalog__params-complect p').forEach( (item, i) => {
                        item.addEventListener('click', event => {
                            document.querySelector('.catalog__input-complect').value = item.textContent;        
                        })
                    })

                })
            })

        })
    })

    document.querySelector('.catalog__input-mark').addEventListener('input', event => {
        document.querySelectorAll('.catalog__params-mark p').forEach( (item, i) => {
            item.style.display = "none";
            if ( item.textContent.toLocaleLowerCase().includes(document.querySelector('.catalog__input-mark').value.toLocaleLowerCase()) ) {
                item.style.display = "block";
            }
        })
    })

    document.querySelector('.catalog__input-model').addEventListener('input', event => {
        document.querySelectorAll('.catalog__params-model p').forEach( (item, i) => {
            item.style.display = "none";
            if ( item.textContent.toLocaleLowerCase().includes(document.querySelector('.catalog__input-model').value.toLocaleLowerCase()) ) {
                item.style.display = "block";
            }
        })
    })

    document.querySelector('.catalog__input-complect').addEventListener('input', event => {
        document.querySelectorAll('.catalog__params-complect p').forEach( (item, i) => {
            item.style.display = "none";
            if ( item.textContent.toLocaleLowerCase().includes(document.querySelector('.catalog__input-complect').value.toLocaleLowerCase()) ) {
                item.style.display = "block";
            }
        })
    })

    // Выбор типа топлива
    document.querySelector('.catalog__input-fuel').addEventListener('input', event => {
        document.querySelectorAll('.catalog__params-fuel p').forEach( (item, i) => {
            item.style.display = "none";
            if ( item.textContent.toLocaleLowerCase().includes(document.querySelector('.catalog__input-fuel').value.toLocaleLowerCase()) ) {
                item.style.display = "block";
            }
        })
    })

    document.querySelectorAll('.catalog__params-fuel p').forEach( (item, i) => {
        item.addEventListener('click', event => {
            document.querySelector('.catalog__input-fuel').value = item.textContent;        
        })
    })

    // Перемешываем перед отображением
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    arrPremiumAuto = shuffleArray(arrPremiumAuto);

    // Устанавливаем текущий массив авто
    let actualArray = arrPremiumAuto;

    // Функция отрисовки новой страницы на страницу
    function addCardOnWindow(actualArray, cardsOnPage) {

        document.querySelector('.catalog__empty').style.display = "none";

        if ( actualArray.length == 0 ) document.querySelector('.catalog__empty').style.display = "block";

        if ( actualArray.length < 12 ) {
            cardsOnPage = actualArray.length;
            document.querySelector('.catalog__add').style.display = "none";
        } else {
            document.querySelector('.catalog__add').style.display = "flex";
        }

        for (let i = 0; i < cardsOnPage; i++) {
        
            // Создаём новую карточку авто
            let newCard = document.createElement('a');
            newCard.href = `product.html#${actualArray[i].vehicle_id}`;
            newCard.classList.add('catalog__card');
            newCard.innerHTML = `
                <div class="catalog__image">
                    <img src="${actualArray[i].main_photo.slice(0, -5)}1.jpg" alt="image product" class="catalog__img catalog__img-active">
                    <img src="${actualArray[i].main_photo.slice(0, -5)}2.jpg" alt="image product" class="catalog__img catalog__img-hd">
                </div>
    
                <div class="catalog__info">
                    <div class="catalog__name"><span class="catalog__mark">${actualArray[i].grade_detail.model.model_group.manufacturer.name.replace(/_/g, " ")}</span> <span class="catalog__model">${actualArray[i].grade_detail.model.model_group.name}</span></div>
                    <div class="catalog__com">Комплектация</div>
                    <div class="catalog__variable">${actualArray[i].grade_detail.name}</div>
    
                    <div class="catalog__line">
                        <p>Пробег</p>
                        <span class="catalog__mile">${String(parseInt(actualArray[i].mileage)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} км</span>
                    </div>
                    <div class="catalog__line">
                        <p>Год выпуска</p>
                        <span class="catalog__age">${actualArray[i].year}</span>
                    </div>
                    <div class="catalog__line">
                        <p>Тип топлива</p>
                        <span class="catalog__fuel">${actualArray[i].fuel_type}</span>
                    </div>
                    <div class="catalog__line">
                        <p>Двигатель</p>
                        <span class="catalog__eng">${actualArray[i].engine ? actualArray[i].engine.replace(/\D/g, '') + "  см³" : "Электромотор" }</span>
                    </div>
                    <div class="catalog__line">
                        <p>Трансмиссия</p>
                        <span class="catalog__trans">${actualArray[i].transmission}</span>
                    </div>
                    <div class="catalog__line catalog__line-last">
                        <p>Цена в Корее</p>
                        <span class="catalog__krw">${String(parseInt(actualArray[i].price * 10000)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₩</span>
                    </div>
                </div>
    
                <div class="catalog__hide">
                    <div class="catalog__details">
                        <p>Подробнее</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </div>
                    <div class="catalog__price">
                        <p>Цена в рублях</p>
                        <span>${String(parseInt((actualArray[i].price * 10000) * valueKRW)).replace(/\B(?=(\d{3})+(?!\d))/g, '.').slice(0, -3)}000 ₽</span>
                    </div>
                </div>
            `;
    
            document.querySelector('.catalog__desk').append(newCard);
    
        }
    
        // Перевод на русский вида топлива
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
    
        // Перевод на русский трансмиссии
        document.querySelectorAll('.catalog__trans').forEach( (item, i) => {
            if ( item.textContent == "auto" ) {
                item.textContent = "Автоматическая";
            } else if ( item.textContent == "manual" ) {
                item.textContent = "Механическая";
            } else if ( item.textContent == "cvt" ) {
                item.textContent = "Вариатор";
            } 
        })

        // Удаляем уже отображенные авто
        actualArray.splice(0, cardsOnPage);

        // Проверка на наличие фотографий
        document.querySelectorAll('.catalog__img').forEach( (item, i) => {
            item.onerror = function() {
                console.log('Ошибка загрузки картинки');
                item.src = "../images/logo-none.png";
            };
        })

        // Удаляем авто без фото
        // document.querySelectorAll('.catalog__img-active').forEach( (item, i) => {
        //     item.onerror = function() {
        //         document.querySelectorAll('.catalog__card')[i].remove();
        //     };
        // })
        // document.querySelectorAll('.catalog__img-hd').forEach( (item, i) => {
        //     item.onerror = function() {
        //         document.querySelectorAll('.catalog__card')[i].remove();
        //     };
        // })

    }

    // Проверка на наличие марки авто в ссылке
    const hash = window.location.hash.slice(1);
    let haveMark = false;
    uniqueMark.forEach( (item, i) => {
        if ( String(item.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "")) == String(hash) ) {
            console.log(`YES ${item}`);
            haveMark = true;
            document.querySelector('.catalog__input-mark').value = item;
        }
    })
    // Сразу вызываем отрисовку первой страницы
    if ( haveMark ) {
        let newArr = [];
        arrPremiumAuto.forEach( (item, i) => {
            if ( item.grade_detail.model.model_group.manufacturer.name.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "") == hash ) {
                newArr.push(item);
            }
        })

        actualArray = newArr;
        addCardOnWindow(actualArray, cardsOnPage);
    } else {
        addCardOnWindow(actualArray, cardsOnPage);
        
    }

    // Удаляем авто без фото для первого рендера
    document.querySelectorAll('.catalog__img-active').forEach( (item, i) => {
        item.onerror = function() {
            document.querySelectorAll('.catalog__card')[i].remove();
        };
    })
    document.querySelectorAll('.catalog__img-hd').forEach( (item, i) => {
        item.onerror = function() {
            document.querySelectorAll('.catalog__card')[i].remove();
        };
    })

    // Вывод новой страницы авто на экран
    document.querySelector('.catalog__add').addEventListener('click', event => {
        addCardOnWindow(actualArray, cardsOnPage);
    })

    // Очистить все поля
    document.querySelector('.catalog__clear').addEventListener('click', event => {
        document.querySelectorAll('.catalog__input').forEach( item => {
            item.value = "";
            document.querySelector('.catalog__blocked-model').style.display = 'block';
            document.querySelector('.catalog__blocked-complect').style.display = 'block';
        })
    })

    // Отображение авто по введённым параметрам
    document.querySelector('.catalog__button').addEventListener('click', event => {

        // Проверка на наличие введённых параметров
        let getParams = false;
        document.querySelectorAll('.catalog__input').forEach( item => {
            if ( item.value != "" ) getParams = true;
        })
        
        // Если параметры введены, работает скрипт
        if ( getParams ) {

            // Новый массив для отображения
            let arrWithParams = [];

            // Если введено название марки
            if ( document.querySelector('.catalog__input-mark').value != "" ) {
                arrPremiumAuto.forEach( (item, i) => {
                    if ( item.grade_detail.model.model_group.manufacturer.name.replace(/_/g, " ") == document.querySelector('.catalog__input-mark').value ) {
                        arrWithParams.push(item);
                    }
                })

                // Если введена модель авто
                if ( document.querySelector('.catalog__input-model').value != "" ) {
                    let arrWithMode = [];
                    arrWithParams.forEach( (item, i) => {
                        if ( item.grade_detail.model.model_group.name == document.querySelector('.catalog__input-model').value ) {
                            arrWithMode.push(item);
                        }
                    })
                    arrWithParams = arrWithMode;

                    // Если введена комплектация
                    if ( document.querySelector('.catalog__input-complect').value != "" ) {
                        let arrWithComplect = [];
                        arrWithParams.forEach( (item, i) => {
                            if ( item.grade_detail.name == document.querySelector('.catalog__input-complect').value ) {
                                arrWithComplect.push(item);
                            }
                        })
                        arrWithParams = arrWithComplect;
                    }
                }
            } else {
                // Если не введена марка авто
                arrWithParams = arrPremiumAuto;
            }

            // Если выбран тип топлива
            if ( document.querySelector('.catalog__input-fuel').value != "" ) {
                let fuelType = document.querySelector('.catalog__input-fuel').value;

                if ( fuelType == "Дизель" ) {
                    fuelType = "diesel";
                } else if ( fuelType == "Бензин" ) {
                    fuelType = "gasoline";
                } else if ( fuelType == "Гибрид" ) {
                    fuelType = "hybrid";
                } else if ( fuelType == "Газ (LPG)" ) {
                    fuelType = "lpg";
                } else if ( fuelType == "Электромобиль" ) {
                    fuelType = "electric";
                } else if ( fuelType == "Бензин/Газ" ) {
                    fuelType = "gasoline_lpg";
                }

                let newArr = [];
                arrWithParams.forEach( (item, i) => {
                    if ( item.fuel_type == fuelType ) {
                        newArr.push(item);
                    }
                })
                arrWithParams = newArr;

            }

            // Если выбран диапазон года выпуска
            if ( document.querySelector('.catalog__input-date-start').value != "" || document.querySelector('.catalog__input-date-end').value != "" ) {

                let yearStart = Number(document.querySelector('.catalog__input-date-start').value);
                let yearEnd = Number(document.querySelector('.catalog__input-date-end').value);
                let newArr = [];

                if ( document.querySelector('.catalog__input-date-start').value != "" && document.querySelector('.catalog__input-date-end').value != "" ) {

                    arrWithParams.forEach( (item, i) => {
                        if ( item.year >= yearStart && item.year <= yearEnd ) {
                            newArr.push(item);
                        }
                    })
                    arrWithParams = newArr;

                } else if ( document.querySelector('.catalog__input-date-start').value != "" && document.querySelector('.catalog__input-date-end').value == "" ) {

                    arrWithParams.forEach( (item, i) => {
                        if ( item.year >= yearStart ) {
                            newArr.push(item);
                        }
                    })
                    arrWithParams = newArr;

                } else if ( document.querySelector('.catalog__input-date-start').value == "" && document.querySelector('.catalog__input-date-end').value != "" ) {

                    arrWithParams.forEach( (item, i) => {
                        if ( item.year <= yearEnd ) {
                            newArr.push(item);
                        }
                    })
                    arrWithParams = newArr;

                }

            }

            // Если введён диапазон объёма двигателя
            if ( document.querySelector('.catalog__input-engine-start').value != "" || document.querySelector('.catalog__input-engine-end').value != "" ) {

                let engineStart = Number(document.querySelector('.catalog__input-engine-start').value);
                let engineEnd = Number(document.querySelector('.catalog__input-engine-end').value);
                let newArr = [];

                arrWithParams.forEach( (item, i) => {
                    if ( item.engine != null ) {
                        newArr.push(item);
                    } else {
                    }
                })

                arrWithParams = newArr;

                newArr = [];
                if ( document.querySelector('.catalog__input-engine-start').value != "" && document.querySelector('.catalog__input-engine-end').value != "" ) {

                    arrWithParams.forEach( (item, i) => {
                        if ( Number(item.engine.replace(/\D/g, '')) >= engineStart && Number(item.engine.replace(/\D/g, '')) <= engineEnd ) {
                            newArr.push(item);
                        }
                    })
                    arrWithParams = newArr;

                } else if ( document.querySelector('.catalog__input-engine-start').value != "" && document.querySelector('.catalog__input-engine-end').value == "" ) {

                    arrWithParams.forEach( (item, i) => {
                        if ( Number(item.engine.replace(/\D/g, '')) >= engineStart ) {
                            newArr.push(item);
                        }
                    })
                    arrWithParams = newArr;

                } else if ( document.querySelector('.catalog__input-engine-start').value == "" && document.querySelector('.catalog__input-engine-end').value != "" ) {

                    arrWithParams.forEach( (item, i) => {
                        if ( Number(item.engine.replace(/\D/g, '')) <= engineEnd ) {
                            newArr.push(item);
                        }
                    })
                    arrWithParams = newArr;

                }

            }

            // Если введён диапазон цены
            if ( document.querySelector('.catalog__input-price-start').value != "" || document.querySelector('.catalog__input-price-end').value != "" ) {
                
                let priceStart = Number(document.querySelector('.catalog__input-price-start').value.replace(/\D/g, ''));
                let priceEnd = Number(document.querySelector('.catalog__input-price-end').value.replace(/\D/g, ''));
                let newArr = [];

                if ( document.querySelector('.catalog__input-price-start').value != "" && document.querySelector('.catalog__input-price-end').value != "" ) {

                    arrWithParams.forEach( (item, i) => {
                        if ( (item.price * 10000) * valueKRW >= priceStart && (item.price * 10000) * valueKRW <= priceEnd ) {
                            newArr.push(item);
                        }
                    })
                    arrWithParams = newArr;

                } else if ( document.querySelector('.catalog__input-price-start').value != "" && document.querySelector('.catalog__input-price-end').value == "" ) {

                    arrWithParams.forEach( (item, i) => {
                        if ( (item.price * 10000) * valueKRW >= priceStart ) {
                            newArr.push(item);
                        }
                    })
                    arrWithParams = newArr;

                } else if ( document.querySelector('.catalog__input-price-start').value == "" && document.querySelector('.catalog__input-price-end').value != "" ) {

                    arrWithParams.forEach( (item, i) => {
                        if ( (item.price * 10000) * valueKRW <= priceEnd ) {
                            newArr.push(item);
                        }
                    })
                    arrWithParams = newArr;

                }

            }

            // Если введён диапазон пробега
            if ( document.querySelector('.catalog__input-mile-start').value != "" || document.querySelector('.catalog__input-mile-end').value != "" ) {
                
                let mileStart = Number(document.querySelector('.catalog__input-mile-start').value.replace(/\D/g, ''));
                let mileEnd = Number(document.querySelector('.catalog__input-mile-end').value.replace(/\D/g, ''));
                let newArr = [];

                if ( document.querySelector('.catalog__input-mile-start').value != "" && document.querySelector('.catalog__input-mile-end').value != "" ) {

                    arrWithParams.forEach( (item, i) => {
                        if ( item.mileage >= mileStart && item.mileage <= mileEnd ) {
                            newArr.push(item);
                        }
                    })
                    arrWithParams = newArr;

                } else if ( document.querySelector('.catalog__input-mile-start').value != "" && document.querySelector('.catalog__input-mile-end').value == "" ) {

                    arrWithParams.forEach( (item, i) => {
                        if ( item.mileage >= mileStart ) {
                            newArr.push(item);
                        }
                    })
                    arrWithParams = newArr;

                } else if ( document.querySelector('.catalog__input-mile-start').value == "" && document.querySelector('.catalog__input-mile-end').value != "" ) {

                    arrWithParams.forEach( (item, i) => {
                        if ( item.mileage <= mileEnd ) {
                            newArr.push(item);
                        }
                    })
                    arrWithParams = newArr;

                }

            }

            // Удаляем прошлые авто со страницы
            document.querySelectorAll('.catalog__card').forEach( item => {
                item.remove();
            })

            // Передаём новый массив для отображения
            actualArray = arrWithParams;
            addCardOnWindow(actualArray, cardsOnPage);

        }

    })

}