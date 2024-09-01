import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const PriceCart = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Flatten all products from all carts into a single array
        const allProducts = data.carts.flatMap((cart) => cart.products);

        setProducts(allProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  if (loading) {
    return <div className="text-center mt-[5rem]">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-[5rem] text-red-500">Error: {error}</div>
    );
  }

  return (
    <div className="cart-page-container p-8 bg-gray-50 mt-[5rem]">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mx-auto">Services & Prices</h1>
        <NavLink to="/cart-items" className="relative">
          <FaShoppingCart size={24} className="text-orange-500" />
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-3 w-3 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </NavLink>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 rounded-lg shadow-lg bg-white text-center"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="mx-auto mb-4 w-40 h-40 object-cover"
            />
            <h3 className="text-lg font-semibold text-navy">{product.title}</h3>{" "}
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
    </div>
  );
};

export default PriceCart;
