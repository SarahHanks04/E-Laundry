
import React, { useEffect } from "react";
import { FaTrash } from "react-icons/fa";

const CartItems = ({ cartItems, setCartItems }) => {
  // Ensure all items have a quantity of at least 1
  useEffect(() => {
    const updatedCart = cartItems.map((item) => ({
      ...item,
      quantity: item.quantity >= 1 ? item.quantity : 1,
    }));
    setCartItems(updatedCart);
  }, [cartItems, setCartItems]);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeItem = (itemIndex) => {
    const item = cartItems[itemIndex];
    const confirmRemoval = window.confirm(
      `Are you sure you want to remove "${item.title}" from your cart?`
    );
    if (confirmRemoval) {
      setCartItems(cartItems.filter((_, index) => index !== itemIndex));
    }
  };

  const increaseQuantity = (itemIndex) => {
    const updatedCart = cartItems.map((item, index) =>
      index === itemIndex
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (itemIndex) => {
    const updatedCart = cartItems.map((item, index) =>
      index === itemIndex
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          }
        : item
    );
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toLocaleString();

  const handleCheckout = () => {
    // Simulate checkout process
    alert("Proceeding to checkout!");
    // In a real application, you'd navigate to a checkout page or integrate with a payment gateway
  };

  return (
    <div className="cart-details-page-container p-4 sm:p-8 bg-gray-50 mt-20 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col">
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={item.id || index}
                className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg p-4"
              >
                {/* Product Image */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-md mr-4 flex-shrink-0"
                />

                {/* Product Details */}
                <div className="flex-1 mt-4 sm:mt-0">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600 mt-1">
                    Price: ₦ {item.price.toLocaleString()}
                  </p>
                  {/* Optional: Add more details like description or category */}
                  {/* <p className="text-gray-500 text-sm">{item.description}</p> */}
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center mt-4 sm:mt-0">
                  <button
                    onClick={() => decreaseQuantity(index)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded-l hover:bg-gray-300"
                    aria-label={`Decrease quantity of ${item.title}`}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(index)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded-r hover:bg-gray-300"
                    aria-label={`Increase quantity of ${item.title}`}
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(index)}
                  className="mt-4 sm:mt-0 ml-0 sm:ml-4 text-red-600 hover:text-red-800"
                  aria-label={`Remove ${item.title} from cart`}
                >
                  <FaTrash size={20} />
                </button>
              </li>
            ))}
          </ul>

          {/* Total Price */}
          <div className="mt-8 flex justify-end">
            <div className="text-2xl font-bold">
              Total: ₦ {totalPrice}
            </div>
          </div>

          {/* Checkout Button */}
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleCheckout}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
