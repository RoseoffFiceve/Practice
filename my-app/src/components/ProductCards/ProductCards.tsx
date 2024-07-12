// ProductCards.tsx
import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  // Другие свойства товара
}

const ProductCards: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="product-cards">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Цена: {product.price}</p>
          {/* Другая информация о товаре */}
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
