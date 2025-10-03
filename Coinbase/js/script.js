// Открытие карточек FAQ

let activeFaqCard = [false, false, false, false, false, false, false];
document.querySelectorAll('.faq__name').forEach( (item, i) => {
    item.addEventListener('click', event => {

        if ( activeFaqCard[i] == false ) {
            document.querySelectorAll('.faq__text')[i].style.maxHeight = "1000px";
            activeFaqCard[i] = true;
        } else {
            document.querySelectorAll('.faq__text')[i].style.maxHeight = "0px";
            activeFaqCard[i] = false;
        }

    })
})

// Печатание текста

const texts = [
  "Simplify onchain transactions",
  "Build your Based profile",
  "Connect with Based builders"
];

const element = document.querySelector(".promo__text");
let textIndex = 0;
let charIndex = 0;
let deleting = false;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseTime = 2000;

function type() {
  let currentText = texts[textIndex];

  if (!deleting) {
   
    element.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      deleting = true;
      setTimeout(type, pauseTime);
      return;
    }
  } else {
   
    element.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(type, deleting ? deletingSpeed : typingSpeed);
}

type();

// Таймер с блюром карточек

function randomBlur() {
  const cards = document.querySelectorAll('.promo__card');
  cards.forEach( (item, i) => {
    item.style.filter = "blur(4px)";
    item.style.opacity = "0.4";

    // if ( i == 0 ) {
    //     item.style.transform = "translateX(-50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
    // } else if ( i == 1 ) {
    //     item.style.transform = "translateX(-50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
    // } else if ( i == 2 ) {
    //     item.style.transform = "translateY(-50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
    // } else if ( i == 3 ) {
    //     item.style.transform = "translateY(-50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
    // } else if ( i == 4 ) {
    //     item.style.transform = "translateX(-50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
    // } else if ( i == 5 ) {
    //     item.style.transform = "translateX(-50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
    // } else if ( i == 6 ) {
    //     item.style.transform = "translateX(50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
    // } else if ( i == 7 ) {
    //     item.style.transform = "translateX(50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
    // }

  });
  if (cards.length < 2) return;
  let first = Math.floor(Math.random() * cards.length);
  let second;
  do {
    second = Math.floor(Math.random() * cards.length);
  } while (second === first);
  cards[first].style.filter = "blur(0px)";
  cards[first].style.opacity = "1";

    // if ( first == 0 ) {
    //     cards[first].style.transform = "translateX(-50%)";
    // } else if ( first == 1 ) {
    //     cards[first].style.transform = "translateX(-50%)";
    // } else if ( first == 2 ) {
    //     cards[first].style.transform = "translateY(-50%)";
    // } else if ( first == 3 ) {
    //     cards[first].style.transform = "translateY(-50%)";
    // } else if ( first == 4 ) {
    //     cards[first].style.transform = "translateX(-50%)";
    // } else if ( first == 5 ) {
    //     cards[first].style.transform = "translateX(-50%)";
    // } else if ( first == 6 ) {
    //     cards[first].style.transform = "translateX(50%)";
    // } else if ( first == 7 ) {
    //     cards[first].style.transform = "translateX(50%)";
    // }

  cards[second].style.filter = "blur(0px)";
  cards[second].style.opacity = "1";
}

setInterval(randomBlur, 3000);

randomBlur();

// Подксвечивание карточек при наведении мыши на кнопку

document.querySelector('.promo__button').addEventListener('mouseover', event => {
    document.querySelectorAll('.promo__card').forEach( item => {
        item.classList.add('promo__card-active');
    })
})

document.querySelector('.promo__button').addEventListener('mouseleave', event => {
    document.querySelectorAll('.promo__card').forEach( item => {
        item.classList.remove('promo__card-active');
    })
})

// Ховер еффект на карточках

document.querySelectorAll('.promo__card').forEach( (item, i) => {

    item.addEventListener("mouseenter", () => {

        if ( i == 0 ) {
            item.style.transform = "translateX(-50%)";
        } else if ( i == 1 ) {
            item.style.transform = "translateX(-50%)";
        } else if ( i == 2 ) {
            item.style.transform = "translateY(-50%)";
        } else if ( i == 3 ) {
            item.style.transform = "translateY(-50%)";
        } else if ( i == 4 ) {
            item.style.transform = "translateX(-50%)";
        } else if ( i == 5 ) {
            item.style.transform = "translateX(-50%)";
        } else if ( i == 6 ) {
            item.style.transform = "translateX(50%)";
        } else if ( i == 7 ) {
            item.style.transform = "translateX(50%)";
        }

    });

});

document.querySelectorAll('.promo__card').forEach( (item, i) => {

    item.addEventListener("mouseleave", () => {

        if ( i == 0 ) {
            item.style.transform = "translateX(-50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
        } else if ( i == 1 ) {
            item.style.transform = "translateX(-50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
        } else if ( i == 2 ) {
            item.style.transform = "translateY(-50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
        } else if ( i == 3 ) {
            item.style.transform = "translateY(-50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
        } else if ( i == 4 ) {
            item.style.transform = "translateX(-50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
        } else if ( i == 5 ) {
            item.style.transform = "translateX(-50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
        } else if ( i == 6 ) {
            item.style.transform = "translateX(50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
        } else if ( i == 7 ) {
            item.style.transform = "translateX(50%) rotate3d(-0.502823, 0.864389, 0, 20deg)";
        }

    });

});

// Анимация стрелки

setInterval( () => {

    document.querySelector('.promo__gif svg').style.top = "100%";
    document.querySelector('.promo__gif svg').style.opacity = "0";
    setTimeout( () => {
        document.querySelector('.promo__gif svg').style.transition = "0s";
        document.querySelector('.promo__gif').style.transition = "0s";
        document.querySelector('.promo__go').style.transition = "0s";
        document.querySelector('.promo__gif svg').style.top = "-0%";

        setTimeout( () => {

            document.querySelector('.promo__gif svg').style.transition = "all 1s ease";
            document.querySelector('.promo__gif').style.transition = "all 1s ease";
            document.querySelector('.promo__go').style.transition = "all 1s ease";

            setTimeout( () => {

                document.querySelector('.promo__gif svg').style.top = "50%";
                document.querySelector('.promo__gif svg').style.opacity = "1";

            }, 20)

        }, 20)
    }, 1000)

}, 2400 )

// Эффект на логотипе

document.querySelector('.header__left').addEventListener('mouseenter', event => {
    document.querySelector('.header__logo').style.width = "30px";
    document.querySelector('.header__logo').style.height = "30px";
    setTimeout( () => {
        document.querySelector('.header__logo').style.opacity = "0";
        document.querySelector('.header__sqr-one').style.opacity = "1";
        document.querySelector('.header__sqr-two').style.opacity = "1";
        document.querySelector('.header__sqr-two').style.left = "35px";
        document.querySelector('.header__sqr-three').style.opacity = "1";
        document.querySelector('.header__sqr-three').style.left = "70px";
        document.querySelector('.header__sqr-four').style.opacity = "1";
        document.querySelector('.header__sqr-four').style.left = "105px";
        setTimeout( () => {
            document.querySelector('.header__sqr-one').style.height = "47px";
            document.querySelector('.header__sqr-two').style.height = "47px";
            document.querySelector('.header__sqr-three').style.height = "47px";
            document.querySelector('.header__sqr-four').style.height = "47px";
            setTimeout( () => {
                document.querySelector('.header__sqr-one').style.opacity = "0";
                document.querySelector('.header__sqr-two').style.opacity = "0";
                document.querySelector('.header__sqr-three').style.opacity = "0";
                document.querySelector('.header__sqr-four').style.opacity = "0";
                document.querySelector('.header__sqr-one').style.filter = "blur(10px)";
                document.querySelector('.header__sqr-two').style.filter = "blur(10px)";
                document.querySelector('.header__sqr-three').style.filter = "blur(10px)";
                document.querySelector('.header__sqr-four').style.filter = "blur(10px)";
                setTimeout( () => {
                    document.querySelector('.header__img').style.opacity = "1";
                }, 250)
            }, 250)
        }, 250 )
    }, 250 )
})


document.querySelector('.header__left').addEventListener('mouseleave', event => {
    setTimeout( () => {
        document.querySelector('.header__img').style.opacity = "0";
        setTimeout( () => {
            document.querySelector('.header__sqr-one').style.opacity = "1";
            document.querySelector('.header__sqr-two').style.opacity = "1";
            document.querySelector('.header__sqr-three').style.opacity = "1";
            document.querySelector('.header__sqr-four').style.opacity = "1";
            document.querySelector('.header__sqr-one').style.filter = "blur(0px)";
            document.querySelector('.header__sqr-two').style.filter = "blur(0px)";
            document.querySelector('.header__sqr-three').style.filter = "blur(0px)";
            document.querySelector('.header__sqr-four').style.filter = "blur(0px)";
            setTimeout( () => {
                document.querySelector('.header__sqr-one').style.height = "30px";
                document.querySelector('.header__sqr-two').style.height = "30px";
                document.querySelector('.header__sqr-three').style.height = "30px";
                document.querySelector('.header__sqr-four').style.height = "30px";
                setTimeout( () => {
                    document.querySelector('.header__logo').style.opacity = "1";
                    document.querySelector('.header__sqr-one').style.opacity = "0";
                    document.querySelector('.header__sqr-two').style.opacity = "0";
                    document.querySelector('.header__sqr-two').style.left = "0px";
                    document.querySelector('.header__sqr-three').style.opacity = "0";
                    document.querySelector('.header__sqr-three').style.left = "0px";
                    document.querySelector('.header__sqr-four').style.opacity = "0";
                    document.querySelector('.header__sqr-four').style.left = "0px";
                    setTimeout( () => {
                        document.querySelector('.header__logo').style.width = "60px";
                        document.querySelector('.header__logo').style.height = "60px";
                    }, 250)
                }, 250)
            }, 250)
        }, 250)
    }, 1000)
})