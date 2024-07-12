import React from 'react';
import stylesHeader from './Header.module.css';
import stylesFonts from '../../fonts/fonts.module.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className={stylesHeader.bar}>
        <div className={stylesHeader.left}>
          <div className="currency">RUB</div>
          <div className="deliveryPoint">Йошкар-Ола</div>
        </div>
        <div className={stylesHeader.right}>
          <a href="https://seller.ozon.ru/?utm_source=ozonru_web&amp;utm_medium=link&amp;utm_campaign=header_nachat_prodavat_na_ozon/" 
          className={`${stylesFonts.textLight} ${stylesHeader.sizeForNavBar} ${stylesHeader.forHover}`}>Стать продавцом</a>
          <a href="/business/?perehod=header" 
          className={`${stylesFonts.textLight} ${stylesHeader.sizeForNavBar} ${stylesHeader.forHover}`}>Покупать как компания</a>
          <a href="/info/appspromo/" 
          className={`${stylesFonts.textLight} ${stylesHeader.sizeForNavBar} ${stylesHeader.forHover}`}>Мобильное приложение</a>
          <a href="https://www.ozon.ru/landing/giftcertificates/?perehod=header"
           className={`${stylesFonts.textLight} ${stylesHeader.sizeForNavBar} ${stylesHeader.forHover}`}>Подарочные сертификаты</a>
          <a href="//docs.ozon.ru/common/"
           className={`${stylesFonts.textLight} ${stylesHeader.sizeForNavBar} ${stylesHeader.forHover}`}>Помощь</a>
          <a href="/info/map/"
           className={`${stylesFonts.textLight} ${stylesHeader.sizeForNavBar} ${stylesHeader.forHover}`}>Пункты выдачи</a>
        </div>
      </div>

      <div className={stylesHeader.bar}>
        <div className={stylesHeader.logo}>
          <a href="#">
            <img src="https://ir-2.ozone.ru/s3/cms/eb/t8d/wc200/logo-logo-ozon-blue-png.png" alt="Ozon" />
          </a>
        </div>
        <div className={stylesHeader.searchBarContainer}>
            <button className={`${stylesHeader.catalogButton} `}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path fill="currentColor" d="M4 7.556C4 4.628 4.628 4 7.556 4s3.555.628 3.555 3.556-.627 3.555-3.555 3.555S4 10.484 4 7.556m0 8.888c0-2.928.628-3.555 3.556-3.555s3.555.627 3.555 3.555S10.484 20 7.556 20 4 19.372 4 16.444M16.444 4c-2.928 0-3.555.628-3.555 3.556s.627 3.555 3.555 3.555S20 10.484 20 7.556 19.372 4 16.444 4m-3.555 12.444c0-2.928.627-3.555 3.555-3.555S20 13.516 20 16.444 19.372 20 16.444 20s-3.555-.628-3.555-3.556"></path></svg>
              <span className={`${stylesFonts.textBold}`}>Каталог</span>
            </button>
            <div className={stylesHeader.searchBar}>
                <input
                    type="text"
                    placeholder="Искать на Ozon"
                    className={stylesHeader.searchInput}
                />
                <button className={stylesHeader.searchButton}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M17.892 15.064a8 8 0 1 0-2.828 2.828l2.522 2.522a2 2 0 1 0 2.828-2.828zM11 16a5 5 0 1 1 0-10 5 5 0 0 1 0 10"></path></svg></button>
            </div>
        </div>
        {/* <div className={stylesHeader.catalogMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 7.556C4 4.628 4.628 4 7.556 4s3.555.628 3.555 3.556-.627 3.555-3.555 3.555S4 10.484 4 7.556m0 8.888c0-2.928.628-3.555 3.556-3.555s3.555.627 3.555 3.555S10.484 20 7.556 20 4 19.372 4 16.444M16.444 4c-2.928 0-3.555.628-3.555 3.556s.627 3.555 3.555 3.555S20 10.484 20 7.556 19.372 4 16.444 4m-3.555 12.444c0-2.928.627-3.555 3.555-3.555S20 13.516 20 16.444 19.372 20 16.444 20s-3.555-.628-3.555-3.556"></path></svg>
          <span>Каталог</span>
        </div>
        <div className={stylesHeader.searchBar}>
          <input type='text' placeholder='Искать на Ozon' />
          <button>Поиск</button>
        </div> */}
        <div className={`${stylesHeader.barRight}`}>
          <div className={`${stylesHeader.forHover}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M8 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-8.3 4.286c.016.015.185.165.5.323.376.187.971.391 1.8.391s1.425-.204 1.8-.391c.175-.088.355-.19.5-.323a1 1 0 0 1 1.407 1.421C15.587 16.827 14.357 18 12 18c-2.358 0-3.587-1.173-3.707-1.293A1 1 0 0 1 9.7 15.286"></path><path fill="currentColor" d="M11 2a1 1 0 0 1 1-1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12a11 11 0 0 1 6.23-9.914 1 1 0 0 1 1.36.524c.292.72.69 1.565 1.362 2.233C10.592 5.481 11.524 6 13 6a1 1 0 1 1 0 2c-2.024 0-3.458-.743-4.459-1.74-.6-.596-1.027-1.267-1.34-1.875A9 9 0 1 0 12 3a1 1 0 0 1-1.001-1"></path></svg>
            <span>Войти</span>
          </div>
          <div className={`${stylesHeader.forHover}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M12.486 1.126a1 1 0 0 0-.972 0l-9 5A1 1 0 0 0 2 7v9.98a1 1 0 0 0 .515.894l9 5a1 1 0 0 0 .989-.01l8.982-4.99A1 1 0 0 0 22 17V7a1 1 0 0 0-.514-.874zM11 20.3l-7-3.89V8.7l2 1.11V13a1 1 0 1 0 2 0v-2.078l3 1.666zM7.5 8.356 5.06 7 12 3.144 14.441 4.5zM9.56 9.5l6.94-3.856L18.941 7l-6.94 3.856zM13 20.3v-7.712L20 8.7v7.712z"></path></svg>
            <span>Заказы</span>
          </div>
          <div className={`${stylesHeader.forHover}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M7 5a4 4 0 0 0-4 4c0 3.552 2.218 6.296 4.621 8.22A21.5 21.5 0 0 0 12 19.91a21.6 21.6 0 0 0 4.377-2.69C18.78 15.294 21 12.551 21 9a4 4 0 0 0-4-4c-1.957 0-3.652 1.396-4.02 3.2a1 1 0 0 1-1.96 0C10.652 6.396 8.957 5 7 5m5 17c-.316-.02-.56-.147-.848-.278a23.5 23.5 0 0 1-4.781-2.942C3.777 16.705 1 13.449 1 9a6 6 0 0 1 6-6 6.18 6.18 0 0 1 5 2.568A6.18 6.18 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.6 23.6 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278"></path></svg>
            <span>Избранное</span>
          </div>
          <div className={`${stylesHeader.forHover}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M6 6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2h4a1 1 0 0 1 .986 1.164l-1.582 9.494A4 4 0 0 1 17.46 22H6.54a4 4 0 0 1-3.945-3.342L1.014 9.164A1 1 0 0 1 2 8h4zm2 2h5a1 1 0 1 1 0 2H3.18l1.389 8.329A2 2 0 0 0 6.54 20h10.92a2 2 0 0 0 1.972-1.671L20.82 10H17a1 1 0 0 1-1-1V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2z"></path></svg>
            <span>Корзина</span>
          </div>
        </div>
      </div>
      <div className={`${stylesHeader.horizontalMenu} ${stylesHeader.bar}`}>
        <div className={`${stylesHeader.forHover}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="currentColor" d="M15.5 8c0 5.833 0 5.833-7.5 5.833S.5 13.833.5 8c0-.417 0-.833.833-.833h13.334c.833 0 .833.416.833.833m-.833-2.5H1.333C.5 5.5.5 5.083.5 4.667c0-2.5 1.667-2.5 7.5-2.5s7.5 0 7.5 2.5c0 .416 0 .833-.833.833"></path></svg> 
            <span> Ozon карта</span>
        </div>
        <div className={`${stylesHeader.forHover}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="currentColor" d="M11.753 1.743c.834-.834 2.348-1.816 3.334-.83s0 2.497-.833 3.331c-.617.617-1.212 1.227-1.803 1.832l-.131.134c-.152.22-.193.463-.145.96.117 1.193.241 2.223.359 3.203.107.89.209 1.737.296 2.63.117 1.19.078 1.665-.756 1.664-.766-.001-1-.002-1.166-.42-.331-.833-2.075-4.586-2.075-4.586a47 47 0 0 1-1.939 1.677q-.491.408-.976.821c0 .838 0 2.5-.417 2.5h-.833c-.225 0-.417-.452-.63-.952-.18-.426-.377-.887-.62-1.131-.28-.28-.766-.483-1.198-.662-.476-.199-.887-.37-.887-.588v-1.25c0-.275.741-.183 1.482-.091.37.046.741.091 1.02.091l2.5-2.914S2.583 5.412 1.75 5.078c-.417-.167-.417-.4-.417-1.165 0-.834.477-.872 1.668-.753.892.09 1.74.193 2.63.302.98.12 2.01.246 3.205.365.795.08.94-.073 1.382-.54a50 50 0 0 1 1.099-1.11z"></path></svg>
            <span> Билеты, отели, туры</span>
        </div>
        <div className={`${stylesHeader.forHover}`}>
            <img src="https://ir.ozone.ru/s3/cms/17/t22/wc25/ic_m_dresses.png" width="16" height="16"/> 
            <span> Одежда и обувь</span>
        </div>
        <div className={`${stylesHeader.forHover}`}>
            <img src="https://ir.ozone.ru/s3/cms/cc/tf7/wc25/ic_m_electronics.png" width="16" height="16"/> 
            <span> Электроника</span>
        </div>
        <div className={`${stylesHeader.forHover}`}>
            <img src="https://ir.ozone.ru/s3/cms/a8/te3/wc25/union_8.png" width="16" height="16"/> 
            <span> Дом и сад</span>
        </div>
        <div className={`${stylesHeader.forHover}`}>
            <img src="https://ir.ozone.ru/s3/cms/ff/tc3/wc25/union_3.png" width="16" height="16"/> 
            <span> Детские товары</span>
        </div>
        <div className={`${stylesHeader.forHover}`}>
            <img src="https://ir.ozone.ru/s3/cms/47/t41/wc25/union_14.png" width="16" height="16"/> 
            <span> Акции</span>
        </div>
        <div className={`${stylesHeader.forHover}`}>
            <img src="https://ir.ozone.ru/s3/cms/07/tcb/wc25/ic_m_status_points3x.svg" width="16" height="16"/> 
            <span> Premium</span>
        </div>
        <div className={`${stylesHeader.forHover}`}>
            <img src="https://ir.ozone.ru/s3/cms/02/t9e/wc25/ic_m_gift_1.png" width="16" height="16"/> 
            <span> Подарочные сертификаты</span>
        </div>
        <div className={`${stylesHeader.forHover}`}>
            <img src="https://ir.ozone.ru/s3/cms/c1/t5a/wc25/union_11.png" width="16" height="16"/> 
            <span> Продукты питания</span>
        </div>
      </div>
    </header>
  );
}

export default Header;