import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout = () => {
   return (
      <>
         <Header />

         <main header='main'>
            <Outlet />
         </main>

         <Footer />
      </>
   );
};