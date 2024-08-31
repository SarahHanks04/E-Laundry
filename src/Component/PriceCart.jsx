import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Service1 from "../assets/Service1 (2).png";
import Service2 from "../assets/Service2 (2).png";
import Service3 from "../assets/Service3.png";
import { FaNairaSign } from "react-icons/fa6";

const PriceCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Example products
  const products = [
    {
      id: 1,
      image: Service1,
      name: "Wash & Iron Service",
      price: "3,500",
    },
    {
      id: 2,
      image: Service2,
      name: "Dry Cleaning Service",
      price: "7,000",
    },
    {
      id: 3,
      image: Service3,
      name: "Laundry Service",
      price: "5,000",
    },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="cart-page-container p-8 bg-gray-50">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Services</h1>
        <NavLink to="/cart" className="relative">
          <FaShoppingCart size={50} />
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </NavLink>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-6 rounded-lg shadow-lg bg-white text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-navy">{product.name}</h3>
            <p className="mt-2 text-gray-600">Price: &#8358; {product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-blue-950 text-white px-6 py-2 rounded-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart items list (optional) */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Cart Items:</h2>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-4">
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PriceCart;
