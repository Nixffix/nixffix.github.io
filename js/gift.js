document.querySelector('.gift__input input').addEventListener('input', event => {
    if ( document.querySelector('.gift__input input').value.length > 0 ) {
        document.querySelector('.gift__button').classList.add('gift__button-active');
    } else {
        document.querySelector('.gift__button').classList.remove('gift__button-active');
    }
})

document.querySelector('.gift__button').addEventListener('click', event => {
    if ( document.querySelector('.gift__button').classList.value.includes('gift__button-active') ) {
        document.querySelector('.gift__title').style.display = 'none';
        document.querySelector('.gift__body').style.display = 'none';
        document.querySelector('.gift__preloading').style.display = 'flex';

        document.querySelector('.gift__message').style.display = 'block';
        document.querySelector('.gift__input').style.border = '2px solid #f73';

        document.querySelector('.gift__button').classList.remove('gift__button-active');
        document.querySelector('.gift__input input').value = '';

        setTimeout( () => {
            document.querySelector('.gift__title').style.display = 'block';
            document.querySelector('.gift__body').style.display = 'flex';
            document.querySelector('.gift__preloading').style.display = 'none';
        }, 1000 )
    }
})

document.querySelector('.gift__input input').addEventListener('click', event => {
    document.querySelector('.gift__message').style.display = 'none';
    document.querySelector('.gift__input').style.border = '2px solid #cfcfcf';
})