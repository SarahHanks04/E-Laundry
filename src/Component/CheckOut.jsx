import React from "react";
import { useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";

const Checkout = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toLocaleString();

  const handlePayment = () => {
    // Implement payment logic here
    toast.success("Payment Successful!");
    setCartItems([]); // Clear cart after payment
    navigate("/price-cart"); // Redirect to PriceCart
  };

  return (
    <div className="checkout-page-container p-4 sm:p-8 bg-gray-50 mt-20 min-h-screen">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">Checkout</h1>
        <CartIcon
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        />
      </header>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li key={item.id || index} className="flex justify-between">
                  <span>
                    {item.title} x {item.quantity}
                  </span>
                  <span>₦ {item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between font-bold">
              <span>Total:</span>
              <span>₦ {totalPrice}</span>
            </div>
            <button
              onClick={handlePayment}
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full transition duration-200"
            >
              Pay Now
            </button>
          </div>
          <button
            onClick={() => navigate("/cart-items")}
            className="mt-4 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition duration-200"
          >
            Back to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
