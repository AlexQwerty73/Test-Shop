import React from 'react';
import s from './cartLogo.module.css'
import { Link } from 'react-router-dom';

export const CartLogo = () => {
   return (
      <div className={s.cartLogo}>
         <Link to='/cart'>
            <img className={s.cartLogo__img} src="./imgs/logo/cart.png" alt="cart" />
         </Link>
      </div>
   );
};