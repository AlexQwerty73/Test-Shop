import React from 'react';
import { CartLogo,Logo } from '../common';
import s from './header.module.css';

export const Header = () => {
   return (
      <header className={s.header}>
         <div className="container">

         <nav className={s.nav}>
            <Logo />

            <CartLogo />
         </nav>

         </div>
      </header>
   );
};
