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
                Name={'Гречка Makfa, 800 г'}
                NewPrice={700}
                DefaultPrice={1000}
                Percent={19}
              />
              <Product
                Photo="https://ir-2.ozone.ru/s3/multimedia-1-v/wc600/7033335139.jpg"
                Name={'Гречка Makfa, 800 г'}
                NewPrice={700}
                DefaultPrice={1000}
                Percent={19}
              />
              <Product
                Photo="https://ir-2.ozone.ru/s3/multimedia-m/wc600/6524672338.jpg"
                Name={'Гречка Makfa, 800 г'}
                NewPrice={700}
                DefaultPrice={1000}
                Percent={19}
              />
              <Product
                Photo="https://ir-2.ozone.ru/s3/multimedia-1-e/wc300/7065875678.jpg"
                Name={'Гречка Makfa, 800 г'}
                NewPrice={700}
                DefaultPrice={1000}
                Percent={19}
              />
              <Product
                Photo="https://ir-2.ozone.ru/s3/multimedia-s/wc600/6892495828.jpg"
                Name={'Гречка Makfa, 800 г'}
                NewPrice={700}
                DefaultPrice={1000}
                Percent={19}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;