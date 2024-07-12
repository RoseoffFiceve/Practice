// ProductCards.tsx
import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  // ������ �������� ������
}

const ProductCards: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="product-cards">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>����: {product.price}</p>
          {/* ������ ���������� � ������ */}
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
