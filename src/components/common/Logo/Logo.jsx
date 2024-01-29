import React from 'react';
import s from './logo.module.css';
import { Link } from 'react-router-dom';

export const Logo = () => {
   return (
      <div className={s.logo}>
         <Link to='/'>
            <img className={s.logo__img} src="/imgs/logo.png" alt="Logo" />
         </Link>
      </div>
   );
};
