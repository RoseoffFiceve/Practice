import React from 'react';
import stylesMain from './Main.module.css';
import '../Product/Product';
import Product from '../Product/Product';
import stylesFonts from '../../fonts/fonts.module.css';

const Main: React.FC = () => {
  return (
    <main>
      <div className={`${stylesMain.wallpaper}`}>
        <div className={`${stylesMain.container}`}>
          <div className={`${stylesMain.island}`}>
            <div className={`${stylesMain.Ad}`}>
              <img className={`${stylesMain.forHoverImg}`} src="https://ir.ozone.ru/s3/cms/6f/td2/wc1450/1416x100_tochka_vhoda_na_ml-min.jpg" />
            </div>
            <div className={`${stylesMain.product}`}>
              <img className={`${stylesMain.forHoverImg}`} src="https://ir-2.ozone.ru/s3/cms/66/ta0/wc250/1431034320.png" />
              <img className={`${stylesMain.forHoverImg}`} src="https://ir-2.ozone.ru/s3/cms/a2/td2/wc250/514755853.png" />
              <img className={`${stylesMain.forHoverImg}`} src="https://ir-2.ozone.ru/s3/cms/ea/tae/wc250/645474998.png" />
              <img className={`${stylesMain.forHoverImg}`} src="https://ir-2.ozone.ru/s3/cms/7b/tba/wc250/1352029294.png" />
              <img className={`${stylesMain.forHoverImg}`} src="https://ir-2.ozone.ru/s3/cms/bb/t66/wc250/866737932.png" />
              <img className={`${stylesMain.forHoverImg}`} src="https://ir-2.ozone.ru/s3/cms/5b/t2f/wc250/400x400_vse_hammery.png" />
            </div>
          </div>
          <div className={`${stylesMain.island} ${stylesMain.asd123}`}>
            <div className={`${stylesMain.Ad}`}>
              <img className={`${stylesMain.forHoverImg}`} src="https://ir-2.ozone.ru/s3/cms/94/t86/wc2900/1416100_skidki_nedeli-min.jpg" />
            </div>
          </div>
          <div className={`${stylesMain.island}`}>
            <span className={`${stylesFonts.textBold} ${stylesMain.banner}`}>Специальные предложения!</span>
            <div className={`${stylesMain.product2}` }>
              <Product
                Photo="https://ir-2.ozone.ru/s3/multimedia-1-n/wc600/7042953683.jpg"
                Name={'Порошок стиральный Tide'}
                NewPrice={440}
                DefaultPrice={654}
                Percent={33}
              />
              <Product
                Photo="https://ir-2.ozone.ru/s3/multimedia-1-v/wc600/7033335139.jpg"
                Name={'Подписка Premeier, 12 мес'}
                NewPrice={700}
                DefaultPrice={1000}
                Percent={30}
              />
              <Product
                Photo="https://ir-2.ozone.ru/s3/multimedia-m/wc600/6524672338.jpg"
                Name={'Пылесос Tefal'}
                NewPrice={20000}
                DefaultPrice={25000}
                Percent={25}
              />
              <Product
                Photo="https://ir-2.ozone.ru/s3/multimedia-1-e/wc300/7065875678.jpg"
                Name={'Кофемашина'}
                NewPrice={18000}
                DefaultPrice={40000}
                Percent={19}
              />
              <Product
                Photo="https://ir-2.ozone.ru/s3/multimedia-s/wc600/6892495828.jpg"
                Name={'Детское питание, 800 г'}
                NewPrice={1000}
                DefaultPrice={1500}
                Percent={30}
              />
            </div>
          </div>
          <div className={`${stylesMain.island} ${stylesMain.asd123}`}>
            <div className={`${stylesMain.Ad}`}>
              <img className={`${stylesMain.forHoverImg}`} src="https://ir.ozone.ru/s3/cms/30/t0a/wc1450/imidge_1416x100.png" />
            </div>
          </div>
          <div className={`${stylesMain.island}`}>
            <span className={`${stylesFonts.textBold} ${stylesMain.banner}`}>Рекомендуем для вас!</span>
            <div className={`${stylesMain.product2}` }>
              <Product
                Photo="https://ir.ozone.ru/s3/multimedia-1-k/wc300/7041012032.jpg"
                Name={'Ремень тактический'}
                NewPrice={490}
                DefaultPrice={2400}
                Percent={80}
              />
              <Product
                Photo="https://ir.ozone.ru/s3/multimedia-o/wc300/6890703288.jpg"
                Name={'Точилка для ножей и ножниц'}
                NewPrice={381}
                DefaultPrice={1490}
                Percent={74}
              />
              <Product
                Photo="https://ir.ozone.ru/s3/multimedia-1-n/wc300/7013607827.jpg"
                Name={'Трубный рычажный ключ'}
                NewPrice={528}
                DefaultPrice={1338}
                Percent={61}
              />
              <Product
                Photo="https://ir.ozone.ru/s3/multimedia-1-d/wc300/6959743681.jpg"
                Name={'Умные часы series 4 Pro'}
                NewPrice={3215}
                DefaultPrice={59000}
                Percent={95}
              />
              <Product
                Photo="https://ir.ozone.ru/s3/multimedia-1/wc300/6669800641.jpg"
                Name={'Серьги 2 в 1'}
                NewPrice={339}
                DefaultPrice={1143}
                Percent={70}
              />
            </div>
            <div className={`${stylesMain.product2}` }>
              <Product
                Photo="https://ir.ozone.ru/s3/multimedia-1-k/wc300/7041012032.jpg"
                Name={'Ремень тактический'}
                NewPrice={490}
                DefaultPrice={2400}
                Percent={80}
              />
              <Product
                Photo="https://ir.ozone.ru/s3/multimedia-o/wc300/6890703288.jpg"
                Name={'Точилка для ножей и ножниц'}
                NewPrice={381}
                DefaultPrice={1490}
                Percent={74}
              />
              <Product
                Photo="https://ir.ozone.ru/s3/multimedia-1-n/wc300/7013607827.jpg"
                Name={'Трубный рычажный ключ'}
                NewPrice={528}
                DefaultPrice={1338}
                Percent={61}
              />
              <Product
                Photo="https://ir.ozone.ru/s3/multimedia-1-d/wc300/6959743681.jpg"
                Name={'Умные часы series 4 Pro'}
                NewPrice={3215}
                DefaultPrice={59000}
                Percent={95}
              />
              <Product
                Photo="https://ir.ozone.ru/s3/multimedia-1/wc300/6669800641.jpg"
                Name={'Серьги 2 в 1'}
                NewPrice={339}
                DefaultPrice={1143}
                Percent={70}
              />
            </div>
            <div className={`${stylesMain.product2}` }>
              <Product
                Photo="https://ir.ozone.ru/s3/multimedia-1-k/wc300/7041012032.jpg"
                Name={'Ремень тактический'}
                NewPrice={490}
                DefaultPrice={2400}
                Percent={80}
              />
              <Product
                Photo="https://ir.ozone.ru/s3/multimedia-o/wc300/6890703288.jpg"
                Name={'Точилка для ножей и ножниц'}
                NewPrice={381}
                DefaultPrice={1490}
                Percent={74}
              />
              <Product
                Photo="https://ir.ozone.ru/s3/multimedia-1-n/wc300/7013607827.jpg"
                Name={'Трубный рычажный ключ'}
                NewPrice={528}
                DefaultPrice={1338}
                Percent={61}
              />
              <Product
                Photo="https://ir.ozone.ru/s3/multimedia-1-d/wc300/6959743681.jpg"
                Name={'Умные часы series 4 Pro'}
                NewPrice={3215}
                DefaultPrice={59000}
                Percent={95}
              />
              <Product
                Photo="https://ir.ozone.ru/s3/multimedia-1/wc300/6669800641.jpg"
                Name={'Серьги 2 в 1'}
                NewPrice={339}
                DefaultPrice={1143}
                Percent={70}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;