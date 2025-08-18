document.querySelectorAll('.faq__question').forEach( (item, i) => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.faq__question').forEach( (item, i) => {
            item.classList.remove('faq__question-active');
        })
        item.classList.add('faq__question-active');
    })

    function handleButtonClick() {
        document.querySelectorAll(".faq__card")[i].scrollIntoView({ block: "start", behavior: "smooth" });
    }
    document.querySelectorAll(".faq__question")[i].addEventListener("click", handleButtonClick);
})