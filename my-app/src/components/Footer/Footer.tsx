// Footer.js
import React from 'react';
import stylesFooter from './Footer.module.css';
import stylesFonts from '../../fonts/fonts.module.css';

const Footer = () => {
    return (
        <div className={stylesFooter.footer1}>
            <footer className={stylesFooter.footerContainer}>
                <div className={stylesFooter.topSection}>
                    <img src="https://ir-2.ozone.ru/s3/cms/12/tdb/group_357672.png" alt="Ozon logo" className={stylesFooter.logo} />
                    <nav className={stylesFooter.nav}>
                        <a href="#" className={`${stylesFonts.textRegular} ${stylesFooter.Aboba} ${stylesFooter.forHover}`}>
                            <svg fill="grey" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11 20v1H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-5v-1a3 3 0 0 0-3-3H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4a1 1 0 1 0 0 2h4a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6a1 1 0 0 1 1 1"></path><path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path></svg>
                            IT
                        </a>
                        <a href="#" className={`${stylesFonts.textRegular} ${stylesFooter.Aboba} ${stylesFooter.forHover}`}>
                            <svg fill="grey" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m21.867 15.127.244-.028a1 1 0 0 0 .889-.994V8a1 1 0 0 0-1-1h-3V6a5 5 0 0 0-5-5h-4a5 5 0 0 0-5 5v1H2a1 1 0 0 0-1 1v6.105a1 1 0 0 0 .889.994l.244.028.437 3.493A5 5 0 0 0 7.53 23h8.938a5 5 0 0 0 4.961-4.38zM7 6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2a1 1 0 0 0 1 1h3v4.211l-6 .67V13a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v.882l-6-.67V9h11a1 1 0 1 0 0-2H7zm4 9.01V14h2v2h-2zm-2 .884V17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.106l4.823-.539-.377 3.017A3 3 0 0 1 16.469 21H7.53a3 3 0 0 1-2.977-2.628l-.377-3.017z"></path></svg>
                            Офис
                        </a>
                        <a href="#" className={`${stylesFonts.textRegular} ${stylesFooter.Aboba} ${stylesFooter.forHover}`}>
                            <svg fill="grey" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path><path d="M23 14a2 2 0 0 1-2 2v3a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v3a2 2 0 0 1 2 2zm-4 5v-3h-4a4 4 0 0 1 0-8h1a1 1 0 1 1 0 2h-1a2 2 0 1 0 0 4h6v-4h-1a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1"></path></svg>
                            Финтех
                        </a>
                        <a href="#" className={`${stylesFonts.textRegular} ${stylesFooter.Aboba} ${stylesFooter.forHover}`}>
                            <svg fill="grey" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M8 14a1 1 0 0 1 1 1c0 .612.285 1.072.805 1.418.549.366 1.343.582 2.195.582a1 1 0 1 1 0 2c-1.148 0-2.354-.284-3.305-.918C7.715 17.428 7 16.388 7 15a1 1 0 0 1 1-1"></path><path d="M12 1c-1.384 0-2.5.277-3.28.56a8 8 0 0 0-.91.397 5 5 0 0 0-.326.186c-.485.31-.61.954-.308 1.426.053.082.163.244.335.457a8 8 0 0 0 1.03 1.05c.927.784 2.347 1.632 4.318 1.914a1 1 0 1 0 .283-1.98c-1.691-.241-2.835-1.013-3.517-1.646A7.7 7.7 0 0 1 12 3c1.365 0 2.659.32 3.577.922C16.457 4.498 17 5.327 17 6.5c0 1.238-.791 2.312-1.902 3.194a7 7 0 0 0-.761-.546C13.38 8.56 11.952 8 10 8c-4.052 0-7 2.948-7 7 0 2.63 1.331 4.664 3.237 6.005C8.121 22.331 10.581 23 13 23c2.432 0 4.426-.677 5.832-1.86A5.98 5.98 0 0 0 21 16.5c0-1.543-.625-2.646-1.253-3.352a5 5 0 0 0-.857-.769 4 4 0 0 0-.391-.246c-.49-.265-1.134-.099-1.393.42a1 1 0 0 0 .44 1.338s.085.047.189.12c.138.099.328.252.518.466.372.419.747 1.066.747 2.023 0 1.206-.496 2.3-1.457 3.11-.97.817-2.475 1.39-4.543 1.39-2.08 0-4.12-.581-5.612-1.63C5.919 18.336 5 16.87 5 15c0-2.948 2.052-5 5-5 1.548 0 2.619.44 3.288.852.592.364.89.721.918.756a1 1 0 0 0 1.349.224C17.115 10.792 19 9.031 19 6.5c0-1.933-.957-3.354-2.327-4.251C15.34 1.377 13.635 1 12 1"></path></svg>
                            Fresh
                        </a>
                        <a href="#" className={`${stylesFonts.textRegular} ${stylesFooter.Aboba} ${stylesFooter.forHover}`}>
                            <svg fill="grey" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M1 4a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H3v12h1.17a3.001 3.001 0 0 1 5.66 0H12V8a1 1 0 0 1 1-1h3.078a5 5 0 0 1 3.904 1.877l1.922 2.403A5 5 0 0 1 23 14.403V18a1 1 0 0 1-1 1h-1.17a3.001 3.001 0 0 1-5.66 0H9.83a3.001 3.001 0 0 1-5.66 0H2a1 1 0 0 1-1-1zm13 13h1.17a3.001 3.001 0 0 1 5.66 0H21v-2.597a3 3 0 0 0-.657-1.874l-1.923-2.403A3 3 0 0 0 16.077 9H14v2h2a1 1 0 1 1 0 2h-2zm-6 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0m10-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"></path></svg>
                            Логистика
                        </a>
                        <a href="#" className={`${stylesFonts.textRegular} ${stylesFooter.Aboba} ${stylesFooter.forHover}`}>
                            <svg fill="grey" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M13.447 2.101 8.256 4.673a.96.96 0 0 0-.434 1.29l1.725 3.44a.97.97 0 0 0 1.297.43l5.19-2.572a.96.96 0 0 0 .435-1.289l-1.726-3.44a.97.97 0 0 0-1.296-.43M9.984 5.965l3.46-1.715.863 1.72-3.46 1.715zm6.482 2.156-5.19 2.572a.96.96 0 0 0-.435 1.29l1.726 3.439a.97.97 0 0 0 1.296.431l5.191-2.572a.96.96 0 0 0 .434-1.289l-1.725-3.44a.97.97 0 0 0-1.297-.43m-3.463 3.864 3.46-1.715.863 1.72-3.46 1.715z"></path><path d="M4.555 4.159a1 1 0 0 1 1.34.447l6.552 13.066 9.106-4.54a1 1 0 0 1 1.341.446.996.996 0 0 1-.447 1.338l-9.45 4.71A2.497 2.497 0 0 1 10.5 22C9.12 22 8 20.884 8 19.508c0-1.177.817-2.162 1.916-2.424L4.553 6.389l-1.106.551a1 1 0 0 1-1.341-.446.996.996 0 0 1 .447-1.337z"></path></svg>
                            Работа на складе
                        </a>
                        <a href="#" className={`${stylesFonts.textRegular} ${stylesFooter.Aboba} ${stylesFooter.forHover}`}>
                            <svg fill="grey" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M8 2v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2V2a1 1 0 1 0-2 0v1h-4V2a1 1 0 0 0-2 0M5 9V6a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V5h4v1a1 1 0 1 0 2 0V5h2a1 1 0 0 1 1 1v3zm0 2h14v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"></path></svg>
                            События
                        </a>
                        <a href="#" className={`${stylesFonts.textRegular} ${stylesFooter.Aboba} ${stylesFooter.forHover}`}>
                            <svg fill="grey" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11 3h6a5 5 0 0 1 3 9 7 7 0 0 0-7-7h-3a1 1 0 1 0 0 2h3a5 5 0 0 1 0 10h-3a1 1 0 0 0-.707.293L7 19.586v-1.669a1 1 0 0 0-.835-.986 5.002 5.002 0 0 1-.618-9.717 1 1 0 0 0 .667-.667A5 5 0 0 1 11 3m8.529 11.529A7.002 7.002 0 0 0 17 1h-6a7 7 0 0 0-6.529 4.471A7.002 7.002 0 0 0 5 18.71V22a1 1 0 0 0 1.707.707L10.414 19H13a7 7 0 0 0 6.529-4.471"></path><path d="M7 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path></svg>
                            Поддержка
                        </a>
                    </nav>
                </div>
                <div className={stylesFooter.mainSection}>
                    <div className={stylesFooter.qrCodeSection}>
                        <img src="https://ir-2.ozone.ru/s3/cms/28/t9c/qr-code_1.png" alt="QR Code" className={stylesFooter.qrCode} />
                        <p className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar}`}>Наведите камеру и скачайте бесплатное приложение Ozon</p>
                        <div className={stylesFooter.appLinks}>
                            <img src="https://ir-2.ozone.ru/s3/cms/0e/ta0/group_357649.png" alt="Apple Store" />
                            <img src="https://ir-2.ozone.ru/s3/cms/9b/te1/group_357648.png" alt="Google Play" />
                            <img src="https://ir-2.ozone.ru/s3/cms/20/tcc/group_357647.png" alt="Huawei" />
                            <img src="https://ir-2.ozone.ru/s3/cms/f7/tb3/rustore_desk.svg" alt="App Gallery" />
                        </div>
                    </div>
                    <div className={stylesFooter.Info}>
                        <div className={stylesFooter.linksSection}>
                            <div>
                                <h3 className={`${stylesFonts.textRegular} ${stylesFooter.Aboba}`}>Ozon маркетплейс</h3>
                                <ul>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Об Ozon / About Ozon</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Вакансии</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Стать курьером</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Бренд Ozon</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Реквизиты</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Информация для СМИ</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Билеты и отели</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Ozon Банк</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Ozon Забота</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Арт-проект Ozon Ballon</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Клуб</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Ozon Беларусь</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Ozon Казахстан</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Ozon Армения</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className={`${stylesFonts.textRegular} ${stylesFooter.Aboba}`}>Зарабатывать с Ozon</h3>
                                <ul>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Стать продавцом</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Что продавать на Ozon</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Стать поставщиком Ozon</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Стать партнёром</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Открыть пункт выдачи Ozon</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Установить постамат Ozon Box</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Руководство по ПВЗ</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Ozon Global - Selling on Ozon</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Ozon Profit</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Подключить отель к Ozon</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Стать арендодателем Ozon fresh</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Журнал "Бестселлер"</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className={`${stylesFonts.textRegular} ${stylesFooter.Aboba}`}>Покупать как компания</h3>
                                <ul>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Ozon для бизнеса</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Добавить компанию</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Мои компании</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Подарочные сертификаты</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className={`${stylesFonts.textRegular} ${stylesFooter.Aboba}`}>Помощь</h3>
                                <ul>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Как сделать заказ</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Оплата</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Доставка</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Пункты выдачи</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Возврат товаров</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Контакты</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Безопасность</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Условия обработки данных</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Горячая линия комплаенс</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Партнёрские сервисные центры Ozon</a></li>
                                    <li><a href="#" className={`${stylesFonts.textLight} ${stylesFooter.sizeForNavBar} ${stylesFooter.forHover}`}>Сервисные центры производителей</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={stylesFooter.bottomSection}>
                            <p className={`${stylesFooter.Add} ${stylesFonts.textLight} ${stylesFooter.sizeForNavBar}`}>© 1998 – 2024 ООО "Интернет Решения" (входит в группу компаний Ozon; дочерняя компания ООО "Ozon Холдинг") Все права защищены.</p>
                            <div className={stylesFooter.SocLinks}>
                                <div className={stylesFooter.socialLinks}>
                                    <a href="#" className={`${stylesFooter.forHover1}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12.893 18C6.06 18 2.163 13.496 2 6h3.423c.112 5.502 2.636 7.832 4.634 8.312V6h3.223v4.745c1.974-.204 4.048-2.367 4.748-4.745h3.223a9 9 0 0 1-1.544 3.43 9.4 9.4 0 0 1-2.841 2.552 9.8 9.8 0 0 1 3.238 2.48A9.4 9.4 0 0 1 22 18h-3.548a5.9 5.9 0 0 0-1.913-2.895 6.3 6.3 0 0 0-3.259-1.393V18z"></path></svg></a>
                                    <a href="#" className={`${stylesFooter.forHover2}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.953 12.329A5.42 5.42 0 0 1 8.21 10.82 5.07 5.07 0 0 1 6.651 7.2a5.13 5.13 0 0 1 1.553-3.648A5.48 5.48 0 0 1 11.953 2 5.5 5.5 0 0 1 14 2.395a5.3 5.3 0 0 1 1.73 1.13 5.1 5.1 0 0 1 1.144 1.69c.262.63.39 1.305.38 1.985a4.9 4.9 0 0 1-.385 1.973 5.1 5.1 0 0 1-1.148 1.672 5.3 5.3 0 0 1-1.73 1.11 5.4 5.4 0 0 1-2.038.373m0-7.266a2.25 2.25 0 0 0-1.589.65 2.1 2.1 0 0 0-.474.718 2.1 2.1 0 0 0-.146.84c-.005.279.05.555.16.812.111.258.275.49.482.684.207.193.453.344.722.442.27.098.557.141.845.128.285.006.57-.042.836-.143s.51-.25.715-.443c.205-.192.37-.422.482-.676.113-.254.173-.527.175-.804.01-.286-.04-.572-.146-.84a2.1 2.1 0 0 0-.474-.717 2.2 2.2 0 0 0-.726-.482 2.3 2.3 0 0 0-.862-.17m2.135 11.54 3.019 2.848c.14.136.251.297.327.474a1.42 1.42 0 0 1-.327 1.592c-.13.151-.294.273-.479.356a1.43 1.43 0 0 1-1.656-.356l-3.02-2.849-2.945 2.85a1.5 1.5 0 0 1-.505.326c-.19.073-.394.108-.599.1a1.8 1.8 0 0 1-1.104-.427 1.5 1.5 0 0 1-.328-.474 1.42 1.42 0 0 1 .328-1.591l3.092-2.85a15.6 15.6 0 0 1-3.166-1.353 1.56 1.56 0 0 1-.68-.934 1.5 1.5 0 0 1 .165-1.132c.112-.172.26-.32.433-.436a1.58 1.58 0 0 1 1.202-.233c.206.042.401.125.573.242a7.1 7.1 0 0 0 3.572.961 7.1 7.1 0 0 0 3.57-.961 1.58 1.58 0 0 1 1.2-.245c.206.04.402.12.576.236s.321.264.433.436c.21.335.28.734.198 1.117a1.55 1.55 0 0 1-.64.949 16.2 16.2 0 0 1-3.24 1.353"></path></svg></a>
                                    <a href="#" className={`${stylesFooter.forHover3}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M3.375 10.888q8.054-3.387 10.74-4.466c5.114-2.053 6.177-2.41 6.87-2.422.152-.002.493.034.713.207a.74.74 0 0 1 .262.481c.025.139.055.454.031.7-.277 2.811-1.476 9.633-2.086 12.781-.259 1.333-.767 1.78-1.259 1.823-1.07.095-1.881-.682-2.917-1.338-1.621-1.025-2.537-1.664-4.11-2.665-1.818-1.156-.64-1.792.396-2.831.272-.272 4.984-4.41 5.075-4.785.011-.047.022-.221-.086-.314-.108-.092-.266-.06-.381-.036q-.244.054-7.768 4.957-1.102.73-1.997.712c-.658-.014-1.923-.359-2.863-.654-1.153-.362-2.07-.553-1.99-1.168q.062-.48 1.37-.982"></path></svg></a>
                                </div>
                                <button className={`${stylesFooter.accessibilityButton} ${stylesFonts.textBold} ${stylesFooter.sizeForNavBar}` }> 
                                <svg className={stylesFooter.Lupa}xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{color: 'rgba(245, 247, 250, 0.9)'}}><path fill="currentColor" d="M8 5a2.95 2.95 0 0 0-2.84 2.158l-.002.01-.908 3.147A5 5 0 0 1 6 10a5 5 0 0 1 3.75 1.693A4 4 0 0 1 12 11c.835 0 1.61.256 2.25.693A5 5 0 0 1 18 10c.463 0 .912.063 1.338.181L18.06 6.914v-.001A3 3 0 0 0 15.264 5H15a1 1 0 1 1 0-2h.264a5 5 0 0 1 4.66 3.187l2.707 6.924a5 5 0 1 1-9.382.326A2 2 0 0 0 12 13a2 2 0 0 0-1.25.438 5 5 0 1 1-9.406-.265l1.89-6.555A4.95 4.95 0 0 1 8 3a1 1 0 0 1 0 2m-2 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6m12 0a3 3 0 1 0-.002 6A3 3 0 0 0 18 12"></path></svg>
                                    Для слабовидящих
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;