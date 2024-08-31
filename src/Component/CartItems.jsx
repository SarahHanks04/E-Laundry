import React from "react";

const CartItems = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-details-page-container p-8 bg-gray-50 mt-[5rem]">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-4 flex justify-between items-center">
                <span>{item.name}</span>
                <span>{item.price} AED</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-xl font-bold">
            Total: {totalPrice} AED
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
