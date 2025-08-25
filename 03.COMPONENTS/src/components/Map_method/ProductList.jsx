

import React from 'react';
import products from './data';
import Product from './Product';

function ProductList() {
  return (
    <div>
      <h2>Product Catalog</h2>
      {/* The map() method iterates through the products array. */}
      {products.map(product => (
        // For each product, we return a Product component.
        // The 'key' prop is crucial here and must be a unique identifier.
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;