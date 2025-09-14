// Отображения панели с количеством аккаунтов

document.querySelector('.email__start-button').addEventListener('click', event => {

    let numberProfiles = document.querySelector('.email__start-input').value;

    if ( numberProfiles >= 1 && numberProfiles <= 20 ) {

        document.querySelectorAll('.email__profile').forEach((item, i) => {
            item.remove();
        })

        for (let i = 0; i < numberProfiles; i++) {

            let profile = document.createElement('div');
            profile.classList.add('email__profile');
            profile.innerHTML = `
                <div class="email__title">Жалоба <span>${i + 1}</span></div>

                <div class="email__area email__area-login">
                    <div class="email__label">Логин почты ${i + 1}</div>
                    <input type="text" class="email__input email__input-login" placeholder="email@outlook.com">
                </div>

                <div class="email__area email__area-password">
                    <div class="email__label">Рефреш токен почты ${i + 1}</div>
                    <input type="text" class="email__input email__input-password" placeholder="refresh token">
                </div>

                <div class="email__area email__area-link">
                    <div class="email__label">Адрес сайта ${i + 1}</div>
                    <input type="text" class="email__input email__input-link" placeholder="https://link.com/">
                </div>

                <div class="email__area email__area-screen">
                    <div class="email__label">Скриншот ${i + 1}</div>
                    <label class="email__media-label" for="fileInput111${i}">📂 Загрузить файл</label>
                    <input type="file" name="file" accept="image/*" id="fileInput111${i}" class="email__input-file email__file" />
                </div>
            `;
            document.querySelector('.email__wall').append(profile);

        }

        document.querySelectorAll('.email__file').forEach( (item, i) => {
            item.addEventListener('change', event => {
                const fileName = document.querySelectorAll('.email__media-label')[i];
                if (item.files && item.files.length > 0) {
                    fileName.textContent = item.files[0].name;
                } else {
                    fileName.textContent = "📂 Загрузить файл";
                }
            })
        })

        document.querySelector('.email__body').style.maxHeight = '1000px';
        document.querySelector('.email__start').style.marginBottom = '40px';

    }

})

// Кнопка запуска отправки жалоб

document.querySelector('.email__button').addEventListener('click', event => {

    let allRight = true;

    if ( document.querySelector('.email__input-text').value.length < 10 ) {
        allRight = false;
        document.querySelector('.email__warning').textContent = '⚠️ Проверьте правильность заполнения текста жалобы ⚠️';
    }

    if ( document.querySelector('.email__input-subject').value.length < 5 ) {
        allRight = false;
        document.querySelector('.email__warning').textContent = '⚠️ Проверьте правильность заполнения заголовка жалобы ⚠️';
    }

    if ( document.querySelector('.email__input-recipient').value.length < 5 || !document.querySelector('.email__input-recipient').value.includes('@') || !document.querySelector('.email__input-recipient').value.includes('.') ) {
        allRight = false;
        document.querySelector('.email__warning').textContent = '⚠️ Проверьте правильность заполнения получателя ⚠️';
    }

    document.querySelectorAll('.email__media-label').forEach( (item, i) => {
        if ( item.textContent === '📂 Загрузить файл' ) {
            allRight = false;
            document.querySelector('.email__warning').textContent = '⚠️ Проверьте правильность заполнения скриншотов ⚠️';
        }
    })

    document.querySelectorAll('.email__input-link').forEach( (item, i) => {
        if ( item.value.length < 5 || !item.value.includes('.') ) {
            allRight = false;
            document.querySelector('.email__warning').textContent = '⚠️ Проверьте правильность заполнения ссылок ⚠️';
        }
    })

    document.querySelectorAll('.email__input-password').forEach( (item, i) => {
        if ( item.value.length < 5 ) {
            allRight = false;
            document.querySelector('.email__warning').textContent = '⚠️ Проверьте правильность заполнения рефреш токенов ⚠️';
        }
    })

    document.querySelectorAll('.email__input-login').forEach( (item, i) => {
        if ( item.value.length < 5 || !item.value.includes('@') || !item.value.includes('.') ) {
            allRight = false;
            document.querySelector('.email__warning').textContent = '⚠️ Проверьте правильность заполнения логинов ⚠️';
        }
    })

    if ( allRight == true) {

        const inputs = document.querySelectorAll(".email__input-file");
        const formData = new FormData();

        inputs.forEach(input => {
            if (input.files.length > 0) {
            formData.append("files", input.files[0]);
            }
        });

        fetch(window.location.origin + "/upload", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => saveNewConfig(data))
        .catch(err => console.error(err));

        function saveNewConfig(listFiles) {
            const profiles = [];

            const logins = document.querySelectorAll('.email__input-login');
            const passwords = document.querySelectorAll('.email__input-password');
            const links = document.querySelectorAll('.email__input-link');
            const recipients = document.querySelector('.email__input-recipient');
            const subjects = document.querySelector('.email__input-subject');
            const texts = document.querySelector('.email__input-text');

            let timePause = 10000;

            for ( let i = 0; i < listFiles.uploaded.length; i ++ ) {
                let textWithLink = texts.value.replace(/\[link\]/g, links[i].value);

                profiles.push({
                    account: {
                        user: logins[i].value,          // email
                        refreshToken: passwords[i].value // сюда вводится refresh_token
                    },
                    site: {
                        recipient: recipients.value,
                        subject: subjects.value,
                        text: textWithLink,
                        attachment: `/upload/${listFiles.uploaded[i]}`,
                        delayMs: timePause
                    }
                });

                timePause += 10000;

            }

            document.querySelector('.log').style.display = "block";
            setTimeout( () => {
                document.querySelector('.log').style.opacity = "1";
                setTimeout( () => {
                    document.querySelector('.log__body').style.top = "50%";
                }, 100 )
            }, 100 )

            fetch(window.location.origin + "/save-config", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ profiles })
            })
            .then(res => res.json())
            .then(data => {
                console.log("✅ Config saved:", data);

                let newLogInPage = document.createElement("div");
                newLogInPage.classList.add("log__text");
                newLogInPage.innerHTML = `<span>${getCurrentTime()}</span><p>✅ Сохранены скриншоты и список жалоб для рассылки</p>`;
                document.querySelector(".log__wall").prepend(newLogInPage);

                // После сохранения — запускаем рассылку
                return fetch("/start-send", { method: "POST" });
            })
            .then(res => res.json())
            .then(data => {
                console.log("🚀 Рассылка запущена:", data)

                let newLogInPage = document.createElement("div");
                newLogInPage.classList.add("log__text");
                newLogInPage.innerHTML = `<span>${getCurrentTime()}</span><p>🚀 Запуск рассылки жалоб через почту</p>`;
                document.querySelector(".log__wall").prepend(newLogInPage);
            })
            .catch(err => console.error(err));
            
        }

    } else {
        document.querySelector('.email__warning').style.marginTop = '20px';
        document.querySelector('.email__warning').style.padding = '10px';
        document.querySelector('.email__warning').style.maxHeight = '100px';
        setTimeout( () => {
            document.querySelector('.email__warning').style.marginTop = '0px';
            document.querySelector('.email__warning').style.padding = '0px';
            document.querySelector('.email__warning').style.maxHeight = '0px';
        }, 3000)
    }

})

// Быстрая вставка аккаунтов
let accountCount = 0;
let logins = [];
let tokens = [];

const value = document.querySelector('.fast__input').value;
accountCount = 0;
logins = [];
tokens = [];
const lines = value.split('\n').map(line => line.trim()).filter(line => line);
lines.forEach(line => {
    const parts = line.split(':');
    if (parts.length === 2) {
        logins.push(parts[0]);
        tokens.push(parts[1]);
    }
});
accountCount = logins.length;
document.querySelector('.fast__count').textContent = `Количество аккаунтов: ${accountCount}`;

document.querySelector('.fast__input').addEventListener('input', event => {
    const value = event.target.value;

    accountCount = 0;
    logins = [];
    tokens = [];

    // Разбиваем по строкам и фильтруем пустые
    const lines = value.split('\n').map(line => line.trim()).filter(line => line);

    lines.forEach(line => {
        const parts = line.split(':');
        if (parts.length === 2) {
            logins.push(parts[0]);
            tokens.push(parts[1]);
        }
    });

    accountCount = logins.length;

    // Обновляем счетчик в html
    document.querySelector('.fast__count').textContent = `Количество аккаунтов: ${accountCount}`;
});

document.querySelector(".fast__button").addEventListener('click', event => {
    if ( accountCount != 0 ) {

        document.querySelector('.email__start-input').value = accountCount;

        document.querySelectorAll('.email__profile').forEach((item, i) => {
            item.remove();
        })

        for (let i = 0; i < accountCount; i++) {

            let profile = document.createElement('div');
            profile.classList.add('email__profile');
            profile.innerHTML = `
                <div class="email__title">Жалоба <span>${i + 1}</span></div>

                <div class="email__area email__area-login">
                    <div class="email__label">Логин почты ${i + 1}</div>
                    <input type="text" class="email__input email__input-login" placeholder="email@outlook.com">
                </div>

                <div class="email__area email__area-password">
                    <div class="email__label">Рефреш токен почты ${i + 1}</div>
                    <input type="text" class="email__input email__input-password" placeholder="refresh token">
                </div>

                <div class="email__area email__area-link">
                    <div class="email__label">Адрес сайта ${i + 1}</div>
                    <input type="text" class="email__input email__input-link" placeholder="https://link.com/">
                </div>

                <div class="email__area email__area-screen">
                    <div class="email__label">Скриншот ${i + 1}</div>
                    <label class="email__media-label" for="fileInput111${i}">📂 Загрузить файл</label>
                    <input type="file" name="file" accept="image/*" id="fileInput111${i}" class="email__input-file email__file" />
                </div>
            `;
            document.querySelector('.email__wall').append(profile);

        }

        document.querySelectorAll('.email__file').forEach( (item, i) => {
            item.addEventListener('change', event => {
                const fileName = document.querySelectorAll('.email__media-label')[i];
                if (item.files && item.files.length > 0) {
                    fileName.textContent = item.files[0].name;
                } else {
                    fileName.textContent = "📂 Загрузить файл";
                }
            })
        })

        document.querySelector('.email__body').style.maxHeight = '1000px';
        document.querySelector('.email__start').style.marginBottom = '40px';

        document.querySelector('.fast__body').style.top = "-150%";
        setTimeout( () => {
            document.querySelector('.fast').style.opacity = "0";
            setTimeout( () => {
                document.querySelector('.fast').style.display = "none";
            }, 600 )
        }, 600 )

        for (let i = 0; i < accountCount; i++) {

            document.querySelectorAll('.email__input-login')[i].value = logins[i];
            document.querySelectorAll('.email__input-password')[i].value = tokens[i];

        }

    }
})

document.querySelector('.email__fast').addEventListener('click', event => {
    document.querySelector('.fast').style.display = "block";
    setTimeout( () => {
        document.querySelector('.fast').style.opacity = "1";
        setTimeout( () => {
            document.querySelector('.fast__body').style.top = "50%";
        }, 100 )
    }, 100 )
})

document.querySelector('.fast__close').addEventListener('click', event => {
    document.querySelector('.fast__body').style.top = "-150%";
    setTimeout( () => {
        document.querySelector('.fast').style.opacity = "0";
        setTimeout( () => {
            document.querySelector('.fast').style.display = "none";
        }, 600 )
    }, 600 )
})
