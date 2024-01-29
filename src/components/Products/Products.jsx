import React from 'react';
import { Product } from './components/Product/Product';

export const Products = ({ products }) => {
   return (
      <ul>
         {
            products.map(product =>
              <Product product={product}/>
            )
         }
      </ul>
   );
};
