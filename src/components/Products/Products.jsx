import React from 'react';

export const Products = ({ products }) => {
   return (
      <ul>
         {
            products.map(({ price, title, name }) =>
               <li>
                  <div className="price">{price}</div>
                  <div className="title">{title}</div>
                  <div className="name">{name}</div>
               </li>
            )
         }
      </ul>
   );
};
