import React from 'react';
import s from './logo.module.css';

export const Logo = () => {
   return (
      <div className={s.logo}>
         <img className={s.logo__img} src="/imgs/logo.png" alt="Logo" />
      </div>
   );
};
