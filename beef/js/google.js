// Проверка на заполнение и запуск рассылки

document.querySelector('.google__button').addEventListener('click', event => {

    if ( document.querySelector('.google__input-links').value == "" || !document.querySelector('.google__input-links').value.includes(".") ) {
        document.querySelector('.google__warning').textContent = '⚠️ Проверьте правильность заполнения ссылок ⚠️';
        
        document.querySelector('.google__warning').style.marginTop = '20px';
        document.querySelector('.google__warning').style.marginBottom = '20px';
        document.querySelector('.google__warning').style.padding = '10px';
        document.querySelector('.google__warning').style.maxHeight = '100px';
        setTimeout( () => {
            document.querySelector('.google__warning').style.marginTop = '0px';
            document.querySelector('.google__warning').style.padding = '0px';
            document.querySelector('.google__warning').style.maxHeight = '0px';
        }, 3000)
    } else if ( document.querySelectorAll('.google__input-text')[0].value == "" || !document.querySelectorAll('.google__input-text')[0].value.includes("[link]") ) {
        document.querySelector('.google__warning').textContent = '⚠️ Проверьте правильность заполнения текста жалобы №1 ⚠️';
        
        document.querySelector('.google__warning').style.marginTop = '20px';
        document.querySelector('.google__warning').style.marginBottom = '20px';
        document.querySelector('.google__warning').style.padding = '10px';
        document.querySelector('.google__warning').style.maxHeight = '100px';
        setTimeout( () => {
            document.querySelector('.google__warning').style.marginTop = '0px';
            document.querySelector('.google__warning').style.padding = '0px';
            document.querySelector('.google__warning').style.maxHeight = '0px';
        }, 3000)
    } else if ( document.querySelectorAll('.google__input-text')[1].value == "" || !document.querySelectorAll('.google__input-text')[1].value.includes("[link]") ) {
        document.querySelector('.google__warning').textContent = '⚠️ Проверьте правильность заполнения текста жалобы №2 ⚠️';
        
        document.querySelector('.google__warning').style.marginTop = '20px';
        document.querySelector('.google__warning').style.marginBottom = '20px';
        document.querySelector('.google__warning').style.padding = '10px';
        document.querySelector('.google__warning').style.maxHeight = '100px';
        setTimeout( () => {
            document.querySelector('.google__warning').style.marginTop = '0px';
            document.querySelector('.google__warning').style.padding = '0px';
            document.querySelector('.google__warning').style.maxHeight = '0px';
        }, 3000)
    } else {

        const links = document.querySelector(".google__input-links").value
            .split("\n")
            .map(l => l.trim())
            .filter(l => l.length > 0);

        const texts = Array.from(document.querySelectorAll(".google__input-text")).map(t => t.value);

        const result = links.map((link, i) => {
            const textTemplate = texts[i % texts.length]; // циклично выбираем шаблон
            return textTemplate.replace(/\[link\]/g, link); // заменяем все вхождения
        });

        // console.log(JSON.stringify(result, null, 2));
        // console.log(result);

        document.querySelector('.log').style.display = "block";
        setTimeout( () => {
            document.querySelector('.log').style.opacity = "1";
            setTimeout( () => {
                document.querySelector('.log__body').style.top = "50%";
            }, 100 )
        }, 100 )

        let newLogInPage = document.createElement("div");
        newLogInPage.classList.add("log__text");
        newLogInPage.innerHTML = `<span>${getCurrentTime()}</span><p>🚀 Начало рассылки жалоб в Google SafeBrowsing</p>`;
        document.querySelector(".log__wall").appendChild(newLogInPage);

        fetch("/send-google-reports", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ links, texts })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                console.log("✅ Жалобы успешно отправлены!");
            } else {
                console.log("❌ Ошибка: " + data.error);
            }
        })
        .catch(err => {
            console.log("⚠️ Ошибка сети: " + err.message);
        });

    }

})