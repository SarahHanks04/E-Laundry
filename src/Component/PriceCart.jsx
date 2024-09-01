import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const PriceCart = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data.products);
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
    <div
      className="cart-page-container p-8 bg-gray-50 mt-[5rem]"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mx-auto">Services & Prices</h1>
        <NavLink to="/cart-items" className="relative">
          <span className="text-[24px]"> &#x1F6D2;</span>
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-3 w-3 flex items-center justify-center">
            {cartItems.length}
          </span>
        </NavLink>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id || `${product.id}-${index}`}
            className="p-4 rounded-lg shadow-lg bg-white text-center"
            data-aos="fade-up"
            data-aos-delay="200"
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
