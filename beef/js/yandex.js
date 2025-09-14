// Проверка на заполнение и запуск рассылки

document.querySelector('.yandex__button').addEventListener('click', event => {

    let emptyInput = false;

    document.querySelectorAll('.yandex__media-label').forEach( (item, i) => {
        if ( item.textContent === '📂 Загрузить файл' ) {
            emptyInput = true;
        }
    })

    if ( document.querySelector('.yandex__input-links').value == "" || !document.querySelector('.yandex__input-links').value.includes(".") ) {
        document.querySelector('.yandex__warning').textContent = '⚠️ Проверьте правильность заполнения ссылок ⚠️';
        console.log('yan');
        
        document.querySelector('.yandex__warning').style.marginTop = '20px';
        document.querySelector('.yandex__warning').style.marginBottom = '20px';
        document.querySelector('.yandex__warning').style.padding = '10px';
        document.querySelector('.yandex__warning').style.maxHeight = '100px';
        setTimeout( () => {
            document.querySelector('.yandex__warning').style.marginTop = '0px';
            document.querySelector('.yandex__warning').style.padding = '0px';
            document.querySelector('.yandex__warning').style.maxHeight = '0px';
        }, 3000)
    } else if ( document.querySelectorAll('.yandex__input-text')[0].value == "" || document.querySelectorAll('.yandex__input-text')[0].value.length < 10 ) {
        document.querySelector('.yandex__warning').textContent = '⚠️ Проверьте правильность заполнения поискового запроса ⚠️';
        
        document.querySelector('.yandex__warning').style.marginTop = '20px';
        document.querySelector('.yandex__warning').style.marginBottom = '20px';
        document.querySelector('.yandex__warning').style.padding = '10px';
        document.querySelector('.yandex__warning').style.maxHeight = '100px';
        setTimeout( () => {
            document.querySelector('.yandex__warning').style.marginTop = '0px';
            document.querySelector('.yandex__warning').style.padding = '0px';
            document.querySelector('.yandex__warning').style.maxHeight = '0px';
        }, 3000)
    } else if ( document.querySelectorAll('.yandex__input-text')[1].value == "" || !document.querySelectorAll('.yandex__input-text')[1].value.includes("[link]") ) {
        document.querySelector('.yandex__warning').textContent = '⚠️ Проверьте правильность заполнения текста жалобы ⚠️';
        
        document.querySelector('.yandex__warning').style.marginTop = '20px';
        document.querySelector('.yandex__warning').style.marginBottom = '20px';
        document.querySelector('.yandex__warning').style.padding = '10px';
        document.querySelector('.yandex__warning').style.maxHeight = '100px';
        setTimeout( () => {
            document.querySelector('.yandex__warning').style.marginTop = '0px';
            document.querySelector('.yandex__warning').style.padding = '0px';
            document.querySelector('.yandex__warning').style.maxHeight = '0px';
        }, 3000)
    } else if ( emptyInput ) {
        document.querySelector('.yandex__warning').textContent = '⚠️ Проверьте правильность заполнения скриншотов ⚠️';

        document.querySelector('.yandex__warning').style.marginTop = '20px';
        document.querySelector('.yandex__warning').style.marginBottom = '20px';
        document.querySelector('.yandex__warning').style.padding = '10px';
        document.querySelector('.yandex__warning').style.maxHeight = '100px';
        setTimeout( () => {
            document.querySelector('.yandex__warning').style.marginTop = '0px';
            document.querySelector('.yandex__warning').style.padding = '0px';
            document.querySelector('.yandex__warning').style.maxHeight = '0px';
        }, 3000)
    } else {

        document.querySelector('.log').style.display = "block";
        setTimeout( () => {
            document.querySelector('.log').style.opacity = "1";
            setTimeout( () => {
                document.querySelector('.log__body').style.top = "50%";
            }, 100 )
        }, 100 )

        let newLogInPage = document.createElement("div");
        newLogInPage.classList.add("log__text");
        newLogInPage.innerHTML = `<span>${getCurrentTime()}</span><p>🚀 Запуск рассылки жалоб Яндекс</p>`;
        document.querySelector(".log__wall").prepend(newLogInPage);

        async function sendComplaints() {
            const links = document.querySelector(".yandex__input-links").value;
            // const template1 = document.querySelectorAll(".yandex__input-text")[0].value;
            const template1 = "Маркетплейс";
            const template2 = document.querySelectorAll(".yandex__input-text")[1].value;

            const formData = new FormData();
            formData.append("links", links);
            formData.append("template1", template1);
            formData.append("template2", template2);

            // добавляем файлы
            document.querySelectorAll(".yandex__input-file").forEach((input) => {
                if (input.files[0]) formData.append("screens", input.files[0]);
            });

            await fetch("/send-yandex", {
                method: "POST",
                body: formData,
            }).then(res => res.json()).then(console.log);
        }

        sendComplaints();

    }

})

// Отображение инпутов для добавления файлов / скриншотов

document.querySelector('.yandex__input-links').addEventListener("input", () => {
    
    const lines = document.querySelector('.yandex__input-links').value
      .split("\n")
      .map(l => l.trim())
      .filter(l => l.length > 0);
    const links = lines.filter(l => /\./.test(l));
    console.log(links.length);

    document.querySelectorAll('.yandex__area-screen').forEach( (item, i) => {
        item.remove();
    })

    links.forEach( (item, i) => {
        let newFileScreen = document.createElement('div')
        newFileScreen.classList.add('yandex__area-screen')
        newFileScreen.classList.add('yandex__area')
        newFileScreen.innerHTML = `
            <div class="yandex__label">Скрин ${item}</div>
            <label class="yandex__media-label" for="fileInput333${i}">📂 Загрузить файл</label>
            <input type="file" name="file" accept="image/*" id="fileInput333${i}" class="yandex__input-file yandex__file" />
        `
        document.querySelector('.yandex__files').append(newFileScreen);
    })

    document.querySelectorAll('.yandex__file').forEach( (item, i) => {
        item.addEventListener('change', event => {
            const fileName = document.querySelectorAll('.yandex__media-label')[i];
            if (item.files && item.files.length > 0) {
                fileName.textContent = item.files[0].name;
            } else {
                fileName.textContent = "📂 Загрузить файл";
            }
        })
    })

});
