document.querySelector('.forgot__button').addEventListener('click', event => {
    if ( document.querySelector('.forgot__input input').value == '' ) {
        document.querySelector('.forgot__message p').textContent = 'Это поле не может быть пустым';
        document.querySelector('.forgot__message').style.display = 'block';
        document.querySelector('.forgot__input input').style.border = '2px solid #f73';
        document.querySelector('.forgot__input input').style.marginBottom = '40px';
    } else if ( !String(document.querySelector('.forgot__input input').value).includes('@') && !String(document.querySelector('.forgot__input input').value).includes('.') ) {
        document.querySelector('.forgot__message p').textContent = 'Не верный E-mail';
        document.querySelector('.forgot__message').style.display = 'block';
        document.querySelector('.forgot__input input').style.border = '2px solid #f73';
        document.querySelector('.forgot__input input').style.marginBottom = '40px';
    } else {
        setTimeout( () => {
            document.querySelector('.forgot__message p').textContent = 'Пользователь не найден';
            document.querySelector('.forgot__message').style.display = 'block';
            document.querySelector('.forgot__input input').style.border = '2px solid #f73';
            document.querySelector('.forgot__input input').style.marginBottom = '40px';
        }, 600 )
    }
})

document.querySelector('.forgot__input input').addEventListener('click', event => {
    document.querySelector('.forgot__message').style.display = 'none';
    document.querySelector('.forgot__input input').style.border = '2px solid #cfcfcf';
    document.querySelector('.forgot__input input').style.marginBottom = '20px';
})