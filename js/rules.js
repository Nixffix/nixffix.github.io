document.querySelectorAll('.rules__question')[0].addEventListener('click', event => {

    if ( document.querySelectorAll('.rules__question')[0].classList.value.includes('rules__question-active') ) {

    } else {
        document.querySelectorAll('.rules__question')[0].classList.add('rules__question-active');
        document.querySelectorAll('.rules__question')[1].classList.remove('rules__question-active');
        document.querySelector('.politics').style.display = 'none';
        document.querySelector('.rule').style.display = 'none';
        document.querySelector('.rules__title').textContent = 'Пользовательское соглашение';
        document.querySelector('.rules .container .nav p').textContent = 'Правила сервиса';

        document.querySelector('.rules__preloading').style.display = 'block';
        window.scrollTo(0, 0);

        document.title = 'Пользовательское соглашение';

        setTimeout( () => {
            document.querySelector('.rules__preloading').style.display = 'none';
            document.querySelector('.rule').style.display = 'block';
        }, 400 )
    }

})

document.querySelectorAll('.rules__question')[1].addEventListener('click', event => {

    if ( document.querySelectorAll('.rules__question')[1].classList.value.includes('rules__question-active') ) {

    } else {
        document.querySelectorAll('.rules__question')[1].classList.add('rules__question-active');
        document.querySelectorAll('.rules__question')[0].classList.remove('rules__question-active');
        document.querySelector('.politics').style.display = 'none';
        document.querySelector('.rule').style.display = 'none';
        document.querySelector('.rules__title').textContent = 'AML политика';
        document.querySelector('.rules .container .nav p').textContent = 'AML политика';

        document.querySelector('.rules__preloading').style.display = 'block';
        window.scrollTo(0, 0);

        document.title = 'AML политика';

        setTimeout( () => {
            document.querySelector('.rules__preloading').style.display = 'none';
            document.querySelector('.politics').style.display = 'block';
        }, 400 )
    }

})