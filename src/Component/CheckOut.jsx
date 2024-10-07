import React from "react";
import { useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";

const Checkout = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toLocaleString();

  const handlePlaceOrder = () => {
    // Simulate order placement
    alert("Order placed successfully!");
    // Clear the cart
    setCartItems([]);
    navigate("*");
  };

  const handleBackToCart = () => {
    navigate("/cart-items");
  };

  return (
    <div className="checkout-page-container p-4 sm:p-8 bg-gray-50 mt-20 min-h-screen">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">Checkout</h1>

        {/* Cart Icon */}
        <CartIcon
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        />
      </header>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>
                {item.title} x {item.quantity}
              </span>
              <span>₦ {item.price * item.quantity}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-xl font-bold">Total: ₦ {totalPrice}</h3>
          <button
            onClick={handlePlaceOrder}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition duration-200"
          >
            Place Order
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleBackToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-200"
          >
            Back to Cart
          </button>
          <button
            onClick={() => navigate("/price-cart")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition duration-200"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
