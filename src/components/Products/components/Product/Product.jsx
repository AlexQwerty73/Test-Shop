import React from 'react';
import s from './product.module.css';

export const Product = ({ product }) => {
   
   return (
      <li className={s.product}>
         <div className={s.name}>{product.name}</div>
         <div className={s.title}>{product.title}</div>
         <div className={s.price}>{product.price}</div>
         <button>Buy</button>
      </li>
   );
};
