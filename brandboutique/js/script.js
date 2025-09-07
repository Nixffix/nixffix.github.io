// Получаем список авто
let allArray = [];
fetch('js/products.json')
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	})
	.then(data => {
		allArray = data;
		if ( document.querySelector('.promo') ) {
			allCatalog(data);
		}
		if ( location.href.includes("product") ) {
			createProductPage();
		}
		if ( location.href.includes("order") ) {
			buildOrderPage();
			sendMessageInTG();
		}
		if( location.href.includes("popular") ) {
			createPopularPage();
		}
		if ( location.href.includes("contact") || location.href.includes("about") ) {
			contactSend();
		}
		if ( location.href.includes("faq") ) {
			faqPage();
		}
		addedFooterBrands();
		addedCategoryMenu();
		updateBag();
		console.log(allArray.length);
		if ( !document.querySelector('.product') ) {
			setTimeout( () => {
				document.querySelector('.loading').style.top = "-100%";
			}, 1000)
		}
	})
	.catch(error => {
		console.error('Ошибка загрузки JSON:', error);
	});

// Прячем и открываем шапку по скроллу
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let header = document.querySelector(".header");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        header.style.top = "-150px";
		document.querySelector('.header__list').style.maxHeight = "0px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

// Открываем корзину

document.querySelector('.header__bag').addEventListener('click', event => {
	document.querySelector('.bag').style.display = 'block'
	setTimeout( () => {
		document.querySelector('.bag').style.opacity = '1';
		setTimeout( () => {
			document.querySelector('.bag__body').style.right = '0px'
		}, 600)
	}, 100)
})

document.querySelector('.bag__close').addEventListener('click', event => {
	document.querySelector('.bag__body').style.right = '-500px'
	setTimeout( () => {
		document.querySelector('.bag').style.opacity = '0';
		setTimeout( () => {
			document.querySelector('.bag').style.display = 'none'
		}, 600)
	}, 600)
})

document.querySelector('.bag').addEventListener('click', event => {
	if ( event.target == document.querySelector('.bag') ) {
		document.querySelector('.bag__body').style.right = '-500px'
		setTimeout( () => {
			document.querySelector('.bag').style.opacity = '0';
			setTimeout( () => {
				document.querySelector('.bag').style.display = 'none'
			}, 600)
		}, 600)
	}
})

// Выводим бренды ссылками в футер

function addedFooterBrands() {
	if ( !document.querySelector('.promo') ) {
		let listBrands = [];
		allArray.forEach( (item, i) => {
			listBrands.push(item.brand);
		})
		listBrands = [...new Set(listBrands)];
		// Добавляем в каталог футера бренды
		listBrands.forEach( (item, i) => {
			let newBrandFooter = document.createElement('a');
			newBrandFooter.href = `index.html#catalog?${item.replaceAll(" ", "-")}`;
			newBrandFooter.classList.add('footer__link');
			newBrandFooter.classList.add('footer__link-brand');
			newBrandFooter.textContent = item;
			document.querySelector('.footer__brand').append(newBrandFooter);
		})
	}
}

// Функция вывода всех товаров
async function allCatalog(data) {

	document.querySelector('.catalog__result').textContent = `Результат поиска: ${data.length}`;

	let listBrands = [];
	let listCategory = [];
	

	// Выводим все товары

	data.forEach( (item, i) => {

		listBrands.push(data[i].brand);
		listCategory.push(... data[i].category);
		

		let newCardProduct = document.createElement('div');
		newCardProduct.classList.add('catalog__card');
		// newCardProduct.href = `product#${data[i].product_id}`;
		newCardProduct.id = data[i].product_id;
		newCardProduct.innerHTML = `
			<a href="product.html#${data[i].product_id}" class="catalog__image">
				<img class="catalog__img catalog__img-first" src="${data[i].photo[1]}" alt="photo product" loading="lazy">
				<img class="catalog__img catalog__img-second" src="${data[i].photo[0]}" alt="photo product" loading="lazy">
			</a>
			<div class="catalog__hr">
				<div class="catalog__bar catalog__bar-active"></div>
				<div class="catalog__bar catalog__bar-blur"></div>
			</div>
			<a href="product.html#${data[i].product_id}" class="catalog__inf">
				<div class="catalog__brand">${data[i].brand}</div>
				<div class="catalog__model">${data[i].name} - ${data[i].color}</div>
				<div class="catalog__category">${data[i].category.join(" / ")}</div>
			</a>
			
			<div class="catalog__price">
				<div class="catalog__descr">Стоимость:</div>
				<div class="catalog__numbers">
					<div class="catalog__old ${data[i].price == data[i].newprice ? "catalog__old-no" : ""}">${data[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₽</div>
					<div class="catalog__new">${data[i].newprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₽</div>
				</div>
			</div>
			
			<div class="catalog__buttons">
				<a href="product.html#${data[i].product_id}" class="catalog__more">
					<img src="images/more.png" loading="lazy">
					<p>Смотреть детальнее</p>
				</a>
				<div class="catalog__add ${data[i].availability == "yes" ? "" : "catalog__add-none"}">
					<p>Добавить в корзину</p>
					<img src="images/bag2.png" loading="lazy">
				</div>
			</div>
			<div class="catalog__status">
				<div class="catalog__color ${data[i].availability == "yes" ? "catalog__color-yes" : "catalog__color-no"}"></div>
				<div class="catalog__aval">${data[i].availability == "yes" ? "Есть в наличии" : "Ожидаем поступление"}</div>
			</div>
		`;

		document.querySelector('.catalog__right').append(newCardProduct);

	})

	document.querySelectorAll('.catalog__add').forEach( (item, i) => {
		item.addEventListener('click', event => {
			const parent = item.closest('.catalog__card');
			const productId = parent.id;
			const stored = JSON.parse(localStorage.getItem('BB-Bag')) || {};
			stored[productId] = (stored[productId] || 1);
			localStorage.setItem('BB-Bag', JSON.stringify(stored));
			updateBag();
			document.querySelector('.bag').style.display = 'block'
			setTimeout( () => {
				document.querySelector('.bag').style.opacity = '1';
				setTimeout( () => {
					document.querySelector('.bag__body').style.right = '0px'
				}, 600)
			}, 100)
		})
	})

	// Выводим параметры фильтров

	listBrands = [...new Set(listBrands)];
	listCategory = [...new Set(listCategory)];
	
	listBrands.forEach( (item, i) => {
		let newBrandOption = document.createElement('div');
		newBrandOption.classList.add('catalog__option');
		newBrandOption.classList.add('catalog__option-brand');
		newBrandOption.innerHTML = `
			<div class="catalog__circle"></div>
			<div class="catalog__label">${item}</div>
		`;
		document.querySelectorAll('.catalog__area')[0].append(newBrandOption);

		
	})

	listCategory.forEach( (item, i) => {
		let newBrandOption = document.createElement('div');
		newBrandOption.classList.add('catalog__option');
		newBrandOption.classList.add('catalog__option-category');
		newBrandOption.innerHTML = `
			<div class="catalog__circle"></div>
			<div class="catalog__label">${item}</div>
		`;
		document.querySelectorAll('.catalog__area')[1].append(newBrandOption);
	})

  	// Вывод товаров по выбору пользователя

	let activeBrand = "Все бренды";
	let activeCategory = "Все категории";

	document.querySelectorAll('.catalog__option-brand').forEach( (item, i) => {

		item.addEventListener('click', event => {
			document.querySelectorAll('.catalog__option-brand').forEach( (item, i) => {
				item.classList.remove('catalog__option-active-brand');
			})
			item.classList.add('catalog__option-active-brand');
			activeBrand = document.querySelectorAll('.catalog__option-brand .catalog__label')[i].textContent;
			repaintProducts();
			document.querySelector('.title-catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
		})

	})

	document.querySelectorAll('.catalog__option-category').forEach( (item, i) => {

		item.addEventListener('click', event => {
			document.querySelectorAll('.catalog__option-category').forEach( (item, i) => {
				item.classList.remove('catalog__option-active-category');
			})
			item.classList.add('catalog__option-active-category');
			activeCategory = document.querySelectorAll('.catalog__option-category .catalog__label')[i].textContent;
			repaintProducts();
			document.querySelector('.title-catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
		})

	})

	
	function repaintProducts() {
		document.querySelectorAll('.catalog__card').forEach( (item, i) => {
			item.remove();
		})

		let newArr = data;
		
		if ( activeBrand != "Все бренды" ) {
			let sortBrandArr = [];
			newArr.forEach( (item, i) => {
				if ( item.brand == activeBrand ) {
					sortBrandArr.push(item);
				}
			})
			newArr = sortBrandArr;
		}

		if ( activeCategory != "Все категории" ) {
			let sortCategoryArr = [];
			newArr.forEach( (item, i) => {
				if ( item.category.includes(activeCategory) ) {
					sortCategoryArr.push(item);
				}
			})
			newArr = sortCategoryArr;
		}

		newArr.forEach( (item, i) => {
			let data = newArr;
			let newCardProduct = document.createElement('div');
			newCardProduct.classList.add('catalog__card');
			// newCardProduct.href = `product.html#${data[i].product_id}`;
			newCardProduct.id = data[i].product_id;
			newCardProduct.innerHTML = `
				<a href="product.html#${data[i].product_id}" class="catalog__image">
					<img class="catalog__img catalog__img-first" src="${data[i].photo[1]}" alt="photo product" loading="lazy">
					<img class="catalog__img catalog__img-second" src="${data[i].photo[0]}" alt="photo product" loading="lazy">
				</a>
				<div class="catalog__hr">
					<div class="catalog__bar catalog__bar-active"></div>
					<div class="catalog__bar catalog__bar-blur"></div>
				</div>
				<a href="product.html#${data[i].product_id}" class="catalog__inf">
					<div class="catalog__brand">${data[i].brand}</div>
					<div class="catalog__model">${data[i].name} - ${data[i].color}</div>
					<div class="catalog__category">${data[i].category.join(" / ")}</div>
				</a>
				<div class="catalog__price">
					<div class="catalog__descr">Стоимость:</div>
					<div class="catalog__numbers">
						<div class="catalog__old ${data[i].price == data[i].newprice ? "catalog__old-no" : ""}">${data[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₽</div>
						<div class="catalog__new">${data[i].newprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₽</div>
					</div>
				</div>
				<div class="catalog__buttons">
					<a href="product.html#${data[i].product_id}" class="catalog__more">
					<img src="images/more.png" loading="lazy">
					<p>Смотреть детальнее</p>
				</a>
				<div class="catalog__add ${data[i].availability == "yes" ? "" : "catalog__add-none"}">
					<p>Добавить в корзину</p>
					<img src="images/bag2.png" loading="lazy">
				</div>
				</div>
				<div class="catalog__status">
					<div class="catalog__color ${data[i].availability == "yes" ? "catalog__color-yes" : "catalog__color-no"}"></div>
					<div class="catalog__aval">${data[i].availability == "yes" ? "Есть в наличии" : "Ожидаем поступление"}</div>
				</div>
			`;

			document.querySelector('.catalog__right').append(newCardProduct);
		})

		document.querySelectorAll('.catalog__add').forEach( (item, i) => {
			item.addEventListener('click', event => {
				const parent = item.closest('.catalog__card');
				const productId = parent.id;
				const stored = JSON.parse(localStorage.getItem('BB-Bag')) || {};
				stored[productId] = (stored[productId] || 1);
				localStorage.setItem('BB-Bag', JSON.stringify(stored));
				updateBag();
				document.querySelector('.bag').style.display = 'block'
				setTimeout( () => {
					document.querySelector('.bag').style.opacity = '1';
					setTimeout( () => {
						document.querySelector('.bag__body').style.right = '0px'
					}, 600)
				}, 100)
			})
		})

		document.querySelector('.catalog__result').textContent = `Результат поиска: ${newArr.length}`;

		if ( newArr.length == 0 ) {
			document.querySelector('.catalog__empty').style.display = 'flex';
		} else {
			document.querySelector('.catalog__empty').style.display = 'none';
		}

		// if ( document.querySelector('.promo') ) {
		// 	document.querySelectorAll('.footer__link-brand').forEach( (item, i) => {
		// 		console.log("Yes");
		// 		item.addEventListener('click', event => {
		// 			// event.preventDefault();
		// 			console.log("Yes");

		// 			let query = item.textContent;
					
		// 			document.querySelectorAll('.catalog__option-brand').forEach( (item, i) => {
		// 				item.classList.remove('catalog__option-active-brand');
		// 			})
		// 			document.querySelectorAll('.catalog__label').forEach( (item, i) => {
		// 				if ( item.textContent == query ) {
		// 					document.querySelectorAll('.catalog__option-brand')[i].classList.add('catalog__option-active-brand');
		// 					activeBrand = item.textContent;
		// 				}
		// 			})
		// 			repaintProductsCopy();

		// 			document.querySelector('.catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });

		// 		})
		// 	})
		// }


	}

	// Отслеживаем есть ли бренд в ссылке

	let query = window.location.href.split('?')[1];
	if ( query ) query = query.replaceAll("-", " ");
	if ( query != "" && query != undefined ) {
		if ( listBrands.includes(query) ) {

			document.querySelectorAll('.catalog__option-brand').forEach( (item, i) => {
				item.classList.remove('catalog__option-active-brand');
			})
			document.querySelectorAll('.catalog__label').forEach( (item, i) => {
				if ( item.textContent == query ) {
					document.querySelectorAll('.catalog__option-brand')[i].classList.add('catalog__option-active-brand');
					activeBrand = item.textContent;
				}
			})
			repaintProducts();

			document.querySelector('.catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });

		}
	}

	query = window.location.href.split('?')[1];
	if (query) {
		query = decodeURIComponent(query).replaceAll("_", " ");
		console.log(query);
		if (query !== "" && query !== undefined) {
			if (listCategory.includes(query)) {
				document.querySelectorAll('.catalog__option-category').forEach((item, i) => {
					item.classList.remove('catalog__option-active-category');
				});
				document.querySelectorAll('.catalog__label').forEach((item, i) => {
					if (item.textContent === query) {
						document.querySelectorAll('.catalog__option-category')[i - listBrands.length - 1].classList.add('catalog__option-active-category');
						activeCategory = item.textContent;
					}
				});
				repaintProducts();
				document.querySelector('.catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	}

	if ( document.querySelector('.promo') ) {
		let listBrands = [];
		allArray.forEach( (item, i) => {
			listBrands.push(item.brand);
		})
		listBrands = [...new Set(listBrands)];
		// Добавляем в каталог футера бренды
		listBrands.forEach( (item, i) => {
			let newBrandFooter = document.createElement('a');
			newBrandFooter.href = `index.html#catalog?${item.replaceAll(" ", "-")}`;
			newBrandFooter.classList.add('footer__link');
			newBrandFooter.classList.add('footer__link-brand');
			newBrandFooter.textContent = item;
			document.querySelector('.footer__brand').append(newBrandFooter);
		})
		
		document.querySelectorAll('.footer__link-brand').forEach( (item, i) => {
			item.addEventListener('click', event => {
				let query = item.textContent;
				
				document.querySelectorAll('.catalog__option-brand').forEach( (item, i) => {
					item.classList.remove('catalog__option-active-brand');
				})
				document.querySelectorAll('.catalog__label').forEach( (item, i) => {
					if ( item.textContent == query ) {
						document.querySelectorAll('.catalog__option-brand')[i].classList.add('catalog__option-active-brand');
						activeBrand = item.textContent;
					}
				})
				repaintProducts();

				document.querySelector('.catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
			})
		})
	}

	if ( document.querySelector('.promo') ) {

		let listCategory = [];
		allArray.forEach( (item, i) => {
			listCategory.push(... item.category);
		})
		listCategory = [...new Set(listCategory)];

		listCategory.forEach( (item, i) => {
			let newCategoryMenu = document.createElement('a');
			newCategoryMenu.href = `index.html#catalog?${item.replaceAll(" ", "_")}`;
			newCategoryMenu.classList.add('menu__link');
			newCategoryMenu.classList.add('menu__link-category');
			newCategoryMenu.textContent = `// ${item}`;
			document.querySelector('.menu__category').append(newCategoryMenu);
		})

		document.querySelectorAll('.menu__link-category').forEach( (item, i) => {
			item.addEventListener('click', event => {
				let query = item.textContent.slice(3);
				// console.log(query);
				
				document.querySelectorAll('.catalog__option-category').forEach((item, i) => {
					item.classList.remove('catalog__option-active-category');
				});
				document.querySelectorAll('.catalog__label').forEach((item, i) => {
					if (item.textContent === query) {
						document.querySelectorAll('.catalog__option-category')[i - listBrands.length - 1].classList.add('catalog__option-active-category');
						activeCategory = item.textContent;
					}
				});
				repaintProducts();
				document.querySelector('.catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });

				document.querySelector('.menu__body').style.right = "-500px";
				setTimeout( () => {
					document.querySelector('.menu').style.opacity = "0";
					setTimeout( () => {
						document.querySelector('.menu').style.display = "none";
					}, 600)
				}, 600)
			})
		})

	}

}

function updateBag() {

	if ( localStorage.getItem('BB-Bag') == "{}" || localStorage.getItem('BB-Bag') == null ) {
		document.querySelector('.bag__view').style.display = "none";
		document.querySelector('.bag__empty').style.display = "block";
	} else {
		document.querySelector('.bag__view').style.display = "block";
		document.querySelector('.bag__empty').style.display = "none";
	}

	document.querySelectorAll('.bag__card').forEach( item => {
		item.remove();
	})

	let actualBag = JSON.parse(localStorage.getItem('BB-Bag'));
	let summPrice = 0;
	if ( actualBag != null ) {
		for ( i = 0; i < Object.keys(actualBag).length; i++ ) {
			let productNew;
			allArray.forEach( (item) => {
				if (item.product_id == Object.keys(actualBag)[i]) {
					productNew = item;
				}
			})

			let newBagCard = document.createElement('div');
			newBagCard.classList.add('bag__card');
			newBagCard.id = productNew.product_id;
			newBagCard.innerHTML = `
				<div class="bag__image">
					<img src="${productNew.photo[0]}" alt="photo product" loading="lazy">
				</div>
				<div class="bag__info">
					<a href="product.html#${productNew.product_id}" class="bag__name">${productNew.name} - ${productNew.color}</a>
					<div class="bag__price">${productNew.newprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₽</div>
					<div class="bag__nav">
						<div class="bag__minus">-</div>
						<div class="bag__number">${Object.values(actualBag)[i]}</div>
						<div class="bag__plus">+</div>
					</div>
					<div class="bag__delete">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
							<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
						</svg>
					</div>
				</div>
			`;

			document.querySelector('.bag__block').append(newBagCard);

			summPrice += Number(productNew.newprice) * Number(document.querySelectorAll('.bag__number')[i].textContent);
		}

		document.querySelectorAll('.bag__name').forEach( (item, i) => {

			item.addEventListener('click', event => {
				location.href = item.href;
				location.reload();
			})
		})
	}

	document.querySelector('.bag__summ').textContent = `Сумма: ${summPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₽`;

	document.querySelectorAll('.bag__minus').forEach( (item, i) => {
		item.addEventListener('click', event => {
			if ( Number(document.querySelectorAll('.bag__number')[i].textContent) > 1 ) {
				document.querySelectorAll('.bag__number')[i].textContent = Number(document.querySelectorAll('.bag__number')[i].textContent) - 1;
			}
			const cart = JSON.parse(localStorage.getItem('BB-Bag'));
			cart[document.querySelectorAll('.bag__card')[i].id] = document.querySelectorAll('.bag__number')[i].textContent; // новое значение
			localStorage.setItem('BB-Bag', JSON.stringify(cart));
			updateBag();
			if ( location.href.includes('order.html') ) buildOrderPage();
		})
	})

	document.querySelectorAll('.bag__plus').forEach( (item, i) => {
		item.addEventListener('click', event => {
			document.querySelectorAll('.bag__number')[i].textContent = Number(document.querySelectorAll('.bag__number')[i].textContent) + 1;
			const cart = JSON.parse(localStorage.getItem('BB-Bag'));
			cart[document.querySelectorAll('.bag__card')[i].id] = document.querySelectorAll('.bag__number')[i].textContent; // новое значение
			localStorage.setItem('BB-Bag', JSON.stringify(cart));
			updateBag();
			if ( location.href.includes('order.html') ) buildOrderPage();
		})
	})

	document.querySelectorAll('.bag__delete').forEach( (item, i) => {
		item.addEventListener('click', event => {
			const cart = JSON.parse(localStorage.getItem('BB-Bag'));
			delete cart[document.querySelectorAll('.bag__card')[i].id];
			localStorage.setItem('BB-Bag', JSON.stringify(cart));
			updateBag();
			if ( location.href.includes('order.html') ) buildOrderPage();
		})
	})
}

// Работа функционала поиска

document.querySelector('.header__search').addEventListener('click', event => {
	document.querySelector('.header__input').focus();
})

document.querySelector('.header__input').addEventListener('focus', event => {
	document.querySelector('.header__list').style.maxHeight = "300px";
})

document.querySelector('.header__input').addEventListener('blur', event => {
	document.querySelector('.header__list').style.maxHeight = "0px";
})

document.querySelector('.header__input').addEventListener('input', event => {
	document.querySelector('.header__list').style.maxHeight = "300px";

	let searchArray = [];
	let input = document.querySelector('.header__input').value;

	allArray.forEach( (item, i) => {
		if ( String(`${item.brand} ${item.name} - ${item.color}`).toLocaleLowerCase().includes(input.toLocaleLowerCase()) ) {
			searchArray.push(item);
		}
	})

	document.querySelectorAll('.header__card').forEach( item => {
		item.remove();
	})

	searchArray.forEach( (item, i) => {
		let newSearchCard = document.createElement('a');
		newSearchCard.href = `product.html#${item.product_id}`;
		newSearchCard.classList.add('header__card');
		newSearchCard.innerHTML = `
			<div class="header__img">
				<img src="${item.photo[0]}" alt="photo image" loading="lazy">
			</div>
			<div class="header__info">
				<div class="header__brand">${item.brand}</div>
				<div class="header__model">${item.name} - ${item.color}</div>
				<div class="header__price">${item.newprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₽</div>
			</div>
		`;
		document.querySelector('.header__list').append(newSearchCard);
	})

	document.querySelectorAll('.header__card').forEach( (item, i) => {
		item.addEventListener('click', event => {
			location.href = item.href;
			location.reload();
		})
	})

	if ( input == "" || input.length == 0 ) {
		document.querySelectorAll('.header__card').forEach( item => {
			item.remove();
		})
	}
})

// Сборка страницы продукта
function createProductPage() {

	let actualProduct;
	let alsoModel = [];
	let idProduct = window.location.hash.slice(1);
	// console.log(idProduct);
	allArray.forEach( (item, i) => {
		if ( item.product_id == idProduct ) actualProduct = item;
	})
	// console.log(actualProduct);
	
	// console.log(alsoModel);
	if ( actualProduct == undefined ) {

		document.querySelector(".nav p").style.display = 'none';
		document.querySelectorAll(".nav svg")[2].style.display = 'none';
		document.querySelectorAll(".nav svg")[1].style.display = 'none';
		document.querySelectorAll(".nav a")[2].style.display = 'none';
		document.querySelector('.product__empty').style.display = "flex";

	} else {

		allArray.forEach( (item, i) => {
			if ( item.name == actualProduct.name ) alsoModel.push(item);
		})

		document.querySelector('.product__empty').style.display = "none";
		document.querySelector('.product__left').style.display = "block";
		document.querySelector('.product__right').style.display = "block";

		// Сборка страницы продукта

		document.title = `Купить ${actualProduct.brand} ${actualProduct.name} - ${actualProduct.color}`;

		document.querySelectorAll(".nav a")[2].href = `index.html#catalog?${actualProduct.brand.replaceAll(" ", "-")}`;
		document.querySelectorAll(".nav a")[2].textContent = actualProduct.brand;
		document.querySelector(".nav p").textContent = `${actualProduct.name} - ${actualProduct.color}`;

		document.querySelector('.product__brand').textContent = actualProduct.brand;
		document.querySelector('.product__model').textContent = `${actualProduct.name} - ${actualProduct.color}`;
		document.querySelector('.product__category').textContent = actualProduct.category.join(" / ");
		document.querySelector('.product__price').textContent = `${actualProduct.newprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₽`;
		if ( actualProduct.availability == "yes" ) {
			document.querySelector('.product__circle').style.background = "#00bf005c";
			document.querySelector('.product__aval').textContent = "Есть в наличии";
		} else {
			document.querySelector('.product__circle').style.background = "#ff8d8d";
			document.querySelector('.product__aval').textContent = "Ожидаем поступление";
			document.querySelector('.product__add').style.display = "none";
		}

		alsoModel.forEach( (item, i) => {
			let newModelAlso = document.createElement('a');
			newModelAlso.classList.add( item.availability == "yes" ? "product-clr-yes" : "product-clr-no" );
			newModelAlso.href = `product.html#${item.product_id}`;
			newModelAlso.innerHTML = `<img src="${item.photo[0]}" alt="photo" loading="lazy"><p>${item.color}</p>`;
			document.querySelector('.product__colors').append(newModelAlso);
		})

		document.querySelectorAll('.product__colors a').forEach( (item, i) => {
			item.addEventListener('click', event => {
				location.href = item.href;
				location.reload();
			})
			if ( document.querySelectorAll('.product__colors a p')[i].textContent == actualProduct.color ) {
				// item.style.background = "#00000010";
				item.style.border = "1px solid rgba(158, 158, 158, 0.5)";
				item.style.boxShadow = "0px 0px 10px #0000002f";
				item.style.padding = "4px";
				// item.style.borderRadius = "6px";
			}
		})

		if ( actualProduct.info[0] == "null" ) {
			document.querySelector('.product__info').style.display = "none";
		} else {
			document.querySelector('.product__info .product__text').textContent = actualProduct.info[0];
		}

		actualProduct.char.forEach( (item, i) => {
			let newChar = document.createElement('div');
			newChar.classList.add('product__text');
			newChar.textContent = item;
			document.querySelector('.product__char').append(newChar);
		})

		actualProduct.size.forEach( (item, i) => {
			let newSize = document.createElement('div');
			newSize.classList.add('product__text');
			newSize.textContent = item;
			document.querySelector('.product__size').append(newSize);
		})

		const mainWrapper = document.getElementById('mainSliderWrapper');
		const thumbWrapper = document.getElementById('thumbSliderWrapper');

		// Добавляем слайды
		actualProduct.photo.forEach(src => {
			mainWrapper.innerHTML += `
			<div class="swiper-slide">
				<img src="${src}" alt="product image" loading="lazy">
			</div>`;
			thumbWrapper.innerHTML += `
			<div class="swiper-slide">
				<img src="${src}" alt="product thumbnail" loading="lazy">
			</div>`;
		});

		// Инициализация
		const thumbSlider = new Swiper('.thumb-slider', {
			slidesPerView: 5,
			spaceBetween: 6,
			autoHeight: true,
			watchSlidesProgress: true,
		});

		const mainSlider = new Swiper('.main-slider', {
			spaceBetween: 10,
			autoHeight: true,
			thumbs: {
			swiper: thumbSlider,
			},
		});

		const counter = document.getElementById('sliderCounter');

		// Установить начальное значение
		counter.textContent = `1/${actualProduct.photo.length}`;

		// Обновлять при смене слайда
		mainSlider.on('slideChange', () => {
			const current = mainSlider.realIndex + 1;
			const total = actualProduct.photo.length;
			counter.textContent = `${current}/${total}`;
		});

		// Функция добавления товара в корзину
		document.querySelector('.product__add').addEventListener('click', event => {
			const stored = JSON.parse(localStorage.getItem('BB-Bag')) || {};
			stored[actualProduct.product_id] = (stored[actualProduct.product_id] || 1);
			localStorage.setItem('BB-Bag', JSON.stringify(stored));
			updateBag();
			document.querySelector('.bag').style.display = 'block'
			setTimeout( () => {
				document.querySelector('.bag').style.opacity = '1';
				setTimeout( () => {
					document.querySelector('.bag__body').style.right = '0px'
				}, 600)
			}, 100)
		})

		showReviews(actualProduct.product_id);
	}
	// console.log(actualProduct.product_id)
}

// Сборка страницы корзины

function buildOrderPage() {

	if ( localStorage.getItem('BB-Bag') == "{}" || localStorage.getItem('BB-Bag') == null ) {
		document.querySelector('.order__body').style.display = "none";
		document.querySelector('.order__empty').style.display = "flex";
	} else {
		document.querySelector('.order__body').style.display = "flex";
		document.querySelector('.order__empty').style.display = "none";
	}

	document.querySelectorAll('.order__card').forEach( item => {
		item.remove();
	})

	let actualBag = JSON.parse(localStorage.getItem('BB-Bag'));
	let summPrice = 0;
	if ( actualBag != null ) {
		for ( i = 0; i < Object.keys(actualBag).length; i++ ) {
			let productNew;
			allArray.forEach( (item) => {
				if (item.product_id == Object.keys(actualBag)[i]) {
					productNew = item;
				}
			})

			let newBagCard = document.createElement('div');
			newBagCard.classList.add('order__card');
			newBagCard.id = productNew.product_id;
			newBagCard.innerHTML = `
				<a href="product.html#${productNew.product_id}" class="order__image">
					<img src="${productNew.photo[0]}" alt="photo" loading="lazy">
				</a>

				<div class="order__info">
					<a href="product.html#${productNew.product_id}" class="order__brand">${productNew.brand}</a>
					<a href="product.html#${productNew.product_id}" class="order__model">${productNew.name} - ${productNew.color}</a>
					<div class="order__price">${productNew.newprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₽</div>
					<div class="order__nav">
						<div class="order__minus"><img src="images/minus-sign.png" alt="minus" loading="lazy"></div>
						<div class="order__number">${Object.values(actualBag)[i]}</div>
						<div class="order__plus"><img src="images/plus.png" alt="plus" loading="lazy"></div>
					</div>
				</div>

				<div class="order__delete">
					<img src="images/close-button.png" alt="close">
				</div>
			`;

			document.querySelector('.order__left').append(newBagCard);

			summPrice += Number(productNew.newprice) * Number(document.querySelectorAll('.order__number')[i].textContent);
		}

		document.querySelectorAll('.order__image').forEach( (item, i) => {
			item.addEventListener('click', event => {
				location.href = item.href;
				location.reload();
			})
			document.querySelectorAll('.order__brand')[i].addEventListener('click', event => {
				location.href = item.href;
				location.reload();
			})
			document.querySelectorAll('.order__model')[i].addEventListener('click', event => {
				location.href = item.href;
				location.reload();
			})
		})
	}

	document.querySelector('.order__summ').textContent = `Сумма заказа: ${summPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₽`;

	document.querySelectorAll('.order__minus').forEach( (item, i) => {
		item.addEventListener('click', event => {
			if ( Number(document.querySelectorAll('.order__number')[i].textContent) > 1 ) {
				document.querySelectorAll('.order__number')[i].textContent = Number(document.querySelectorAll('.order__number')[i].textContent) - 1;
			}
			const cart = JSON.parse(localStorage.getItem('BB-Bag'));
			cart[document.querySelectorAll('.order__card')[i].id] = document.querySelectorAll('.order__number')[i].textContent; // новое значение
			localStorage.setItem('BB-Bag', JSON.stringify(cart));
			updateBag();
			buildOrderPage();
		})
	})

	document.querySelectorAll('.order__plus').forEach( (item, i) => {
		item.addEventListener('click', event => {
			document.querySelectorAll('.order__number')[i].textContent = Number(document.querySelectorAll('.order__number')[i].textContent) + 1;
			const cart = JSON.parse(localStorage.getItem('BB-Bag'));
			cart[document.querySelectorAll('.order__card')[i].id] = document.querySelectorAll('.order__number')[i].textContent; // новое значение
			localStorage.setItem('BB-Bag', JSON.stringify(cart));
			updateBag();
			buildOrderPage();
		})
	})

	document.querySelectorAll('.order__delete').forEach( (item, i) => {
		item.addEventListener('click', event => {
			const cart = JSON.parse(localStorage.getItem('BB-Bag'));
			delete cart[document.querySelectorAll('.bag__card')[i].id];
			localStorage.setItem('BB-Bag', JSON.stringify(cart));
			updateBag();
			buildOrderPage();
		})
	})

}

function sendMessageInTG() {
	// Отправка заявки со всплывающего окна
	var element = document.querySelector('.order__input-phone');
	var maskOptions = {
		mask: '+7 (000) 000-00-00',
		lazy: false
	} 
	var mask = new IMask(element, maskOptions);

	let payVariable = "";

	document.querySelectorAll('.order__option').forEach( (item, i) => {
		item.addEventListener('click', event => {
			document.querySelectorAll('.order__option').forEach( (item, i) => {
				item.classList.remove('order__option-active');
			})

			item.classList.add('order__option-active');

			if ( i == 0 ) {
				payVariable = document.querySelectorAll('.order__option p')[i].textContent;
			} else { i == 1 } {
				payVariable = document.querySelectorAll('.order__option p')[i].textContent;
			}
		})
	})

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

	document.querySelector('.order__button').addEventListener('click', event => {

		const input = document.querySelector('.order__input-name');
		const value = input.value.trim();
		const words = value.split(/\s+/); // разделяет по пробелам
		const isValid = words.length === 3 && words.every(word => word.length >= 2);
		
		if ( !isValid ) {
			document.querySelector('.order__message').textContent = 'Введите Ваше полное ФИО';
			document.querySelector('.order__message').style.maxHeight = '60px';
			document.querySelector('.order__message').style.marginBottom = '20px';
			document.querySelector('.order__message').style.color = '#ff4a4a';
			document.querySelectorAll('.order__label p')[0].style.color = '#ff4a4a';
			// document.querySelectorAll('.order__input')[0].style.border = "1px solid rgb(255, 94, 94)";
			document.querySelectorAll('.order__input')[0].style.background = "#ffc1c1";
			setTimeout( () => {
				document.querySelector('.order__message').style.maxHeight = '0px';
				document.querySelector('.order__message').style.marginBottom = '0px';
				document.querySelectorAll('.order__label p')[0].style.color = '#000';
				// document.querySelectorAll('.order__input')[0].style.border = "1px solid #dcdcdc";
				document.querySelectorAll('.order__input')[0].style.background = "#fff";
			}, 2000)
		} else if ( document.querySelector('.order__input-phone').value == "" || document.querySelector('.order__input-phone').value.includes('+') == true && document.querySelector('.order__input-phone').value.includes('_') == true ) {
			document.querySelector('.order__message').textContent = 'Введите Ваше номер телефона';
			document.querySelector('.order__message').style.maxHeight = '60px';
			document.querySelector('.order__message').style.marginBottom = '20px';
			document.querySelector('.order__message').style.color = '#ff4a4a';
			document.querySelectorAll('.order__label p')[1].style.color = '#ff4a4a';
			// document.querySelectorAll('.order__input')[1].style.border = "1px solid rgb(255, 94, 94)";
			document.querySelectorAll('.order__input')[0].style.background = "#ffc1c1";
			setTimeout( () => {
				document.querySelector('.order__message').style.maxHeight = '0px';
				document.querySelector('.order__message').style.marginBottom = '0px';
				document.querySelectorAll('.order__label p')[1].style.color = '#000';
				// document.querySelectorAll('.order__input')[1].style.border = "1px solid #dcdcdc";
				document.querySelectorAll('.order__input')[0].style.background = "#fff";
			}, 2000)
		} else if ( document.querySelector('.order__input-address').value.length < 10 ) {
			document.querySelector('.order__message').textContent = 'Введите полный адрес для доставки';
			document.querySelector('.order__message').style.maxHeight = '60px';
			document.querySelector('.order__message').style.marginBottom = '20px';
			document.querySelector('.order__message').style.color = '#ff4a4a';
			document.querySelectorAll('.order__label p')[2].style.color = '#ff4a4a';
			// document.querySelectorAll('.order__input')[2].style.border = "1px solid rgb(255, 94, 94)";
			document.querySelectorAll('.order__input')[0].style.background = "#ffc1c1";
			setTimeout( () => {
				document.querySelector('.order__message').style.maxHeight = '0px';
				document.querySelector('.order__message').style.marginBottom = '0px';
				document.querySelectorAll('.order__label p')[2].style.color = '#000';
				// document.querySelectorAll('.order__input')[2].style.border = "1px solid #dcdcdc";
				document.querySelectorAll('.order__input')[0].style.background = "#fff";
			}, 2000)
		} else if ( payVariable == "" ) {
			document.querySelector('.order__message').textContent = 'Выберите способ оплаты';
			document.querySelector('.order__message').style.maxHeight = '60px';
			document.querySelector('.order__message').style.marginBottom = '20px';
			document.querySelector('.order__message').style.color = '#ff4a4a';
			document.querySelectorAll('.order__label p')[3].style.color = '#ff4a4a';
			setTimeout( () => {
				document.querySelector('.order__message').style.maxHeight = '0px';
				document.querySelector('.order__message').style.marginBottom = '0px';
				document.querySelectorAll('.order__label p')[3].style.color = '#000';
			}, 2000)
		} else {

			let messageTg = `🛒 <b>Заказ товара</b> 🛒\n`;
			messageTg += `<b>👤 ФИО - </b>${document.querySelector('.order__input-name').value}\n`;
			messageTg += `<b>📞 Телефон - </b>${document.querySelector('.order__input-phone').value}\n`;
			messageTg += `<b>🗺 Адрес - </b>${document.querySelector('.order__input-address').value}\n`;
			messageTg += `<b>💳 Способ оплаты - </b>${payVariable}\n`;
			messageTg += `<b>💵 ${document.querySelector('.order__summ').textContent}</b>\n\n`;
			messageTg += `<b>Список товаров [${document.querySelectorAll('.order__card').length} наименований]:</b>\n\n`;
			document.querySelectorAll('.order__card').forEach( (item, i) => {
				messageTg += `<b>📦 Товар №${i + 1}</b>\n`;
				messageTg += `<b>Наименование - </b>${document.querySelectorAll('.order__brand')[i].textContent} ${document.querySelectorAll('.order__model')[i].textContent}\n`;
				messageTg += `<b>Цена - </b>${document.querySelectorAll('.order__price')[i].textContent}\n`;
				messageTg += `<b>Количество - </b>${document.querySelectorAll('.order__number')[i].textContent} шт.\n`;
				messageTg += `<b>Ссылка - </b>${document.querySelectorAll('.order__model')[i].href}\n\n`;
			})

			axios.post(URI_API, {
				chat_id: CHAT_ID,
				parse_mode: "html",
				text: messageTg
			});

			localStorage.clear();
			location.href = "success.html";

		}

		// let messageTg = '';
		// document.querySelectorAll('.order__card').forEach( (item, i) => {
		// 	messageTg += `<b>Товар №${i + 1}</b>\n`;
		// 	messageTg += `<b>Наименование - </b>${document.querySelectorAll('.order__brand')[i].textContent} ${document.querySelectorAll('.order__model')[i].textContent}\n`;
		// 	messageTg += `<b>Цена товара - </b>${document.querySelectorAll('.order__price')[i].textContent}\n`;
		// 	messageTg += `<b>Количество - </b>${document.querySelectorAll('.order__number')[i].textContent}\n\n`;
			
		// })
		// console.log(messageTg);

	})
}

function createPopularPage() {

	let arrayPopularItems = [];
	allArray.forEach( (item, i) => {
		if ( item.popular == "yes" ) {
			arrayPopularItems.push(item);
		}
	})

	let listCategory = [];
	arrayPopularItems.forEach( (item, i) => {
		listCategory.push(... arrayPopularItems[i].category);
	})
	listCategory = [...new Set(listCategory)];

	listCategory.forEach( (item, i) => {
		let newBrandOption = document.createElement('div');
		newBrandOption.classList.add('popular__label');
		newBrandOption.id = `cat-${i + 1}`;
		newBrandOption.textContent = `// ${item}`;
		document.querySelector('.popular__right').append(newBrandOption);

		let newBrandChoose = document.createElement('div');
		newBrandChoose.classList.add('popular__category');
		newBrandChoose.setAttribute('data-target', `cat-${i + 1}`);
		if ( i == 0 ) {
			newBrandChoose.classList.add('popular__category-active');
		}
		newBrandChoose.textContent = `// ${item}`;
		document.querySelector('.popular__left').append(newBrandChoose);

		let newBlock = document.createElement('div');
		newBlock.classList.add('popular__block');
		newBlock.id = `cat-${i + 1}`;
		document.querySelector('.popular__right').append(newBlock);

		let newArrCategory = [];
		arrayPopularItems.forEach( (item) => {
			if ( item.category.includes(listCategory[i]) ) {
				// console.log(item);
				newArrCategory.push(item);
			}
		})

		newArrCategory.forEach( (item) => {

			let newCardProduct = document.createElement('div');
			newCardProduct.classList.add('catalog__card');
			// newCardProduct.href = `product#${data[i].product_id}`;
			newCardProduct.id = item.product_id;
			newCardProduct.innerHTML = `
				<a href="product.html#${item.product_id}" class="catalog__image">
					<img class="catalog__img catalog__img-first" src="${item.photo[1]}" alt="photo product" loading="lazy">
					<img class="catalog__img catalog__img-second" src="${item.photo[0]}" alt="photo product" loading="lazy">
				</a>
				<div class="catalog__hr">
					<div class="catalog__bar catalog__bar-active"></div>
					<div class="catalog__bar catalog__bar-blur"></div>
				</div>
				<a href="product.html#${item.product_id}" class="catalog__inf">
					<div class="catalog__brand">${item.brand}</div>
					<div class="catalog__model">${item.name} - ${item.color}</div>
					<div class="catalog__category">${item.category.join(" / ")}</div>
				</a>
				
				<div class="catalog__price">
					<div class="catalog__descr">Стоимость:</div>
					<div class="catalog__numbers">
						<div class="catalog__old ${item.price == item.newprice ? "catalog__old-no" : ""}">${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₽</div>
						<div class="catalog__new">${item.newprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₽</div>
					</div>
				</div>
				
				<div class="catalog__buttons">
					<a href="product.html#${item.product_id}" class="catalog__more">
						<img src="images/more.png" loading="lazy">
						<p>Смотреть детальнее</p>
					</a>
					<div class="catalog__add ${item.availability == "yes" ? "" : "catalog__add-none"}">
						<p>Добавить в корзину</p>
						<img src="images/bag2.png" loading="lazy">
					</div>
				</div>
				<div class="catalog__status">
					<div class="catalog__color ${item.availability == "yes" ? "catalog__color-yes" : "catalog__color-no"}"></div>
					<div class="catalog__aval">${item.availability == "yes" ? "Есть в наличии" : "Ожидаем поступление"}</div>
				</div>
			`;

			document.querySelectorAll('.popular__block')[i].append(newCardProduct);
			// document.querySelector('.popular').append(newCardProduct);

		})

		

	})

	document.querySelectorAll('.catalog__add').forEach( (item, i) => {
		item.addEventListener('click', event => {
			const parent = item.closest('.catalog__card');
			const productId = parent.id;
			const stored = JSON.parse(localStorage.getItem('BB-Bag')) || {};
			stored[productId] = (stored[productId] || 1);
			localStorage.setItem('BB-Bag', JSON.stringify(stored));
			updateBag();
			document.querySelector('.bag').style.display = 'block'
			setTimeout( () => {
				document.querySelector('.bag').style.opacity = '1';
				setTimeout( () => {
					document.querySelector('.bag__body').style.right = '0px'
				}, 600)
			}, 100)
		})
	})

	const categories = document.querySelectorAll('.popular__category');
	const labels = document.querySelectorAll('.popular__block');

	// Клик — прокрутка
	categories.forEach(cat => {
		cat.addEventListener('click', () => {
			const id = cat.dataset.target;
			const target = document.getElementById(id);
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		});
	});

	// Скролл — подсветка
	window.addEventListener('scroll', () => {
		let currentId = '';
		labels.forEach(label => {
			const rect = label.getBoundingClientRect();
			if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
				currentId = label.id;
			}
		});

		categories.forEach(cat => {
			cat.classList.toggle('popular__category-active', cat.dataset.target === currentId);
		});
	});

}

// Функция отправки заявки обратной связи

function contactSend() {

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

	var element = document.querySelectorAll('.contact__input')[1];
	var maskOptions = {
		mask: '+7 (000) 000-00-00',
		lazy: false
	} 
	var mask = new IMask(element, maskOptions);

	document.querySelector('.contact__button').addEventListener('click', event => {

		if ( document.querySelectorAll('.contact__input')[0].value.length < 2 ) {
			document.querySelector('.contact__message').textContent = 'Введите Ваше полное ФИО';
			document.querySelector('.contact__message').style.maxHeight = '60px';
			document.querySelector('.contact__message').style.marginBottom = '20px';
			document.querySelector('.contact__message').style.color = '#ff4a4a';
			document.querySelectorAll('.contact__input')[0].style.background = "#ffc1c1";
			setTimeout( () => {
				document.querySelector('.contact__message').style.maxHeight = '0px';
				document.querySelector('.contact__message').style.marginBottom = '0px';
				document.querySelectorAll('.contact__input')[0].style.background = "#fff";
			}, 2000)
		} else if ( document.querySelectorAll('.contact__input')[1].value == "" || document.querySelectorAll('.contact__input')[1].value.includes('+') == true && document.querySelectorAll('.contact__input')[1].value.includes('_') == true ) {
			document.querySelector('.contact__message').textContent = 'Введите Ваш номер телефона';
			document.querySelector('.contact__message').style.maxHeight = '60px';
			document.querySelector('.contact__message').style.marginBottom = '20px';
			document.querySelector('.contact__message').style.color = '#ff4a4a';
			document.querySelectorAll('.contact__input')[1].style.background = "#ffc1c1";
			setTimeout( () => {
				document.querySelector('.contact__message').style.maxHeight = '0px';
				document.querySelector('.contact__message').style.marginBottom = '0px';
				document.querySelectorAll('.contact__input')[1].style.background = "#fff";
			}, 2000)
		} else if ( document.querySelectorAll('.contact__input')[2].value.length < 10 ) {
			document.querySelector('.contact__message').textContent = 'Напишите Ваше сообщение (от 10-ти символов)';
			document.querySelector('.contact__message').style.maxHeight = '60px';
			document.querySelector('.contact__message').style.marginBottom = '20px';
			document.querySelector('.contact__message').style.color = '#ff4a4a';
			document.querySelectorAll('.contact__input')[2].style.background = "#ffc1c1";
			setTimeout( () => {
				document.querySelector('.contact__message').style.maxHeight = '0px';
				document.querySelector('.contact__message').style.marginBottom = '0px';
				document.querySelectorAll('.contact__input')[2].style.background = "#fff";
			}, 2000)
		} else {

			let messageTg = `📞 <b>Заявка на обратную связь</b> 📞\n`;
			messageTg += `<b>👤 Имя - </b> ${document.querySelectorAll('.contact__input')[0].value}\n`;
			messageTg += `<b>📱 Телефон - </b> ${document.querySelectorAll('.contact__input')[1].value}\n`;
			messageTg += `<b>✏️ Сообщение - </b> ${document.querySelectorAll('.contact__input')[2].value}\n`;

			axios.post(URI_API, {
				chat_id: CHAT_ID,
				parse_mode: "html",
				text: messageTg
			});

			document.querySelectorAll('.contact__input')[0].value = "";
			document.querySelectorAll('.contact__input')[1].value = "";
			document.querySelectorAll('.contact__input')[2].value = "";

			document.querySelector('.contact__message').textContent = 'Ваша заявка была отправлена ✅';
			document.querySelector('.contact__message').style.maxHeight = '60px';
			document.querySelector('.contact__message').style.marginBottom = '20px';
			document.querySelector('.contact__message').style.color = 'rgb(0, 172, 49)';
			setTimeout( () => {
				document.querySelector('.contact__message').style.maxHeight = '0px';
				document.querySelector('.contact__message').style.marginBottom = '0px';
			}, 6000)

		}

	})

}

function faqPage() {

	let activeFaqCard = [false, false, false, false, false];

	document.querySelectorAll('.faq__top').forEach( (item, i) => {
		item.addEventListener('click', event => {

			if ( activeFaqCard[i] == false ) {
				document.querySelectorAll('.faq__body')[i].style.paddingTop = "20px";
				document.querySelectorAll('.faq__body')[i].style.paddingBottom = "20px";
				document.querySelectorAll('.faq__body')[i].style.maxHeight = "1000px";
				document.querySelectorAll('.faq__circle')[i].classList.add('faq__circle-active');
				activeFaqCard[i] = true;
			} else {
				document.querySelectorAll('.faq__body')[i].style.paddingTop = "0px";
				document.querySelectorAll('.faq__body')[i].style.paddingBottom = "0px";
				document.querySelectorAll('.faq__body')[i].style.maxHeight = "0px";
				document.querySelectorAll('.faq__circle')[i].classList.remove('faq__circle-active');
				activeFaqCard[i] = false;
			}


		})
	})

	document.querySelectorAll('.faq__body')[0].style.paddingTop = "20px";
	document.querySelectorAll('.faq__body')[0].style.paddingBottom = "20px";
	document.querySelectorAll('.faq__body')[0].style.maxHeight = "1000px";
	document.querySelectorAll('.faq__circle')[0].classList.add('faq__circle-active');
	activeFaqCard[0] = true;

}

// Закрываем мобильное меню
document.querySelector('.menu__close').addEventListener('click', event => {
	document.querySelector('.menu__body').style.right = "-500px";
	setTimeout( () => {
		document.querySelector('.menu').style.opacity = "0";
		setTimeout( () => {
			document.querySelector('.menu').style.display = "none";
		}, 600)
	}, 600)
})

document.querySelector('.menu').addEventListener('click', event => {
	if( event.target == document.querySelector('.menu') ) {
		document.querySelector('.menu__body').style.right = "-500px";
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

// Добавляем категории в мобильное меню
function addedCategoryMenu() {

	if ( !document.querySelector('.promo') ) {

		let listCategory = [];
		allArray.forEach( (item, i) => {
			listCategory.push(... item.category);
		})
		listCategory = [...new Set(listCategory)];

		listCategory.forEach( (item, i) => {
			let newCategoryMenu = document.createElement('a');
			newCategoryMenu.href = `index.html#catalog?${item.replaceAll(" ", "_")}`;
			newCategoryMenu.classList.add('menu__link');
			newCategoryMenu.classList.add('menu__link-category');
			newCategoryMenu.textContent = `// ${item}`;
			document.querySelector('.menu__category').append(newCategoryMenu);
		})
	}

}

// Вывод окна со скидкой

if ( !localStorage.getItem("BrandBoutiqueSale") ) {

	setTimeout( () => {

		document.querySelector('.sale').style.display = "block";
		setTimeout( () => {
			document.querySelector('.sale').style.opacity = "1";
			setTimeout( () => {
				document.querySelector('.sale__body').style.top = "50%";

				localStorage.setItem("BrandBoutiqueSale", true)
			}, 600)
		}, 100)

	}, 10000)

}

document.querySelector('.sale__close').addEventListener('click', event => {
	document.querySelector('.sale__body').style.top = "150%";
	setTimeout( () => {
		document.querySelector('.sale').style.opacity = "0";
		setTimeout( () => {
			document.querySelector('.sale').style.display = "none";
		}, 600)
	}, 600)
})

// Функция отображения отзывов

async function showReviews(itemId) {

	const BIN_ID = "682ce2ab8a456b7966a22a04";
	const API_KEY = "$2a$10$6wC6i7O0SgqeA9fXBsKRiuzuHVzW0d5Ze.bmOT2V4dV/.1BQkP1WC";
	const url = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;

	const response = await fetch(url, {
		headers: {
			"X-Master-Key": API_KEY
		}
	});
	const data = await response.json();
	const allReviews = data.record.data.reviews;
	let thisProductReviews = [];
	allReviews.forEach( (item, i) => {
		if ( Number(item.productId) == Number(itemId) ) {
			thisProductReviews.push(item);
		}
	});
	console.log(thisProductReviews);

	if ( thisProductReviews.length != 0 ) {
		document.querySelector('.review__empty').style.display = 'none';
		document.querySelector('.review__block').style.display = 'flex';

		thisProductReviews.forEach( (item, i) => {
			let newReview = document.createElement('div');
			newReview.classList.add('review__card');
			newReview.id = item.reviewsId;
			newReview.innerHTML = `
				<div class="review__name">${item.name}</div>
				<div class="review__rating">Оценка: ${item.rating}/5</div>
				<div class="review__date">${item.date}</div>
				<div class="review__text">${item.message}</div>
				<div class="review__delete"><img src="images/close-button.png" alt="close"></div>
				<div class="review__del">
					<p>Отзыв удалён</p>
					<img src="images/delete.png" alt="trash">
				</div>
			`;
			document.querySelector('.review__block').append(newReview);
		})

		document.querySelector('.review__title span').textContent = thisProductReviews.length;
	}

	addNewReview(allReviews);

	// console.log(localStorage.getItem("BB-Admin"));
	if ( localStorage.getItem("BB-Admin") == "true" ) {
		document.querySelectorAll('.review__delete').forEach( (item, i) => {
			item.style.display = "flex";
			item.addEventListener('click', event => {

				async function deleteReviewById(reviewId) {
					const BIN_ID = "682ce2ab8a456b7966a22a04";
					const API_KEY = "$2a$10$6wC6i7O0SgqeA9fXBsKRiuzuHVzW0d5Ze.bmOT2V4dV/.1BQkP1WC";

					// Сначала получаем текущие данные
					const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
						headers: {
						'X-Master-Key': API_KEY
						}
					});
					const json = await response.json();
					const reviews = json.record.data.reviews;

					// Фильтруем отзывы, удаляя нужный
					const updatedReviews = reviews.filter(r => r.reviewsId !== reviewId);

					// Отправляем обновлённый список обратно в Bin
					await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
						method: 'PUT',
						headers: {
						'Content-Type': 'application/json',
						'X-Master-Key': API_KEY
						},
						body: JSON.stringify({ data: { reviews: updatedReviews } })
					});

					console.log(`Отзыв с ID ${reviewId} удалён.`);
					document.querySelectorAll('.review__del')[i].style.display = "flex";
					setTimeout( () => {
						location.reload();
					}, 2000)
				}

				deleteReviewById(`${document.querySelectorAll('.review__card')[i].id}`);

			})
		})
	}
	
	setTimeout( () => {
		document.querySelector('.loading').style.top = "-100%";
	}, 1000)
}

let rating = undefined;

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

function addNewReview(data) {


	document.querySelector('.rev__close').addEventListener('click', event => {
		document.querySelector('.rev__body').style.top = "150%";
		setTimeout( () => {
			document.querySelector('.rev').style.opacity = "0";
			setTimeout( () => {
				document.querySelector('.rev').style.display = "none";
			}, 600 )
		}, 600 )
	})

	document.querySelector('.review__button').addEventListener('click', event => {
		document.querySelector('.rev').style.display = "flex";
		setTimeout( () => {
			document.querySelector('.rev').style.opacity = "1";
			setTimeout( () => {
				document.querySelector('.rev__body').style.top = "50%";
			}, 600 )
		}, 100 )
	})

	if ( rating == undefined ) {
		document.querySelectorAll('.rev__stars svg').forEach( (item, i) => {
			item.addEventListener('mouseover', event => {
				for (let index = 0; index < i + 1; index++) {
					if ( rating == undefined ) {
						document.querySelectorAll('.rev__stars svg')[index].style.fill = "#ffbb00";
					}
				}
			})
		})
	}

	if ( rating == undefined ) {
		document.querySelectorAll('.rev__stars svg').forEach( (item, i) => {
			item.addEventListener('mouseleave', event => {
				document.querySelectorAll('.rev__stars svg').forEach( item => {
					if ( rating == undefined ) {
						item.style.fill = "#00000028";
					}
				})
			})
		})
	}

	document.querySelectorAll('.rev__stars svg').forEach( (item, i) => {
		item.addEventListener('click', event => {
			document.querySelectorAll('.rev__stars svg').forEach( item => {
				// if ( rating == undefined ) {
					item.style.fill = "#00000028";
				// }
			})
			for (let index = 0; index < i + 1; index++) {
				document.querySelectorAll('.rev__stars svg')[index].style.fill = "#ffbb00";
			}
			rating = i + 1;
		})
	})

	

	document.querySelector('.rev__button').addEventListener('click', event => {

		if ( document.querySelectorAll('.rev__input')[0].value.length < 2 ) {
			document.querySelector('.rev__message').textContent = 'Введите Ваше имя';
			document.querySelector('.rev__message').style.maxHeight = '60px';
			document.querySelector('.rev__message').style.marginBottom = '20px';
			document.querySelector('.rev__message').style.color = '#ff4a4a';
			document.querySelectorAll('.rev__input')[0].style.background = "#ffc1c1";
			setTimeout( () => {
				document.querySelector('.rev__message').style.maxHeight = '0px';
				document.querySelector('.rev__message').style.marginBottom = '0px';
				document.querySelectorAll('.rev__input')[0].style.background = "#fff";
			}, 2000)
		} else if ( document.querySelectorAll('.rev__input')[1].value.length < 10 || !document.querySelectorAll('.rev__input')[1].value.includes("@") || !document.querySelectorAll('.rev__input')[1].value.includes(".") ) {
			document.querySelector('.rev__message').textContent = 'Введите Вашу электронную почту';
			document.querySelector('.rev__message').style.maxHeight = '60px';
			document.querySelector('.rev__message').style.marginBottom = '20px';
			document.querySelector('.rev__message').style.color = '#ff4a4a';
			document.querySelectorAll('.rev__input')[1].style.background = "#ffc1c1";
			setTimeout( () => {
				document.querySelector('.rev__message').style.maxHeight = '0px';
				document.querySelector('.rev__message').style.marginBottom = '0px';
				document.querySelectorAll('.rev__input')[1].style.background = "#fff";
			}, 2000)
		} else if ( rating == undefined ) {
			document.querySelector('.rev__message').textContent = 'Укажите Вашу оценку';
			document.querySelector('.rev__message').style.maxHeight = '60px';
			document.querySelector('.rev__message').style.marginBottom = '20px';
			document.querySelector('.rev__message').style.color = '#ff4a4a';
			document.querySelectorAll('.rev__label')[0].style.color = "#ff4a4a";
			setTimeout( () => {
				document.querySelector('.rev__message').style.maxHeight = '0px';
				document.querySelector('.rev__message').style.marginBottom = '0px';
				document.querySelectorAll('.rev__label')[0].style.color = "#000";
			}, 2000)
		} else if ( document.querySelector('.rev__textarea').value.length < 10 ) {
			document.querySelector('.rev__message').textContent = 'Напишите Ваш отзыв';
			document.querySelector('.rev__message').style.maxHeight = '60px';
			document.querySelector('.rev__message').style.marginBottom = '20px';
			document.querySelector('.rev__message').style.color = '#ff4a4a';
			document.querySelector('.rev__textarea').style.background = "#ffc1c1";
			setTimeout( () => {
				document.querySelector('.rev__message').style.maxHeight = '0px';
				document.querySelector('.rev__message').style.marginBottom = '0px';
				document.querySelector('.rev__textarea').style.background = "#fff";
			}, 2000)
		} else {

			document.querySelector('.rev__load').style.display = "flex";

			let thisProduct;
			allArray.forEach( (item, i) => { if ( item.product_id == window.location.hash.slice(1) ) thisProduct = item; })

			addReview({
				productId: thisProduct.product_id,
				date: new Date().toLocaleDateString("ru-RU"),
				color: thisProduct.color,
				rating: rating,
				name: document.querySelectorAll('.rev__input')[0].value,
				email: document.querySelectorAll('.rev__input')[1].value,
				message: document.querySelector('.rev__textarea').value
			});

		}

		// let thisProduct;
		// allArray.forEach( (item, i) => { if ( item.product_id == window.location.hash.slice(1) ) thisProduct = item; })
		// console.log(thisProduct);

	})

}

async function addReview(newReview) {
	const BIN_ID = "682ce2ab8a456b7966a22a04";
	const API_KEY = "$2a$10$6wC6i7O0SgqeA9fXBsKRiuzuHVzW0d5Ze.bmOT2V4dV/.1BQkP1WC";
	const URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

	// Получаем текущие данные
	const getRes = await fetch(`${URL}/latest`, {
		headers: {
			"X-Master-Key": API_KEY
		}
	});
	const json = await getRes.json();
	const reviews = json.record.data.reviews;

	// Генерируем новый ID
	const newId = (parseInt(reviews.at(-1)?.reviewsId || "0") + 1).toString();

	// Добавляем отзыв
	const updatedReviews = [...reviews, {
		...newReview,
		reviewsId: newId
	}];

	// Обновляем бин
	await fetch(URL, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			"X-Master-Key": API_KEY
		},
		body: JSON.stringify({
			data: {
				reviews: updatedReviews
			}
		})
	});

	console.log("Отзыв добавлен!");
	document.querySelector('.rev__body').style.display = 'none';
	document.querySelector('.rev__success').style.display = 'block';

	

	let messageTg = `✏️ <b>Оставлен новый отзыв</b> ✏️\n`;
	messageTg += `<b>Имя автора - </b> ${document.querySelectorAll('.rev__input')[0].value}\n`;
	messageTg += `<b>Почта - </b> ${document.querySelectorAll('.rev__input')[1].value}\n`;
	messageTg += `<b>Отзыв - </b> ${document.querySelector('.rev__textarea').value}\n`;
	messageTg += `<b>Оценка - </b> ${rating}/5\n`;
	messageTg += `<b>Ссылка - </b> ${location.href}\n`;

	axios.post(URI_API, {
		chat_id: CHAT_ID,
		parse_mode: "html",
		text: messageTg
	});

	document.querySelector('.rev__go').addEventListener('click', event => {
		location.reload();
	})
}

// {
//   "data": {
//     "reviews": [
//       {
//         "reviewsId": "1",
//         "productId": "1001",
//         "date": "20.05.2025",
//         "color": "Red",
//         "rating": 5,
//         "name": "Юлия",
//         "email": "mail@gmail.com",
//         "message": "Отличный товар, сумка бомба!"
//       },
//       {
//         "reviewsId": "2",
//         "productId": "1001",
//         "date": "20.05.2025",
//         "color": "Yellow",
//         "rating": 4,
//         "name": "Виктория",
//         "email": "mail@gmail.com",
//         "message": "Мне всё очень понравилось, я жена политика!"
//       }
//     ]
//   }
// }

// Proof

document.querySelector('.header__svg').addEventListener('click', event => {
	if ( document.querySelector('.header__input').value == "ятутадмин" ) {
		document.querySelector('.header__input').value = "СУПЕР, ТЫ АДМИН!";
		document.querySelector('.header__search').style.background = "#93ff7a";
		setTimeout( () => {
			document.querySelector('.header__input').value = "";
			document.querySelector('.header__search').style.background = "#fff";
		}, 2000)

		localStorage.setItem("BB-Admin", true);
		document.querySelectorAll('.review__delete').forEach( (item, i) => {
			item.style.display = "flex";
			item.addEventListener('click', event => {

				async function deleteReviewById(reviewId) {
					const BIN_ID = "682ce2ab8a456b7966a22a04";
					const API_KEY = "$2a$10$6wC6i7O0SgqeA9fXBsKRiuzuHVzW0d5Ze.bmOT2V4dV/.1BQkP1WC";

					// Сначала получаем текущие данные
					const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
						headers: {
						'X-Master-Key': API_KEY
						}
					});
					const json = await response.json();
					const reviews = json.record.data.reviews;

					// Фильтруем отзывы, удаляя нужный
					const updatedReviews = reviews.filter(r => r.reviewsId !== reviewId);

					// Отправляем обновлённый список обратно в Bin
					await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
						method: 'PUT',
						headers: {
						'Content-Type': 'application/json',
						'X-Master-Key': API_KEY
						},
						body: JSON.stringify({ data: { reviews: updatedReviews } })
					});

					console.log(`Отзыв с ID ${reviewId} удалён.`);
					document.querySelectorAll('.review__del')[i].style.display = "flex";
					setTimeout( () => {
						location.reload();
					}, 2000)
				}

				deleteReviewById(`${document.querySelectorAll('.review__card')[i].id}`);

			})
		})

	}
})