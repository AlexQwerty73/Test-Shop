import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';

export const Layout = () => {
   return (
      <>
         <Header />

         <main header='main'>
            <div className="container">
               <Outlet />

            </div>
         </main>

         <Footer />
      </>
   );
};