import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";
import Modal from "react-modal";

// Set the app element for accessibility
Modal.setAppElement("#root");

const CartItems = ({ cartItems, setCartItems }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const navigate = useNavigate();

  // Save cart items to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const openModal = (itemIndex) => {
    setItemToRemove(itemIndex);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setItemToRemove(null);
    setModalIsOpen(false);
  };

  const confirmRemoval = () => {
    if (itemToRemove !== null) {
      setCartItems(cartItems.filter((_, index) => index !== itemToRemove));
      closeModal();
    }
  };

  const increaseQuantity = (itemIndex) => {
    const updatedCart = cartItems.map((item, index) =>
      index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
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
    // Navigate to the Checkout page
    navigate("/checkout");
  };

  const handleBackToProducts = () => {
    navigate("/price-cart");
  };

  return (
    <div className="cart-details-page-container p-4 sm:p-8 bg-gray-50 mt-20 min-h-screen">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">Your Cart</h1>

        {/* Cart Icon */}
        <CartIcon
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        />
      </header>

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
                  onClick={() => openModal(index)}
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
            <div className="text-2xl font-bold">Total: ₦ {totalPrice}</div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-4 flex justify-end space-x-4">
            <button
              onClick={handleBackToProducts}
              className="bg-red-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-200"
            >
              Back to Products
            </button>
            <button
              onClick={handleCheckout}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {/* Remove Confirmation Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Removal"
        className="modal-content bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-40"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-xl font-semibold mb-4">Confirm Removal</h2>
        <p className="mb-6">
          Are you sure you want to remove this item from your cart?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={confirmRemoval}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Remove
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CartItems;
