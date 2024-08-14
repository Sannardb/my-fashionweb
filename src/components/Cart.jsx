import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "../styles/Cart.css";

function Cart() {
  const {
    cart = [],
    removeFromCart,
    getTotalCost,
    getTotalItems,
    clearCart,
  } = useContext(CartContext);

  const handleCheckout = () => {
    // Simulate a checkout process
    alert("Checkout is not yet functional");
    clearCart();
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img
                  className="product-image"
                  src={item.image}
                  alt={item.name}
                />
                <span className="product-name">{item.name}</span>
                <span className="product-quantity">x{item.quantity}</span>
                <span className="product-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item)}
                >
                  &#x2716;
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total Items: {getTotalItems()}</p>
            <p>Total Cost: ${getTotalCost().toFixed(2)}</p>
            {cart.length > 0 && (
              <button className="checkout-button" onClick={handleCheckout}>
                Checkout
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
