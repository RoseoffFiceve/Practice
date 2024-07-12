// Cart.tsx
import React from 'react';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  // ������ �������� ������ � �������
}

const Cart: React.FC<{ items: CartItem[] }> = ({ items }) => {
  return (
    <div className="cart">
      <h2>�������</h2>
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>����������: {item.quantity}</p>
          {/* ������ ���������� � ������ � ������� */}
        </div>
      ))}
    </div>
  );
};

export default Cart;
