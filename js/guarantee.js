// Скролл к блоку с контактами по клику

document.querySelector('.gar__scroll').addEventListener('click', event => {
    document.querySelector(".contact").scrollIntoView({ block: "start", behavior: "smooth" });
})