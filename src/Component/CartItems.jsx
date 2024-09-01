import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const CartItems = ({ cartItems, setCartItems }) => {
  const removeItem = (itemIndex) => {
    setCartItems(cartItems.filter((item, index) => index !== itemIndex));
  };

  return (
    <div className="cart-details-page-container p-8 bg-gray-50 mt-[5rem]">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="mb-4 flex justify-between items-center"
              >
                <span>{item.title}</span>{" "}
                <span>&#8358; {item.price.toLocaleString()}</span>{" "}
                <button onClick={() => removeItem(index)}>
                  <FaDeleteLeft className="text-red-600" />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-xl font-bold">
            Total: &#8358;{" "}
            {cartItems
              .reduce((acc, item) => acc + item.price, 0)
              .toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;

