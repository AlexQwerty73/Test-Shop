import React from 'react';
import { Products } from '../../components';
import { useGetProductsQuery } from '../../redux';

export const HomePage = () => {
   const { data: products = [], isLoading } = useGetProductsQuery();

   return (
      <div className='homePage'>
         
         {
            !isLoading
               ? <Products products={products} />
               : 'Loading...'
         }

      </div>
   );
};
