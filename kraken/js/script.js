let activeMenu = false;
document.querySelector('.header__open').addEventListener('click', event => {
    if ( activeMenu == false ) {
        document.querySelector('.header__open').style.background = '#dc1e51';
        document.querySelector('.header__open svg').style.width = '50%';
        document.querySelector('.header__menu').style.right = '0px';
        activeMenu = true;
    } else {
        document.querySelector('.header__open').style.background = '#00000000';
        document.querySelector('.header__open svg').style.width = '80%';
        document.querySelector('.header__menu').style.right = '-325px';
        activeMenu = false;
    }
})