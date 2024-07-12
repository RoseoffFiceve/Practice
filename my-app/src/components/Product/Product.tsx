// Product.tsx
import React from 'react';
import stylesProduct from './Product.module.css';
import stylesFonts from '../../fonts/fonts.module.css';

export default function Product({Photo,Name,NewPrice,DefaultPrice,Percent}: any){
  return (
    <div className={`${stylesProduct.product} ${stylesProduct.forHover}`}>
      <img src={Photo}className={stylesProduct.photo}/>
      <div className={stylesProduct.price}>
        <div className={`${stylesFonts.textBold} ${stylesProduct.newprice}`}>{NewPrice}₽</div>
        <div className={`${stylesFonts.textBold} ${stylesProduct.oldprice}`}>{DefaultPrice}₽</div>
        <div className={`${stylesFonts.textBold} ${stylesProduct.percent}`}>-{Percent}%</div>
      </div>
      <div className={`${stylesFonts.textLight} ${stylesProduct.name}`}>{Name}</div>
    </div>
  );
};
