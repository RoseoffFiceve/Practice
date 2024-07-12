// Cart.tsx
import React from 'react';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  // Другие свойства товара в корзине
}

const Cart: React.FC<{ items: CartItem[] }> = ({ items }) => {
  return (
    <div className="cart">
      <h2>Корзина</h2>
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>Количество: {item.quantity}</p>
          {/* Другая информация о товаре в корзине */}
        </div>
      ))}
    </div>
  );
};

export default Cart;
