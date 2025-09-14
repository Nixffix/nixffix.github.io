// Проверка на заполнение и запуск рассылки

document.querySelector('.rkn__button').addEventListener('click', event => {

    let emptyInput = false;

    document.querySelectorAll('.rkn__media-label').forEach( (item, i) => {
        if ( item.textContent === '📂 Загрузить файл' ) {
            emptyInput = true;
        }
    })

    if ( document.querySelector('.rkn__input-links').value == "" || !document.querySelector('.rkn__input-links').value.includes(".") ) {
        document.querySelector('.rkn__warning').textContent = '⚠️ Проверьте правильность заполнения ссылок ⚠️';
        
        document.querySelector('.rkn__warning').style.marginTop = '20px';
        document.querySelector('.rkn__warning').style.marginBottom = '20px';
        document.querySelector('.rkn__warning').style.padding = '10px';
        document.querySelector('.rkn__warning').style.maxHeight = '100px';
        setTimeout( () => {
            document.querySelector('.rkn__warning').style.marginTop = '0px';
            document.querySelector('.rkn__warning').style.padding = '0px';
            document.querySelector('.rkn__warning').style.maxHeight = '0px';
        }, 3000)
    } else if ( document.querySelectorAll('.rkn__input-text')[0].value == "" || document.querySelectorAll('.rkn__input-text')[0].value.length < 10 ) {
        document.querySelector('.rkn__warning').textContent = '⚠️ Проверьте правильность заполнения текста жалобы ⚠️';
        
        document.querySelector('.rkn__warning').style.marginTop = '20px';
        document.querySelector('.rkn__warning').style.marginBottom = '20px';
        document.querySelector('.rkn__warning').style.padding = '10px';
        document.querySelector('.rkn__warning').style.maxHeight = '100px';
        setTimeout( () => {
            document.querySelector('.rkn__warning').style.marginTop = '0px';
            document.querySelector('.rkn__warning').style.padding = '0px';
            document.querySelector('.rkn__warning').style.maxHeight = '0px';
        }, 3000)
    } else if ( emptyInput ) {
        document.querySelector('.rkn__warning').textContent = '⚠️ Проверьте правильность заполнения скриншотов ⚠️';

        document.querySelector('.rkn__warning').style.marginTop = '20px';
        document.querySelector('.rkn__warning').style.marginBottom = '20px';
        document.querySelector('.rkn__warning').style.padding = '10px';
        document.querySelector('.rkn__warning').style.maxHeight = '100px';
        setTimeout( () => {
            document.querySelector('.rkn__warning').style.marginTop = '0px';
            document.querySelector('.rkn__warning').style.padding = '0px';
            document.querySelector('.rkn__warning').style.maxHeight = '0px';
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
        newLogInPage.innerHTML = `<span>${getCurrentTime()}</span><p>🚀 Запуск рассылки жалоб РКН</p>`;
        document.querySelector(".log__wall").prepend(newLogInPage);

        const rawLinks = document.querySelector('.rkn__input-links').value.trim();
        const textTemplate = document.querySelector('.rkn__input-text').value.trim();

        const links = rawLinks.split("\n").map(l => l.trim()).filter(l => l.includes("."));
        const files = Array.from(document.querySelectorAll('.rkn__input-file'))
                        .map(f => f.files[0] || null);

        if (links.length === 0) {
            return addLog("⚠️ Нет ссылок для отправки");
        }
        if (!textTemplate || textTemplate.length < 10) {
            return addLog("⚠️ Текст жалобы слишком короткий");
        }

        addLog(`🚀 Запуск рассылки (${links.length} ссылок)`);

        // Запускаем цикл
        sendReportsSequentially(0, links, textTemplate, files);

    }

})

// Отображение инпутов для добавления файлов / скриншотов

document.querySelector('.rkn__input-links').addEventListener("input", () => {
    
    const lines = document.querySelector('.rkn__input-links').value
      .split("\n")
      .map(l => l.trim())
      .filter(l => l.length > 0);
    const links = lines.filter(l => /\./.test(l));
    console.log(links.length);

    document.querySelectorAll('.rkn__area-screen').forEach( (item, i) => {
        item.remove();
    })

    links.forEach( (item, i) => {
        let newFileScreen = document.createElement('div')
        newFileScreen.classList.add('rkn__area-screen')
        newFileScreen.classList.add('rkn__area')
        newFileScreen.innerHTML = `
            <div class="rkn__label">Скрин ${item}</div>
            <label class="rkn__media-label" for="fileInput444${i}">📂 Загрузить файл</label>
            <input type="file" name="file" accept="image/*" id="fileInput444${i}" class="rkn__input-file rkn__file" />
        `
        document.querySelector('.rkn__files').append(newFileScreen);
    })

    document.querySelectorAll('.rkn__file').forEach( (item, i) => {
        item.addEventListener('change', event => {
            const fileName = document.querySelectorAll('.rkn__media-label')[i];
            if (item.files && item.files.length > 0) {
                fileName.textContent = item.files[0].name;
            } else {
                fileName.textContent = "📂 Загрузить файл";
            }
        })
    })

});

// === Рекурсивная функция ===
function sendReportsSequentially(index, links, textTemplate, files) {
    if (index >= links.length) {
        addLog("✅ Все жалобы отправлены");
        return;
    }

    const link = links[index];
    const file = files[index] || null;
    const text = textTemplate.replace(/\[link\]/g, link); // заменяем все [link] на текущую ссылку

    const formData = new FormData();
    formData.append("links", link);
    formData.append("text", text);
    if (file) formData.append("files", file);

    addLog(`⏳ Отправка жалобы (${index+1}/${links.length}) → ${link}`);

    fetch("/rkn-report", { method: "POST", body: formData })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                addLog(`🎯 Жалоба по ссылке ${link} отправлена успешно`);
            } else {
                addLog(`❌ Ошибка по ссылке ${link}: ${data.error || "неизвестно"}`);
            }
        })
        .catch(err => {
            addLog(`❌ Сбой отправки ${link}: ${err.message}`);
        })
        .finally(() => {
            // Запускаем следующую ссылку после завершения
            sendReportsSequentially(index + 1, links, textTemplate, files);
        });
}


// === Логирование на фронте ===
function addLog(message) {
    const newLogInPage = document.createElement("div");
    newLogInPage.classList.add("log__text");
    newLogInPage.innerHTML = `<span>${getCurrentTime()}</span><p>${message}</p>`;
    document.querySelector(".log__wall").prepend(newLogInPage);
}
