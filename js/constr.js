if ( location.hostname == "127.0.0.1" ) {
    document.querySelector('.full').innerHTML = `<div class="copy">
        <input type="text" value="" class="copyInput copyInput1">
        <input type="text" value="" class="copyInput copyInput2">
    </div>

    <div class="header__top">
        <p>быстрый автоматический обмен и поддержка 24/7</p>
    </div>

    <header class="header">

        <div class="header__lil">
            <div class="header__lil-menu">
                <svg width="20px" height="20px" class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" d="M1 2H19M13.2727 9H1M1 16H19" stroke="#2E4057" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <svg width="20px" height="20px" class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M0.292859 18.2882C-0.0976196 18.6788 -0.0976196 19.312 0.292859 19.7026C0.683337 20.0931 1.31643 20.0931 1.70691 19.7026L9.99608 11.4114L18.292 19.7022C18.6827 20.0926 19.316 20.0926 19.7067 19.7022C20.0973 19.3118 20.0973 18.6788 19.7067 18.2884L11.4101 9.99707L19.6979 1.70731C20.0884 1.31674 20.0884 0.683498 19.6979 0.292928C19.3075 -0.0976422 18.6744 -0.0976431 18.2839 0.292928L9.99546 8.5833L1.70776 0.300813C1.31712 -0.0895896 0.683754 -0.0895886 0.293106 0.300813C-0.0975407 0.691214 -0.0975417 1.32418 0.293106 1.71458L8.58142 9.99768L0.292859 18.2882Z" fill="#2E4057"></path></svg>
            </div>
            <div class="header__lil-logo">
                <svg class="icon-logo" viewBox="0 0 152 34" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M24.7554 27.745V33.6383H0V1.90504H24.1616V7.79837H7.35354V14.689H22.1976V20.401H7.35354V27.745H24.7554Z" fill="#FF7733"></path>
                    <path d="M45.4486 33.6383L40.0591 26.1584L34.4868 33.6383H26.7222L36.1768 21.353L27.0419 9.24904H35.0349L40.2418 16.3664L45.5856 9.24904H53.1676L44.0327 21.1717L53.5329 33.6383H45.4486Z" fill="#FF7733"></path>
                    <path d="M86.8165 1.904V33.6373H79.4172V20.6267H64.8929V33.6373H57.4937V1.904H64.8929V14.416H79.4172V1.904H86.8165Z" fill="#2E4057"></path>
                    <path d="M118.634 9.248V33.6373H111.874V30.736C110.93 31.7938 109.804 32.6098 108.494 33.184C107.185 33.728 105.769 34 104.246 34C101.019 34 98.4611 33.0782 96.5732 31.2347C94.6854 29.3911 93.7414 26.656 93.7414 23.0293V9.248H100.867V21.9867C100.867 25.9156 102.526 27.88 105.845 27.88C107.55 27.88 108.92 27.336 109.956 26.248C110.991 25.1298 111.509 23.4827 111.509 21.3067V9.248H118.634Z" fill="#2E4057"></path>
                    <path d="M139.759 8.88533C142.043 8.88533 144.113 9.41422 145.971 10.472C147.859 11.4996 149.336 12.9653 150.401 14.8693C151.467 16.7431 152 18.9342 152 21.4427C152 23.9511 151.467 26.1573 150.401 28.0613C149.336 29.9351 147.859 31.4009 145.971 32.4587C144.113 33.4862 142.043 34 139.759 34C136.379 34 133.806 32.9422 132.04 30.8267V33.6373H125.235V0H132.36V11.832C134.157 9.86756 136.623 8.88533 139.759 8.88533ZM138.526 28.1973C140.353 28.1973 141.845 27.5929 143.002 26.384C144.19 25.1449 144.783 23.4978 144.783 21.4427C144.783 19.3876 144.19 17.7556 143.002 16.5467C141.845 15.3076 140.353 14.688 138.526 14.688C136.699 14.688 135.192 15.3076 134.004 16.5467C132.847 17.7556 132.269 19.3876 132.269 21.4427C132.269 23.4978 132.847 25.1449 134.004 26.384C135.192 27.5929 136.699 28.1973 138.526 28.1973Z" fill="#2E4057"></path>
                </svg>
            </div>
            <div class="header__lil-support"><svg class="icon-chat" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M17.3022 9.38333V13.6006C17.3022 14.7052 16.4067 15.6006 15.3022 15.6006H14.4684V18.0011C14.4684 18.3799 14.2544 18.7261 13.9156 18.8955C13.5768 19.0649 13.1714 19.0284 12.8684 18.8011L8.60111 15.6006H2C0.89543 15.6006 0 14.7052 0 13.6006V4.26569C0 3.16112 0.89543 2.26569 2 2.26569H9.34977C9.09782 2.88529 8.95233 3.55952 8.936 4.26569H2V13.6006L8.93445 13.6006C9.15082 13.6006 9.36135 13.6708 9.53445 13.8006L12.4684 16.0011V14.6006C12.4684 14.0483 12.9161 13.6006 13.4684 13.6006L15.3022 13.6006V10.0239C16.0188 9.93556 16.6941 9.71346 17.3022 9.38333Z" fill="#2E4057"></path><circle cx="14.6019" cy="4.39926" r="3.40048" fill="#00AF92"></circle></svg></div>
        </div>

        <div class="container">

            <div class="header__left">

                <div class="header__menu">
                    <svg width="20px" height="20px" class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" d="M1 2H19M13.2727 9H1M1 16H19" stroke="#2E4057" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <svg width="20px" height="20px" class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M0.292859 18.2882C-0.0976196 18.6788 -0.0976196 19.312 0.292859 19.7026C0.683337 20.0931 1.31643 20.0931 1.70691 19.7026L9.99608 11.4114L18.292 19.7022C18.6827 20.0926 19.316 20.0926 19.7067 19.7022C20.0973 19.3118 20.0973 18.6788 19.7067 18.2884L11.4101 9.99707L19.6979 1.70731C20.0884 1.31674 20.0884 0.683498 19.6979 0.292928C19.3075 -0.0976422 18.6744 -0.0976431 18.2839 0.292928L9.99546 8.5833L1.70776 0.300813C1.31712 -0.0895896 0.683754 -0.0895886 0.293106 0.300813C-0.0975407 0.691214 -0.0975417 1.32418 0.293106 1.71458L8.58142 9.99768L0.292859 18.2882Z" fill="#2E4057"></path></svg>
                </div>

                <div class="header__logo">
                    <svg class="icon-logo" viewBox="0 0 152 34" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M24.7554 27.745V33.6383H0V1.90504H24.1616V7.79837H7.35354V14.689H22.1976V20.401H7.35354V27.745H24.7554Z" fill="#FF7733"></path>
                        <path d="M45.4486 33.6383L40.0591 26.1584L34.4868 33.6383H26.7222L36.1768 21.353L27.0419 9.24904H35.0349L40.2418 16.3664L45.5856 9.24904H53.1676L44.0327 21.1717L53.5329 33.6383H45.4486Z" fill="#FF7733"></path>
                        <path d="M86.8165 1.904V33.6373H79.4172V20.6267H64.8929V33.6373H57.4937V1.904H64.8929V14.416H79.4172V1.904H86.8165Z" fill="#2E4057"></path>
                        <path d="M118.634 9.248V33.6373H111.874V30.736C110.93 31.7938 109.804 32.6098 108.494 33.184C107.185 33.728 105.769 34 104.246 34C101.019 34 98.4611 33.0782 96.5732 31.2347C94.6854 29.3911 93.7414 26.656 93.7414 23.0293V9.248H100.867V21.9867C100.867 25.9156 102.526 27.88 105.845 27.88C107.55 27.88 108.92 27.336 109.956 26.248C110.991 25.1298 111.509 23.4827 111.509 21.3067V9.248H118.634Z" fill="#2E4057"></path>
                        <path d="M139.759 8.88533C142.043 8.88533 144.113 9.41422 145.971 10.472C147.859 11.4996 149.336 12.9653 150.401 14.8693C151.467 16.7431 152 18.9342 152 21.4427C152 23.9511 151.467 26.1573 150.401 28.0613C149.336 29.9351 147.859 31.4009 145.971 32.4587C144.113 33.4862 142.043 34 139.759 34C136.379 34 133.806 32.9422 132.04 30.8267V33.6373H125.235V0H132.36V11.832C134.157 9.86756 136.623 8.88533 139.759 8.88533ZM138.526 28.1973C140.353 28.1973 141.845 27.5929 143.002 26.384C144.19 25.1449 144.783 23.4978 144.783 21.4427C144.783 19.3876 144.19 17.7556 143.002 16.5467C141.845 15.3076 140.353 14.688 138.526 14.688C136.699 14.688 135.192 15.3076 134.004 16.5467C132.847 17.7556 132.269 19.3876 132.269 21.4427C132.269 23.4978 132.847 25.1449 134.004 26.384C135.192 27.5929 136.699 28.1973 138.526 28.1973Z" fill="#2E4057"></path>
                    </svg>
                </div>

                <div class="header__descr">
                    <p>быстрый автоматический обмен<br>и поддержка 24/7</p>
                </div>

            </div>

            <div class="header__right">

                <a href="#reviews" class="header__link">
                    <p>Отзывы</p>
                </a>
                <a class="header__link">
                    <svg class="icon-chat" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M17.3022 9.38333V13.6006C17.3022 14.7052 16.4067 15.6006 15.3022 15.6006H14.4684V18.0011C14.4684 18.3799 14.2544 18.7261 13.9156 18.8955C13.5768 19.0649 13.1714 19.0284 12.8684 18.8011L8.60111 15.6006H2C0.89543 15.6006 0 14.7052 0 13.6006V4.26569C0 3.16112 0.89543 2.26569 2 2.26569H9.34977C9.09782 2.88529 8.95233 3.55952 8.936 4.26569H2V13.6006L8.93445 13.6006C9.15082 13.6006 9.36135 13.6708 9.53445 13.8006L12.4684 16.0011V14.6006C12.4684 14.0483 12.9161 13.6006 13.4684 13.6006L15.3022 13.6006V10.0239C16.0188 9.93556 16.6941 9.71346 17.3022 9.38333Z" fill="#2E4057"></path>
                        <circle cx="14.6019" cy="4.39926" r="3.40048" fill="#00AF92"></circle></svg>
                    <p>Поддержка</p>
                </a>
                <a href="#auth" class="header__link">
                    <p>Войти</p>
                </a>
            </div>

            <div class="header__rght">
                <svg class="icon-chat" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M17.3022 9.38333V13.6006C17.3022 14.7052 16.4067 15.6006 15.3022 15.6006H14.4684V18.0011C14.4684 18.3799 14.2544 18.7261 13.9156 18.8955C13.5768 19.0649 13.1714 19.0284 12.8684 18.8011L8.60111 15.6006H2C0.89543 15.6006 0 14.7052 0 13.6006V4.26569C0 3.16112 0.89543 2.26569 2 2.26569H9.34977C9.09782 2.88529 8.95233 3.55952 8.936 4.26569H2V13.6006L8.93445 13.6006C9.15082 13.6006 9.36135 13.6708 9.53445 13.8006L12.4684 16.0011V14.6006C12.4684 14.0483 12.9161 13.6006 13.4684 13.6006L15.3022 13.6006V10.0239C16.0188 9.93556 16.6941 9.71346 17.3022 9.38333Z" fill="#2E4057"></path>
                    <circle cx="14.6019" cy="4.39926" r="3.40048" fill="#00AF92"></circle>
                </svg>
                <p>быстрый автоматический обмен<br>и поддержка 24/7</p>
            </div>

        </div>

    </header>

    <div class="menu">
        <div class="menu__body">
            <div class="menu__button"><p>Отзывы</p></div>
            <div class="menu__button menu__button-two"><p>Войти</p></div>
        </div>
    </div>

    <main class="main">

        <section class="first">

            <div class="first__bar">
                <div class="container">

                    <div class="first__bar-info">
                        <svg width="52px" height="48px" class="icon" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon">
                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M23.3897 0.0831435C23.1992 0.148616 22.8031 0.384742 22.5098 0.608153C21.9788 1.01225 21.8175 1.27236 20.9436 3.13337C20.5642 3.94124 19.8997 4.44539 18.9535 4.64315C18.6091 4.71509 17.3757 4.78123 16.2127 4.79016C14.3145 4.80477 14.0594 4.82931 13.7218 5.02952C12.704 5.63305 12.6255 6.44661 13.4213 8.14131C13.7065 8.74853 14.4353 10.4639 15.0407 11.9532C16.3211 15.1019 16.9639 16.5342 17.2309 16.8316C17.7673 17.4293 19.6336 18.0151 21.9468 18.3119C24.2972 18.6135 26.6887 18.4198 28.7928 17.7573C30.1032 17.3448 31.2894 16.554 31.5233 15.9368C31.5881 15.7657 31.6639 14.948 31.6916 14.1199C31.7315 12.9303 31.8148 12.3182 32.0884 11.2053C32.5019 9.52372 33.1035 7.85299 33.7926 6.47293C34.7157 4.62463 34.691 3.3879 33.7217 2.9248C32.926 2.54467 31.6822 2.79485 30.2249 3.62827C29.125 4.25734 28.5953 4.38862 28.1318 4.14736C27.7337 3.94013 27.5667 3.68482 27.1154 2.5933C26.4491 0.982028 25.4901 0.0939627 24.3231 0.00763236C24.0004 -0.0162368 23.5803 0.0177823 23.3897 0.0831435ZM32.4607 19.5181C30.8626 20.7973 28.3268 21.5291 25.0103 21.6683C21.979 21.7955 19.6255 21.3419 17.5995 20.2403L16.7412 19.7735L15.918 20.0851C12.2762 21.4642 8.28521 24.382 5.5416 27.6717C3.01048 30.7067 1.04613 34.6285 0.374107 37.989C-0.222363 40.9709 -0.0978399 44.6582 0.692284 47.4139C2.24772 52.8386 6.59672 55.5359 15.4273 56.5529C18.713 56.9314 20.2651 56.9976 25.8966 57C31.5671 57.0023 33.598 56.9172 36.5874 56.5522C45.9145 55.4132 50.1864 52.5412 51.548 46.4942C52.1122 43.9891 52.1524 40.5159 51.6451 38.1074C50.1928 31.2125 44.4508 24.2879 37.2521 20.7503C35.6861 19.9807 33.52 19.1377 33.1146 19.1402C33.0139 19.1407 32.7197 19.3108 32.4607 19.5181ZM26.3157 27.4108L26.3471 28.5998L26.925 28.6733C28.4568 28.8682 29.9957 29.4609 29.9957 29.856C29.9957 30.2733 29.2932 32.5451 29.1467 32.6018C29.0673 32.6325 28.6401 32.5073 28.1973 32.3237C26.4385 31.5945 24.5452 31.5326 23.6972 32.1766C23.3563 32.4355 23.1278 33.1418 23.2484 33.5646C23.4404 34.2386 24.0809 34.6799 26.1182 35.5414C28.8792 36.7089 29.8863 37.5646 30.4373 39.2113C30.7076 40.0191 30.7585 41.3347 30.5498 42.1151C30.097 43.8079 28.8192 45.0976 27.0163 45.6812L26.2356 45.934L26.2046 47.2874L26.1736 48.6409L24.853 48.6724C23.8709 48.696 23.5092 48.6673 23.4421 48.5609C23.3925 48.4821 23.3512 47.9092 23.3502 47.2876C23.3484 46.0486 23.3339 46.0253 22.5631 46.0213C21.7951 46.0171 19.4315 45.2037 19.132 44.8405C19.043 44.7325 19.1038 44.3643 19.3648 43.4329C19.8949 41.5406 19.8354 41.5922 20.8801 42.1179C22.553 42.9594 24.8696 43.1508 25.9153 42.5338C27.0083 41.8889 27.0599 40.6301 26.0283 39.774C25.8121 39.5946 24.9586 39.167 24.1319 38.824C21.4139 37.6962 20.3694 36.9333 19.6853 35.5764C19.3229 34.8577 19.3048 34.7655 19.3048 33.639C19.3048 32.4966 19.319 32.4274 19.7213 31.6079C20.3633 30.3001 21.187 29.6138 22.85 29.0014L23.5147 28.7565L23.5441 27.6007C23.5602 26.9649 23.5967 26.3804 23.6251 26.3018C23.6639 26.1941 23.998 26.1666 24.9805 26.1903L26.2844 26.2217L26.3157 27.4108Z" fill="white"></path>
                        </svg>

                        <p>Массовые выплаты на реквизиты РФ (СБП и карты)</p>
                    </div>

                    <div class="first__bar-button">Узнать подробнее</div>

                </div>
            </div>
        
            <div class="container">

                <div class="first__body">

                    <div class="first__left">

                        <div class="first__title">
                            <p>Купить Bitcoin (BTC) за СБП RUB</p>
                            <div class="first__preloading"><div class="blick"></div></div>
                        </div>
                        <div class="first__subtitle"><p>Главная ценность, которой мы обладаем — это наша репутация и доверие наших клиентов, что подтверждает более <strong>25 000 положительных отзывов</strong> на сервисах <a href="https://www.bestchange.net/exhub-exchanger.html">BestChange</a> и <a href="https://exchangesumo.com/exchanger/911/ExHub/">ExchangeSumo</a></p></div>
                        
                        <div class="first__card">
                            <svg class="icon" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M35 52C44.9411 52 53 43.9411 53 34C53 24.0589 44.9411 16 35 16C25.0589 16 17 24.0589 17 34C17 43.9411 25.0589 52 35 52ZM34.2353 25C34.2353 24.4477 33.7876 24 33.2353 24C32.683 24 32.2353 24.4477 32.2353 25V26.1818H31.9412H30C29.4477 26.1818 29 26.6295 29 27.1818C29 27.7341 29.4477 28.1818 30 28.1818H30.9412V33.7273V39.8182H30C29.4477 39.8182 29 40.2659 29 40.8182C29 41.3705 29.4477 41.8182 30 41.8182H31.9412H32.2353V43C32.2353 43.5523 32.683 44 33.2353 44C33.7876 44 34.2353 43.5523 34.2353 43V41.8182H36.1176V43C36.1176 43.5523 36.5654 44 37.1176 44C37.6699 44 38.1176 43.5523 38.1176 43V41.8165C40.2724 41.7542 42 39.988 42 37.8182V37.0914C42 35.5974 41.1717 34.2555 39.8966 33.5693C40.8001 32.8245 41.3529 31.7016 41.3529 30.482V30.1818C41.3529 28.2342 39.961 26.6117 38.1176 26.2548V25C38.1176 24.4477 37.6699 24 37.1176 24C36.5654 24 36.1176 24.4477 36.1176 25V26.1818H34.2353V25ZM32.9412 32.7273V28.1818H33.2353H37.1176H37.3529C38.4575 28.1818 39.3529 29.0772 39.3529 30.1818V30.482C39.3529 31.3403 38.8053 32.1029 37.992 32.3771L36.9536 32.7273H32.9412ZM32.9412 34.7273H36.9798L38.541 35.166C39.4038 35.4084 40 36.1952 40 37.0914V37.8182C40 38.9228 39.1046 39.8182 38 39.8182H37.1176H33.2353H32.9412V34.7273Z" fill="#FF7733"></path>
                            <path d="M12.6875 9H11M12.6875 9V14.76M12.6875 9H13.8125H17.1875V9C18.7408 9 20 10.2592 20 11.8125V11.88C20 13.4706 18.7106 14.76 17.12 14.76H12.6875M12.6875 21V14.76M12.6875 14.76H11M11 17.64H14.4773" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <circle cx="15" cy="15" r="13" stroke="#FF7733" stroke-width="2"></circle>
                            <path d="M32.2006 6.11687L36 2.99999M32.2006 6.11687L35.5 9.49998M32.2006 6.11687C38.0039 5.48487 43 8.5 44 14" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M17.1953 45.3368L13 48.5M17.1953 45.3368L14.2816 41.6164M17.1953 45.3368C8.5 46 4 39 4 33" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        
                            <div class="first__txt">
                                <h6>Обменяем за 7 минут</h6>
                                <h5>Среднее время совершения обмена</h5>
                            </div>
                        </div>

                        <div class="first__card">
                            <svg class="icon" viewBox="0 0 54 57" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M1 7.00001C1 3.6863 3.68629 1 7 1H47C50.3137 1 53 3.68629 53 7V35.5896C53 38.7805 50.4132 41.3673 47.2222 41.3673C46.6904 41.3673 46.2593 41.7985 46.2593 42.3303V48.3934C46.2593 49.31 45.1289 49.7437 44.5159 49.0623L37.8905 41.6985C37.7009 41.4877 37.4307 41.3673 37.1471 41.3673H6.99999C3.68628 41.3673 1 38.6811 1 35.3673V7.00001Z" fill="#FF7733" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.2857 11.0613C22.8132 11.0613 19.2069 14.1825 18.647 18.1312C19.9928 18.427 21 19.6265 21 21.0612V26.4898C21 28.1466 19.6569 29.4898 18 29.4898H16C14.3431 29.4898 13 28.1467 13 26.4898V21.0612C13 19.4044 14.3431 18.0612 16 18.0612H16.6382C17.2399 12.9539 21.8269 9.06128 27.2857 9.06128C32.7445 9.06128 37.3315 12.9539 37.9331 18.0612H38C39.6568 18.0612 41 19.4044 41 21.0612V26.4898C41 28.1466 39.6568 29.4898 38 29.4898H36.9416C35.9647 31.0709 34.5974 32.4009 32.9713 33.364C32.7528 35.0471 31.3139 36.347 29.5714 36.347H28.4286C26.535 36.347 25 34.812 25 32.9184C25 31.0249 26.535 29.4898 28.4286 29.4898H29.5714C30.8586 29.4898 31.9801 30.1992 32.5664 31.2482C33.3913 30.6738 34.1162 29.9822 34.7143 29.2011C33.7008 28.7197 33 27.6866 33 26.4898V21.0612C33 19.433 34.2971 18.1078 35.9144 18.0624C35.3226 14.1464 31.7322 11.0613 27.2857 11.0613ZM18 20.0612H16C15.4477 20.0612 15 20.5089 15 21.0612V26.4898C15 27.0421 15.4477 27.4898 16 27.4898H18C18.5523 27.4898 19 27.0421 19 26.4898V21.0612C19 20.5089 18.5523 20.0612 18 20.0612ZM38 20.0612H36C35.4477 20.0612 35 20.5089 35 21.0612V26.4898C35 27.0421 35.4477 27.4898 36 27.4898H38C38.5523 27.4898 39 27.0421 39 26.4898V21.0612C39 20.5089 38.5523 20.0612 38 20.0612ZM28.4286 31.4898H29.5714C30.3604 31.4898 31 32.1294 31 32.9184C31 33.7074 30.3604 34.347 29.5714 34.347H28.4286C27.6396 34.347 27 33.7074 27 32.9184C27 32.1294 27.6396 31.4898 28.4286 31.4898Z" fill="white"></path>
                                <circle cx="8.5" cy="8.5" r="2.5" fill="white"></circle>
                                <circle cx="8" cy="55" r="2" fill="#FF7733"></circle>
                                <circle cx="16" cy="55" r="2" fill="#FF7733"></circle>
                                <circle cx="24" cy="55" r="2" fill="#FF7733"></circle></svg>
                        
                            <div class="first__txt">
                                <h6>Ответим за 2 минуты</h6>
                                <h5>Среднее время ответа нашего оператора</h5>
                            </div>
                        </div>

                        <div class="first__card">
                            <svg class="icon" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><rect x="1" y="7" width="42" height="31" rx="4" stroke="#FF7733" stroke-width="2"></rect>
                                <path d="M1 19L2.83479 22.058C3.55768 23.2628 4.85971 24 6.26476 24H22H32.5L43 19" stroke="#FF7733" stroke-width="2"></path>
                                <path d="M10 25V28C10 28.5523 10.4477 29 11 29H15C15.5523 29 16 28.5523 16 28V25" stroke="#FF7733" stroke-width="2"></path>
                                <path d="M31 7V6C31 3.23858 28.7614 1 26 1H18C15.2386 1 13 3.23858 13 6V7" stroke="#FF7733" stroke-width="2"></path>
                                <circle cx="37" cy="33" r="17" fill="#FF7733"></circle>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.1234 24.5956C29.1234 24.0434 29.5711 23.5956 30.1234 23.5956H33.9429C34.4952 23.5956 34.9429 24.0434 34.9429 24.5956V28.4151C34.9429 28.9674 34.4952 29.4151 33.9429 29.4151C33.3906 29.4151 32.9429 28.9674 32.9429 28.4151V26.8042C30.9258 28.1276 29.5957 30.4086 29.5957 32.9985C29.5957 36.6908 32.2997 39.7533 35.8354 40.3107C36.3809 40.3967 36.7535 40.9087 36.6675 41.4542C36.5815 41.9998 36.0695 42.3723 35.524 42.2863C31.0312 41.578 27.5957 37.6904 27.5957 32.9985C27.5957 29.992 29.0068 27.3163 31.2007 25.5956H30.1234C29.5711 25.5956 29.1234 25.1479 29.1234 24.5956ZM37.3299 24.5428C37.4159 23.9973 37.9279 23.6248 38.4734 23.7108C42.9661 24.4192 46.4015 28.3067 46.4015 32.9985C46.4015 36.0051 44.9904 38.6807 42.7966 40.4014H43.8737C44.4259 40.4014 44.8737 40.8491 44.8737 41.4014C44.8737 41.9537 44.4259 42.4014 43.8737 42.4014H40.0542C39.5019 42.4014 39.0542 41.9537 39.0542 41.4014V37.5819C39.0542 37.0296 39.5019 36.5819 40.0542 36.5819C40.6064 36.5819 41.0542 37.0296 41.0542 37.5819V39.1929C43.0714 37.8695 44.4015 35.5885 44.4015 32.9985C44.4015 29.3064 41.6975 26.2438 38.162 25.6864C37.6164 25.6004 37.2439 25.0884 37.3299 24.5428Z" fill="white"></path>
                                <path d="M13 24L13 8" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <line x1="31" y1="19" x2="31" y2="8" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line></svg>
                        
                            <div class="first__txt">
                                <h6>Более 1000 направлений обмена</h6>
                                <h5>Самые популярные валюты в одном месте</h5>
                            </div>
                        </div>

                    </div>
    
                    <div class="first__right">

                        <div class="first__top">
                            <div class="first__val first__val-active">Онлайн</div>
                            <div class="first__val">За наличные</div>

                            <div class="first__preloading"><div class="blick"></div></div>
                        </div>

                        <h6>Введите данные для обмена<div class="first__preloading"><div class="blick"></div></div></h6>
                        <h5>Верификация не требуется</h5>

                        <div class="first__board">

                            <div class="first__numbers">
                                <p class="first__p2p">6 545 732.68 RUB = 1 BTC</p>
                                <p class="first__timervalute">00:30</p>
                            </div>

                            <div class="first__inf">
                                <p class="first__in first__in-one">После создания обмена текущий курс будет зафиксирован <span class="first__open-fix">подробнее</span></p>
                                <p class="first__in first__in-right">курс актуален</p>

                                <div class="first__info-window-one">
                                    <p><strong>Фиксированный</strong> — текущий курс будет зафиксирован на 30 минут с момента создания сделки.</p>
                                    <a href="#agreement#agreement-6-5">Узнать подробнее</a>
                                    <svg width="12px" height="12px" class="icon-close" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M0.292859 18.2882C-0.0976196 18.6788 -0.0976196 19.312 0.292859 19.7026C0.683337 20.0931 1.31643 20.0931 1.70691 19.7026L9.99608 11.4114L18.292 19.7022C18.6827 20.0926 19.316 20.0926 19.7067 19.7022C20.0973 19.3118 20.0973 18.6788 19.7067 18.2884L11.4101 9.99707L19.6979 1.70731C20.0884 1.31674 20.0884 0.683498 19.6979 0.292928C19.3075 -0.0976422 18.6744 -0.0976431 18.2839 0.292928L9.99546 8.5833L1.70776 0.300813C1.31712 -0.0895896 0.683754 -0.0895886 0.293106 0.300813C-0.0975407 0.691214 -0.0975417 1.32418 0.293106 1.71458L8.58142 9.99768L0.292859 18.2882Z" fill="#2E4057"></path></svg>
                                </div>
                            </div>

                            <div class="first__preloading"><div class="blick"></div></div>

                        </div>

                        <div class="first__get">

                            <div class="first__preloading"><div class="blick"></div></div>

                            <p>Отдаете СБП RUB</p>

                            <div class="first__table">
                                <input type="text" placeholder="10 000 - 780 000 RUB" class="first__input-one">
                                <div class="first__loading"><img src="images/preload.svg" alt="loading"></div>
                                <div class="first__valute">
                                    <img src="images/SBPRUB.svg" alt="valute">
                                    <svg width="12px" height="12px" class="icon-arrow" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M3 5L6 8L9 5" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>

                                <div class="first__message">
                                    <p>Сумма должна быть больше 7000</p>
                                </div>

                                <div class="table">

                                    <div class="table__mobile">
                                        <p>Выберите систему:</p>
                                        <svg width="20px" height="20px" class="icon-close" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M0.292859 18.2882C-0.0976196 18.6788 -0.0976196 19.312 0.292859 19.7026C0.683337 20.0931 1.31643 20.0931 1.70691 19.7026L9.99608 11.4114L18.292 19.7022C18.6827 20.0926 19.316 20.0926 19.7067 19.7022C20.0973 19.3118 20.0973 18.6788 19.7067 18.2884L11.4101 9.99707L19.6979 1.70731C20.0884 1.31674 20.0884 0.683498 19.6979 0.292928C19.3075 -0.0976422 18.6744 -0.0976431 18.2839 0.292928L9.99546 8.5833L1.70776 0.300813C1.31712 -0.0895896 0.683754 -0.0895886 0.293106 0.300813C-0.0975407 0.691214 -0.0975417 1.32418 0.293106 1.71458L8.58142 9.99768L0.292859 18.2882Z" fill="#2E4057"></path></svg>
                                    </div>

                                    <div class="table__buttons">
                                        <div class="table__button table__button-active"><p>Все</p></div>
                                        <div class="table__button"><p>СБП</p></div>
                                        <div class="table__button"><p>Криптовалюты</p></div>
                                        <div class="table__button"><p>Платёжные системы</p></div>
                                        <div class="table__button"><p>Банки RUB</p></div>
                                    </div>

                                    <div class="table__search">
                                        <input type="text" placeholder="Поиск">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                                        </svg>
                                    </div>

                                    <div class="table__list">

                                        <div class="table__valute table__valute-sbp table__valute-active">
                                            <img src="images/SBPRUB.svg" alt="valute">
                                            <p>СБП RUB</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/BTC.svg" alt="valute">
                                            <p>Bitcoin (BTC)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/USDTERC20.svg" alt="valute">
                                            <p>Tether ERC20 (USDT)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/USDTTRC20.svg" alt="valute">
                                            <p>Tether TRC20 (USDT)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/DAI.svg" alt="valute">
                                            <p>Dai (DAI)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/DOT.svg" alt="valute">
                                            <p>Polkadot (DOT)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/USDCERC20.svg" alt="valute">
                                            <p>USD Coin ERC20 (USDC)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/SOL.svg" alt="valute">
                                            <p>Solana (SOL)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <!-- <div class="table__valute table__valute-crypto">
                                            <img src="images/MATIC.svg" alt="valute">
                                            <p>Polygon (MATIC)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div> -->

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/ETHARB.svg" alt="valute">
                                            <p>Ethereum Arbitrum (ETH)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/ARB.svg" alt="valute">
                                            <p>Arbitrum one (ARB)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/ETH.svg" alt="valute">
                                            <p>Ethereum (ETH)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/ETHOP.svg" alt="valute">
                                            <p>Ethereum Optimism (ETH)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/LTC.svg" alt="valute">
                                            <p>Litecoin (LTC)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/BCH.svg" alt="valute">
                                            <p>Bitcoin Cash (BCH)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <!-- <div class="table__valute table__valute-crypto">
                                            <img src="images/DASH.svg" alt="valute">
                                            <p>Dash (DASH)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div> -->

                                        <!-- <div class="table__valute table__valute-crypto">
                                            <img src="images/ZEC.svg" alt="valute">
                                            <p>Zcash (ZEC)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div> -->

                                        <!-- <div class="table__valute table__valute-crypto">
                                            <img src="images/BNBBEP20.svg" alt="valute">
                                            <p>Binance Coin (BNB BEP20)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div> -->

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/XRP.svg" alt="valute">
                                            <p>Ripple (XRP)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/DOGE.svg" alt="valute">
                                            <p>Dogecoin (DOGE)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/ETC.svg" alt="valute">
                                            <p>Ethereum Classic (ETC)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <!-- <div class="table__valute table__valute-crypto">
                                            <img src="images/XMR.svg" alt="valute">
                                            <p>Monero (XMR)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div> -->

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/XLM.svg" alt="valute">
                                            <p>Stellar (XLM)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-crypto">
                                            <img src="images/TRX.svg" alt="valute">
                                            <p>Tron (TRX)</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-paysystem">
                                            <img src="images/PMUSD.svg" alt="valute">
                                            <p>Perfect Money USD</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-bank">
                                            <img src="images/SBERRUB.svg" alt="valute">
                                            <p>Сбербанк RUB</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-bank">
                                            <img src="images/TCSBRUB.svg" alt="valute">
                                            <p>Т-Банк</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-bank">
                                            <img src="images/CARDRUB.svg" alt="valute">
                                            <p>Visa/MasterCard/Mir RUB</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-bank">
                                            <img src="images/ACRUB.svg" alt="valute">
                                            <p>Альфа-Банк RUB</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-bank">
                                            <img src="images/POSTBRUB.svg" alt="valute">
                                            <p>Почта банк</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-bank">
                                            <img src="images/RSHBRUB.svg" alt="valute">
                                            <p>Россельхозбанк</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-bank">
                                            <img src="images/ROSBRUB.svg" alt="valute">
                                            <p>Росбанк</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-bank">
                                            <img src="images/OPNBRUB.svg" alt="valute">
                                            <p>Открытие</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-bank">
                                            <img src="images/PSBRUB.svg" alt="valute">
                                            <p>Промсвязьбанк</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-bank">
                                            <img src="images/RUSSTRUB.svg" alt="valute">
                                            <p>Русский Стандарт</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-bank">
                                            <img src="images/GPBRUB.svg" alt="valute">
                                            <p>Газпромбанк</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-bank">
                                            <img src="images/AVBRUB.svg" alt="valute">
                                            <p>Авангард</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-bank">
                                            <img src="images/RFBRUB.svg" alt="valute">
                                            <p>Райфайзен RUB</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table__valute table__valute-bank">
                                            <img src="images/RNKBRUB.svg" alt="valute">
                                            <p>РНКБ</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="first__middle">
                            <h4>Все рублевые суммы округляются к ближайшему целому значению кратному 100. <span class="first__open-more">Подробнее о расчетах</span></h4>

                            <div class="first__info-window-two">
                                <p>Мы используем математическое округление до разряда сотен.</p>
                                <p>Пример:</p>
                                <p>1. Результатом округления числа <strong>23 456</strong> будет число <strong>23 500</strong>.</p>
                                <p>2. Результатом округления числа <strong>87 615</strong> будет число <strong>87 600</strong>.</p>
                                <svg width="12px" height="12px" class="icon-close" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M0.292859 18.2882C-0.0976196 18.6788 -0.0976196 19.312 0.292859 19.7026C0.683337 20.0931 1.31643 20.0931 1.70691 19.7026L9.99608 11.4114L18.292 19.7022C18.6827 20.0926 19.316 20.0926 19.7067 19.7022C20.0973 19.3118 20.0973 18.6788 19.7067 18.2884L11.4101 9.99707L19.6979 1.70731C20.0884 1.31674 20.0884 0.683498 19.6979 0.292928C19.3075 -0.0976422 18.6744 -0.0976431 18.2839 0.292928L9.99546 8.5833L1.70776 0.300813C1.31712 -0.0895896 0.683754 -0.0895886 0.293106 0.300813C-0.0975407 0.691214 -0.0975417 1.32418 0.293106 1.71458L8.58142 9.99768L0.292859 18.2882Z" fill="#2E4057"></path>
                                </svg>
                            </div>

                            <div class="first__preloading"><div class="blick"></div></div>
                        </div>

                        <div class="first__take">

                            <div class="first__preloading"><div class="blick"></div></div>

                            <div class="first__sides">

                                <div class="first__lft">
                                    <p>Получаете Bitcoin (BTC)</p>
                                    <span>Резерв: 0.53507 BTC</span>
                                </div>

                                <div class="first__rght">
                                    <svg width="38px" height="38px" class="icon_toggle" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M13.5 13V28M13.5 28L17 24.25M13.5 28L10 24.25" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M24.5 25V10M24.5 10L28 13.75M24.5 10L21 13.75" stroke="#FF7733" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>

                            </div>

                            <div class="first__table">
                                <input type="text" placeholder="0.00351726 - 0.04424015 BTC" class="first__input-two">
                                <div class="first__loading"><img src="images/preload.svg" alt="loading"></div>
                                <div class="first__valute">
                                    <img src="images/BTC.svg" alt="valute">
                                    <svg width="12px" height="12px" class="icon-arrow" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M3 5L6 8L9 5" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>

                                <div class="first__message">
                                    <p>Сумма должна быть больше 7000</p>
                                </div>

                                <div class="table-two">

                                    <div class="table-two__mobile">
                                        <p>Выберите систему:</p>
                                        <svg width="20px" height="20px" class="icon-close" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M0.292859 18.2882C-0.0976196 18.6788 -0.0976196 19.312 0.292859 19.7026C0.683337 20.0931 1.31643 20.0931 1.70691 19.7026L9.99608 11.4114L18.292 19.7022C18.6827 20.0926 19.316 20.0926 19.7067 19.7022C20.0973 19.3118 20.0973 18.6788 19.7067 18.2884L11.4101 9.99707L19.6979 1.70731C20.0884 1.31674 20.0884 0.683498 19.6979 0.292928C19.3075 -0.0976422 18.6744 -0.0976431 18.2839 0.292928L9.99546 8.5833L1.70776 0.300813C1.31712 -0.0895896 0.683754 -0.0895886 0.293106 0.300813C-0.0975407 0.691214 -0.0975417 1.32418 0.293106 1.71458L8.58142 9.99768L0.292859 18.2882Z" fill="#2E4057"></path></svg>
                                    </div>

                                    <div class="table-two__buttons">
                                        <div class="table-two__button table-two__button-active"><p>Все</p></div>
                                        <div class="table-two__button"><p>СБП</p></div>
                                        <div class="table-two__button"><p>Криптовалюты</p></div>
                                        <div class="table-two__button"><p>Платёжные системы</p></div>
                                        <div class="table-two__button"><p>Банки RUB</p></div>
                                    </div>

                                    <div class="table-two__search">
                                        <input type="text" placeholder="Поиск">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                                        </svg>
                                    </div>

                                    <div class="table-two__list">

                                        <div class="table-two__valute table-two__valute-sbp">
                                            <img src="images/SBPRUB.svg" alt="valute">
                                            <p>СБП RUB</p>
                                            <div class="table-two__reserv">Резерв: 1 238 800 RUB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-crypto table-two__valute-active">
                                            <img src="images/BTC.svg" alt="valute">
                                            <p>Bitcoin (BTC)</p>
                                            <div class="table-two__reserv">Резерв: 0.53507 BTC</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/USDTERC20.svg" alt="valute">
                                            <p>Tether ERC20 (USDT)</p>
                                            <div class="table-two__reserv">Резерв: 22 567.42 USDT</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/USDTTRC20.svg" alt="valute">
                                            <p>Tether TRC20 (USDT)</p>
                                            <div class="table-two__reserv">Резерв: 29 153.8189 USDT</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/DAI.svg" alt="valute">
                                            <p>Dai (DAI)</p>
                                            <div class="table-two__reserv">Резерв: 3 421.8064 DAI</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/DOT.svg" alt="valute">
                                            <p>Polkadot (DOT)</p>
                                            <div class="table-two__reserv">Резерв: 2 447.94 DOT</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/USDCERC20.svg" alt="valute">
                                            <p>USD Coin ERC20 (USDC)</p>
                                            <div class="table-two__reserv">Резерв: 4 182.94 USDC</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/SOL.svg" alt="valute">
                                            <p>Solana (SOL)</p>
                                            <div class="table-two__reserv">Резерв: 1 756.8732 SOL</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <!-- <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/MATIC.svg" alt="valute">
                                            <p>Polygon (MATIC)</p>
                                            <div class="table-two__reserv">Резерв: 402 857.04 MATIC</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div> -->

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/ETHARB.svg" alt="valute">
                                            <p>Ethereum Arbitrum (ETH)</p>
                                            <div class="table-two__reserv">Резерв: 75.71034 ETH</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/ARB.svg" alt="valute">
                                            <p>Arbitrum one (ARB)</p>
                                            <div class="table-two__reserv">Резерв: 240 480.96192 ARB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/ETH.svg" alt="valute">
                                            <p>Ethereum (ETH)</p>
                                            <div class="table-two__reserv">Резерв: 75.71034 ETH</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/ETHOP.svg" alt="valute">
                                            <p>Ethereum Optimism (ETH)</p>
                                            <div class="table-two__reserv">Резерв: 75.71034 ETH</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/LTC.svg" alt="valute">
                                            <p>Litecoin (LTC)</p>
                                            <div class="table-two__reserv">Резерв: 154.9956 LTC</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/BCH.svg" alt="valute">
                                            <p>Bitcoin Cash (BCH)</p>
                                            <div class="table-two__reserv">Резерв: 8.509181 BCH</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <!-- <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/DASH.svg" alt="valute">
                                            <p>Dash (DASH)</p>
                                            <div class="table-two__reserv">Резерв: 109.54285 DASH</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div> -->

                                        <!-- <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/ZEC.svg" alt="valute">
                                            <p>Zcash (ZEC)</p>
                                            <div class="table-two__reserv">Резерв: 104.1790 ZEC</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div> -->

                                        <!-- <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/BNBBEP20.svg" alt="valute">
                                            <p>Binance Coin (BNB BEP20)</p>
                                            <div class="table-two__reserv">Резерв: 6.024 BNB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div> -->

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/XRP.svg" alt="valute">
                                            <p>Ripple (XRP)</p>
                                            <div class="table-two__reserv">Резерв: 4 421.6756 XRP</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/DOGE.svg" alt="valute">
                                            <p>Dogecoin (DOGE)</p>
                                            <div class="table-two__reserv">Резерв: 9 550.50069 DOGE</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/ETC.svg" alt="valute">
                                            <p>Ethereum Classic (ETC)</p>
                                            <div class="table-two__reserv">Pезеpв: 9 231 ETC</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <!-- <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/XMR.svg" alt="valute">
                                            <p>Monero (XMR)</p>
                                            <div class="table-two__reserv">Резерв: 2 093.802 XMR</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div> -->

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/XLM.svg" alt="valute">
                                            <p>Stellar (XLM)</p>
                                            <div class="table-two__reserv">Резерв: 21 633.759 XLM</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-crypto">
                                            <img src="images/TRX.svg" alt="valute">
                                            <p>Tron (TRX)</p>
                                            <div class="table-two__reserv">Резерв: 11 374.6533 TRX</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-paysystem">
                                            <img src="images/PMUSD.svg" alt="valute">
                                            <p>Perfect Money USD</p>
                                            <div class="table-two__reserv">Резерв: 2 825.93 USD</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-bank">
                                            <img src="images/SBERRUB.svg" alt="valute">
                                            <p>Сбербанк RUB</p>
                                            <div class="table-two__reserv">Резерв: 9 244 400 RUB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-bank">
                                            <img src="images/TCSBRUB.svg" alt="valute">
                                            <p>Т-Банк</p>
                                            <div class="table-two__reserv">Резерв: 10 636 400 RUB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-bank">
                                            <img src="images/CARDRUB.svg" alt="valute">
                                            <p>Visa/MasterCard/Mir RUB</p>
                                            <div class="table-two__reserv">Резерв: 10 636 400 RUB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-bank">
                                            <img src="images/ACRUB.svg" alt="valute">
                                            <p>Альфа-Банк RUB</p>
                                            <div class="table-two__reserv">Резерв: 10 636 400 RUB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-bank">
                                            <img src="images/POSTBRUB.svg" alt="valute">
                                            <p>Почта банк</p>
                                            <div class="table-two__reserv">Резерв: 10 636 400 RUB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-bank">
                                            <img src="images/RSHBRUB.svg" alt="valute">
                                            <p>Россельхозбанк</p>
                                            <div class="table-two__reserv">Резерв: 10 636 400 RUB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-bank">
                                            <img src="images/ROSBRUB.svg" alt="valute">
                                            <p>Росбанк</p>
                                            <div class="table-two__reserv">Резерв: 10 636 400 RUB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-bank">
                                            <img src="images/OPNBRUB.svg" alt="valute">
                                            <p>Открытие</p>
                                            <div class="table-two__reserv">Резерв: 10 636 400 RUB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-bank">
                                            <img src="images/PSBRUB.svg" alt="valute">
                                            <p>Промсвязьбанк</p>
                                            <div class="table-two__reserv">Резерв: 10 636 400 RUB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-bank">
                                            <img src="images/RUSSTRUB.svg" alt="valute">
                                            <p>Русский Стандарт</p>
                                            <div class="table-two__reserv">Резерв: 10 636 400 RUB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-bank">
                                            <img src="images/GPBRUB.svg" alt="valute">
                                            <p>Газпромбанк</p>
                                            <div class="table-two__reserv">Резерв: 10 636 400 RUB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-bank">
                                            <img src="images/AVBRUB.svg" alt="valute">
                                            <p>Авангард</p>
                                            <div class="table-two__reserv">Резерв: 10 636 400 RUB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-bank">
                                            <img src="images/RFBRUB.svg" alt="valute">
                                            <p>Райфайзен RUB</p>
                                            <div class="table-two__reserv">Резерв: 10 636 400 RUB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-two__valute table-two__valute-bank">
                                            <img src="images/RNKBRUB.svg" alt="valute">
                                            <p>РНКБ</p>
                                            <div class="table-two__reserv">Резерв: 10 636 400 RUB</div>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="first__bank">
                            <div class="first__preloading"><div class="blick"></div></div>

                            <div class="first__box">

                                <h4>Все рублевые суммы округляются к ближайшему целому значению кратному 100. <span class="first__open-three">Подробнее о расчетах</span></h4>

                                <div class="first__info-window-three">
                                    <p>Мы используем математическое округление до разряда сотен.</p>
                                    <p>Пример:</p>
                                    <p>1. Результатом округления числа <strong>23 456</strong> будет число <strong>23 500</strong>.</p>
                                    <p>2. Результатом округления числа <strong>87 615</strong> будет число <strong>87 600</strong>.</p>
                                    <svg width="12px" height="12px" class="icon-close" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon">
                                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M0.292859 18.2882C-0.0976196 18.6788 -0.0976196 19.312 0.292859 19.7026C0.683337 20.0931 1.31643 20.0931 1.70691 19.7026L9.99608 11.4114L18.292 19.7022C18.6827 20.0926 19.316 20.0926 19.7067 19.7022C20.0973 19.3118 20.0973 18.6788 19.7067 18.2884L11.4101 9.99707L19.6979 1.70731C20.0884 1.31674 20.0884 0.683498 19.6979 0.292928C19.3075 -0.0976422 18.6744 -0.0976431 18.2839 0.292928L9.99546 8.5833L1.70776 0.300813C1.31712 -0.0895896 0.683754 -0.0895886 0.293106 0.300813C-0.0975407 0.691214 -0.0975417 1.32418 0.293106 1.71458L8.58142 9.99768L0.292859 18.2882Z" fill="#2E4057"></path>
                                    </svg>
                                </div>
                            </div>

                            <div class="first__ttl">Выберите банк</div>

                            <div class="first__banklist">

                                <img src="images/SBERRUB.svg" alt="bank" class="first__icn">
                                <p class="first__bankname">Сбербанк RUB</p>
                                <div class="first__float">Ничего не выбрано</div>
                                <svg width="12px" height="12px" class="icon-select" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M3 5L6 8L9 5" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                                <div class="first__message">
                                    <p>Выберите банк для перевода</p>
                                </div>

                                <div class="table-three">

                                    <div class="table-three__mobile">
                                        <p>Выберите банк:</p>
                                        <svg width="20px" height="20px" class="icon-close" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M0.292859 18.2882C-0.0976196 18.6788 -0.0976196 19.312 0.292859 19.7026C0.683337 20.0931 1.31643 20.0931 1.70691 19.7026L9.99608 11.4114L18.292 19.7022C18.6827 20.0926 19.316 20.0926 19.7067 19.7022C20.0973 19.3118 20.0973 18.6788 19.7067 18.2884L11.4101 9.99707L19.6979 1.70731C20.0884 1.31674 20.0884 0.683498 19.6979 0.292928C19.3075 -0.0976422 18.6744 -0.0976431 18.2839 0.292928L9.99546 8.5833L1.70776 0.300813C1.31712 -0.0895896 0.683754 -0.0895886 0.293106 0.300813C-0.0975407 0.691214 -0.0975417 1.32418 0.293106 1.71458L8.58142 9.99768L0.292859 18.2882Z" fill="#2E4057"></path></svg>
                                    </div>

                                    <div class="table-three__list">

                                        <div class="table-three__valute">
                                            <img src="images/SBERRUB.svg" alt="valute">
                                            <p>Сбербанк RUB</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-three__valute">
                                            <img src="images/TCSBRUB.svg" alt="valute">
                                            <p>Т-Банк</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-three__valute">
                                            <img src="images/ACRUB.svg" alt="valute">
                                            <p>Альфа-Банк RUB</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-three__valute">
                                            <img src="images/RNKBRUB.svg" alt="valute">
                                            <p>РНКБ</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-three__valute">
                                            <img src="images/OPNBRUB.svg" alt="valute">
                                            <p>Открытие</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-three__valute">
                                            <img src="images/RUSSTRUB.svg" alt="valute">
                                            <p>Русский Стандарт</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-three__valute">
                                            <img src="images/AVBRUB.svg" alt="valute">
                                            <p>Авангард</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-three__valute">
                                            <img src="images/RFBRUB.svg" alt="valute">
                                            <p>Райфайзен RUB</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-three__valute">
                                            <img src="images/GPBRUB.svg" alt="valute">
                                            <p>Газпромбанк</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-three__valute">
                                            <img src="images/POSTBRUB.svg" alt="valute">
                                            <p>Почта банк</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-three__valute">
                                            <img src="images/RSHBRUB.svg" alt="valute">
                                            <p>Россельхозбанк</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-three__valute">
                                            <img src="images/ROSBRUB.svg" alt="valute">
                                            <p>Росбанк</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-three__valute">
                                            <img src="images/PSBRUB.svg" alt="valute">
                                            <p>Промсвязьбанк</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-three__valute">
                                            <img src="images/MTSBRUB.svg" alt="valute">
                                            <p>ТМС Банк</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                        <div class="table-three__valute">
                                            <img src="images/SVCMBRUB.svg" alt="valute">
                                            <p>Совкомбанк</p>
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div class="first__dscr"><strong>Обязательно выберите нужный банк.</strong> Если вы ошибетесь, то можете потерять доступ к деньгам, так как они уйдут на карту другого вашего банка.</div>

                        </div>

                        <div class="first__bottom">

                            <div class="rec">

                                <div class="rec__top-warning">
                                    <div class="first__preloading"><div class="blick"></div></div>

                                    <span>Внимание</span>
                                    <p>На нашем сервисе каждая транзакция проходит амл проверку. В случае если криптовалюта отправленная Вами будет иметь High Risk или связана с нелегитимными источниками — будет проводиться проверка личности.</p>
                                </div>

                                <div class="rec__window1">
                                    <div class="first__preloading"><div class="blick"></div></div>

                                    <div class="rec__title rec__title-namewallet">Кошелек Bitcoin</div>
                                    <div class="rec__subtitle">Укажите реквизиты куда вам перевести ваши средства</div>

                                    <div class="rec__wallet">
                                        <input type="text">
                                        <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" d="M6 11.8462V28C6 28.5523 6.44772 29 7 29H28.3333C28.8856 29 29.3333 28.5523 29.3333 28V23M6 11.8462H13.3333H25M6 11.8462V9C6 8.44772 6.44772 8 7 8H25V11.8462M25 11.8462H28.3333C28.8856 11.8462 29.3333 12.2939 29.3333 12.8462V18M29.3333 18H30C30.5523 18 31 18.4477 31 19V22C31 22.5523 30.5523 23 30 23H29.3333M29.3333 18H24.3333C23.781 18 23.3333 18.4477 23.3333 19V22C23.3333 22.5523 23.781 23 24.3333 23H29.3333" stroke="#9F9F9F" stroke-width="2"></path></svg>
                                        <div class="first__message">
                                            <p>Поле не может быть пустым</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="rec__window0">
                                    <div class="first__preloading"><div class="blick"></div></div>

                                    <div class="rec__title">Тег назначение (MEMO)</div>
                                    <div class="rec__subtitle">Необходим для перевода монет на аккаунты некоторых криптобирж</div>

                                    <div class="rec__tage">
                                        <input type="text">
                                        <p>Memo-id</p>

                                        <div class="rec__over"></div>
                                        <!-- <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" d="M6 11.8462V28C6 28.5523 6.44772 29 7 29H28.3333C28.8856 29 29.3333 28.5523 29.3333 28V23M6 11.8462H13.3333H25M6 11.8462V9C6 8.44772 6.44772 8 7 8H25V11.8462M25 11.8462H28.3333C28.8856 11.8462 29.3333 12.2939 29.3333 12.8462V18M29.3333 18H30C30.5523 18 31 18.4477 31 19V22C31 22.5523 30.5523 23 30 23H29.3333M29.3333 18H24.3333C23.781 18 23.3333 18.4477 23.3333 19V22C23.3333 22.5523 23.781 23 24.3333 23H29.3333" stroke="#9F9F9F" stroke-width="2"></path></svg> -->
                                        <div class="first__message">
                                            <span>Поле не может быть пустым</span>
                                        </div>
                                    </div>

                                    <div class="rec__tag">
                                        <div class="rec__tag-check">
                                            <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>
                                        <p>Нет тега</p>
                                    </div>
                                </div>

                                <div class="rec__window2">
                                    <div class="first__preloading"><div class="blick"></div></div>

                                    <div class="rec__title">E-mail</div>

                                    <div class="rec__mail">
                                        <input type="text">
                                        <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M8.08 9C6.93125 9 6 9.89543 6 11V26C6 27.1046 6.93125 28 8.08 28H29.92C31.0688 28 32 27.1046 32 26V11C32 9.89543 31.0688 9 29.92 9H8.08ZM8.08 12.2672V26H29.92V12.2672L19.6142 20.2891C19.253 20.5703 18.747 20.5703 18.3858 20.2891L8.08 12.2672ZM28.292 11H9.70803L19 18.2328L28.292 11Z" fill="#9F9F9F"></path></svg>
                                        
                                        <div class="first__message">
                                            <p>Поле не может быть пустым</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="rec__down-warning">
                                    <div class="first__preloading"><div class="blick"></div></div>

                                    <p>Курс будет зафиксирован в момент получения 2-го подтверждения. Для формирования курса мы используем курс биржи Binance + комиссия сервиса</p>
                                </div>

                                <div class="rec__aml">
                                    <div class="first__preloading"><div class="blick"></div></div>

                                    <div class="rec__check">
                                        <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </div>
                                    <p class="rec__red">Согласие с <a href="#aml-agreement" class="rec__red">политикой AML</a> и <a href="#agreement" class="rec__red">пользовательским соглашением</a> сервиса ExHub.io</p>
                                </div>

                            </div>

                            <div class="first__button first__button-load">
                                <p>Перейти к оплате</p>

                                <div class="first__preloading"><div class="blick"></div></div>
                            </div>
                        </div>

                    </div>

                

            </div>

        </div></section>

        <section class="review">
            <div class="container">

                <div class="review__preloading">
                    <div class="review__preloading-first"><div class="blick"></div></div>

                    <div class="review__preloading-block">
                        <div class="review__preloading-two"><div class="blick"></div></div>
                        <div class="review__preloading-two"><div class="blick"></div></div>
                        <div class="review__preloading-two"><div class="blick"></div></div>
                    </div>
                </div>

                <div class="review__body">

                    <div class="review__title">Отзывы</div>

                    <div class="review__block">

                        <div class="review__card">
                            <a href="https://www.bestchange.ru/exhub-exchanger.html" class="review__name"><p>BestChange</p></a>
                            <a href="https://www.bestchange.ru/exhub-exchanger.html" class="review__image"><img src="images/review1.svg" alt="review"></a>
                            <a href="https://www.bestchange.ru/exhub-exchanger.html" class="review__button">
                                <p>Читать все отзывы</p>
                                <svg width="44px" height="12px" class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M1 6H43M43 6L37.5 1M43 6L37.5 11" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                        </div>

                        <div class="review__card">
                            <a href="https://exchangesumo.com/exchanger/911/ExHub/" class="review__name"><p>Exchangesumo</p></a>
                            <a href="https://exchangesumo.com/exchanger/911/ExHub/" class="review__image"><img src="images/review2.svg" alt="review"></a>
                            <a href="https://exchangesumo.com/exchanger/911/ExHub/" class="review__button">
                                <p>Читать все отзывы</p>
                                <svg width="44px" height="12px" class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M1 6H43M43 6L37.5 1M43 6L37.5 11" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                        </div>

                        <div class="review__card">
                            <a href="https://kurs.expert/ru/obmennik/exhub-io/feedbacks.html#reputation" class="review__name"><p>Kurs.expert</p></a>
                            <a href="https://kurs.expert/ru/obmennik/exhub-io/feedbacks.html#reputation" class="review__image"><img src="images/review3.svg" alt="review"></a>
                            <a href="https://kurs.expert/ru/obmennik/exhub-io/feedbacks.html#reputation" class="review__button">
                                <p>Читать все отзывы</p>
                                <svg width="44px" height="12px" class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M1 6H43M43 6L37.5 1M43 6L37.5 11" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                        </div>

                        <div class="review__card">
                            <a href="https://forum.bits.media/index.php?/topic/141368-exhubru-btc-qiwi-visa-mastercard-%D0%BC%D0%B8%D1%80-%D0%BB%D1%8E%D0%B1%D1%8B%D0%B5-%D0%B1%D0%B0%D0%BD%D0%BA%D0%B8-%D1%80%D1%84/" class="review__name"><p>Bits.media</p></a>
                            <a href="https://forum.bits.media/index.php?/topic/141368-exhubru-btc-qiwi-visa-mastercard-%D0%BC%D0%B8%D1%80-%D0%BB%D1%8E%D0%B1%D1%8B%D0%B5-%D0%B1%D0%B0%D0%BD%D0%BA%D0%B8-%D1%80%D1%84/" class="review__image"><img src="images/review4.svg" alt="review"></a>
                            <a href="https://forum.bits.media/index.php?/topic/141368-exhubru-btc-qiwi-visa-mastercard-%D0%BC%D0%B8%D1%80-%D0%BB%D1%8E%D0%B1%D1%8B%D0%B5-%D0%B1%D0%B0%D0%BD%D0%BA%D0%B8-%D1%80%D1%84/" class="review__button">
                                <p>Читать все отзывы</p>
                                <svg width="44px" height="12px" class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M1 6H43M43 6L37.5 1M43 6L37.5 11" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                        </div>

                        <div class="review__card">
                            <a href="https://mmgp.com/showthread.php?t=642254" class="review__name"><p>MMGP.com</p></a>
                            <a href="https://mmgp.com/showthread.php?t=642254" class="review__image"><img src="images/review5.svg" alt="review"></a>
                            <a href="https://mmgp.com/showthread.php?t=642254" class="review__button">
                                <p>Читать все отзывы</p>
                                <svg width="44px" height="12px" class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M1 6H43M43 6L37.5 1M43 6L37.5 11" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                        </div>

                        <div class="review__card">
                            <a href="https://e-mon.ru/exchanger/453" class="review__name"><p>E-mon</p></a>
                            <a href="https://e-mon.ru/exchanger/453" class="review__image"><img src="images/review6.svg" alt="review"></a>
                            <a href="https://e-mon.ru/exchanger/453" class="review__button">
                                <p>Читать все отзывы</p>
                                <svg width="44px" height="12px" class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M1 6H43M43 6L37.5 1M43 6L37.5 11" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                        </div>

                        <div class="review__card">
                            <a href="https://exnode.ru/" class="review__name"><p>Exnode</p></a>
                            <a href="https://exnode.ru/" class="review__image"><img src="images/review7.png" alt="review"></a>
                            <a href="https://exnode.ru/" class="review__button">
                                <p>Читать все отзывы</p>
                                <svg width="44px" height="12px" class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M1 6H43M43 6L37.5 1M43 6L37.5 11" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                        </div>

                    </div>

                    <div class="nav">
                        <a href="#">Главная</a>
                        <div class="nav__hr"></div>
                        <p>Отзывы</p>
                    </div>

                </div>
                
            </div>
        </section>

        <section class="about">
            <div class="container">

                <div class="about__preloading">
                    <div class="about__preloading-first"><div class="blick"></div></div>
                    <div class="about__preloading-two"><div class="blick"></div></div>
                </div>

                <div class="about__body">

                    <h1>О нас</h1>

                    <p>Современный и удобный сервис ExHub.io позволяет в автоматическом режиме обменивать криптовалюту. Благодаря полной автоматизации все операции осуществляются практически моментально.</p>
                    <p>Онлайн-сервис ExHub.io имеет свою команду IT-специалистов, а за процессом обмена криптовалют круглосуточно наблюдают опытные операторы.</p>
                    <p>Одной из ключевых задач нашего обменника является защита персональных данных пользователей. Так, личная информация, которую клиенты указывают на этапе подачи заявки на обмен, шифруется при помощи SSL-сертификата. Кроме того, любые операции на сайте можно выполнять без предварительной регистрации.</p>
                    <p>С момента запуска ExHub.io функциональные возможности сервиса обмена криптовалют были значительно расширены. На сегодняшний день пользователям сайта доступны следующие возможности:</p>

                    <ul>
                        <li>круглосуточный автоматический обмен по различным направлениям обмена;</li>
                        <li>личный кабинет, для регистрации в котором достаточно указать свой e-mail и придумать пароль (в личном кабинете пользователя отображается вся история обменов, а также история выплат и зачислений по реферальной программе).</li>
                    </ul>

                    <h2>Принципы работы сервиса ExHub.io</h2>

                    <p><span>Скорость.</span> Обмен цифровых валют через ExHub.io осуществляется моментально, буквально за несколько секунд. Онлайн-сервис работает в круглосуточном режиме без перерыва и выходных.</p>
                    <p><span>Клиентоориентированность и ответственность.</span> Команда обменника заинтересована в быстром и качественном совершении операции. Поэтому в случае возникновения каких-либо сложностей со стороны платежной системы или банковского учреждения мы стараемся помочь пользователю оперативно решить вопрос с платежом. Обратиться в службу поддержки можно через форму обратной связи на сайте, также можно написать в чат, Telegram или отправить e-mail.</p>
                    <p><span>Надежность.</span> С момента основания мы выполняем свою работу качественно и без обмана, поэтому тысячи пользователей становятся нашими постоянными клиентами, оставляют о сервисе ExHub.io положительные отзывы и рекомендуют нас друзьям.</p>
                    <p><span>Выгодный курс.</span> Сервис обмена криптовалют предлагает своим клиентам самые лучшие курсы, позволяющие совершить необходимые операции максимально выгодно. Кроме того, сотрудники обменника отслеживают состояние резервов и в случае необходимости оперативно их пополняют.</p>

                    <div class="nav">
                        <a href="#">Главная</a>
                        <div class="nav__hr"></div>
                        <p>О нас</p>
                    </div>

                </div>

            </div>
        </section>

        <section class="recomend">
            <div class="container">

                <div class="recomend__preloading">
                    <div class="recomend__preloading-first"><div class="blick"></div></div>
                    <div class="recomend__preloading-two"><div class="blick"></div></div>
                    <div class="recomend__preloading-two"><div class="blick"></div></div>
                    <div class="recomend__preloading-three"><div class="blick"></div></div>
                    <div class="recomend__preloading-three"><div class="blick"></div></div>
                </div>

                <div class="recomend__body">

                    <div class="recomend__title">Наши рекомендации</div>
                    <div class="recomend__text">Современный и удобный сервис ExHub.io позволяет в автоматическом режиме обменивать криптовалюту. Благодаря полной автоматизации все операции осуществляются практически моментально.</div>
                    <div class="recomend__text">Онлайн-сервис ExHub.io имеет свою команду IT-специалистов, а за процессом обмена криптовалют круглосуточно наблюдают опытные операторы.</div>

                    <div class="recomend__subtitle">Биржи</div>

                    <div class="recomend__card">
                        <a href="https://www.bybit.com/" class="recomend__image"><img src="images/rec1.svg" alt="partner"></a>
                        <a href="https://www.bybit.com/" class="recomend__name"><p>ByBit.com</p></a>
                        <p class="recomend__info">Криптобиржа Bybit — это платформа для торговли деривативами, которая функционирует с 2018 года. Она предлагает бессрочные контракты на выгодных условиях и обещает быструю скорость исполнения. Работает с цифровой валютой, такой как Bitcoin, Ethereum, EOS, Ripple, USDT и поддерживает фиатный шлюз через поставщиков Simplex, Banxa и прочих. Байбит обслуживает трейдеров во всем мире, включая Россию, Европу, Азию и Северную часть Америки. Отсутствие верификации обеспечивает анонимность и приватность, ведь личная информация не раскрывается. Для торговли сперва нужно пополнить счет. Bybit — криптовалютный проект, из-за чего невозможно пополнение фиатной валютой. Для ввода и вывода используется исключительно криптовалюта. Минимальный порог для депозита отсутствует. Главный продукт, который предлагает Байбит — это бессрочные фьючерсы. Для торговли ими предоставляется кредитное плечо. Для биткоина — 1:100, для других — 1:50. Доступные следующие бессрочные контракты: XRP/USD, BTC/USD, EOS/USD, BTC/USDT и ETH/USD. Поддерживается изолированная и перекрестная маржа. Есть демо-счёт, поэтому можно без риска для своих финансов попробовать платформу. Тестовая сеть нужна как начинающим трейдерам, так и торгующим с кредитным плечом. Для удобства создано приложение для Android и iOS.</p>
                        <a href="https://www.bybit.com/" class="recomend__link"><p>Перейти на сайт</p></a>
                    </div>

                    <div class="recomend__card">
                        <a href="https://www.binance.com/" class="recomend__image"><img src="images/rec2.svg" alt="partner"></a>
                        <a href="https://www.binance.com/" class="recomend__name"><p>Binance.com</p></a>
                        <p class="recomend__info">Binance — платформа, которую знают трейдеры во всем мире. Работает с популярной цифровой валютой и с фиатом. Поддерживаются прямые покупки криптовалюты картами Visa и MasterCard. Сервис рассчитан на международный трейдинг, поэтому сайт переведен больше чем на сорок иностранных языков, в том числе и на русский, так как платформа востребована в русскоязычном сегменте. Необходима верификация, ведь без нее разрешается совершать только ввод криптовалюты на криптобиржу. Также обязательна верификация для осуществления торговли, а также снятия/пополнения в фиате. Чем больше объем вашей торговли, тем лучше условия для вас будут — больше лимит на вывод и комиссия ниже. На Бинансе предусмотрены разные режимы торговли для пользователей с разным опытом торговли с криптовалютой, в том числе, предусмотрена маржинальная торговля. Есть отдельный портал для внебиржевых/OTC-сделок. Помимо “классической” торговли открыт доступ к рынку деривативов (фьючерсы USDT/Coin и токены с кредитным плечом). Возможно участие в баттле, если есть фьючерсный контракт. Биржа адаптирована для мобильных устройств (разработаны приложения для Android и iOS) и есть версии для десктопа (PC-Client).</p>
                        <a href="https://www.binance.com/" class="recomend__link"><p>Перейти на сайт</p></a>
                    </div>

                    <div class="recomend__card">
                        <a href="https://www.huobi.com/" class="recomend__image"><img src="images/rec3.svg" alt="partner"></a>
                        <a href="https://www.huobi.com/" class="recomend__name"><p>Huobi.com</p></a>
                        <p class="recomend__info">Huobi — это криптовалютная экосистема для трейдинга на международном уровне. Была создана в 2013 году, сейчас занимает топовые позиции по торговым оборотам. Предоставляет возможность работы с огромным перечнем цифровой валюты и использование фиата для сделок на рынке деривативов и спотов. Поддерживает P2P и маржинальную торговлю. Криптобиржу можно охарактеризовать так: огромные объемы торговли, широкий листинг, большая ликвидность, поддержка фиата, деривативов и другие возможности. подходит и для профессиональных трейдеров, и для начинающих. Биржа развивается, улучшает функционал и расширяет клиентскую базу. Сайт мультиязычный. Платформа не предъявляет строгие требования к верификации. Возможна и анонимная торговля, правда, если пройти верификацию можно рассчитывать на увеличение лимитов на вывод и повысить безопасность аккаунта. “Минималка” по депозиту зависит от монеты (указана в форме заявки на пополнение). На Хуоби вы можете:<br>Продавать/приобретать криптовалюту за фиат; Торговля на спотах на свои или на заемные средства; Открыт доступ к рынку деривативов.<br>Торговать на споте можно самому или подключить торговых ботов для автоматизации процессов. Для работы с биржей есть веб-версия и адаптация для смартфонов.</p>
                        <a href="https://www.huobi.com/" class="recomend__link"><p>Перейти на сайт</p></a>
                    </div>

                    <div class="recomend__subtitle">Кошельки</div>

                    <div class="recomend__card">
                        <a href="https://metamask.io/" class="recomend__image"><img src="images/rec4.svg" alt="partner"></a>
                        <a href="https://metamask.io/" class="recomend__name"><p>Metamask.io</p></a>
                        <p class="recomend__info">MetaMask — популярный мультикриптовалютный кошелек, созданный в 2016 году для работы с Dapps приложениями. Он полностью анонимный, не требует ввода и подтверждения личной информации. Оптимизирован для работы со свопами. Проект представляет собой онлайн-кошелек в виде браузерного расширения (для Brave, Firefox и Хрома), а также мобильного приложения (для андроида или IOS). Был создан для хранения Эфириума и других токенов ERC-20 стандарта. В наше время в него возможно добавление сети разных блокчейнов. Кошелек не хранит ваши данные у третьих лиц. его главная задача — обеспечить связь P2P между пользователями, чтобы она была без посредников. По этой причине МетаМаск не требует прохождение верификации. Для получения платежей напрямую на свой кошелек, вам нужно скопировать адрес кошелька в верхней части и передать его отправителю. Функционал кошелька не ограничивается одним только хранением, принятием и отправкой крипты. Не менее важной функцией проекта можно назвать торговлю на свопах. Комиссии разные и зависят от типа операции.</p>
                        <a href="https://metamask.io/" class="recomend__link"><p>Перейти на сайт</p></a>
                    </div>

                    <div class="recomend__subtitle">Полезные крипто сервисы</div>

                    <div class="recomend__card">
                        <a href="https://dropstab.com/" class="recomend__image"><img src="images/rec5.svg" alt="partner"></a>
                        <a href="https://dropstab.com/" class="recomend__name"><p>Dropstab.com</p></a>
                        <p class="recomend__info">DropsTab — это специальный трекер рынка цифровой валюты, который был создан в 2017 году для того, чтобы сделать легче для пользователей ежедневную аналитику криптовалюты, а также для точного мониторинга и удобного управления личным инвестиционным портфелем. На ДропсТабе вы сможете смотреть за ценами, объемом и эффективностью монет, которые вы добавили в свой инвест портфель. Главными финансовыми инструментами для трейдера считается криптовалюта, а также валютные пары. Dropstab, выступающий в качестве брокера предоставляет вам возможность проводить выгодные сделки при помощи токенов. На официальном сайте проекта размещаются максимально подробные графики, а также схемы, которые свидетельствуют о состоянии рынка и росте главных активов. Также ДропсТаб позволяет посмотреть прогнозы на ближайшие даты. Инвестиционная площадка Dropstab ориентирована на международный рынок, поэтому весь контент сайта представлен на английском языке. Русскоязычным трейдерам придется пользоваться онлайн-переводчиком. Помимо веб-версии, для удобства пользователей создано приложение для смартфона.</p>
                        <a href="https://dropstab.com/" class="recomend__link"><p>Перейти на сайт</p></a>
                    </div>

                    <div class="recomend__card">
                        <a href="https://coinmarketcap.com/" class="recomend__image"><img src="images/rec6.svg" alt="partner"></a>
                        <a href="https://coinmarketcap.com/" class="recomend__name"><p>CoinMarketCap.com</p></a>
                        <p class="recomend__info">Сервис CoinMarketCap — популярный проект для трейдеров, созданный в 2013 году, который помогает следить за курсом, рейтингом цифровой валюты и рыночной капитализацией. Проект содержит большое количество полезной информации для торговли, вложения средств, что полезно не только начинающим, но и настоящим профи. Также на официальном сайте есть списки рейтинга, графики сравнений и календари, которые информируют инвесторов и трейдеров обо всем происходящем. Проект с каждым годом расширяет функционал и совершенствуется и многие пользователи считают его надежным источником для сбора информации о криптовалюте. В 2020 году компанию выкупила блокчейн-компания Binance. Вместе они стараются сделать так, чтобы криптовалюта использовалась массова и была общедоступной. CoinMarketCap, несмотря на поглощение Бинансом работает независимо от материнской компании. Агрегатор содержит полезную информацию, которая неплохо структурирована. Также стоит отметить несложный и понятный на интуитивном уровне интерфейс. Вы можете посмотреть прогнозы пользователей, которые касаются стоимости монет, а глобальные графики показывают общую информацию, которая касается в общем всех монет. На CoinMarketCap есть рейтинги бирж трех категорий: спотовых, децентрализованных и деривативных. Проект предлагает проводник блокчейна, быстрые свопы, конвертер цифровых валют, API для торговли. Также на сайте есть свой калькулятор криптовалют. CoinMarketCap помимо официального сайта предлагает для вашего удобства мобильное приложение для смартфона.</p>
                        <a href="https://coinmarketcap.com/" class="recomend__link"><p>Перейти на сайт</p></a>
                    </div>

                    <div class="recomend__card">
                        <a href="https://icodrops.com/" class="recomend__image"><img src="images/rec7.svg" alt="partner"></a>
                        <a href="https://icodrops.com/" class="recomend__name"><p>Icodrops.com</p></a>
                        <p class="recomend__info">ICO Drops — уникальный проект нашего российского трейдера, Сергея Блюбова. Он проводит оценку новых криптовалют, делает прогнозы и дает полезные советы начинающим и опытным трейдерам в своем Телеграм канале. Официальный сайт ICO Drops создан для того, чтобы облегчить аналитику криптовалюты, мониторинг и упростить управление своим инвестиционным портфелем. Сайт не имеет русской локализации, так как основан больше на международный трейдинг. Воспользуйтесь переводчиком, если не владеете английским языком. А мы немного познакомим вас с основными разделами сайта: Наверное, самый узкоспециализированный из перечисленных проект:<br>Откройте раздел <a href="icodrops.com/category/active-ico/">icodrops.com/category/active-ico/</a>, чтобы увидеть активные в моменте проекты; Посетите страницу <a href="icodrops.com/category/upcoming-ico/">icodrops.com/category/upcoming-ico/</a>, если хотите посмотреть, что скоро начнет работать; Если интересуют завершенные сборы, то вам сюда: <a href="icodrops.com/category/ended-ico/">icodrops.com/category/ended-ico/</a>; Хотите открыть общую статистику, откройте: <a href="icodrops.com/ico-stats/">icodrops.com/ico-stats/</a>.<br>Ну и конечно, раздел: <a href="icodrops.com/whitelist/">icodrops.com/whitelist/</a>, если хотите подключиться к БС и получить за активность выплаты по bounty-кампании.</p>
                        <a href="https://icodrops.com/" class="recomend__link"><p>Перейти на сайт</p></a>
                    </div>

                    <div class="recomend__card">
                        <a href="https://coinsguru.io/" class="recomend__image"><img src="images/rec8.svg" alt="partner"></a>
                        <a href="https://coinsguru.io/" class="recomend__name"><p>Coinsguru.io</p></a>
                        <p class="recomend__info">Уникальный сервис, который предоставляет вам возможность узнать, кто из известных личностей в криптоиндустрии следит за проектом, который вас интересует. Все это благодаря наличию собственного инструмента — метрики SMP Score. Вы даже можете ввести на главной странице проекта ссылку на аккаунт в Твиттере интересующего вас трейдера. На главной странице сайта также есть таблица с самой актуальной информацией для анализа на основе подписчиков в Twitter. Для работы с сайтом необходимо зарегистрироваться через электронную почту. Также возможна быстрая авторизация с помощью социальной сети Twitter и аккаунта в Телеграм. Сайт полностью на английском языке. Русская локализация отсутствует. Если у вас возникли сложности, на сайте есть возможность обратной связи.</p>
                        <a href="https://coinsguru.io/" class="recomend__link"><p>Перейти на сайт</p></a>
                    </div>

                    <div class="recomend__card">
                        <a href="https://cryptobubbles.net/" class="recomend__image"><img src="images/rec9.svg" alt="partner"></a>
                        <a href="https://cryptobubbles.net/" class="recomend__name"><p>cryptobubbles.net</p></a>
                        <p class="recomend__info">Проект Крипто Баблс — площадка, которая предлагает пользователям интерактивную визуализациею рынка криптовалют (их много — представлен ТОП 1000). На этом сайте вы увидите объем криптовалютого рынка и статистику каждой криптовалюты в отдельности в виде пузырьков. Зеленый пузырь говорит о том, что актив показывает рост на какой-то процент за установленный промежуток времени, а красный пузырь демонстрирует падение, соответственно. Среди главных преимуществ проекта стоит выделить:<br>удобный и простой интерфейс (не нужны настройки, вся необходимая информация отображается автоматически); наличие не только веб-версии но программы для смартфона; русский язык интерфейса (а также другие локализации); возможность отслеживания своего крипто портфолио.<br>Инструмент Crypto Bubbles поможет оценить изменения рынка криптовалют, узнать какая цифровая валюта активно растет, а какая падает.</p>
                        <a href="https://cryptobubbles.net/" class="recomend__link"><p>Перейти на сайт</p></a>
                    </div>

                    <div class="recomend__card">
                        <a href="https://alternative.me/" class="recomend__image"><img src="images/rec10.svg" alt="partner"></a>
                        <a href="https://alternative.me/" class="recomend__name"><p>Alternative.me</p></a>
                        <p class="recomend__info">Проект Alternative.me — это платформа, созданная для оптимизации связей между различными альтернативными программами и продуктами, который содержит полезный для трейдера (особенно начинающего) раздел под названием Crypto Dashboard (собственный проект компании Alternative). Он просто и понятно демонстрирует информацию о состоянии рынка криптовалют. Вы можете посмотреть:<br>обзор монет; индекс страха и жадности; анализ тенденций; документацию по API.<br>Интуитивно понятный график поможет сравнить, так называемый, индекс страха и жадности, в котором вы увидите максимумы и минимумы цены биткоина. Если планируете сделать покупку биткоина, откройте сайт Alternative.me, и если индекс будет выше 75-80 — хорошо подумайте или повремените. Ведь индекс формируется на основе нескольких параметров: волатильности, объемы торгов/оборотов, оценка СМИ, доминация биткоина и тренды. Также проводился анализ опросов, но на данный момент он приостановлен. Обратите внимание, что сервис дает только рекомендации. Не следует полагаться исключительно на них. Проявляйте осторожность и прибегайте к рекомендациям профи при совершении сделок с криптовалютой.</p>
                        <a href="https://alternative.me/" class="recomend__link"><p>Перейти на сайт</p></a>
                    </div>

                    <div class="recomend__card">
                        <a href="https://chainlist.org/" class="recomend__image"><img src="images/rec11.svg" alt="partner"></a>
                        <a href="https://chainlist.org/" class="recomend__name"><p>Chainlist.org</p></a>
                        <p class="recomend__info">Чейнлист — это полезный сервис для трейдеров, который создан для оперативного добавления сети блокчейна в ваш электронный кошелек. Дело в том, что после того, как был установлен криптокошелек, может оказаться так, что в нем отсутствует нужная вам сеть. Выход из ситуации только один — добавить ее самостоятельно. Все что вам нужно, так это воспользоваться специальным сайтом chainlist.org, перейти на главную страницу, подключить кошелек (для примера возьмем Metamask). После этого выберите в поиске подходящую вам сеть и нажмите на "Add to Metamask" (название кнопки зависит от названия выбранного вами кошелька). Тогда ваш кошелек предложит вам сделать переключение сети блокчейна и добавить ее. Потом вы сможете легко и быстро переключать сеть вручную или же автоматически. К сожалению, официальный сайт chainlist.org не имеет русской версии и тем, кто не владеет английским языком придется воспользоваться онлайн-переводчиком.</p>
                        <a href="https://chainlist.org/" class="recomend__link"><p>Перейти на сайт</p></a>
                    </div>

                    <div class="recomend__subtitle">Aml</div>

                    <div class="recomend__card">
                        <a href="https://getblock.net/" class="recomend__image"><img src="images/rec12.svg" alt="partner"></a>
                        <a href="https://getblock.net/" class="recomend__name"><p>GetBlock.net</p></a>
                        <p class="recomend__info">Проект представляет собой обозреватель криптовалюты (BTC, ETH, BCH, ZEC, DASH и LTC) и сервис AML-проверки в одном лице. Информация приходит напрямую от Bitfury Crystal. Это нужно для того, чтобы исключить из оборота всю цифровую валюту, которая была получена в ходе мошеннической либо преступной деятельности. Дело в том, что криптобиржи используют верификацию AML, чтобы проверять входящие транзакции. Если какая-то отдельная транзакция получит негативную оценку, то криптобиржа её заблокирует, а трейдер потеряет активы. Именно поэтому для проверки транзакций нужно обязательно пользоваться инструментом Getblock. Его можно использовать для единичных или для постоянных проверок. Здесь реализован специальный механизм для проверки транзакций прямо из Blockchain Explorer. Также вы можете добавить в избранное нужные вам кошельки, тогда вся информация о транзакциях по ним появится в вашем личном кабинете. К еще одному преимуществу проекта можно отнести наличие программы лояльности за активность в соцсетях и наличие реферальной программы.</p>
                        <a href="https://getblock.net/" class="recomend__link"><p>Перейти на сайт</p></a>
                    </div>

                    <div class="nav">
                        <a href="#">Главная</a>
                        <div class="nav__hr"></div>
                        <p>Рекомендации</p>
                    </div>

                </div>

            </div>
        </section>

        <section class="partner">
            <div class="container">

                <div class="partner__preloading">
                    <div class="partner__preloading-left">
                        <div class="partner__preloading-first"><div class="blick"></div></div>
                        <div class="partner__preloading-first"><div class="blick"></div></div>
                        <div class="partner__preloading-two"><div class="blick"></div></div>
                        <div class="partner__preloading-three"><div class="blick"></div></div>
                        <div class="partner__preloading-four"><div class="blick"></div></div>
                    </div>
                    <div class="partner__preloading-right">
                        <div class="partner__preloading-five"><div class="blick"></div></div>
                    </div>
                </div>

                <div class="partner__body">

                    <div class="partner__left">

                        <h1>Партнерская программа</h1>
                        <p>ExHub.io приглашает владельцев и администраторов сайтов присоединиться к нашей партнерской программе и <span>получать 30%</span> от чистой прибыли с каждой сделки ваших рефералов. Для этого вам необходимо:</p>

                        <ul>
                            <li><a class="partner__signup" href="#signup">Зарегистрироваться</a> в качестве пользователя на сайте ExHub.io</li>
                            <li>Приглашать своих друзей по персональной партнерской ссылке, которая доступна в кабинете клиента</li>
                        </ul>

                        <p>После того как Вы дали партнерскую ссылку другу, каждый клиент, перешедший на сайт ExHub.io по клику и осуществивший операцию при помощи нашего сервиса, считается клиентом, привлеченным Вами как партнером сервиса. С каждой операции, произведенной привлеченными клиентами на сайте ExHub.io, партнер получает 30% от чистой прибыли. После регистрации партнеру предоставляется возможность вывода вознаграждения за привлечение рефералов на внешние счета партнера.</p>
                        <p>Если привлеченный партнером клиент совершает операцию на сервисе, не зарегистрировавшись, он все равно считается привлеченным клиентом до тех пор, пока существует техническая возможность однозначно установить связь данного клиента с партнером (определяется через файл cookie, сохраненный на стороне клиента в момент первого перехода на сайт Сервиса с сайта Партнера). Партнерское вознаграждение начисляется в валюте Tether TRC-20 (USDT), минимальная сумма для вывода начислений составляет 30 (Тридцать) USDT.</p>

                        <div class="partner__card">
                            <p><span>Обращаем внимание</span>, что получение прибыли партнерами осуществляется только за операции, произведенные через наш сервис, а не за переходы на сайт сервиса. Применение рассылки электронных писем (известных, как SPAM) с целью рекламы нашего сервиса категорически запрещается. В случае поступления жалоб от владельцев электронной почты о подобных рассылках, аккаунты партнеров будут удаляться с полной потерей средств.</p>
                        </div>

                        <h2>Наши партнёры</h2>

                        <div class="partner__list">
                            <p>Мониторинги:</p>

                            <a href="https://www.bestchange.ru/exhub-exchanger.html"><img src="images/part1.svg" alt="partner"></a>
                            <a href="https://exchangesumo.com/exchanger/911/ExHub/"><img src="images/part2.svg" alt="partner"></a>
                            <a href="https://kurs.expert/ru/obmennik/exhub-io/feedbacks.html#reputation"><img src="images/part3.svg" alt="partner"></a>
                            <a href="https://e-mon.ru/exchanger/453"><img src="images/part4.svg" alt="partner"></a>
                            <a href="https://exnode.ru/"><img src="images/part5.png" alt="partner"></a>
                        </div>

                        <div class="partner__list">
                            <p>Форму:</p>

                            <a href="https://forum.bits.media/index.php?/topic/141368-exhubru-btc-qiwi-visa-mastercard-%D0%BC%D0%B8%D1%80-%D0%BB%D1%8E%D0%B1%D1%8B%D0%B5-%D0%B1%D0%B0%D0%BD%D0%BA%D0%B8-%D1%80%D1%84/"><img src="images/part6.svg" alt="partner"></a>
                            <a href="https://mmgp.com/showthread.php?t=642254"><img src="images/part7.svg" alt="partner"></a>
                        </div>

                        <div class="nav">
                            <a href="#">Главная</a>
                            <div class="nav__hr"></div>
                            <p>Партнерам</p>
                        </div>

                    </div>

                    <div class="partner__right">
                        <img src="images/partner-promo.svg" alt="promo">

                        <a href="#signup" class="partner__button">
                            <p>Стать партнером</p>
                        </a>
                    </div>

                </div>

            </div>
        </section>

        <section class="contact">
            <div class="container">

                <div class="contact__preloading">
                    <div class="contact__preloading-left">
                        <div class="contact__preloading-first"><div class="blick"></div></div>
                        <div class="contact__preloading-two"><div class="blick"></div></div>
                        <div class="contact__preloading-two"><div class="blick"></div></div>
                        <div class="contact__preloading-three"><div class="blick"></div></div>
                    </div>
                    <div class="contact__preloading-right">
                        <div class="contact__preloading-four"><div class="blick"></div></div>
                    </div>
                </div>

                <div class="contact__body">

                    <div class="contact__left">

                        <div class="contact__title">Контакты</div>
                        <div class="contact__text">Мы всегда рады ответить на интересующие вас вопросы и выслушать предложения по улучшению нашего сервиса ExHub.io</div>
                        <div class="contact__text">Если у Вас есть предложение по сотрудничеству, подключению мониторинга, добавлению валюты — пишите, мы всегда открыты к сотрудничеству!</div>

                        <div class="contact__line">
                            <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M8.08 9C6.93125 9 6 9.89543 6 11V26C6 27.1046 6.93125 28 8.08 28H29.92C31.0688 28 32 27.1046 32 26V11C32 9.89543 31.0688 9 29.92 9H8.08ZM8.08 12.2672V26H29.92V12.2672L19.6142 20.2891C19.253 20.5703 18.747 20.5703 18.3858 20.2891L8.08 12.2672ZM28.292 11H9.70803L19 18.2328L28.292 11Z" fill="#9F9F9F"></path></svg>

                            <div class="contact__info">
                                <h6>По вопросам сотрудничества <a href="mailto:partners@exhub.io">partners@exhub.io</a></h6>
                            </div>
                        </div>

                        <div class="contact__line">
                            <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M8.08 9C6.93125 9 6 9.89543 6 11V26C6 27.1046 6.93125 28 8.08 28H29.92C31.0688 28 32 27.1046 32 26V11C32 9.89543 31.0688 9 29.92 9H8.08ZM8.08 12.2672V26H29.92V12.2672L19.6142 20.2891C19.253 20.5703 18.747 20.5703 18.3858 20.2891L8.08 12.2672ZM28.292 11H9.70803L19 18.2328L28.292 11Z" fill="#9F9F9F"></path></svg>

                            <div class="contact__info">
                                <h6>Служба поддержки ExHub <a href="mailto:mail@exhub.io">mail@exhub.io</a></h6>
                            </div>
                        </div>

                        <div class="contact__line">
                            <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M32.6489 7.23916C32.9255 7.47502 33.0523 7.84235 32.9801 8.19858L28.523 30.1986C28.4597 30.511 28.2512 30.7746 27.9617 30.9081C27.6722 31.0416 27.3364 31.0291 27.0577 30.8744L19.9707 26.9422L16.7874 30.6513C16.515 30.9688 16.0737 31.0831 15.6813 30.9378C15.289 30.7925 15.0286 30.4184 15.0286 30V22.4262C15.0286 22.1363 15.1544 21.8606 15.3735 21.6707L18.6234 18.8531L13.1684 21.8594C12.884 22.0162 12.5411 22.025 12.249 21.8832L5.56326 18.6373C5.20349 18.4626 4.98239 18.0904 5.0011 17.6909C5.01982 17.2914 5.27475 16.9415 5.64927 16.8012L31.6493 7.06354C31.9896 6.93606 32.3724 7.0033 32.6489 7.23916ZM8.53419 17.8564L12.6566 19.8579L25.9459 12.534C26.394 12.2871 26.9562 12.4182 27.2488 12.8378C27.5415 13.2575 27.4702 13.8303 27.0836 14.1654L17.0286 22.8828V27.2993L18.984 25.0209C19.2932 24.6607 19.813 24.5674 20.228 24.7977L26.8339 28.463L30.6618 9.56904L8.53419 17.8564Z" fill="#9F9F9F" fill-opacity="0.5"></path></svg>

                            <div class="contact__info">
                                <h6>Служба поддержки ExHub в Telegram <a href="https://t.me/ExHubRu">напишите нам</a></h6>
                                <h5>Внимание! Переходите в телеграм канал по ссылкам только с нашего сайта, остерегайтесь фейков и мошенников.</h5>
                            </div>
                        </div>

                        <div class="contact__social">

                            <a href="https://t.me/ExHubRuChannel">
                                <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><circle cx="28" cy="28" r="28" fill="#2E4057" fill-opacity="0.06"></circle>
                                <path d="M25.4172 32.1812L25.0202 37.7652C25.5882 37.7652 25.8342 37.5212 26.1292 37.2282L28.7922 34.6832L34.3102 38.7242C35.3222 39.2882 36.0352 38.9912 36.3082 37.7932L39.9302 20.8212L39.9312 20.8202C40.2522 19.3242 39.3902 18.7392 38.4042 19.1062L17.1142 27.2572C15.6612 27.8212 15.6832 28.6312 16.8672 28.9982L22.3102 30.6912L34.9532 22.7802C35.5482 22.3862 36.0892 22.6042 35.6442 22.9982L25.4172 32.1812Z" fill="#2E4057"></path></svg>
                            </a>
                            <a href="https://vk.com/exhub">
                                <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><circle cx="28" cy="28" r="28" fill="#2E4057" fill-opacity="0.06"></circle>
                                    <path d="M39.7683 33.3791C39.6984 33.2607 39.2661 32.311 37.1859 30.3589C35.0083 28.3147 35.3008 28.6466 37.9237 25.1121C39.5212 22.9595 40.1599 21.645 39.96 21.083C39.7699 20.5473 38.5949 20.6886 38.5949 20.6886L34.6881 20.7116C34.6881 20.7116 34.3989 20.6722 34.1827 20.802C33.9731 20.9302 33.8382 21.226 33.8382 21.226C33.8382 21.226 33.219 22.8922 32.3935 24.3086C30.653 27.2976 29.9558 27.4553 29.6714 27.2696C29.01 26.8375 29.1757 25.5311 29.1757 24.6044C29.1757 21.7074 29.6096 20.4997 28.329 20.1875C27.9033 20.0839 27.5912 20.0149 26.504 20.0034C25.1097 19.9886 23.9282 20.0084 23.2603 20.3386C22.815 20.5588 22.4721 21.0501 22.6818 21.0781C22.9401 21.1126 23.5252 21.2375 23.8356 21.6647C24.237 22.2152 24.2224 23.4541 24.2224 23.4541C24.2224 23.4541 24.4531 26.8638 23.6844 27.2877C23.1563 27.5786 22.4331 26.9854 20.8811 24.2725C20.0864 22.884 19.4851 21.3476 19.4851 21.3476C19.4851 21.3476 19.3698 21.0616 19.1634 20.9088C18.9131 20.7231 18.5621 20.664 18.5621 20.664L14.8471 20.687C14.8471 20.687 14.2896 20.7034 14.0849 20.9483C13.9029 21.1668 14.0702 21.617 14.0702 21.617C14.0702 21.617 16.9792 28.4971 20.2717 31.9659C23.2928 35.1455 26.7218 34.9368 26.7218 34.9368H28.2754C28.2754 34.9368 28.7451 34.8842 28.984 34.623C29.205 34.383 29.1969 33.9328 29.1969 33.9328C29.1969 33.9328 29.166 31.8246 30.1345 31.514C31.0885 31.2084 32.3138 33.5516 33.6123 34.4537C34.5939 35.1356 35.3398 34.9861 35.3398 34.9861L38.8127 34.9368C38.8127 34.9368 40.6296 34.8234 39.7683 33.3791Z" fill="#2E4057"></path></svg>
                            </a>
                            <a href="https://twitter.com/ExHub_io">
                                <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><circle cx="28" cy="28" r="28" fill="#2E4057" fill-opacity="0.06"></circle>
                                    <path d="M41 20.3677C40.0331 20.7692 39.0029 21.0354 37.9287 21.1646C39.0337 20.54 39.8771 19.5585 40.2736 18.3754C39.2434 18.9569 38.1059 19.3677 36.8936 19.5969C35.9154 18.6108 34.5211 18 33.0001 18C30.0491 18 27.6734 20.2677 27.6734 23.0477C27.6734 23.4477 27.7091 23.8323 27.7969 24.1985C23.3655 23.9938 19.4444 21.9831 16.8102 18.92C16.3504 19.6754 16.0806 20.54 16.0806 21.4708C16.0806 23.2185 17.0312 24.7677 18.4483 25.6646C17.5919 25.6492 16.7517 25.4138 16.04 25.0431C16.04 25.0585 16.04 25.0785 16.04 25.0985C16.04 27.5508 17.8876 29.5877 20.3105 30.0569C19.8766 30.1692 19.4037 30.2231 18.913 30.2231C18.5717 30.2231 18.2272 30.2046 17.9039 30.1369C18.5945 32.1354 20.5543 33.6046 22.8845 33.6523C21.071 34.9954 18.7684 35.8046 16.2756 35.8046C15.8385 35.8046 15.4192 35.7862 15 35.7354C17.3611 37.1769 20.1594 38 23.177 38C32.9855 38 38.348 30.3077 38.348 23.64C38.348 23.4169 38.3399 23.2015 38.3285 22.9877C39.3864 22.2769 40.2752 21.3892 41 20.3677Z" fill="#2E4057"></path></svg>
                            </a>
                            <a href="https://www.youtube.com/channel/UC-plaWR0HzVZkgfIYAzpv3w">
                                <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><circle cx="28" cy="28" r="28" fill="#2E4057" fill-opacity="0.06"></circle>
                                    <path d="M39.469 22.2861L39.499 22.4706C39.209 21.5021 38.426 20.7548 37.431 20.4828L37.41 20.4781C35.5391 20 28.0101 20 28.0101 20C28.0101 20 20.5002 19.9906 18.6103 20.4781C17.5963 20.7548 16.8123 21.5021 16.5273 22.4508L16.5223 22.4706C15.8233 25.9068 15.8183 30.0358 16.5533 33.7148L16.5223 33.5285C16.8123 34.4969 17.5953 35.2442 18.5903 35.5162L18.6113 35.5209C20.4802 36 28.0111 36 28.0111 36C28.0111 36 35.5201 36 37.411 35.5209C38.426 35.2442 39.21 34.4969 39.495 33.5482L39.5 33.5285C39.818 31.9304 40 30.0913 40 28.2127C40 28.144 40 28.0744 39.999 28.0047C40 27.9407 40 27.8645 40 27.7882C40 25.9087 39.818 24.0697 39.469 22.2861ZM25.6082 31.4362V24.5722L31.8741 28.0094L25.6082 31.4362Z" fill="#2E4057"></path></svg>
                            </a>

                        </div>

                        <div class="nav">
                            <a href="index.html">Главная</a>
                            <div class="nav__hr"></div>
                            <p>Контакты</p>
                        </div>

                    </div>

                    <div class="contact__right">
                        <img src="images/contact-promo.svg" alt="promo">
                    </div>

                </div>

            </div>
        </section>

        <section class="faq">
            <div class="container">

                <div class="faq__preloading">
                    <div class="faq__preloading-left">
                        <div class="faq__preloading-first"><div class="blick"></div></div>
                        <div class="faq__preloading-first"><div class="blick"></div></div>
                        <div class="faq__preloading-two"><div class="blick"></div></div>
                        <div class="faq__preloading-three"><div class="blick"></div></div>
                        <div class="faq__preloading-three"><div class="blick"></div></div>
                    </div>
                    <div class="faq__preloading-right">
                        <div class="faq__preloading-four"><div class="blick"></div></div>
                    </div>
                </div>

                <div class="faq__title">FAQ</div>

                <div class="faq__body">

                    <div class="faq__left">
                        <div class="faq__question">Я оплатил сделку, а она отменилась. Что мне делать?</div>
                        <div class="faq__question">Нужно ли регистрироваться для совершения обмена?</div>
                        <div class="faq__question">Режим работы сервиса?</div>
                        <div class="faq__question">Нужна ли верификация банковской карты для совершения обмена?</div>
                        <div class="faq__question">Как происходит верификация карты?</div>
                        <div class="faq__question">Откуда мне поступят деньги на рублёвую карту?</div>
                        <div class="faq__question">Вопрос по оплате: перевожу криптовалюту</div>
                        <div class="faq__question">Вопрос по оплате: перевожу рубли</div>
                        <div class="faq__question">Вопрос по оплате: перевожу электронную валюту</div>
                        <div class="faq__question faq__question-last">Как быстро проходит обмен?</div>
                    </div>

                    <div class="faq__right">

                        <div class="faq__card">
                            <div class="faq__name">Я оплатил сделку, а она отменилась. Что мне делать?</div>
                            <div class="faq__info">Вам нужно обратиться в поддержку и сообщить номер сделки. Мы восстановим сделку, проверим оплату и если все в порядке переведём вам средства.</div>
                        </div>

                        <div class="faq__hr"></div>

                        <div class="faq__card">
                            <div class="faq__name">Нужно ли регистрироваться для совершения обмена?</div>
                            <div class="faq__info">Для того чтобы совершить обмен на нашем сервисе регистрироваться необязательно.</div>
                        </div>

                        <div class="faq__hr"></div>

                        <div class="faq__card">
                            <div class="faq__name">Режим работы сервиса?</div>
                            <div class="faq__info">Мы работаем круглосуточно семь дней в неделю 365 дней в году.</div>
                        </div>

                        <div class="faq__hr"></div>

                        <div class="faq__card">
                            <div class="faq__name">Нужна ли верификация банковской карты для совершения обмена?</div>
                            <div class="faq__info">Да, верификация нужна при оплате с карты Российского банка. Обычно этот процесс занимает не более 5-ти минут. Верифицированную карту можно сохранить для дальнейших сделок.</div>
                        </div>

                        <div class="faq__hr"></div>

                        <div class="faq__card">
                            <div class="faq__name">Как происходит верификация карты?</div>
                            <div class="faq__info">Необходимо сделать фото карты на фоне сайта или фото карты на фоне листа, на котором написано «Покупка криптовалюты на сайте ExHub.io и номер сделки», при этом данные (кроме номера карты) можно закрыть. </div>
                        </div>

                        <div class="faq__hr"></div>

                        <div class="faq__card">
                            <div class="faq__name">Откуда мне поступят деньги на рублёвую карту?</div>
                            <div class="faq__info">Если выбрали направление Сбер, то средства прийдут со Сбера, если выбрали любой другой банк, то средства могут прийти с любого банка.</div>
                        </div>

                        <div class="faq__hr"></div>

                        <div class="faq__card">
                            <div class="faq__name">Вопрос по оплате: перевожу криптовалюту</div>
                            <div class="faq__info">Как только вы создали сделку, вам выдается уникальный адрес для перевода. Вы переводите криптовалюту на полученный адрес, наш робот видит вашу транзакцию и после необходимого количества подтверждений сети в автоматическом режиме переводит вам деньги на карту/кошелек.</div>
                        </div>

                        <div class="faq__hr"></div>

                        <div class="faq__card">
                            <div class="faq__name">Вопрос по оплате: перевожу рубли</div>
                            <div class="faq__info">На первом этапе сделки вам необходимо выбрать заранее привязанную карту или верифицировать новую. Далее вам следует перевести нужную сумму на карту, которая указана на странице обмена. После того как наш робот увидит поступление средств, он автоматически переведет валюту на указанный вами в сделке кошелек/карту.</div>
                        </div>

                        <div class="faq__hr"></div>

                        <div class="faq__card">
                            <div class="faq__name">Вопрос по оплате: перевожу электронную валюту</div>
                            <div class="faq__info">Вам необходимо перевести необходимую сумму со своего кошелька на наш — тот, что указан на странице сделки. После того как наш робот увидит поступление средств, он автоматически переведет валюту на указанный вами в сделке кошелек/карту.</div>
                        </div>

                        <div class="faq__hr"></div>

                        <div class="faq__card">
                            <div class="faq__name">Как быстро проходит обмен?</div>
                            <div class="faq__info">Обмен проходит быстро и полностью в автоматическом режиме. Скорость выполнения зависит от выбора валютной пары. Конкретное время по успешным сделкам можно узнать из <a href="https://www.bestchange.net/exhub-exchanger.html">отзывов</a> о нашем обменнике на <a href="https://www.bestchange.net/exhub-exchanger.html">BestChange</a>.</div>
                        </div>

                        <div class="faq__hr"></div>

                    </div>

                </div>

                <div class="nav">
                    <a href="#">Главная</a>
                    <div class="nav__hr"></div>
                    <p>FAQ</p>
                </div>

            </div>
        </section>

        <section class="auth">

            <div class="login">

                <div class="login__left">
                    <div class="login__top">
                        <p>Вход</p>
                        <a href="#signup">Регистрация</a>
                    </div>

                    <div class="login__article">
                        <p>E-mail</p>
                    </div>

                    <div class="login__log">
                        <input type="text" class="login__login">

                        <div class="login__message">
                            <p></p>
                        </div>
                    </div>

                    <div class="login__article">
                        <p>Пароль</p>
                        <a href="#recover-password" class="login__recover">Забыли пароль?</a>
                    </div>

                    <div class="login__pass">
                        <input type="password" class="login__password">

                        <div class="login__message">
                            <p></p>
                        </div>
                    </div>

                    <div class="login__button"><p>Войти</p></div>
                </div>

                <div class="login__right">
                    <svg class="pattern__info-title" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M24.7554 27.745V33.6383H0V1.90504H24.1616V7.79837H7.35354V14.689H22.1976V20.401H7.35354V27.745H24.7554Z" fill="#FF7733"></path>
                        <path d="M45.4486 33.6383L40.0591 26.1584L34.4868 33.6383H26.7222L36.1768 21.353L27.0419 9.24904H35.0349L40.2418 16.3664L45.5856 9.24904H53.1676L44.0327 21.1717L53.5329 33.6383H45.4486Z" fill="#FF7733"></path>
                        <path d="M86.8165 1.904V33.6373H79.4172V20.6267H64.8929V33.6373H57.4937V1.904H64.8929V14.416H79.4172V1.904H86.8165Z" fill="#2E4057"></path>
                        <path d="M118.634 9.248V33.6373H111.874V30.736C110.93 31.7938 109.804 32.6098 108.494 33.184C107.185 33.728 105.769 34 104.246 34C101.019 34 98.4611 33.0782 96.5732 31.2347C94.6854 29.3911 93.7414 26.656 93.7414 23.0293V9.248H100.867V21.9867C100.867 25.9156 102.526 27.88 105.845 27.88C107.55 27.88 108.92 27.336 109.956 26.248C110.991 25.1298 111.509 23.4827 111.509 21.3067V9.248H118.634Z" fill="#2E4057"></path>
                        <path d="M139.759 8.88533C142.043 8.88533 144.113 9.41422 145.971 10.472C147.859 11.4996 149.336 12.9653 150.401 14.8693C151.467 16.7431 152 18.9342 152 21.4427C152 23.9511 151.467 26.1573 150.401 28.0613C149.336 29.9351 147.859 31.4009 145.971 32.4587C144.113 33.4862 142.043 34 139.759 34C136.379 34 133.806 32.9422 132.04 30.8267V33.6373H125.235V0H132.36V11.832C134.157 9.86756 136.623 8.88533 139.759 8.88533ZM138.526 28.1973C140.353 28.1973 141.845 27.5929 143.002 26.384C144.19 25.1449 144.783 23.4978 144.783 21.4427C144.783 19.3876 144.19 17.7556 143.002 16.5467C141.845 15.3076 140.353 14.688 138.526 14.688C136.699 14.688 135.192 15.3076 134.004 16.5467C132.847 17.7556 132.269 19.3876 132.269 21.4427C132.269 23.4978 132.847 25.1449 134.004 26.384C135.192 27.5929 136.699 28.1973 138.526 28.1973Z" fill="#2E4057"></path></svg>
                    <p>быстрый автоматический обмен и поддержка 24/7</p>
                </div>
                
            </div>

            <div class="register">

                <div class="register__left">
                    <div class="register__top">
                        <p>Регистрация</p>
                        <a href="#auth">Войти</a>
                    </div>

                    <div class="register__article">
                        <p>E-mail</p>
                    </div>

                    <div class="register__log">
                        <input type="text" class="register__login">

                        <div class="register__message">
                            <p></p>
                        </div>
                    </div>

                    <div class="register__article">
                        <p>Пароль</p>
                    </div>

                    <div class="register__pass">
                        <input type="password" class="register__password">

                        <div class="register__message">
                            <p></p>
                        </div>
                    </div>

                    <div class="register__article">
                        <p>Пароль ещё раз</p>
                    </div>

                    <div class="register__rep">
                        <input type="password" class="register__password-repeat">

                        <div class="register__message">
                            <p></p>
                        </div>
                    </div>

                    <div class="register__button"><p>Регистрация</p></div>
                </div>

                <div class="register__right">
                    <svg class="pattern__info-title" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M24.7554 27.745V33.6383H0V1.90504H24.1616V7.79837H7.35354V14.689H22.1976V20.401H7.35354V27.745H24.7554Z" fill="#FF7733"></path>
                        <path d="M45.4486 33.6383L40.0591 26.1584L34.4868 33.6383H26.7222L36.1768 21.353L27.0419 9.24904H35.0349L40.2418 16.3664L45.5856 9.24904H53.1676L44.0327 21.1717L53.5329 33.6383H45.4486Z" fill="#FF7733"></path>
                        <path d="M86.8165 1.904V33.6373H79.4172V20.6267H64.8929V33.6373H57.4937V1.904H64.8929V14.416H79.4172V1.904H86.8165Z" fill="#2E4057"></path>
                        <path d="M118.634 9.248V33.6373H111.874V30.736C110.93 31.7938 109.804 32.6098 108.494 33.184C107.185 33.728 105.769 34 104.246 34C101.019 34 98.4611 33.0782 96.5732 31.2347C94.6854 29.3911 93.7414 26.656 93.7414 23.0293V9.248H100.867V21.9867C100.867 25.9156 102.526 27.88 105.845 27.88C107.55 27.88 108.92 27.336 109.956 26.248C110.991 25.1298 111.509 23.4827 111.509 21.3067V9.248H118.634Z" fill="#2E4057"></path>
                        <path d="M139.759 8.88533C142.043 8.88533 144.113 9.41422 145.971 10.472C147.859 11.4996 149.336 12.9653 150.401 14.8693C151.467 16.7431 152 18.9342 152 21.4427C152 23.9511 151.467 26.1573 150.401 28.0613C149.336 29.9351 147.859 31.4009 145.971 32.4587C144.113 33.4862 142.043 34 139.759 34C136.379 34 133.806 32.9422 132.04 30.8267V33.6373H125.235V0H132.36V11.832C134.157 9.86756 136.623 8.88533 139.759 8.88533ZM138.526 28.1973C140.353 28.1973 141.845 27.5929 143.002 26.384C144.19 25.1449 144.783 23.4978 144.783 21.4427C144.783 19.3876 144.19 17.7556 143.002 16.5467C141.845 15.3076 140.353 14.688 138.526 14.688C136.699 14.688 135.192 15.3076 134.004 16.5467C132.847 17.7556 132.269 19.3876 132.269 21.4427C132.269 23.4978 132.847 25.1449 134.004 26.384C135.192 27.5929 136.699 28.1973 138.526 28.1973Z" fill="#2E4057"></path></svg>
                    <p>быстрый автоматический обмен и поддержка 24/7</p>
                </div>
                
            </div>

            <div class="forgot">

                <div class="forgot__left">
                    <div class="forgot__top">
                        <p>Восстановление пароля</p>
                        <!-- <a href="#">Войти</a> -->
                    </div>

                    <div class="forgot__article">
                        <p>E-mail</p>
                    </div>

                    <div class="forgot__input">
                        <input type="text" class="forgot__login">

                        <div class="forgot__message">
                            <p>Сделка не принимала участие в розыгрыше</p>
                        </div>
                    </div>

                    <div class="forgot__button"><p>Восстановить пароль</p></div>
                </div>

                <div class="forgot__right">
                    <img src="images/password-help.svg" alt="forgot">
                </div>
                
            </div>
            
        </section>

        <section class="rules">
            <div class="container">

                <div class="rules__title">Пользовательское соглашение</div>

                <div class="rules__body">

                    <div class="rules__left">
                        <p class="rules__question">Правила сервиса</p>
                        <p class="rules__question rules__question-last">AML политика</p>
                    </div>

                    <div class="rules__right">

                        <div class="rules__preloading"><div class="blick"></div></div>

                        <div class="rule">
                            <p><strong>1. Общие положения</strong></p>
                            <p>Настоящее соглашение (далее по тексту Соглашение) описывает правила и условия, на основании которых предоставляются услуги обменного сервиса exhub.io и является официальной письменной физическим лицам (далее по тексту публичной офертой, адресованной Пользователь), заключить Соглашение о предоставлении услуг сервисом exhub.io на изложенных ниже условиях. Перед тем как воспользоваться услугами сервиса exhub.io, Пользователь обязан ознакомиться в полном объеме с условиями «Соглашения о предоставлении услуг сервисом exhub.io». Использование услуг сервиса exhub.io возможно только, если Пользователь принимает все условия Соглашения. Действующая версия Соглашения расположена для публичного доступа на интернет-сайте сервиса exhub.io (www.exhub.io).</p>
                            <p><strong>2. Термины и определения, используемые в Соглашении</strong></p>
                            <p>Сервис exhub.io — торговая марка и коммерческое обозначение системы предоставления интернет услуг по обмену электронных валют.</p>
                            <p>Интернет-сайт Сервиса – <a href="https://exhub.io/">www.exhub.io</a></p>
                            <p>Пользователь — любое физическое лицо, которое желает воспользоваться услугами сервиса exhub.io и осуществившее акцепт Соглашения в соответствии с его условиями.</p>
                            <p>Платежная система — программный продукт, созданный третьей стороной, представляющий собой механизм реализации учета денежных и/или иных обязательств, оплату товаров и услуг в сети Интернет, а также организацию взаиморасчетов между своими пользователями.</p>
                            <p>Электронная валюта – денежное и/или иное обязательство между разработчиком данной валюты и ее пользователем, выраженное цифровым способом.</p>
                            <p>Платеж/операция — перевод электронной и/или иной валюты от плательщика к получателю.</p>
                            <p>Клиент платежной системы – лицо, заключившее соглашение с соответствующей платежной системой на приобретение имущественных прав требования к ней, измеряемых в условных единицах, принятых в соответствующей платежной системе.</p>
                            <p>Заявка – выражение намерения Пользователя воспользоваться одной из услуг предлагаемых Сервисом exhub.io, путем заполнения электронной формы через Интернет-сайт Сервиса, на условиях, описанных в Соглашении и указанных в параметрах этой Заявки.</p>
                            <p>Исходная валюта – электронная валюта, которую Пользователь желает продать или обменять.</p>
                            <p>Исходный счет – номер кошелька или любое другое обозначения счета Пользователя в Платежной системе, с которого была отправлена Исходная валюта.</p>
                            <p>Результирующая валюта – электронная валюта, которую Пользовать получает в результате продажи или обмена Исходной валюты.</p>
                            <p>Результирующий счет – номер кошелька или любое другое обозначения счета Пользователя в Платежной системе, на который будет отправлена Результирующая валюта.</p>
                            <p>Резерв валюты - имеющийся в распоряжении Сервиса exhub.io, на момент создания Заявки, объем определенной Электронной валюты.</p>
                            <p>Обмен валюты - обмен электронной валюте одной платежной системы на электронную валюту другой платежной системы.</p>
                            <p>Курс — стоимостное соотношение двух электронных валют при их обмене.</p>
                            <p>Хакер — квалифицированный компьютерный взломщик, злоумышленник, специализирующийся на поиске и использовании несанкционированного доступа в вычислительные сети или другое компьютеризированное оборудование для незаконного получения информации, извлечения выгоды, нанесения ущерба.</p>
                            <p><strong>3. Предмет Соглашения</strong></p>
                            <p>3.1 Предметом настоящего Соглашения является предоставление Пользователю Сервисом exhub.io услуги по обмену электронных валют.</p>
                            <p><strong>4. Порядок оказания услуг Сервисом</strong></p>
                            <p>4.1 Заказ услуг Сервиса exhub.io осуществляется Пользователем путем направления Заявки через Интернет-сайт Сервиса.</p>
                            <p>4.2 Управление процессом сделки или получение информации о ходе выполнения сделки Пользователем производятся при помощи соответствующего пользовательского интерфейса, расположенного на Интернет-сайте Сервиса.</p>
                            <p>4.3 Сервис exhub.io осуществляет исполнение Заявок на безотзывной основе в соответствии с условиями работы соответствующих платежных систем.</p>
                            <p>4.4 Сервис exhub.io не является стороной соглашения между Платежной системой и Клиентом платежной системы и ни в коем случае не несет ответственности за действия Платежной системы и ее Клиента. Права и обязанности платежной системы и ее Клиента регулируются условиями предоставления услуг соответствующих Платежных систем.</p>
                            <p>4.5 Сервис exhub.io не требует удостоверения в том, что отправитель и получатель средств, участвующих в Операции, является одним и тем лицом, Сервис exhub.io не является стороной во взаимоотношениях отправителя и получателя денежных средств или электронной валюты.</p>
                            <p>4.6 Воспользовавшись услугами Сервиса exhub.io, Пользователь подтверждает, что законно владеет и распоряжается денежными средствами и электронной валютой, участвующими в соответствующем Платеже.</p>
                            <p>4.7 Пользователь обязуется самостоятельно исчислять и уплачивать все налоги, требуемые согласно налоговому законодательству места нахождения Пользователя.</p>
                            <p>4.8 Заботясь о качестве оказываемых Пользователям услуг, Сервис exhub.io обязуется совершать все действия, в рамках настоящего Соглашения, максимально оперативно.</p>
                            <p>4.9 Если по каким-либо причинам вы хотите отменить обмен после оплаты, то в этом случае возврат средств осуществляется по текущему курсу за вычетом 6% от суммы обмена, а так же всех затрат, которые понесёт сервис при осуществлении возврата (комиссии платёжной системы, изменение курса и.т.д)</p>
                            <p>Данный пункт правил не касается сделок не прошедших AML проверку.</p>
                            <p><strong>5. Стоимость услуг</strong></p>
                            <p>5.1 Стоимость услуг Сервиса устанавливается руководством Сервиса и публикуется на интернет-сайте Сервиса.</p>
                            <p>5.2 Сервис вправе самостоятельно изменять курсы обмена электронных валют и взимаемых комиссионных в любое время в одностороннем порядке, о чем уведомляет Пользователей сервиса предварительным размещением информации об этих изменениях на интернет-сайте Сервиса.</p>
                            <p>5.3 В Заявке создаваемой Пользователем на интернет сайте сервиса указывается Курс, размер комиссии, взимаемый соответствующей Платежной системой, за проведение Операции, размер вознаграждения Сервиса exhub.io, а также общая сумма перечисляемых денежных средств или электронной валюты.</p>
                            <p>5.4 Сервис exhub.io взимает стоимость своего вознаграждения в момент проведения соответствующей Операции. Вознаграждение Сервиса вычитается из суммы Результирующей валюты.</p>
                            <p><strong>6. Обмен электронной валюты</strong></p>
                            <p>6.1 Путем оформления Заявки Пользователь поручает, а Сервис exhub.io от своего имени и за счет Пользователя, совершает действия по обмену Электронной валюты одной Платежной системы (Исходная валюта) на Электронную валюту другой Платежной системы (Результирующая валюта) выбранной Пользователем.</p>
                            <p>6.2 Пользователь обязуется перечислить (передать) Исходную валюту, в размере указанном в Заявке, а Сервис exhub.io, после получения соответствующей Электронной валюты, обязуется перечислить (передать) Пользователю Результирующую валюту, рассчитанную по Курсу и в соответствие с тарифами сервиса.</p>
                            <p>6.3 Размер вознаграждения Сервиса exhub.io отражается в Заявке и подтверждается Пользователем нажатием кнопки «Далее» на одной из страниц пользовательского интерфейса при оформление заявки.</p>
                            <p>6.4 Обязанность Сервиса exhub.io по перечислению (передаче) Электронной валюты Пользователю считается исполненной в момент списания Электронной валюты в соответствующей Платежной системе со счета Сервиса exhub.io, что регистрируется в истории операций соответствующей Платежной системы.</p>
                            <p class="rule__six">6.5 На оплату сделки фиатными валютами сервис выделяет от 15 до 30 минут. Если система не зафиксирует оплату в отведённое время, сделка будет отменена автоматически. Если оплата была произведена после истечения времени на сделку, пользователю следует обратиться в поддержку сервиса для восстановления сделки и завершения обмена. В таком случае курс будет зафиксирован после восстановления сделки.</p>
                            <p>6.6 На операции по направлениям, где пользователь отправляет криптовалюту в адрес обменного сервиса в обмен на фиатную валюту, ExHub.io выделяет от 30 до 45 минут, в зависимости от валюты. Курс фиксируется на время сделки. В случае если транзакция не была зафиксирована в блокчейне в течении отведённого на сделку времени, обмен будет отменён. Если в течение отведённого на сделку времени не будет получено необходимое количество подтверждений сети, то курс будет зафиксирован после получения этого количества подтверждений. Обмен будет выполнен автоматически после того, как отправленная пользователем транзакция наберёт необходимое количество подтверждений в блокчейне. Если монеты были отправлены, но сделка отменилась, она будет восстановлена автоматически после того как транзакция появится в сети, и оплачена после того как наберёт необходимое количество подтверждений сети.<br>Более подробно узнать о количестве подтверждений и времени выделяемом на сделку, в зависимости от направления обмена, можно в Таблице 1.</p>

                            <p>Таблица №1</p>

                            <div class="rule__block">
                                <div class="rule__list rule__list-top">
                                    <span>Валюта</span>
                                    <span>Время</span>
                                    <span>Подтверждения</span>
                                </div>
                                <div class="rule__list">
                                    <p>Bitcoin (BTC)</p>
                                    <p>30</p>
                                    <p>1</p>
                                </div>
                                <div class="rule__list">
                                    <p>Litecoin (LTC)</p>
                                    <p>30</p>
                                    <p>1</p>
                                </div>
                                <div class="rule__list">
                                    <p>Bitcoin Cash (BCH)</p>
                                    <p>30</p>
                                    <p>1</p>
                                </div>
                                <div class="rule__list">
                                    <p>Zcash (ZEC)</p>
                                    <p>30</p>
                                    <p>1</p>
                                </div>
                                <div class="rule__list">
                                    <p>Dash (DASH)</p>
                                    <p>30</p>
                                    <p>1</p>
                                </div>
                                <div class="rule__list">
                                    <p>Ethereum (ETH)</p>
                                    <p>30</p>
                                    <p>20</p>
                                </div>
                                <div class="rule__list">
                                    <p>Tether ERC20 (USDT)</p>
                                    <p>30</p>
                                    <p>3</p>
                                </div>
                                <div class="rule__list">
                                    <p>Ripple (XRP)</p>
                                    <p>30</p>
                                    <p>20</p>
                                </div>
                                <div class="rule__list">
                                    <p>Stellar (XLM)</p>
                                    <p>30</p>
                                    <p>20</p>
                                </div>
                                <div class="rule__list">
                                    <p>USD Coin ERC20 (USDC)</p>
                                    <p>30</p>
                                    <p>5</p>
                                </div>
                                <div class="rule__list">
                                    <p>Tether TRC20 (USDT)</p>
                                    <p>30</p>
                                    <p>1</p>
                                </div>
                                <div class="rule__list">
                                    <p>Tether ERC20 (USDT)</p>
                                    <p>30</p>
                                    <p>32</p>
                                </div>
                                <div class="rule__list">
                                    <p>Ethereum (ETH)</p>
                                    <p>30</p>
                                    <p>32</p>
                                </div>
                                <div class="rule__list">
                                    <p>Tron (TRX)</p>
                                    <p>30</p>
                                    <p>20</p>
                                </div>
                                <div class="rule__list">
                                    <p>USD Coin (USDC TRC20)</p>
                                    <p>30</p>
                                    <p>20</p>
                                </div>
                                <div class="rule__list">
                                    <p>Polkadot (DOT)</p>
                                    <p>30</p>
                                    <p>200</p>
                                </div>
                                <div class="rule__list">
                                    <p>WhiteBIT Token TRC-20</p>
                                    <p>30</p>
                                    <p>20</p>
                                </div>
                                <div class="rule__list">
                                    <p>WhiteBIT Token ERC-20</p>
                                    <p>30</p>
                                    <p>32</p>
                                </div>
                                <div class="rule__list">
                                    <p>Dogecoin (DOGE)</p>
                                    <p>30</p>
                                    <p>5</p>
                                </div>
                                <div class="rule__list">
                                    <p>Dai (DAI)</p>
                                    <p>30</p>
                                    <p>32</p>
                                </div>
                                <div class="rule__list">
                                    <p>Binance Coin (BNB BEP20)</p>
                                    <p>30</p>
                                    <p>60</p>
                                </div>
                                <div class="rule__list">
                                    <p>Tether TRC20 (USDT)</p>
                                    <p>30</p>
                                    <p>1</p>
                                </div>
                                <div class="rule__list">
                                    <p>Tron (TRX)</p>
                                    <p>30</p>
                                    <p>20</p>
                                </div>
                                <div class="rule__list">
                                    <p>Tether TRC20 (USDT)</p>
                                    <p>30</p>
                                    <p>1</p>
                                </div>
                            </div>

                            <p class="rule__sixseven">6.7 При обмене криптовалюты на криптовалюту ExHub.io выделяет от 30 до 45 минут, в зависимости от направления обмена. Курс по данным направлениям не фиксируется и может меняться в зависимости от биржевого курса. За основу берётся курс биржи Whitebit плюс комиссия сервиса которая уже включена в курс обмена. Если монеты были отправлены, но сделка отменилась, она будет восстановлена автоматически, после того как транзакция появится в сети и оплачена после того как наберёт необходимое количество подтверждений сети. Более подробно узнать о количестве подтверждений и времени выделяемом на сделку, в зависимости от направления обмена, можно в таблице 2</p>
                            <p>Таблица №2</p>

                            <div class="rule__block">

                                <div class="rule__list rule__list-top">
                                    <span>Валюта</span>
                                    <span>Время</span>
                                    <span>Подтверждения</span>
                                </div>
                                <div class="rule__list">
                                    <p>Tether TRC20 (USDT)</p>
                                    <p>30</p>
                                    <p>12</p>
                                </div>
                                <div class="rule__list">
                                    <p>Litecoin (LTC)</p>
                                    <p>30</p>
                                    <p>12</p>
                                </div>
                                <div class="rule__list">
                                    <p>Bitcoin (BTC)</p>
                                    <p>30</p>
                                    <p>2</p>
                                </div>
                                <div class="rule__list">
                                    <p>Bitcoin Cash (BCH)</p>
                                    <p>30</p>
                                    <p>12</p>
                                </div>
                                <div class="rule__list">
                                    <p>Zcash (ZEC)</p>
                                    <p>30</p>
                                    <p>100</p>
                                </div>
                                <div class="rule__list">
                                    <p>Ripple (XRP)</p>
                                    <p>30</p>
                                    <p>3</p>
                                </div>
                                <div class="rule__list">
                                    <p>Stellar (XLM)</p>
                                    <p>30</p>
                                    <p>3</p>
                                </div>
                                <div class="rule__list">
                                    <p>Monero (XMR)</p>
                                    <p>45</p>
                                    <p>12</p>
                                </div>
                                <div class="rule__list">
                                    <p>Dogecoin (DOGE)</p>
                                    <p>30</p>
                                    <p>17</p>
                                </div>
                                <div class="rule__list">
                                    <p>Ethereum Classic (ETC)</p>
                                    <p>30</p>
                                    <p>302</p>
                                </div>
                                <div class="rule__list">
                                    <p>Ethereum (ETH)</p>
                                    <p>30</p>
                                    <p>34</p>
                                </div>
                                <div class="rule__list">
                                    <p>Tron (TRX)</p>
                                    <p>30</p>
                                    <p>3</p>
                                </div>
                                <div class="rule__list">
                                    <p>Polkadot (DOT)</p>
                                    <p>30</p>
                                    <p>202</p>
                                </div>
                                <div class="rule__list">
                                    <p>Dash (DASH)</p>
                                    <p>30</p>
                                    <p>12</p>
                                </div>
                                <div class="rule__list">
                                    <p>Tether ERC20 (USDT)</p>
                                    <p>30</p>
                                    <p>34</p>
                                </div>
                                <div class="rule__list">
                                    <p>USD Coin (USDC ERC20)</p>
                                    <p>30</p>
                                    <p>34</p>
                                </div>
                                <div class="rule__list">
                                    <p>Cardano (ADA)</p>
                                    <p>30</p>
                                    <p>102</p>
                                </div>
                                <div class="rule__list">
                                    <p>Solana (SOL)</p>
                                    <p>30</p>
                                    <p>502</p>
                                </div>
                                <!-- <div class="rule__list">
                                    <p>Polygon (MATIC)</p>
                                    <p>30</p>
                                    <p>862</p>
                                </div> -->
                                <div class="rule__list">
                                    <p>Dai (DAI)</p>
                                    <p>30</p>
                                    <p>34</p>
                                </div>
                                <div class="rule__list">
                                    <p>Ethereum Optimism (ETH)</p>
                                    <p>30</p>
                                    <p>1402</p>
                                </div>
                                <div class="rule__list">
                                    <p>Ethereum Arbitrum (ETH)</p>
                                    <p>30</p>
                                    <p>602</p>
                                </div>
                                <div class="rule__list">
                                    <p>Arbitrum one (ARB)</p>
                                    <p>30</p>
                                    <p>602</p>
                                </div>

                            </div>

                            <p>6.8 Платежный шлюз USD и EURO не работает для следующих стран: Албания, Алжир, Ангилья, Андорра, Антигуа и Барбуда, Аргентина, Афганистан, Багамы, Бангладеш, Барбадос, Бахрейн, Бермуды, Беларусь, Боливия, Ботсвана, Бразилия, Бруней, Бурунди, Вануату, Венесуэла, Габон, Гаити, Гамбия, Гана, Гваделупа, Гватемала, Гвинея, Гвинея-Бисау, Гондурас, Гренада, Джибути, Доминиканская республика, Египет, Замбия, Западная Сахара, Зимбабве, Иордания, Ирак, Иран, Исландия, Йемен, Кабо-Верде, Камбоджа, Камерун, Катар, Кения, Киргизия, Китай, Колумбия, Коморские Острова, Конго, Корея, Коста-Рика, Кот-д’Ивуар, Куба, Лаос, Лесото, Либерия, Ливан, Ливия, Мавритания, Мадагаскар, Мали (Мелилья), Мальдивы, Марокко, Мартиника, Маршалловы острова, Маврикий, Макао, Мексика, Мозамбик, Монголия, Мьянма, Намибия, Непал, Нигер, Нигерия, Никарагуа, Объединенные Арабские Эмираты (ОАЭ), Острова Кука, Пакистан, Палестина, Панама, Парагвай, Перу, Пуэрто-Рико, Республика Косово, Республика Либерия, Реюньон, Россия, Руанда, Сальвадор, Самоа, Сан-Томе и Принсипи, Сарк, Саудовская Аравия, Сахарская Арабская Демократическая Республика, Северная Корея (КНДР), Сен-Барт, Сенегал, Сен-Мартен, Сербия, Сеута, Сирия, Соединенные Штаты Америки (США), Сомали, Судан, Сьерра-Леоне, Тайвань, Танзания, Того, Тринидад , Тобаго, Тунис, Туркмения, Турция, Уганда, Приват24 (Украина), Уругвай, Французская Гвиана, Центральноафриканская Республика (ЦАР), Чад, Чили, Шри-Ланка, Швейцария, Эквадор, Экваториальная Гвинея, Эритрея, Эсватини, Эфиопия, Южно-Африканская Республика, Южный Судан, Ямайка</p>
                            <p>6.9 Сервис exhub.io вправе бессрочно приостановить операцию и удержать средства Пользователя, в целях предотвращения мошеннических и других действий, которые могут нанести финансовые и репутационные потери для Сервиса или Пользователя до выяснения обстоятельств.</p>
                            <p>6.10 Сервис exhub.io вправе установить финансовые и количественные лимиты на Операции. Информация о лимитах указывается на Интернет-сайте Сервиса.</p>
                            <p><strong>7. Вступление Соглашения в силу</strong></p>
                            <p>7.1 Настоящее Соглашение считается заключенным на условиях публичной оферты, акцептуемой Пользователем в ходе подачи им Заявки.</p>
                            <p>7.2 Публичной офертой признается отображаемая Сервисом exhub.io информация о параметрах и условиях Заявки.</p>
                            <p>7.3 Акцептом публичной оферты признается совершение Пользователем действий по завершению формирования Заявки, подтверждающих его намерение воспользоваться услугами Сервиса exhub.io на условиях, описанных в настоящем Соглашениях и указанных в Заявке.</p>
                            <p>7.4 Дата и время акцепта, а также параметры условий Заявки фиксируются Сервисом exhub.io автоматически в момент завершения формирования заявки.</p>
                            <p>7.5 Соглашение вступает в силу с момента завершения формирования Заявки Пользователем. Пользователь имеет право отказаться от совершения операции по Заявке до оплаты Операции.</p>
                            <p><strong>8. Ответственность Сторон</strong></p>
                            <p>8.1 Сервис exhub.io несет ответственность перед Пользователем в размере, не превышающем вверенной Пользователем суммы денежных средств или электронной валюты.</p>
                            <p>8.2 Сервис exhub.io не отвечает за неисправности, ошибки и сбои в работе программных и/или аппаратных средств, обеспечивающих функционирование услуг Сервиса exhub.io, возникшие по причинам, не зависящим от Сервиса exhub.io, а также связанные с этим убытки Пользователя.</p>
                            <p>8.3 Сервис exhub.io оказывает услуги только по обмену, покупке и продаже электронных валют. exhub.io ни коем образом не принимает оплату в пользу каких-либо третьих лиц, а так, aпрeщает обмен на кошельки/счета, которые не принадлежат пользователю. exhub.io не вступает ни в какие партнерские отношения, не заключает ни каких договоров с получателями платежей за свои товары или услуги, а категорически против таких отношений. Exhub.io нельзя использовать как промежуточный сервис для взаиморасчетов между покупателем и продавцом (заказчиком и исполнителем и т.д.).</p>
                            <p>8.4 Сервис exhub.io не отвечает за убытки Пользователя, возникшие в результате неправомерных действий третьих лиц.</p>
                            <p>8.5 Пользователь несет всю ответственность за достоверность сведений, указанных им при заполнении Заявки. В случае если Пользователь не указал или неверно указал данные, Сервис exhub.io не отвечает за убытки Пользователя, понесенные в результате допущенной ошибки. Если исправление ошибки возможно, то сервис exhub.io имеет право удерживать средства до полного решения проблемы.</p>
                            <p>8.6 Информация по Операции сохраняется в базе данных сервиса и является первоисточником, на который ориентируются Стороны соглашения в спорных ситуациях.</p>
                            <p>8.7 Стороны освобождаются от ответственности за полное или частичное неисполнение своих обязательств по Соглашению, если таковое явилось следствием обстоятельств непреодолимой силы, возникших после вступления в силу Соглашения, в результате событий чрезвычайного характера, которые не могли быть предвидены и предотвращены разумными мерами.</p>
                            <p>8.8 В других случаях неисполнения или ненадлежащего исполнения своих обязательств по Соглашению Стороны несут ответственность в соответствии с законодательством Российской Федерации с учетом условий Соглашения.</p>
                            <p><strong>9. Прочие положения</strong></p>
                            <p>9.1 Сервис exhub.io вправе в одностороннем порядке вносить изменения в Соглашения путем публикации изменений на Сайте Системы. Изменения вступают в силу с момента опубликования, если иной срок вступления изменений в силу не определен дополнительно при их публикации.</p>
                            <p>9.2 Сервис exhub.io вправе отказать пользователю в оформлении заявки без пояснения причин отказа.</p>
                            <p>9.3 Сервис exhub.io вправе в случае подозрительных действий в процессе оформления заявки пользователем, во избежание ущерба от Хакерских атак приостанавливать выполнения таких операций до выяснения причин этих действий.</p>
                            <p>9.4 Сервис exhub.io вправе отказать в выполнение операции обмена, покупки и продажи электронных валют, если передача Исходной валюты на счет сервиса была произведена без оформления заявки при помощи пользовательских интерфейсов на сайте сервиса. Электронная валюта, перечисленная на счета сервиса, без оформления заявки при помощи пользовательских интерфейсов на сайте сервиса может быть возвращена пользователю по запросу с учетом вычета комиссии Платежной системы, если таковая присутствует.</p>
                            <p>9.5 Сервис exhub.io вправе отправлять Пользователю на указанный e-mail информацию о состояние процесса обмена, т.к. это является неотъемлемой частью процесса успешного завершения обмена.</p>
                            <p>9.6 Домены @protonmail.com @proton.me @icloud.com @tutanota.com @startmail.com и др. - заблокированы в России по решению Роскомнадзора. Письма с этих доменов нам не поступают и не уходят с нашего сервиса. В случае возникновения проблем с заявкой, потребуется верификация для установления связи. Используйте иные домены почт. Узнать весь список заблокированных почт можно на сайте РКН</p>
                            <p>9.7 Все споры и разногласия, возникшие или могущие возникнуть из настоящего Соглашения, подлежат разрешению путем переговоров на основании письменного заявления Пользователя. Сервис exhub.io после получения от Пользователя претензии обязан в течение 15 (пятнадцати) дней удовлетворить заявленные в претензии требования либо направить Пользователю мотивированный отказ. К ответу должны быть приложены все необходимые документы. В случае если возникший спор не будет разрешен в претензионном порядке в течение 60 (шестидесяти) дней, любая из Сторон вправе обратиться за разрешением спора в суд по месту нахождения Пользователя.</p>
                            <p>Пользователь подтверждает, что он ознакомлен со всеми положениями настоящего Соглашения и безусловно принимает их.</p>
                            <p>Соглашение опубликовано «09» апреля 2019 г.</p>

                        </div>

                        <div class="politics">
                            <p>Данная политика направлена на выявление транзакций связанных с  финансированием терроризма, отмыванием денежных средств, а так же иной противозаконной деятельности. Для определения таких транзакций обменный сервис exhub.io использует сервис GetBlock. В случае если AML риск по транзакции превышает значение 70% и выше, сервис оставляет за собой право:</p>
                            <ul>
                                <li>Приостановить транзакцию;</li>
                                <li>Запросить у пользователя фото или видео с документом, подтверждающим личность пользователя (Селфи);</li>
                                <li>Запросить у пользователя Скрин из ЛК кошелька вывода криптовалюты;</li>
                                <li>Заблокировать аккаунт и любые операции, связанные с пользователем, передать в контролирующие финансовую деятельность и/или правоохранительные органы по месту регистрации Сервиса;</li>
                                <li>Удерживать средства пользователя до полного расследования инцидента;</li>
                                <li>Осуществлять возврат цифровых активов только на реквизиты, с которых перевод был осуществлен или перейти на другие реквизиты, после полной проверки службой безопасности Сервиса, если удалось проверить легальное происхождение средств пользователя;</li>
                                <li>Срок рассмотрения запрошенных данных от пользователя составляет от 7 календарных дней;</li>
                                <li>Запрашивать у пользователя иные материалы и документы касающиеся обмена;</li>
                                <li>Сервис ExHub не совершает отправку средств на кошельки с метками высокого риска. Пользователь в праве предоставить кошелек соответствующий AML политики сервиса или запросить возврат средств за вычетом 5%;</li>
                                <li>Средства могут быть заблокированы при наличии меток высокого риска или за связь с подсанкционными платформами;</li>
                                <li>Возврат BTC после разблокировки осуществляется за вычетом комиссии в 0.0004 BTC.</li>
                            </ul>
                            
                            <p>В случае если пользователь не предоставляет запрошенную информацию и не отвечает на запросы сервиса в течении 6 календарных месяцев, удержанные средства не возвращаются.</p>
                            <p>Сервис не работает с подсанкционными платформами:</p>
                            <ul>
                                <li>Commex;</li>
                                <li>Garantex;</li>
                                <li>Tornado Cash;</li>
                                <li>Hydra;</li>
                                <li>Blender.io;</li>
                                <li>Lazarus Group;</li>
                                <li>Genesis Market;</li>
                                <li>ChipMixer;</li>
                                <li>Shinbad.io;</li>
                                <li>Capitalist;</li>
                                <li>Nobitex;</li>
                                <li>Bitpapa.com;</li>
                                <li>NetEx24.net;</li>
                                <li>Wasabi wallet;</li>
                            </ul>
                            <p>За связь с такими платформами средства блокируются бессрочно.</p>
                            <p>Все клиенты, проживающие в перечисленных ниже странах, запрещены к обслуживанию на сервисе exhub.io и не могут быть приняты в качестве Пользователей.
                            Любым клиентам, из этих стран будет отказано в обслуживании, а любые средства будут возвращены источнику.
                            Полный список запрещенных юрисдикций:</p>
                            <ul>
                                <li>США</li>
                                <li>Афганистан</li>
                                <li>Албания</li>
                                <li>Ангола</li>
                                <li>Алжир</li>
                                <li>Бангладеш</li>
                                <li>Барбадос</li>
                                <li>Боливия</li>
                                <li>Ботсвана</li>
                                <li>Бирма (Мьянма)</li>
                                <li>Бурунди</li>
                                <li>Камбоджа</li>
                                <li>Центрально-Африканская Республика</li>
                                <li>Чад</li>
                                <li>Конго</li>
                                <li>Конакри</li>
                                <li>Берег Слоновой Кости</li>
                                <li>Крым</li>
                                <li>Куба</li>
                                <li>Корейская Народно-Демократическая Республика (КНДР)</li>
                                <li>Эквадор</li>
                                <li>Египет</li>
                                <li>Экваториальная Гвинея</li>
                                <li>Эритрея</li>
                                <li>Гана</li>
                                <li>Гвинея-Бисау</li>
                                <li>Гаити</li>
                                <li>Гайана</li>
                                <li>Иран</li>
                                <li>Ирак</li>
                                <li>Лаосская Народно-Демократическая Республика</li>
                                <li>Ливан</li>
                                <li>Ливия</li>
                                <li>Мали</li>
                                <li>Марокко</li>
                                <li>Мьянма</li>
                                <li>Непал</li>
                                <li>Никарагуа</li>
                                <li>Северная Македония</li>
                                <li>Пакистан</li>
                                <li>Панама</li>
                                <li>Катар</li>
                                <li>Саудовская Аравия</li>
                                <li>Сомали</li>
                                <li>Южный Судан</li>
                                <li>Судан</li>
                                <li>Сирия</li>
                                <li>Тунис</li>
                                <li>Уганда</li>
                                <li>Вануату</li>
                                <li>Венесуэла</li>
                                <li>Йемен</li>
                                <li>Зимбабве</li>
                                <li>Ямайка</li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div class="nav">
                    <a href="#">Главная</a>
                    <div class="nav__hr"></div>
                    <p>Правила сервиса</p>
                </div>

            </div>
        </section>

        <section class="gift">
            <div class="container">

                <div class="gift__preloading">
                    <div class="gift__preloading-left">
                        <div class="gift__preloading-first"><div class="blick"></div></div>
                        <div class="gift__preloading-first"><div class="blick"></div></div>
                        <div class="gift__preloading-two"><div class="blick"></div></div>
                        <div class="gift__preloading-three"><div class="blick"></div></div>
                        <div class="gift__preloading-four"><div class="blick"></div></div>
                    </div>
                    <div class="gift__preloading-right">
                        <div class="gift__preloading-five"><div class="blick"></div></div>
                    </div>
                </div>

                <div class="gift__title">Участвуй в розыгрыше!</div>

                <div class="gift__body">

                    <div class="gift__left">
                        <div class="gift__text">Каждую пятницу сервис ExHub проводит розыгрыш денежных призов. По итогам будет выбрано три победителя, которые получат по 5 000 рублей на любую карту банка РФ.</div>
                        <div class="gift__text">Условия розыгрыша:</div>

                        <ol>
                            <li>Для участия необходимо сделать обмен на нашем сервисе <a href="https://exhub.io/">ExHub.io</a> и оставить отзыв о нас на <a href="https://www.bestchange.net/exhub-exchanger.html">Bestchange</a>. При написании отзыва обязательно указывайте <strong>номер обмена</strong>, без него отзыв не учитывается при розыгрыше.</li>
                            <li>1 обмен + 1 отзыв = 1 билет. <strong>Больше билетов — больше шансов на победу!</strong></li>
                            <li>В недельном розыгрыше участвуют все билеты (обмен+отзыв), которые приобретены с пятницы 00:00 по четверг 24:00</li>
                        </ol>

                        <div class="gift__text gift__text-mix">
                            Итоги розыгрыша подводят <a href="https://t.me/ExHubRuChannel"><svg width="32" height="32" class="icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="#FF7733" fill-opacity="0.07"></circle>
                            <path d="M13.1213 18.5679L12.8633 22.1975C13.2325 22.1975 13.3924 22.0389 13.5841 21.8484L15.3151 20.1942L18.9019 22.8208C19.5597 23.1874 20.0232 22.9943 20.2006 22.2157L22.555 11.1839L22.5556 11.1833C22.7643 10.2109 22.204 9.83061 21.5631 10.0692L7.72423 15.3673C6.77976 15.7339 6.79406 16.2604 7.56368 16.4989L11.1017 17.5994L19.3199 12.4573C19.7066 12.2012 20.0583 12.3429 19.769 12.599L13.1213 18.5679Z" fill="#FF7733"></path>
                            </svg> <p>в нашем телеграм-канале</p></a> с помощью сервиса <a href="https://randomus.ru/">randomus.ru</a>
                        </div>
                    
                        <div class="gift__area">
                            <div class="gift__subtitle">Проверить билет</div>

                            <div class="gift__input">
                                <input type="text" placeholder="Номер билета">

                                <div class="gift__message">
                                    <p>Сделка не принимала участие в розыгрыше</p>
                                </div>
                            </div>
                            <div class="gift__button">
                                <p>Проверить</p>
                            </div>
                        </div>
                    
                    </div>

                    <div class="gift__right">
                        <img src="images/gift.svg" alt="gift">
                    </div>

                </div>

                <div class="nav">
                    <a href="#">Главная</a>
                    <div class="nav__hr"></div>
                    <p>Розыгрыш призов</p>
                </div>

            </div>
        </section>

        <div class="modal">

            <div class="modal__body">

                <div class="modal__title">Подтвердите данные сделки <span>665b4c37d17f4</span></div>

                <div class="modal__line">

                    <div class="modal__money">
                        <p class="modal__subtitle">Получите</p>
                        <div class="modal__numbers">
                            <p>00.00 USDT</p>
                            <img src="images/USDTTRC20.svg" alt="token">
                        </div>
                    </div>

                    <div class="modal__wallet">
                        <p class="modal__subtitle">На Ваш кошелек</p>
                        <div class="modal__address">
                            <p>wallet-address</p>
                            <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" d="M6 11.8462V28C6 28.5523 6.44772 29 7 29H28.3333C28.8856 29 29.3333 28.5523 29.3333 28V23M6 11.8462H13.3333H25M6 11.8462V9C6 8.44772 6.44772 8 7 8H25V11.8462M25 11.8462H28.3333C28.8856 11.8462 29.3333 12.2939 29.3333 12.8462V18M29.3333 18H30C30.5523 18 31 18.4477 31 19V22C31 22.5523 30.5523 23 30 23H29.3333M29.3333 18H24.3333C23.781 18 23.3333 18.4477 23.3333 19V22C23.3333 22.5523 23.781 23 24.3333 23H29.3333" stroke="#9F9F9F" stroke-width="2"></path></svg>
                        </div>
                    </div>

                </div>

                <div class="modal__warning">
                    <strong>Внимание!</strong>
                    <p>В последнее время участились случаи мошенничества. Если вы указывайте не свой личный кошелёк, а кошелёк сторонних лиц (Инвестиционных экспертов, других обменных сервисов, брокеров и.т. д) убедитесь, что это не мошенники, почитайте отзывы в интернете, иначе вы рискуйте потерять свои средства.</p>
                </div>

                <div class="modal__buttons">

                    <div class="modal__ok">
                        <p>Подтвердить данные</p>
                    </div>

                    <div class="modal__cancel">
                        <svg width="10px" height="10px" class="icon-cancel" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon">xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L5 3.58579L8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893C10.0976 0.683417 10.0976 1.31658 9.70711 1.70711L6.41421 5L9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711C9.31658 10.0976 8.68342 10.0976 8.29289 9.70711L5 6.41421L1.70711 9.70711C1.31658 10.0976 0.683417 10.0976 0.292893 9.70711C-0.0976311 9.31658 -0.0976311 8.68342 0.292893 8.29289L3.58579 5L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"></path>
                        </svg>
                        <p>Отменить сделку</p>
                    </div>

                </div>

            </div>

        </div>

        <section class="pay">
            <div class="container">

                <div class="pay__title">Заказ NUMBER-ORDER</div>

                <div class="pay__valutes">
                    <p class="pay__valutes-val-one">VALUTE-NAME</p>
                    <img src="images/BTC.svg" alt="valute" class="pay__valutes-icon-one">
                    <p class="pay__valutes-num-one">00.00 VALUTE-CODE</p>

                    <svg width="10px" height="10px" class="icon" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M13 1L7 7L1 0.999999" stroke="#2E4057" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                    <p class="pay__valutes-val-two">VALUTE-NAME</p>
                    <img src="images/USDTTRC20.svg" alt="valute" class="pay__valutes-icon-two">
                    <p class="pay__valutes-num-two">00.00 VALUTE-CODE</p>
                </div>

                <div class="pay__body">

                    <div class="pay__left">

                        <div class="pay__subtitle"><strong>Статус сделки:</strong> <p>В обработке</p></div>
                        <div class="pay__subtitle pay__subtitle-lh"><strong>Плавающий курс</strong></div>
                        <div class="pay__subtitle pay__subtitle-down"><p>Курс будет зафиксирован в момент получения 2-го подтверждения. Обмен будет выполнен автоматически после 2-го подтверждения Вашей транзакции в сети.<br>Для формирования курса мы используем курс биржи Binance + комиссия сервиса</p></div>
                    
                        <div class="pay__prog">
                            <div class="pay__timer"><p class="mnts">30</p>:<p class="scnds">00</p></div>
                            <div class="pay__lx">
                                <div class="pay__subtitle"><strong>Курс зафиксирован на 30 минут</strong></div>
                                <div class="pay__subtitle"><p>Если в течение этого времени не будут получены денежные средства от вас, то сделка отменится.</p></div>
                            </div>
                        </div>

                        <div class="pay__step">
                            <div class="pay__progress">
                                <div class="pay__stepnumber">1</div>
                                <div class="pay__hr"></div>
                            </div>
    
                            <div class="pay__card">
                                <div class="pay__namestep">Оплата сделки</div>

                                <div class="pay__reserving">
                                    <div class="pay__loadanim">
                                        <img src="images/zz.gif" alt="loading">
                                    </div>
                                    <p>Для вас зарезервирован уникальный кошелек для оплаты сделки.<br>Вы будете <strong>автоматически перенаправлены</strong> на следующий шаг сделки как только средства поступят по выданным реквизитам</p>
                                </div>

                                <div class="pay__what">Переводите</div>

                                <div class="pay__table pay__table-valute">
                                    <img src="images/BTC.svg" alt="valute">
                                    <p>0.00 VALUTE-CODE</p>

                                    <div class="pay__copy">
                                        <svg width="24px" height="24px" class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M4 13V5C4 3.89543 4.89543 3 6 3H14" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M8 19V9C8 7.89543 8.89543 7 10 7H18C19.1046 7 20 7.89543 20 9V19C20 20.1046 19.1046 21 18 21H10C8.89543 21 8 20.1046 8 19Z" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div class="pay__what">на кошелек</div>

                                <div class="pay__table pay__table-wallet">
                                    <svg width="24px" height="24px" class="icon-valet" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" d="M6 11.8462V28C6 28.5523 6.44772 29 7 29H28.3333C28.8856 29 29.3333 28.5523 29.3333 28V23M6 11.8462H13.3333H25M6 11.8462V9C6 8.44772 6.44772 8 7 8H25V11.8462M25 11.8462H28.3333C28.8856 11.8462 29.3333 12.2939 29.3333 12.8462V18M29.3333 18H30C30.5523 18 31 18.4477 31 19V22C31 22.5523 30.5523 23 30 23H29.3333M29.3333 18H24.3333C23.781 18 23.3333 18.4477 23.3333 19V22C23.3333 22.5523 23.781 23 24.3333 23H29.3333" stroke="#9F9F9F" stroke-width="2"></path></svg>
                                    <p>wallet-address</p>

                                    <div class="pay__copy">
                                        <svg width="24px" height="24px" class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M4 13V5C4 3.89543 4.89543 3 6 3H14" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M8 19V9C8 7.89543 8.89543 7 10 7H18C19.1046 7 20 7.89543 20 9V19C20 20.1046 19.1046 21 18 21H10C8.89543 21 8 20.1046 8 19Z" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div class="pay__att">Внимание!</div>

                                <div class="pay__area">Если вы выводите монеты с биржи Binance, Huobi и др., выберите сеть <span>Bitcoin (BTC)</span></div>

                                <div class="pay__text">В последнее время участились случаи мошенничества. Если вы указывайте не свой личный кошелёк, а кошелёк сторонних лиц (Инвестиционных экспертов, других обменных сервисов, брокеров и.т. д) убедитесь, что это не мошенники, почитайте отзывы в интернете, иначе вы рискуйте потерять свои средства.</div>
                                <div class="pay__text">Обращаем ваше внимание на то, что сервис exhub.io не принимает средства с высокорискованных источников. Каждая входящая транзакция проходит проверку через независимый AML сервис. В случае если транзакция имеет более 70% риска, такие платежи будут приостановлены. И после прохождения верификации личности они будут вам возвращены за вычетом комиссии сети! Обмен таких средств невозможен!<br>Если вы хотите заранее узнать потенциальный риск вашей транзакции, то можете воспользоваться одним из сервисов наших партнеров. Первая проверка будет бесплатна. Чтобы проверить свой кошелек на чистоту, вам нужно перейти на сайт <a href="https://getblock.net/">GetBlock.net</a></div>
                            
                                <div class="pay__button-cancel">
                                    <svg width="10px" height="10px" class="icon-cancel" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon">xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L5 3.58579L8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893C10.0976 0.683417 10.0976 1.31658 9.70711 1.70711L6.41421 5L9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711C9.31658 10.0976 8.68342 10.0976 8.29289 9.70711L5 6.41421L1.70711 9.70711C1.31658 10.0976 0.683417 10.0976 0.292893 9.70711C-0.0976311 9.31658 -0.0976311 8.68342 0.292893 8.29289L3.58579 5L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"></path>
                                    </svg>
                                    <p>Отменить сделку</p>
                                </div>
                            </div>
                        </div>

                        <div class="pay__step pay__step-two">
                            <div class="pay__progress">
                                <div class="pay__stepnumber">2</div>
                                <div class="pay__hr"></div>
                            </div>

                            <div class="pay__card">
                                <div class="pay__namestep">Обработка платежа</div>
                                <div class="pay__txt">После того как вы отправите свой платеж, наш робот автоматически увидит вашу транзакцию. Вам не нужно никуда нажимать или писать в поддержку.</div>
                            </div>
                        </div>

                        <div class="pay__step pay__step-three">
                            <div class="pay__progress">
                                <div class="pay__stepnumber">3</div>
                                <!-- <div class="pay__hr"></div> -->
                            </div>

                            <div class="pay__card">
                                <div class="pay__namestep">Перевод</div>
                                <div class="pay__txt">После того как мы получим ваш платеж, наша система сразу же переведет вам ваши средства</div>
                            
                                <div class="pay__info">
                                    <p>Мы переведем <span class="pay__summ">00.00 VALUTE-CODE</span></p>
                                    <p>на кошелек <span class="pay__wlt">wallet-address</span></p>
                                    <p>Отправка монет осуществляется по сети <span class="pay__web">TRC-20 (Tron)</span></p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="pay__right">

                        <div class="chat">

                            <div class="chat__top">
                                <svg width="30" height="30" class="icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M17.3022 9.38333V13.6006C17.3022 14.7052 16.4067 15.6006 15.3022 15.6006H14.4684V18.0011C14.4684 18.3799 14.2544 18.7261 13.9156 18.8955C13.5768 19.0649 13.1714 19.0284 12.8684 18.8011L8.60111 15.6006H2C0.89543 15.6006 0 14.7052 0 13.6006V4.26569C0 3.16112 0.89543 2.26569 2 2.26569H9.34977C9.09782 2.88529 8.95233 3.55952 8.936 4.26569H2V13.6006L8.93445 13.6006C9.15082 13.6006 9.36135 13.6708 9.53445 13.8006L12.4684 16.0011V14.6006C12.4684 14.0483 12.9161 13.6006 13.4684 13.6006L15.3022 13.6006V10.0239C16.0188 9.93556 16.6941 9.71346 17.3022 9.38333Z" fill="#2E4057"></path>
                                    <circle cx="14.6019" cy="4.39926" r="3.40048" fill="#00AF92"></circle>
                                </svg>
                                <p>Чат по сделке</p>
                            </div>

                            <div class="chat__body">
                                <div class="chat__message">Здравствуйте, в этот чат вы можете задать вопрос по вашему заказу. Оператор ExHub всегда на связи!</div>
                                <div class="chat__time">ExHub</div>

                                <div class="chat__btns">
                                    <div class="chat__btn">Я оплатил, что мне делать дальше?</div>
                                    <div class="chat__btn">Не могу оплатить</div>
                                    <div class="chat__btn">Деньги с карты списались, а статус в сделке не поменялся</div>
                                    <div class="chat__btn">Отправленная мной сумма отличаеться от указанной в сделке</div>
                                    <div class="chat__btn">Сколько ждать сети?</div>
                                    <div class="chat__btn">Как верифицировать карту?</div>
                                    <div class="chat__btn">Другое</div>
                                </div>

                                <div class="chat__loading">
                                    <img src="images/preload.svg" alt="loading">
                                </div>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </div>
        </section>

        <section class="timeend">
            <div class="container">

                <div class="timeend__title"><p>Сделка № 665fb0a81b86f отменена</p></div>
                <div class="timeend__subtitle"><p>Сделка автоматически отменилась, так как оплата не поступила в отведённое время. Если вы оплатили сделку, обратитесь пожалуйста в службу поддержки на нашем сайте, мы её восстановим.</p></div>
                <div class="timeend__button"><p>Создать новый обмен</p></div>

            </div>
        </section>

        <section class="change">

            <div class="cash">
                <div class="container">

                    <div class="cash__body">

                        <div class="cash__left">
                            <div class="cash__title">
                                <p>Обменять Tether TRC20 (USDT) на Наличные RUB в г.Москва</p>
                                <div class="cash__load"><div class="blick"></div></div>
                            </div>
                            <div class="cash__subtitle"><p>Главная ценность, которой мы обладаем — это наша репутация и доверие наших клиентов, что подтверждает 99,8% положительных отзывов на сервисе <a href="https://www.bestchange.net/exhub-exchanger.html">BestChange</a>.</p></div>
                        </div>

                        <div class="cash__right">

                            <div class="cash__top">
                                <div class="cash__val">Онлайн</div>
                                <div class="cash__val cash__val-active">За наличные</div>

                                <div class="cash__load"><div class="blick"></div></div>
                            </div>

                            <div class="cash__info">
                                <h6>Введите данные для обмена</h6>
                                <h5>Верификация не требуется</h5>

                                <div class="cash__load"><div class="blick"></div></div>
                            </div>

                            <div class="cash__table">
                                <div class="cash__table-left">
                                    <div class="cash__rate">1 USDT = 1 RUB</div>
                                    <div class="cash__txt">Плавающий курс <span class="cash__open-window">подробнее</span></div>
                                    <div class="cash__inst">Инструкция по обмену</div>
                                </div>

                                <div class="cash__table-right">
                                    <div class="cash__timer">00:30</div>
                                    <div class="cash__txt">курс актуален</div>
                                </div>

                                <div class="cash__window">
                                    <p><span>Плавающий</span> — нефиксированный курс, определяется на момент получения от вас денежных средств.</p>
                                    <a href="#agreement#agreement-6-7">Узнать подробнее</a>
                                    <svg width="12px" height="12px" class="icon-close" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M0.292859 18.2882C-0.0976196 18.6788 -0.0976196 19.312 0.292859 19.7026C0.683337 20.0931 1.31643 20.0931 1.70691 19.7026L9.99608 11.4114L18.292 19.7022C18.6827 20.0926 19.316 20.0926 19.7067 19.7022C20.0973 19.3118 20.0973 18.6788 19.7067 18.2884L11.4101 9.99707L19.6979 1.70731C20.0884 1.31674 20.0884 0.683498 19.6979 0.292928C19.3075 -0.0976422 18.6744 -0.0976431 18.2839 0.292928L9.99546 8.5833L1.70776 0.300813C1.31712 -0.0895896 0.683754 -0.0895886 0.293106 0.300813C-0.0975407 0.691214 -0.0975417 1.32418 0.293106 1.71458L8.58142 9.99768L0.292859 18.2882Z" fill="#2E4057"></path></svg>
                                </div>

                                <div class="cash__load"><div class="blick"></div></div>
                            </div>

                            <div class="cash__city">
                                <div class="cash__name">Выберите город</div>
                                <div class="cash__select">
                                    <select>
                                        <option disabled="">Выберите город</option>
                                        <option>Москва</option>
                                        <option>Санкт-Петербург</option>
                                    </select>
                                    <svg width="12px" height="12px" class="icon-arrow" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M3 5L6 8L9 5" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>

                                <div class="cash__load"><div class="blick"></div></div>
                            </div>

                            <div class="cash__get">
                                <div class="cash__load"><div class="blick"></div></div>

                                <div class="cash__name">Отдаете Tether TRC20 (USDT)</div>
                                <div class="cash__area">
                                    <input type="text" class="cash__first-input">
                                    <div class="cash__gif"><img src="images/zz.gif" alt="loading"></div>
                                    <div class="cash__btn">
                                        <img src="images/USDTTRC20.svg" alt="valute">
                                        <svg width="12px" height="12px" class="icon-arrow" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M3 5L6 8L9 5" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </div>

                                    <div class="cash__message"><p>Поле не может быть пустым</p></div>

                                    <div class="table-four">

                                        <div class="table-four__mobile">
                                            <p>Выберите систему:</p>
                                            <svg width="20px" height="20px" class="icon-close" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M0.292859 18.2882C-0.0976196 18.6788 -0.0976196 19.312 0.292859 19.7026C0.683337 20.0931 1.31643 20.0931 1.70691 19.7026L9.99608 11.4114L18.292 19.7022C18.6827 20.0926 19.316 20.0926 19.7067 19.7022C20.0973 19.3118 20.0973 18.6788 19.7067 18.2884L11.4101 9.99707L19.6979 1.70731C20.0884 1.31674 20.0884 0.683498 19.6979 0.292928C19.3075 -0.0976422 18.6744 -0.0976431 18.2839 0.292928L9.99546 8.5833L1.70776 0.300813C1.31712 -0.0895896 0.683754 -0.0895886 0.293106 0.300813C-0.0975407 0.691214 -0.0975417 1.32418 0.293106 1.71458L8.58142 9.99768L0.292859 18.2882Z" fill="#2E4057"></path></svg>
                                        </div>
    
                                        <div class="table-four__buttons">
                                            <div class="table-four__button table-four__button-active"><p>Все</p></div>
                                            <div class="table-four__button"><p>Криптовалюты</p></div>
                                            <div class="table-four__button"><p>Наличные деньги</p></div>
                                        </div>
    
                                        <div class="table-four__search">
                                            <input type="text" placeholder="Поиск">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                                            </svg>
                                        </div>
    
                                        <div class="table-four__list">
    
                                            <div class="table-four__valute table-four__valute-crypto table-four__valute-active">
                                                <img src="images/USDTTRC20.svg" alt="valute">
                                                <p>Tether TRC20 (USDT)</p>
                                                <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </div>

                                            <div class="table-four__valute table-four__valute-cash">
                                                <img src="images/CASHRUB.svg" alt="valute">
                                                <p>Наличные RUB</p>
                                                <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </div>

                                            <div class="table-four__valute table-four__valute-cash">
                                                <img src="images/CASHUSD.svg" alt="valute">
                                                <p>Наличные USD</p>
                                                <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </div>

                                            <div class="table-four__valute table-four__valute-cash">
                                                <img src="images/CASHEUR.svg" alt="valute">
                                                <p>Наличные EUR</p>
                                                <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </div>
    
                                        </div>
    
                                    </div>
                                </div>
                            </div>

                            <div class="cash__take">
                                <div class="cash__load"><div class="blick"></div></div>

                                <div class="cash__name">Получаете Наличные RUB</div>
                                <div class="cash__reserv">Резерв: 17 810 235 RUB</div>
                                <div class="cash__area">
                                    <input type="text" class="cash__second-input">
                                    <div class="cash__gif"><img src="images/zz.gif" alt="loading"></div>
                                    <div class="cash__btn">
                                        <img src="images/CASHRUB.svg" alt="valute">
                                        <svg width="12px" height="12px" class="icon-arrow" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M3 5L6 8L9 5" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </div>

                                    <div class="cash__message"><p>Поле не может быть пустым</p></div>

                                    <div class="table-five">

                                        <div class="table-five__mobile">
                                            <p>Выберите систему:</p>
                                            <svg width="20px" height="20px" class="icon-close" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M0.292859 18.2882C-0.0976196 18.6788 -0.0976196 19.312 0.292859 19.7026C0.683337 20.0931 1.31643 20.0931 1.70691 19.7026L9.99608 11.4114L18.292 19.7022C18.6827 20.0926 19.316 20.0926 19.7067 19.7022C20.0973 19.3118 20.0973 18.6788 19.7067 18.2884L11.4101 9.99707L19.6979 1.70731C20.0884 1.31674 20.0884 0.683498 19.6979 0.292928C19.3075 -0.0976422 18.6744 -0.0976431 18.2839 0.292928L9.99546 8.5833L1.70776 0.300813C1.31712 -0.0895896 0.683754 -0.0895886 0.293106 0.300813C-0.0975407 0.691214 -0.0975417 1.32418 0.293106 1.71458L8.58142 9.99768L0.292859 18.2882Z" fill="#2E4057"></path></svg>
                                        </div>
    
                                        <div class="table-five__buttons">
                                            <div class="table-five__button table-five__button-active"><p>Все</p></div>
                                            <div class="table-five__button"><p>Криптовалюты</p></div>
                                            <div class="table-five__button"><p>Наличные деньги</p></div>
                                        </div>
    
                                        <div class="table-five__search">
                                            <input type="text" placeholder="Поиск">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                                            </svg>
                                        </div>
    
                                        <div class="table-five__list">
    
                                            <div class="table-five__valute table-five__valute-crypto">
                                                <img src="images/USDTTRC20.svg" alt="valute">
                                                <p>Tether TRC20 (USDT)</p>
                                                <div class="table-five__reserv">Резерв: 200 000 USDT</div>
                                                <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </div>

                                            <div class="table-five__valute table-five__valute-cash table-five__valute-active">
                                                <img src="images/CASHRUB.svg" alt="valute">
                                                <p>Наличные RUB</p>
                                                <div class="table-five__reserv">Резерв: 17 810 235 RUB</div>
                                                <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </div>

                                            <div class="table-five__valute table-five__valute-cash">
                                                <img src="images/CASHUSD.svg" alt="valute">
                                                <p>Наличные USD</p>
                                                <div class="table-five__reserv">Резерв: 200 000 USD</div>
                                                <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </div>

                                            <div class="table-five__valute table-five__valute-cash">
                                                <img src="images/CASHEUR.svg" alt="valute">
                                                <p>Наличные EUR</p>
                                                <div class="table-five__reserv">Резерв: 200 000 EUR</div>
                                                <svg width="16px" height="16px" class="icon-checked" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M2 7.75L6.65007 13L14 3" stroke="#FF7733" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </div>
    
                                        </div>
    
                                    </div>
                                </div>
                            </div>

                            <div class="cash__bottom">

                                <div class="cash__hide">

                                    <div class="cash__name">Имя
                                        <div class="cash__load"><div class="blick"></div></div>
                                    </div>
                                    <div class="cash__user">
                                        <input type="text" class="cash__user-input">

                                        <div class="cash__message"><p>Поле не может быть пустым</p></div>

                                        <div class="cash__load"><div class="blick"></div></div>
                                    </div>

                                    <div class="cash__name">E-mail
                                        <div class="cash__load"><div class="blick"></div></div>
                                    </div>
                                    <div class="cash__email">
                                        <input type="text" class="cash__email-input">
                                        <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M8.08 9C6.93125 9 6 9.89543 6 11V26C6 27.1046 6.93125 28 8.08 28H29.92C31.0688 28 32 27.1046 32 26V11C32 9.89543 31.0688 9 29.92 9H8.08ZM8.08 12.2672V26H29.92V12.2672L19.6142 20.2891C19.253 20.5703 18.747 20.5703 18.3858 20.2891L8.08 12.2672ZM28.292 11H9.70803L19 18.2328L28.292 11Z" fill="#9F9F9F"></path></svg>
                                    
                                        <div class="cash__message"><p>Поле не может быть пустым</p></div>

                                        <div class="cash__load"><div class="blick"></div></div>
                                    </div>

                                    <div class="cash__name">Телефон или Telegram
                                        <div class="cash__load"><div class="blick"></div></div>
                                    </div>
                                    <div class="cash__contact">
                                        <input type="text" class="cash__contact-input">

                                        <div class="cash__message"><p>Поле не может быть пустым</p></div>

                                        <div class="cash__load"><div class="blick"></div></div>
                                    </div>

                                    <div class="cash__msg">Нажимая кнопку «Следующий шаг», Вы подтверждаете свое согласие с <a href="#agreement">пользовательским соглашением</a> сервиса ExHub.io
                                        <div class="cash__load"><div class="blick"></div></div>
                                    </div>

                                </div>

                                <div class="cash__button">
                                    <p>Следующий шаг</p>
                                    <div class="cash__load cash__load-button"><div class="blick"></div></div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div class="manual">
                <div class="container">

                    <div class="manual__title">Для проведения обмена Наличные RUB на Tether TRC20 (USDT), просим выполнить простые действия.</div>

                    <div class="manual__block">

                        <div class="manual__left">
                            <div class="manual__string"><span>1.</span><p>Используйте калькулятор на сайте для расчета суммы обмена</p></div>
                            <div class="manual__string"><span>2.</span><p>Заполните все поля и создайте заявку на сайте. Будьте внимательны при вводе данных.</p></div>
                            <div class="manual__string"><span>3.</span><p>Напишите в чат с номером заявки для консультации с нашим менеджером по обмену.</p></div>
                            <div class="manual__warning">Обратите внимание!</div>
                            <div class="manual__string"><p>Если что-то пошло не так (не хватило времени или сумма изменилась на 5%), попробуйте создать новую заявку.</p></div>
                        </div>

                        <div class="manual__right">
                            <img src="images/manual1.svg" alt="images">
                        </div>

                    </div>

                    <div class="manual__block manual__block-two">

                        <div class="manual__right">
                            <img src="images/manual2.svg" alt="images">
                        </div>

                        <div class="manual__left">
                            <div class="manual__string"><p>Для обмена суммы меньше минимальной уточните у менеджера, такие процедуры имеют дополнительную комиссию.</p></div>
                            <div class="manual__string"><p>Воспользуйтесь услугами персонального менеджера с обслуживанием в отдельной кассе. По всем вопросам обращайтесь к оператору в чат.</p></div>
                            <div class="manual__string"><p>Необходимо будет сверить сумму наличных с суммой в заявке и провести тестовую транзакцию. После этого направим криптовалюту на Ваш кошелек.</p></div>
                            <div class="manual__string"><p>Произвести обмен в кассе возможно строго до 20:30</p></div>
                        </div>

                    </div>

                </div>
            </div>

            <div class="rev">
                <div class="container">

                    <div class="rev__title">Отзывы о нас</div>
                    <div class="rev__subtitle">Еще больше отзывов о нашем сервисе можете почитать на <a href="https://www.bestchange.ru/exhub-exchanger.html">Bestchange</a></div>                 
                    
                    <div class="rev__wrapper">

                        <div class="rev__nav rev__nav-left">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"></path>
                            </svg>
                        </div>

                        <div class="rev__block swiper-container">

                            <div class="rev__slider swiper-wrapper">
    
                                <div class="rev__slide swiper-slide">
                                    <div class="rev__name">Артур</div>
                                    <div class="rev__text">Отличный сервис. Быстро, надёжно всем рекомендую.</div>
                                </div>
    
                                <div class="rev__slide swiper-slide">
                                    <div class="rev__name">Дмитрий</div>
                                    <div class="rev__text">Все прошло как и всегда оперативно и качественно! Спасибо сервису!</div>
                                </div>
    
                                <div class="rev__slide swiper-slide">
                                    <div class="rev__name">Евгений</div>
                                    <div class="rev__text">Пользуюсь этим обменником уже второй раз. Все прошло оперативно, без проблем. Спасибо! Рекомендую!</div>
                                </div>
    
                                <div class="rev__slide swiper-slide">
                                    <div class="rev__name">Ирина</div>
                                    <div class="rev__text">Топовый сервис, лёгкий и быстрый ))) никаких проблем за всё время нашего сотрудничества, так держать. Рекомендую)</div>
                                </div>
    
                                <div class="rev__slide swiper-slide">
                                    <div class="rev__name">Сергей</div>
                                    <div class="rev__text">Обмен прошёл без шума и пыли. Быстро и чётко.</div>
                                </div>
    
                                <div class="rev__slide swiper-slide">
                                    <div class="rev__name">Александр</div>
                                    <div class="rev__text">Пользуюсь уже давно. Отличный обменник. Рекомендую к сотрудничеству!</div>
                                </div>
    
                                <div class="rev__slide swiper-slide">
                                    <div class="rev__name">Павел</div>
                                    <div class="rev__text">Все как всегда без проблем. Уже несколько лет и ни разу не подвели. Спасибо!)</div>
                                </div>
    
                                <div class="rev__slide swiper-slide">
                                    <div class="rev__name">Алексей</div>
                                    <div class="rev__text">Спасибо всем сотрудникам обмена, все быстро и чётко</div>
                                </div>
    
                                <div class="rev__slide swiper-slide">
                                    <div class="rev__name">Ангелина</div>
                                    <div class="rev__text">Обменник который вышел на новый уровень! Нет лишних вопросов, авторизаций, подтверждений. Быстро, просто, надёжно. Ничего лишнего, только бизнес!</div>
                                </div>
    
                                <div class="rev__slide swiper-slide">
                                    <div class="rev__name">Ильдар</div>
                                    <div class="rev__text">Очень удобный обменник. Всегда без всяких проблем вывожу средства.  Спасибо, буду пользоваться дальше вашим обменником и советовать знакомым</div>
                                </div>
    
                            </div>
                                
                            <div class="rev__navigation swiper-pagination"></div>
                                
                        </div>

                        <div class="rev__nav rev__nav-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
                            </svg>
                        </div>

                    </div>

                </div>
            </div>

        </section>

        <section class="last">
            <div class="container">

                <div class="last__title">Ваша заявка принята!</div>

                <div class="last__body">

                    <div class="last__left">

                        <div class="last__card">
                            <h6>1 EUR : 1.0758USDT</h6>
                            <h5>Плавающий курс</h5>
                            <h4>Ваша заявка № 666483115d138</h4>
                        </div>

                        <div class="last__table">
                            <p>Курс будет зафиксирован в момент получения оплаты.</p>

                            <div class="last__line">
                                <p>Наличные EUR</p>
                                <img src="images/CASHEUR.svg" alt="valute">
                                <p>17 000 EUR</p>
                                <svg width="10px" height="10px" class="icon" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M13 1L7 7L1 0.999999" stroke="#2E4057" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <p>Tether TRC20 (USDT)</p>
                                <img src="images/CASHEUR.svg" alt="valute">
                                <p>18 287.9708 USDT</p>
                            </div>

                            <p><span>Свяжитесь в онлайн чате</span> со специалистом для согласования всех деталей обмена вашего заказа.</p>
                        </div>

                        <div class="last__text">Если что-то пошло не так (не хватило времени или сумма изменилась на 5%), попробуйте создать новую заявку.</div>
                        <div class="last__text">Для обмена суммы меньше минимальной уточните у менеджера, такие процедуры имеют дополнительную комиссию.</div>
                        <div class="last__text">Воспользуйтесь услугами персонального менеджера с обслуживанием в отдельной кассе.</div>
                        <div class="last__text">Необходимо будет сверить сумму наличных с суммой в заявке и провести тестовую транзакцию. После этого направим криптовалюту на Ваш кошелек.</div>
                        <div class="last__text">Произвести обмен в кассе возможно строго до 20:30</div>

                    </div>

                    <div class="last__right">
                        <img src="images/thanks.svg" alt="thanks">
                    </div>

                </div>

            </div>
        </section>

    </main>

    <footer class="footer">
        <div class="container">

            <div class="footer__top">

                <div class="footer__main">

                    <div class="footer__logo">
                        <svg class="icon" viewBox="0 0 152 34" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M20.358 22.8488V27.7022H0V1.56885H19.8698V6.42218H6.04732V12.0968H18.2546V16.8008H6.04732V22.8488H20.358Z" fill="#FF7733"></path>
                            <path d="M37.3755 27.7022L32.9433 21.5422L28.3609 27.7022H21.9755L29.7506 17.5848L22.2384 7.61684H28.8116L33.0936 13.4782L37.4882 7.61684H43.7233L36.2111 17.4355L44.0238 27.7022H37.3755Z" fill="#FF7733"></path>
                            <path d="M71.3951 1.568V27.7013H65.3103V16.9867H53.3659V27.7013H47.281V1.568H53.3659V11.872H65.3103V1.568H71.3951Z" fill="white"></path>
                            <path d="M97.5608 7.616V27.7013H92.0017V25.312C91.2255 26.1831 90.299 26.8551 89.2222 27.328C88.1455 27.776 86.9811 28 85.7291 28C83.0748 28 80.9713 27.2409 79.4188 25.7227C77.8663 24.2044 77.09 21.952 77.09 18.9653V7.616H82.9496V18.1067C82.9496 21.3422 84.3143 22.96 87.0437 22.96C88.446 22.96 89.5728 22.512 90.4242 21.616C91.2756 20.6951 91.7013 19.3387 91.7013 17.5467V7.616H97.5608Z" fill="white"></path>
                            <path d="M114.934 7.31734C116.812 7.31734 118.514 7.75289 120.042 8.624C121.594 9.47022 122.809 10.6773 123.685 12.2453C124.562 13.7884 125 15.5929 125 17.6587C125 19.7244 124.562 21.5413 123.685 23.1093C122.809 24.6524 121.594 25.8596 120.042 26.7307C118.514 27.5769 116.812 28 114.934 28C112.154 28 110.038 27.1289 108.586 25.3867V27.7013H102.989V0H108.849V9.744C110.326 8.12622 112.354 7.31734 114.934 7.31734ZM113.919 23.2213C115.422 23.2213 116.649 22.7236 117.6 21.728C118.577 20.7076 119.065 19.3511 119.065 17.6587C119.065 15.9662 118.577 14.6222 117.6 13.6267C116.649 12.6062 115.422 12.096 113.919 12.096C112.417 12.096 111.178 12.6062 110.201 13.6267C109.249 14.6222 108.774 15.9662 108.774 17.6587C108.774 19.3511 109.249 20.7076 110.201 21.728C111.178 22.7236 112.417 23.2213 113.919 23.2213Z" fill="white"></path>
                        </svg>
                    </div>

                    <div class="footer__text">быстрый автоматический обмен и<br>поддержка 24/7</div>

                    <div class="footer__social">
                        <a href="https://t.me/ExHubRuChannel">
                            <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><circle cx="14" cy="14" r="14" fill="white"></circle>
                                <path d="M11.4935 15.9088L11.2619 19.2592C11.5932 19.2592 11.7367 19.1128 11.9088 18.937L13.4623 17.41L16.6812 19.8346C17.2715 20.173 17.6875 19.9948 17.8467 19.276L19.9596 9.09284L19.9602 9.09224C20.1474 8.19464 19.6446 7.84364 19.0694 8.06384L6.64995 12.9544C5.80235 13.2928 5.81518 13.7788 6.50587 13.999L9.68103 15.0148L17.0563 10.2682C17.4034 10.0318 17.719 10.1626 17.4594 10.399L11.4935 15.9088Z" fill="#0088CC"></path>
                            </svg>
                        </a>
                        <a href="https://vk.com/exhub">
                            <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><circle cx="14" cy="14" r="14" fill="white"></circle>
                                <path d="M20.8663 18.0274C20.826 17.9564 20.5766 17.3866 19.3765 16.2153C18.1202 14.9888 18.2889 15.188 19.8022 13.0673C20.7238 11.7757 21.0923 10.987 20.9769 10.6498C20.8672 10.3284 20.1894 10.4132 20.1894 10.4132L17.9355 10.427C17.9355 10.427 17.7686 10.4033 17.6439 10.4812C17.5229 10.5581 17.4451 10.7356 17.4451 10.7356C17.4451 10.7356 17.0879 11.7353 16.6116 12.5852C15.6075 14.3785 15.2053 14.4732 15.0412 14.3618C14.6596 14.1025 14.7552 13.3187 14.7552 12.7626C14.7552 11.0245 15.0056 10.2998 14.2668 10.1125C14.0211 10.0504 13.8411 10.009 13.2139 10.0021C12.4094 9.99318 11.7278 10.005 11.3425 10.2032C11.0856 10.3353 10.8878 10.6301 11.0087 10.6468C11.1578 10.6676 11.4953 10.7425 11.6744 10.9988C11.906 11.3291 11.8975 12.0725 11.8975 12.0725C11.8975 12.0725 12.0307 14.1183 11.5872 14.3726C11.2825 14.5471 10.8653 14.1912 9.96988 12.5635C9.5114 11.7304 9.1645 10.8085 9.1645 10.8085C9.1645 10.8085 9.09794 10.637 8.97887 10.5453C8.83448 10.4339 8.63197 10.3984 8.63197 10.3984L6.48868 10.4122C6.48868 10.4122 6.1671 10.4221 6.04896 10.569C5.94396 10.7001 6.04052 10.9702 6.04052 10.9702C6.04052 10.9702 7.71877 15.0983 9.61829 17.1795C11.3612 19.0873 13.3395 18.9621 13.3395 18.9621H14.2358C14.2358 18.9621 14.5068 18.9305 14.6446 18.7738C14.7721 18.6298 14.7674 18.3597 14.7674 18.3597C14.7674 18.3597 14.7496 17.0948 15.3084 16.9084C15.8587 16.725 16.5657 18.131 17.3148 18.6722C17.8811 19.0814 18.3114 18.9917 18.3114 18.9917L20.315 18.9621C20.315 18.9621 21.3632 18.8941 20.8663 18.0274Z" fill="#4680C2"></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com/ExHub_io">
                            <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><circle cx="14" cy="14" r="14" fill="white"></circle>
                                <path d="M22 9.42062C21.405 9.66154 20.771 9.82123 20.11 9.89877C20.79 9.524 21.309 8.93508 21.553 8.22523C20.919 8.57415 20.219 8.82062 19.473 8.95815C18.871 8.36646 18.013 8 17.077 8C15.261 8 13.799 9.36062 13.799 11.0286C13.799 11.2686 13.821 11.4994 13.875 11.7191C11.148 11.5963 8.735 10.3898 7.114 8.552C6.831 9.00523 6.665 9.524 6.665 10.0825C6.665 11.1311 7.25 12.0606 8.122 12.5988C7.595 12.5895 7.078 12.4483 6.64 12.2258C6.64 12.2351 6.64 12.2471 6.64 12.2591C6.64 13.7305 7.777 14.9526 9.268 15.2342C9.001 15.3015 8.71 15.3338 8.408 15.3338C8.198 15.3338 7.986 15.3228 7.787 15.2822C8.212 16.4812 9.418 17.3628 10.852 17.3914C9.736 18.1972 8.319 18.6828 6.785 18.6828C6.516 18.6828 6.258 18.6717 6 18.6412C7.453 19.5062 9.175 20 11.032 20C17.068 20 20.368 15.3846 20.368 11.384C20.368 11.2502 20.363 11.1209 20.356 10.9926C21.007 10.5662 21.554 10.0335 22 9.42062Z" fill="#00ACEE"></path>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/channel/UC-plaWR0HzVZkgfIYAzpv3w">
                            <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><circle cx="14" cy="14" r="14" fill="white"></circle>
                                <path d="M21.646 9.57171L21.666 9.69854C21.4727 9.03271 20.9507 8.51895 20.2874 8.33195L20.2734 8.32871C19.026 8.00001 14.0068 8.00001 14.0068 8.00001C14.0068 8.00001 9.00016 7.99354 7.74017 8.32871C7.06418 8.51895 6.54152 9.03271 6.35153 9.68495L6.34819 9.69854C5.8822 12.0609 5.87886 14.8996 6.36886 17.4289L6.34819 17.3008C6.54152 17.9666 7.06352 18.4804 7.72684 18.6674L7.74084 18.6706C8.98683 19 14.0074 19 14.0074 19C14.0074 19 19.0134 19 20.274 18.6706C20.9507 18.4804 21.4733 17.9666 21.6633 17.3144L21.6667 17.3008C21.8787 16.2021 22 14.9378 22 13.6462C22 13.599 22 13.5511 21.9993 13.5032C22 13.4592 22 13.4068 22 13.3544C22 12.0622 21.8787 10.7979 21.646 9.57171ZM12.4055 15.8624V11.1434L16.5827 13.5065L12.4055 15.8624Z" fill="#FF0000"></path>
                            </svg>
                        </a>
                    </div>

                    <div class="footer__bot">
                        <svg class="icon-teleg_ch" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><circle cx="14" cy="14" r="14" fill="#32AFED"></circle>
                            <path d="M11.4935 15.9088L11.2619 19.2592C11.5932 19.2592 11.7367 19.1128 11.9088 18.937L13.4623 17.41L16.6812 19.8346C17.2715 20.173 17.6875 19.9948 17.8467 19.276L19.9596 9.09284L19.9602 9.09224C20.1474 8.19464 19.6446 7.84364 19.0694 8.06384L6.64995 12.9544C5.80235 13.2928 5.81518 13.7788 6.50587 13.999L9.68103 15.0148L17.0563 10.2682C17.4034 10.0318 17.719 10.1626 17.4594 10.399L11.4935 15.9088Z" fill="white"></path>
                        </svg>

                        <p>Наш бот доступен по <a href="https://t.me/exhubio_bot">ссылке</a></p>
                    </div>

                </div>

                <div class="footer__right">

                    <div class="footer__card">
                        <a href="#" class="footer__link">Все направления</a>
                        <a href="#reviews" class="footer__link">Отзывы</a>
                        <a href="#aml-agreement" class="footer__link">AML политика</a>
                    </div>
    
                    <div class="footer__card">
                        <a href="#about" class="footer__link">О нас</a>
                        <a href="#faq" class="footer__link">FAQ</a>
                        <a href="#like" class="footer__link">Рекомендации</a>
                    </div>
    
                    <div class="footer__card">
                        <a href="#partners" class="footer__link">Партнерам</a>
                        <a href="#contacts" class="footer__link">Контакты</a>
                    </div>
    
                    <div class="footer__card">
                        <div class="footer__language">
                            <div class="footer__flag">
                                <svg class="icon" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="base-icon"><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="white"></path>
                                    <path d="M19.378 13.4782C19.78 12.3949 20 11.2232 20 10C20 8.7768 19.78 7.60508 19.378 6.52176H0.621992C0.220039 7.60508 0 8.7768 0 10C0 11.2232 0.220039 12.3949 0.621992 13.4782L10 14.3478L19.378 13.4782Z" fill="#0052B4"></path>
                                    <path d="M9.9991 20C14.2987 20 17.9642 17.2862 19.3771 13.4782H0.621094C2.03402 17.2862 5.69945 20 9.9991 20Z" fill="#D80027"></path>
                                </svg>
                            </div>
                            <div class="footer__lang">RU</div>
                            <div class="footer__svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
                                </svg>
                            </div>
                        </div>
    
                        <a href="#agreement" class="footer__link footer__link-last">Правила сервиса</a>
                    </div>

                </div>

            </div>

            <div class="footer__bottom">

                <div class="footer__partners">
                    <a href="https://www.bestchange.ru/exhub-exchanger.html"><img src="images/bestchange.svg" alt="partner"></a>
                    <a href="https://exchangesumo.com/exchanger/911/ExHub/"><img src="images/sumo.svg" alt="partner"></a>
                    <a href="http://exnode.ru/exchangers/exchanger-43406/"><img src="images/exnode.png" alt="partner"></a>
                </div>

                <div class="footer__descr">Все транзакции проходят проверку AML через сервис - <a href="https://getblock.net/">getBlock</a></div>
                <div class="footer__descr">Рублевый процессинг - <a href="https://t.me/IvanPay_sup">IvanPay</a></div>
                <div class="footer__descr">© 2018–2024 ExHub.io - сервис обмена криптовалют</div>

            </div>

        </div>
    </footer>
    
    
    `;
} else {

}

// document.querySelector('.full').innerHTML = '456';
// document.body.style.background = '#000';
// document.body.innerHTML = '123';