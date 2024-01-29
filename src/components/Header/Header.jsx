import React from 'react';
import { Logo } from '../common/Logo/Logo';
import s from './header.module.css';

export const Header = () => {
   return (
      <header className={s.header}>
         <div className="container">

            <Logo />


         </div>
      </header>
   );
};
