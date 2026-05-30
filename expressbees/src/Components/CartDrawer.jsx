import React from 'react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemove }) {
  if (!isOpen) return null;

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Your Cart ({cartCount})</h3>
          <button className="close-cart" onClick={onClose}>×</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-msg">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  <div className="cart-qty-controls">
                    <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                    <button className="delete-item" onClick={() => onRemove(item.id)}>🗑️</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span>Total:</span>
              <span>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            <button className="checkout-btn" onClick={() => alert('Proceeding to checkout!')}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}